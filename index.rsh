'reach 0.1'; // reach version

const [isRole, MAFIA, DOCTOR, VETERAN, VILLAGER, ADMIN] = makeEnum(5); // Her bir rolü değişkene atayıp indexlendirdik.
//const [MAFYA, DOKTOR, VETERAN, KOYLU, ADMIN] = [0, 1, 2, 3, 4]

const Move = Data({
    Some: UInt,
    None: Null
}); // Birden fazla yerde kullanacağız, değişkene atadık -> Maybe(UInt)

// ********** All of the interfaces **********
const PlayerInterface = {
    PickRole: Fun([], UInt),
};
const VoterInterface = {
    SeeResults: Fun([Array(Bool, 4)], Null),
    getVote: Fun([Tuple(Bool, Bool, Bool, Bool)], UInt), 
};
const MafiaInterface = {
    ...VoterInterface,
    makeMove: Fun([], Move), // () => Maybe(UInt)
    result: Fun([UInt], Null),
};
const DoctorInterface = {
    ...VoterInterface,
    makeMove: Fun([], Move), // () => Maybe(UInt)
    result: Fun([UInt], Null)
};
const VeteranInterface = {
    ...VoterInterface,
    makeMove: Fun([], Bool),
    result: Fun([UInt], Null)
};
const KoyluInterface = {
    ...VoterInterface,
    makeMove: Fun([], UInt),
    result: Fun([UInt], Null)
};
const AdminInterface = {
    price: UInt, // Bu net olarak gelecek admin'den Maybe olmasına gerek yok
    FinishGame: Fun([], Bool),
};
// ********** All of the interfaces **********


export const main =
    Reach.App(
        {},
        [
            //******** Participants ******** \\
            Participant('Player', PlayerInterface),
            Participant('Mafia', MafiaInterface),
            Participant('Doctor', DoctorInterface),
            Participant('Veteran', VeteranInterface),
            Participant('Villager', KoyluInterface),
            Participant('Admin', AdminInterface),
            //******** Participants ******** \\
        ],

        //******** Asign Role function ******** \\
        (Player, Mafia, Doctor, Veteran, Villager, Admin) => {

            //******** Asign Role function ******** \\
            Player.only(() => {
                const addr1 = this;
            });
            Player.publish(addr1);
            Mafia.set(addr1);
            commit();
            Player.only(() => {
                const addr2 = this;
            });
            Player.publish(addr2);
            Doctor.set(addr2);
            commit();
            Player.only(() => {
                const addr3 = this;
            });
            Player.publish(addr3);
            Veteran.set(addr3);
            commit();
            Player.only(() => {
                const addr4 = this;
            });
            Player.publish(addr4);
            Villager.set(addr4);
            commit();

            Admin.only(() => {
                const price = declassify(interact.price);
            });
            Admin.publish(price);

            //******** WHİLE LOOP ******** \\
            var [MafiaAlive, DocktorAlive, VeteranAlive, VillageAlive, RingBuzzed] = [true, true, true, true, false]; // Loop variables
            invariant(balance() == 0);
            while (MafiaAlive || DocktorAlive || VeteranAlive || VillageAlive) { // Case of at least one of them alive
                commit();

                Mafia.only(() => {
                    // if mafiaalive true asign toDie variable the value from frontend otherwise its turn 5 as empty value
                    //const toDie = MafiaAlive ? declassify(interact.makeMove()) : 5;
                    const toDie = declassify(interact.makeMove()); // Maybe(UInt),

                    // Gelen değer 4'ten küçük olmalı
                    assume(fromSome(toDie, 0) < 4);
                });
                Mafia.publish(toDie); //Publish and commit that move
                commit();

                Doctor.only(() => {
                    // if Docktor true asign toResur variable the value from frontend otherwise its turn 5 as empty value
                    const toResur = declassify(interact.makeMove());

                    // Gelen değer 4'ten küçük olmalı
                    assume(fromSome(toResur, 0) < 4);
                });
                Doctor.publish(toResur); //Publish and commit that move
                commit();

                Veteran.only(() => {
                    // if Veteran true and RingBuzzed yet asign buzzbell variable the value from frontend otherwise its turn false as empty value
                    const buzzbell = VeteranAlive && !RingBuzzed ? declassify(interact.makeMove()) : false;
                });
                Veteran.publish(buzzbell); //Publish that move

                const playerTuple = [MafiaAlive, DocktorAlive, VeteranAlive, VillageAlive]; // Create Tupple of Participants Alive or Dead status
                const playerArray = array(Bool, playerTuple); // Create Array of Participants Alive or Dead status

                const willDie = isSome(toDie);
                const willResur = isSome(toResur);
                const whoDie = fromSome(toDie, 0);
                const whoResur = fromSome(toResur, 0);

                // Array hatası almaması için 3'ten sonraki indexlere ulaşmamalı
                require(whoDie < 4);
                require(whoResur < 4);

                const resultArray = buzzbell && willDie && whoDie == 2
                    ? playerArray.set(0, false)
                    : (
                        !willDie
                            ? playerArray
                            : (
                                willResur && whoDie == whoResur
                                    ? playerArray
                                    : playerArray.set(whoDie, false)
                            )
                    );

                commit();
                each([Mafia, Doctor, Veteran, Villager], () => {
                    interact.SeeResults(resultArray);
                });
                race(Mafia, Doctor, Veteran, Villager).publish();
                commit();


                // ************** VOTE FUNCTION **************
                Mafia.only(() => {
                    const MaffiaVote = declassify(interact.getVote(playerTuple));
                });
                Mafia.publish(MaffiaVote);
                commit();

                Doctor.only(() => {
                    const DocktorVote = declassify(interact.getVote(playerTuple));
                });
                Doctor.publish(DocktorVote);
                commit();

                Veteran.only(() => {
                    const VeteranVote = declassify(interact.getVote(playerTuple));
                });
                Veteran.publish(VeteranVote);
                commit();

                Villager.only(() => {
                    const VillagerVote = declassify(interact.getVote(playerTuple));
                });
                Villager.publish(VillagerVote);
                // ************** VOTE FUNCTION **************

                const PersonalVotes = array(UInt, [MaffiaVote, DocktorVote, VeteranVote, VillagerVote]); // Array with votes
                const PersonVote = [PersonalVotes.count((v) => v == 0), PersonalVotes.count((v) => v == 1), PersonalVotes.count((v) => v == 2), PersonalVotes.count((v) => v == 3)];
                const VotesPersonArray = array(UInt, PersonVote); // Array with each person's vote count

                const PlayerRace = (tuple) => {
                    const arr = array(Bool, tuple);
                    return arr.count((v) => v) / 2;
                }

                const VoteMax = (oy) => {
                    return VotesPersonArray.max() == oy;
                }

                const guilty = VotesPersonArray.findIndex((vote) =>
                    VoteMax(vote) && vote > PlayerRace(playerTuple)); // locate person who get most votes 

                if (isSome(guilty)) {
                    const VoteTupple = resultArray.set(maybe(guilty, 5, (v) => v), false);
                    [MafiaAlive, DocktorAlive, VeteranAlive, VillageAlive, RingBuzzed] = [...VoteTupple, buzzbell];
                    continue;
                }

                [MafiaAlive, DocktorAlive, VeteranAlive, VillageAlive, RingBuzzed] = [...resultArray, buzzbell];
                continue;
            }
            commit();
        });