// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
      },
    views: {
      }
    };
  };

export async function Admin(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc1, ctc1, ctc1, ctc1, ctc4, ctc4, ctc4, ctc4, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc1, ctc1, ctc1, ctc1, ctc4, ctc4, ctc4, ctc4]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc1, ctc1, ctc1, ctc0, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc1, ctc1, ctc1, ctc1]);
  
  
  const v19 = await ctc.creationTime();
  const v18 = stdlib.protect(ctc0, interact.price, 'for Admin\'s interact field price');
  
  const txn1 = await (ctc.recv(1, 1, [ctc1], false, false));
  const [v24] = txn1.data;
  const v26 = txn1.time;
  const v23 = txn1.from;
  ;
  const v27 = v24;
  const txn2 = await (ctc.recv(2, 1, [ctc1], false, false));
  const [v32] = txn2.data;
  const v35 = txn2.time;
  const v31 = txn2.from;
  ;
  const v34 = stdlib.addressEq(v23, v31);
  stdlib.assert(v34, {
    at: './index.rsh:73:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v36 = v32;
  const txn3 = await (ctc.recv(3, 1, [ctc1], false, false));
  const [v41] = txn3.data;
  const v44 = txn3.time;
  const v40 = txn3.from;
  ;
  const v43 = stdlib.addressEq(v23, v40);
  stdlib.assert(v43, {
    at: './index.rsh:79:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v45 = v41;
  const txn4 = await (ctc.recv(4, 1, [ctc1], false, false));
  const [v50] = txn4.data;
  const v53 = txn4.time;
  const v49 = txn4.from;
  ;
  const v52 = stdlib.addressEq(v23, v49);
  stdlib.assert(v52, {
    at: './index.rsh:85:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v54 = v50;
  
  
  const txn5 = await (ctc.sendrecv(5, 1, stdlib.checkedBigNumberify('./index.rsh:92:19:dot', stdlib.UInt_max, 3), [ctc1, ctc1, ctc1, ctc0, ctc1, ctc0], [v27, v36, v45, v53, v54, v18], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn5) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:92:19:dot', stdlib.UInt_max, 4), v27, v36, v45, v53, v54]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:92:19:dot', stdlib.UInt_max, 4), v27, v36, v45, v54]);
    const [v59] = txn5.data;
    const v61 = txn5.time;
    const v58 = txn5.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v62 = true;
    const v63 = true;
    const v64 = false;
    const v65 = true;
    const v66 = true;
    const v1117 = v61;
    
    if ((() => {
      const v72 = v63 ? true : v62;
      const v73 = v72 ? true : v65;
      const v74 = v73 ? true : v66;
      
      return v74;})()) {
      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:98:25:after expr stmt semicolon', stdlib.UInt_max, 6), v27, v36, v45, v54, v62, v63, v65, v66, v1117]);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:98:25:after expr stmt semicolon', stdlib.UInt_max, 6), v27, v36, v45, v54, v62, v63, v65, v66]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:98:25:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc8, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
      sim_r.view = [ctc8, []];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  const [v59] = txn5.data;
  const v61 = txn5.time;
  const v58 = txn5.from;
  ;
  let v62 = true;
  let v63 = true;
  let v64 = false;
  let v65 = true;
  let v66 = true;
  let v1117 = v61;
  
  while ((() => {
    const v72 = v63 ? true : v62;
    const v73 = v72 ? true : v65;
    const v74 = v73 ? true : v66;
    
    return v74;})()) {
    const txn6 = await (ctc.recv(7, 1, [ctc3], false, false));
    const [v94] = txn6.data;
    const v97 = txn6.time;
    const v93 = txn6.from;
    ;
    const v96 = stdlib.addressEq(v27, v93);
    stdlib.assert(v96, {
      at: './index.rsh:108:23:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    const txn7 = await (ctc.recv(8, 1, [ctc3], false, false));
    const [v116] = txn7.data;
    const v119 = txn7.time;
    const v115 = txn7.from;
    ;
    const v118 = stdlib.addressEq(v36, v115);
    stdlib.assert(v118, {
      at: './index.rsh:118:24:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    const txn8 = await (ctc.recv(9, 1, [ctc4], false, false));
    const [v130] = txn8.data;
    const v133 = txn8.time;
    const v129 = txn8.from;
    ;
    const v132 = stdlib.addressEq(v45, v129);
    stdlib.assert(v132, {
      at: './index.rsh:125:25:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    let v135;
    switch (v94[0]) {
      case 'None': {
        
        v135 = false;
        
        break;
        }
      case 'Some': {
        const v139 = v94[1];
        v135 = true;
        
        break;
        }
      }
    let v145;
    switch (v116[0]) {
      case 'None': {
        
        v145 = false;
        
        break;
        }
      case 'Some': {
        const v149 = v116[1];
        v145 = true;
        
        break;
        }
      }
    let v156;
    switch (v94[0]) {
      case 'None': {
        
        v156 = stdlib.checkedBigNumberify('./index.rsh:132:48:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v160 = v94[1];
        v156 = v160;
        
        break;
        }
      }
    let v168;
    switch (v116[0]) {
      case 'None': {
        
        v168 = stdlib.checkedBigNumberify('./index.rsh:133:52:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v172 = v116[1];
        v168 = v172;
        
        break;
        }
      }
    const v178 = stdlib.lt(v156, stdlib.checkedBigNumberify('./index.rsh:136:34:decimal', stdlib.UInt_max, 4));
    stdlib.assert(v178, {
      at: './index.rsh:136:24:application',
      fs: [],
      msg: null,
      who: 'Admin'
      });
    const v179 = stdlib.lt(v168, stdlib.checkedBigNumberify('./index.rsh:137:36:decimal', stdlib.UInt_max, 4));
    stdlib.assert(v179, {
      at: './index.rsh:137:24:application',
      fs: [],
      msg: null,
      who: 'Admin'
      });
    const v180 = v130 ? v135 : false;
    const v181 = stdlib.eq(v156, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 2));
    const v182 = v180 ? v181 : false;
    const v186 = stdlib.eq(v156, v168);
    const v187 = v145 ? v186 : false;
    const v188 = [v63, v62, v65, v66];
    const v190 = stdlib.Array_set(v188, v156, false);
    const v192 = v187 ? v188 : v190;
    const v194 = v135 ? v192 : v188;
    const v195 = [false, v62, v65, v66];
    const v196 = v182 ? v195 : v194;
    const txn9 = await (ctc.recv(10, 0, [], false, false));
    const [] = txn9.data;
    const v218 = txn9.time;
    const v209 = txn9.from;
    ;
    const v211 = stdlib.addressEq(v36, v209);
    const v212 = stdlib.addressEq(v27, v209);
    const v213 = v211 ? true : v212;
    const v214 = stdlib.addressEq(v45, v209);
    const v215 = v213 ? true : v214;
    const v216 = stdlib.addressEq(v54, v209);
    const v217 = v215 ? true : v216;
    stdlib.assert(v217, {
      at: './index.rsh:155:56:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    const txn10 = await (ctc.recv(11, 1, [ctc0], false, false));
    const [v225] = txn10.data;
    const v228 = txn10.time;
    const v224 = txn10.from;
    ;
    const v227 = stdlib.addressEq(v27, v224);
    stdlib.assert(v227, {
      at: './index.rsh:163:23:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    const txn11 = await (ctc.recv(12, 1, [ctc0], false, false));
    const [v235] = txn11.data;
    const v238 = txn11.time;
    const v234 = txn11.from;
    ;
    const v237 = stdlib.addressEq(v36, v234);
    stdlib.assert(v237, {
      at: './index.rsh:169:24:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    const txn12 = await (ctc.recv(13, 1, [ctc0], false, false));
    const [v245] = txn12.data;
    const v248 = txn12.time;
    const v244 = txn12.from;
    ;
    const v247 = stdlib.addressEq(v45, v244);
    stdlib.assert(v247, {
      at: './index.rsh:175:25:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    const txn13 = await (ctc.recv(14, 1, [ctc0], false, false));
    const [v255] = txn13.data;
    const v258 = txn13.time;
    const v254 = txn13.from;
    ;
    const v257 = stdlib.addressEq(v54, v254);
    stdlib.assert(v257, {
      at: './index.rsh:181:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    const v275 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v277 = v275 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v281 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v283 = stdlib.add(v277, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v284 = v281 ? v283 : v277;
    const v288 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v290 = stdlib.add(v284, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v291 = v288 ? v290 : v284;
    const v295 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v297 = stdlib.add(v291, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v298 = v295 ? v297 : v291;
    const v318 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v320 = v318 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v324 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v326 = stdlib.add(v320, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v327 = v324 ? v326 : v320;
    const v331 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v333 = stdlib.add(v327, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v334 = v331 ? v333 : v327;
    const v338 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v340 = stdlib.add(v334, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v341 = v338 ? v340 : v334;
    const v361 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v363 = v361 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v367 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v369 = stdlib.add(v363, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v370 = v367 ? v369 : v363;
    const v374 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v376 = stdlib.add(v370, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v377 = v374 ? v376 : v370;
    const v381 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v383 = stdlib.add(v377, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v384 = v381 ? v383 : v377;
    const v404 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v406 = v404 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v410 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v412 = stdlib.add(v406, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v413 = v410 ? v412 : v406;
    const v417 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v419 = stdlib.add(v413, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v420 = v417 ? v419 : v413;
    const v424 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v426 = stdlib.add(v420, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v427 = v424 ? v426 : v420;
    const v439 = ['None', null];
    const v675 = stdlib.gt(v298, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0));
    const v677 = v675 ? v298 : stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0);
    const v681 = stdlib.gt(v341, v677);
    const v683 = v681 ? v341 : v677;
    const v687 = stdlib.gt(v384, v683);
    const v689 = v687 ? v384 : v683;
    const v693 = stdlib.gt(v427, v689);
    const v695 = v693 ? v427 : v689;
    const v700 = stdlib.eq(v695, v298);
    const v719 = v63 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v724 = stdlib.add(v719, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v725 = v62 ? v724 : v719;
    const v730 = stdlib.add(v725, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v731 = v65 ? v730 : v725;
    const v736 = stdlib.add(v731, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v737 = v66 ? v736 : v731;
    const v741 = stdlib.div(v737, stdlib.checkedBigNumberify('./index.rsh:190:50:decimal', stdlib.UInt_max, 2));
    const v743 = stdlib.gt(v298, v741);
    const v744 = v700 ? v743 : false;
    const v748 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
    const v749 = [v748, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
    const v751 = [v439, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
    const v752 = v744 ? v749 : v751;
    const v757 = v752[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v758 = v752[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v759;
    switch (v757[0]) {
      case 'None': {
        
        const v804 = stdlib.eq(v695, v341);
        const v847 = stdlib.gt(v341, v741);
        const v848 = v804 ? v847 : false;
        const v852 = stdlib.add(v758, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v853 = ['Some', v758];
        const v854 = [v853, v758];
        const v855 = [v757, v852];
        const v856 = v848 ? v854 : v855;
        v759 = v856;
        
        break;
        }
      case 'Some': {
        const v859 = v757[1];
        v759 = v752;
        
        break;
        }
      }
    const v865 = v759[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v866 = v759[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v867;
    switch (v865[0]) {
      case 'None': {
        
        const v912 = stdlib.eq(v695, v384);
        const v955 = stdlib.gt(v384, v741);
        const v956 = v912 ? v955 : false;
        const v960 = stdlib.add(v866, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v961 = ['Some', v866];
        const v962 = [v961, v866];
        const v963 = [v865, v960];
        const v964 = v956 ? v962 : v963;
        v867 = v964;
        
        break;
        }
      case 'Some': {
        const v967 = v865[1];
        v867 = v759;
        
        break;
        }
      }
    const v973 = v867[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v974 = v867[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v975;
    switch (v973[0]) {
      case 'None': {
        
        const v1020 = stdlib.eq(v695, v427);
        const v1063 = stdlib.gt(v427, v741);
        const v1064 = v1020 ? v1063 : false;
        const v1068 = stdlib.add(v974, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v1069 = ['Some', v974];
        const v1070 = [v1069, v974];
        const v1071 = [v973, v1068];
        const v1072 = v1064 ? v1070 : v1071;
        v975 = v1072;
        
        break;
        }
      case 'Some': {
        const v1075 = v973[1];
        v975 = v867;
        
        break;
        }
      }
    const v1080 = v975[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
    let v1086;
    switch (v1080[0]) {
      case 'None': {
        
        v1086 = false;
        
        break;
        }
      case 'Some': {
        const v1090 = v1080[1];
        v1086 = true;
        
        break;
        }
      }
    if (v1086) {
      let v1096;
      switch (v1080[0]) {
        case 'None': {
          
          v1096 = stdlib.checkedBigNumberify('./index.rsh:201:70:decimal', stdlib.UInt_max, 5);
          
          break;
          }
        case 'Some': {
          const v1100 = v1080[1];
          v1096 = v1100;
          
          break;
          }
        }
      const v1106 = stdlib.Array_set(v196, v1096, false);
      const v1107 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 0)];
      const v1108 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 1)];
      const v1109 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 2)];
      const v1110 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 3)];
      const cv62 = v1108;
      const cv63 = v1107;
      const cv64 = v130;
      const cv65 = v1109;
      const cv66 = v1110;
      const cv1117 = v258;
      
      v62 = cv62;
      v63 = cv63;
      v64 = cv64;
      v65 = cv65;
      v66 = cv66;
      v1117 = cv1117;
      
      continue;}
    else {
      const v1111 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 0)];
      const v1112 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 1)];
      const v1113 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 2)];
      const v1114 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 3)];
      const cv62 = v1112;
      const cv63 = v1111;
      const cv64 = v130;
      const cv65 = v1113;
      const cv66 = v1114;
      const cv1117 = v258;
      
      v62 = cv62;
      v63 = cv63;
      v64 = cv64;
      v65 = cv65;
      v66 = cv66;
      v1117 = cv1117;
      
      continue;}
    
    
    
    
    
    
    
    }
  return;
  
  
  
  
  
  };
export async function Doctor(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4));
  const ctc7 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc6, ctc1, ctc1, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc6, ctc1, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc6, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc6]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc1, ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc3]);
  
  
  const v19 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v24] = txn1.data;
  const v26 = txn1.time;
  const v23 = txn1.from;
  ;
  const v27 = v24;
  const txn2 = await (ctc.recv(2, 1, [ctc0], false, false));
  const [v32] = txn2.data;
  const v35 = txn2.time;
  const v31 = txn2.from;
  ;
  const v34 = stdlib.addressEq(v23, v31);
  stdlib.assert(v34, {
    at: './index.rsh:73:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Doctor'
    });
  const v36 = ctc.iam(v32);
  const txn3 = await (ctc.recv(3, 1, [ctc0], false, false));
  const [v41] = txn3.data;
  const v44 = txn3.time;
  const v40 = txn3.from;
  ;
  const v43 = stdlib.addressEq(v23, v40);
  stdlib.assert(v43, {
    at: './index.rsh:79:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Doctor'
    });
  const v45 = v41;
  const txn4 = await (ctc.recv(4, 1, [ctc0], false, false));
  const [v50] = txn4.data;
  const v53 = txn4.time;
  const v49 = txn4.from;
  ;
  const v52 = stdlib.addressEq(v23, v49);
  stdlib.assert(v52, {
    at: './index.rsh:85:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Doctor'
    });
  const v54 = v50;
  const txn5 = await (ctc.recv(5, 1, [ctc1], false, false));
  const [v59] = txn5.data;
  const v61 = txn5.time;
  const v58 = txn5.from;
  ;
  let v62 = true;
  let v63 = true;
  let v64 = false;
  let v65 = true;
  let v66 = true;
  let v1117 = v61;
  
  while ((() => {
    const v72 = v63 ? true : v62;
    const v73 = v72 ? true : v65;
    const v74 = v73 ? true : v66;
    
    return v74;})()) {
    const txn6 = await (ctc.recv(7, 1, [ctc3], false, false));
    const [v94] = txn6.data;
    const v97 = txn6.time;
    const v93 = txn6.from;
    ;
    const v96 = stdlib.addressEq(v27, v93);
    stdlib.assert(v96, {
      at: './index.rsh:108:23:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Doctor'
      });
    const v101 = stdlib.protect(ctc3, await interact.makeMove(), {
      at: './index.rsh:113:65:application',
      fs: ['at ./index.rsh:111:28:application call to [unknown function] (defined at: ./index.rsh:111:32:function exp)'],
      msg: 'makeMove',
      who: 'Doctor'
      });
    let v104;
    switch (v101[0]) {
      case 'None': {
        
        v104 = stdlib.checkedBigNumberify('./index.rsh:116:46:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v108 = v101[1];
        v104 = v108;
        
        break;
        }
      }
    const v114 = stdlib.lt(v104, stdlib.checkedBigNumberify('./index.rsh:116:51:decimal', stdlib.UInt_max, 4));
    stdlib.assert(v114, {
      at: './index.rsh:116:27:application',
      fs: ['at ./index.rsh:111:28:application call to [unknown function] (defined at: ./index.rsh:111:32:function exp)'],
      msg: null,
      who: 'Doctor'
      });
    
    
    const txn7 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:118:24:dot', stdlib.UInt_max, 9), [ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc3, ctc1, ctc3], [v27, v36, v45, v54, v62, v63, v65, v66, v94, v97, v101], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc3], true, true, false, (async (txn7) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:118:24:dot', stdlib.UInt_max, 7), v27, v36, v45, v54, v62, v63, v65, v66, v94, v97]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:118:24:dot', stdlib.UInt_max, 7), v27, v36, v45, v54, v62, v63, v65, v66, v94]);
      const [v116] = txn7.data;
      const v119 = txn7.time;
      const v115 = txn7.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v118 = stdlib.addressEq(v36, v115);
      stdlib.assert(v118, {
        at: './index.rsh:118:24:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Doctor'
        });
      sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:119:25:after expr stmt semicolon', stdlib.UInt_max, 8), v27, v36, v45, v54, v62, v63, v65, v66, v94, v116, v119]);
      sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:119:25:after expr stmt semicolon', stdlib.UInt_max, 8), v27, v36, v45, v54, v62, v63, v65, v66, v94, v116]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:119:25:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [v116] = txn7.data;
    const v119 = txn7.time;
    const v115 = txn7.from;
    ;
    const v118 = stdlib.addressEq(v36, v115);
    stdlib.assert(v118, {
      at: './index.rsh:118:24:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Doctor'
      });
    const txn8 = await (ctc.recv(9, 1, [ctc4], false, false));
    const [v130] = txn8.data;
    const v133 = txn8.time;
    const v129 = txn8.from;
    ;
    const v132 = stdlib.addressEq(v45, v129);
    stdlib.assert(v132, {
      at: './index.rsh:125:25:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Doctor'
      });
    let v135;
    switch (v94[0]) {
      case 'None': {
        
        v135 = false;
        
        break;
        }
      case 'Some': {
        const v139 = v94[1];
        v135 = true;
        
        break;
        }
      }
    let v145;
    switch (v116[0]) {
      case 'None': {
        
        v145 = false;
        
        break;
        }
      case 'Some': {
        const v149 = v116[1];
        v145 = true;
        
        break;
        }
      }
    let v156;
    switch (v94[0]) {
      case 'None': {
        
        v156 = stdlib.checkedBigNumberify('./index.rsh:132:48:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v160 = v94[1];
        v156 = v160;
        
        break;
        }
      }
    let v168;
    switch (v116[0]) {
      case 'None': {
        
        v168 = stdlib.checkedBigNumberify('./index.rsh:133:52:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v172 = v116[1];
        v168 = v172;
        
        break;
        }
      }
    const v178 = stdlib.lt(v156, stdlib.checkedBigNumberify('./index.rsh:136:34:decimal', stdlib.UInt_max, 4));
    stdlib.assert(v178, {
      at: './index.rsh:136:24:application',
      fs: [],
      msg: null,
      who: 'Doctor'
      });
    const v179 = stdlib.lt(v168, stdlib.checkedBigNumberify('./index.rsh:137:36:decimal', stdlib.UInt_max, 4));
    stdlib.assert(v179, {
      at: './index.rsh:137:24:application',
      fs: [],
      msg: null,
      who: 'Doctor'
      });
    const v180 = v130 ? v135 : false;
    const v181 = stdlib.eq(v156, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 2));
    const v182 = v180 ? v181 : false;
    const v186 = stdlib.eq(v156, v168);
    const v187 = v145 ? v186 : false;
    const v188 = [v63, v62, v65, v66];
    const v190 = stdlib.Array_set(v188, v156, false);
    const v192 = v187 ? v188 : v190;
    const v194 = v135 ? v192 : v188;
    const v195 = [false, v62, v65, v66];
    const v196 = v182 ? v195 : v194;
    stdlib.protect(ctc2, await interact.SeeResults(v196), {
      at: './index.rsh:153:40:application',
      fs: ['at ./index.rsh:152:21:application call to [unknown function] (defined at: ./index.rsh:152:61:function exp)'],
      msg: 'SeeResults',
      who: 'Doctor'
      });
    
    
    const txn9 = await (ctc.sendrecv(10, 0, stdlib.checkedBigNumberify('./index.rsh:155:56:dot', stdlib.UInt_max, 9), [ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc1, ctc6], [v27, v36, v45, v54, v62, v63, v65, v66, v130, v133, v196], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn9) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:155:56:dot', stdlib.UInt_max, 9), v27, v36, v45, v54, v62, v63, v65, v66, v130, v133, v196]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:155:56:dot', stdlib.UInt_max, 9), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196]);
      const [] = txn9.data;
      const v218 = txn9.time;
      const v209 = txn9.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v211 = stdlib.addressEq(v36, v209);
      const v212 = stdlib.addressEq(v27, v209);
      const v213 = v211 ? true : v212;
      const v214 = stdlib.addressEq(v45, v209);
      const v215 = v213 ? true : v214;
      const v216 = stdlib.addressEq(v54, v209);
      const v217 = v215 ? true : v216;
      stdlib.assert(v217, {
        at: './index.rsh:155:56:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Doctor'
        });
      sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:156:25:after expr stmt semicolon', stdlib.UInt_max, 10), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v218]);
      sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:156:25:after expr stmt semicolon', stdlib.UInt_max, 10), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:156:25:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [] = txn9.data;
    const v218 = txn9.time;
    const v209 = txn9.from;
    ;
    const v211 = stdlib.addressEq(v36, v209);
    const v212 = stdlib.addressEq(v27, v209);
    const v213 = v211 ? true : v212;
    const v214 = stdlib.addressEq(v45, v209);
    const v215 = v213 ? true : v214;
    const v216 = stdlib.addressEq(v54, v209);
    const v217 = v215 ? true : v216;
    stdlib.assert(v217, {
      at: './index.rsh:155:56:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Doctor'
      });
    const txn10 = await (ctc.recv(11, 1, [ctc1], false, false));
    const [v225] = txn10.data;
    const v228 = txn10.time;
    const v224 = txn10.from;
    ;
    const v227 = stdlib.addressEq(v27, v224);
    stdlib.assert(v227, {
      at: './index.rsh:163:23:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Doctor'
      });
    const v232 = [v63, v62, v65, v66];
    const v233 = stdlib.protect(ctc1, await interact.getVote(v232), {
      at: './index.rsh:167:68:application',
      fs: ['at ./index.rsh:166:28:application call to [unknown function] (defined at: ./index.rsh:166:32:function exp)'],
      msg: 'getVote',
      who: 'Doctor'
      });
    
    
    const txn11 = await (ctc.sendrecv(12, 1, stdlib.checkedBigNumberify('./index.rsh:169:24:dot', stdlib.UInt_max, 11), [ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc6, ctc1, ctc1, ctc1], [v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v225, v228, v233], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1], true, true, false, (async (txn11) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:169:24:dot', stdlib.UInt_max, 11), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v225, v228]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:169:24:dot', stdlib.UInt_max, 11), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v225]);
      const [v235] = txn11.data;
      const v238 = txn11.time;
      const v234 = txn11.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v237 = stdlib.addressEq(v36, v234);
      stdlib.assert(v237, {
        at: './index.rsh:169:24:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Doctor'
        });
      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:170:25:after expr stmt semicolon', stdlib.UInt_max, 12), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v225, v235, v238]);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:170:25:after expr stmt semicolon', stdlib.UInt_max, 12), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v225, v235]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:170:25:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [v235] = txn11.data;
    const v238 = txn11.time;
    const v234 = txn11.from;
    ;
    const v237 = stdlib.addressEq(v36, v234);
    stdlib.assert(v237, {
      at: './index.rsh:169:24:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Doctor'
      });
    const txn12 = await (ctc.recv(13, 1, [ctc1], false, false));
    const [v245] = txn12.data;
    const v248 = txn12.time;
    const v244 = txn12.from;
    ;
    const v247 = stdlib.addressEq(v45, v244);
    stdlib.assert(v247, {
      at: './index.rsh:175:25:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Doctor'
      });
    const txn13 = await (ctc.recv(14, 1, [ctc1], false, false));
    const [v255] = txn13.data;
    const v258 = txn13.time;
    const v254 = txn13.from;
    ;
    const v257 = stdlib.addressEq(v54, v254);
    stdlib.assert(v257, {
      at: './index.rsh:181:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Doctor'
      });
    const v275 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v277 = v275 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v281 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v283 = stdlib.add(v277, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v284 = v281 ? v283 : v277;
    const v288 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v290 = stdlib.add(v284, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v291 = v288 ? v290 : v284;
    const v295 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v297 = stdlib.add(v291, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v298 = v295 ? v297 : v291;
    const v318 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v320 = v318 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v324 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v326 = stdlib.add(v320, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v327 = v324 ? v326 : v320;
    const v331 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v333 = stdlib.add(v327, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v334 = v331 ? v333 : v327;
    const v338 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v340 = stdlib.add(v334, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v341 = v338 ? v340 : v334;
    const v361 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v363 = v361 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v367 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v369 = stdlib.add(v363, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v370 = v367 ? v369 : v363;
    const v374 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v376 = stdlib.add(v370, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v377 = v374 ? v376 : v370;
    const v381 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v383 = stdlib.add(v377, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v384 = v381 ? v383 : v377;
    const v404 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v406 = v404 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v410 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v412 = stdlib.add(v406, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v413 = v410 ? v412 : v406;
    const v417 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v419 = stdlib.add(v413, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v420 = v417 ? v419 : v413;
    const v424 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v426 = stdlib.add(v420, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v427 = v424 ? v426 : v420;
    const v439 = ['None', null];
    const v675 = stdlib.gt(v298, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0));
    const v677 = v675 ? v298 : stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0);
    const v681 = stdlib.gt(v341, v677);
    const v683 = v681 ? v341 : v677;
    const v687 = stdlib.gt(v384, v683);
    const v689 = v687 ? v384 : v683;
    const v693 = stdlib.gt(v427, v689);
    const v695 = v693 ? v427 : v689;
    const v700 = stdlib.eq(v695, v298);
    const v719 = v63 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v724 = stdlib.add(v719, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v725 = v62 ? v724 : v719;
    const v730 = stdlib.add(v725, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v731 = v65 ? v730 : v725;
    const v736 = stdlib.add(v731, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v737 = v66 ? v736 : v731;
    const v741 = stdlib.div(v737, stdlib.checkedBigNumberify('./index.rsh:190:50:decimal', stdlib.UInt_max, 2));
    const v743 = stdlib.gt(v298, v741);
    const v744 = v700 ? v743 : false;
    const v748 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
    const v749 = [v748, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
    const v751 = [v439, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
    const v752 = v744 ? v749 : v751;
    const v757 = v752[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v758 = v752[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v759;
    switch (v757[0]) {
      case 'None': {
        
        const v804 = stdlib.eq(v695, v341);
        const v847 = stdlib.gt(v341, v741);
        const v848 = v804 ? v847 : false;
        const v852 = stdlib.add(v758, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v853 = ['Some', v758];
        const v854 = [v853, v758];
        const v855 = [v757, v852];
        const v856 = v848 ? v854 : v855;
        v759 = v856;
        
        break;
        }
      case 'Some': {
        const v859 = v757[1];
        v759 = v752;
        
        break;
        }
      }
    const v865 = v759[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v866 = v759[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v867;
    switch (v865[0]) {
      case 'None': {
        
        const v912 = stdlib.eq(v695, v384);
        const v955 = stdlib.gt(v384, v741);
        const v956 = v912 ? v955 : false;
        const v960 = stdlib.add(v866, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v961 = ['Some', v866];
        const v962 = [v961, v866];
        const v963 = [v865, v960];
        const v964 = v956 ? v962 : v963;
        v867 = v964;
        
        break;
        }
      case 'Some': {
        const v967 = v865[1];
        v867 = v759;
        
        break;
        }
      }
    const v973 = v867[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v974 = v867[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v975;
    switch (v973[0]) {
      case 'None': {
        
        const v1020 = stdlib.eq(v695, v427);
        const v1063 = stdlib.gt(v427, v741);
        const v1064 = v1020 ? v1063 : false;
        const v1068 = stdlib.add(v974, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v1069 = ['Some', v974];
        const v1070 = [v1069, v974];
        const v1071 = [v973, v1068];
        const v1072 = v1064 ? v1070 : v1071;
        v975 = v1072;
        
        break;
        }
      case 'Some': {
        const v1075 = v973[1];
        v975 = v867;
        
        break;
        }
      }
    const v1080 = v975[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
    let v1086;
    switch (v1080[0]) {
      case 'None': {
        
        v1086 = false;
        
        break;
        }
      case 'Some': {
        const v1090 = v1080[1];
        v1086 = true;
        
        break;
        }
      }
    if (v1086) {
      let v1096;
      switch (v1080[0]) {
        case 'None': {
          
          v1096 = stdlib.checkedBigNumberify('./index.rsh:201:70:decimal', stdlib.UInt_max, 5);
          
          break;
          }
        case 'Some': {
          const v1100 = v1080[1];
          v1096 = v1100;
          
          break;
          }
        }
      const v1106 = stdlib.Array_set(v196, v1096, false);
      const v1107 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 0)];
      const v1108 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 1)];
      const v1109 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 2)];
      const v1110 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 3)];
      const cv62 = v1108;
      const cv63 = v1107;
      const cv64 = v130;
      const cv65 = v1109;
      const cv66 = v1110;
      const cv1117 = v258;
      
      v62 = cv62;
      v63 = cv63;
      v64 = cv64;
      v65 = cv65;
      v66 = cv66;
      v1117 = cv1117;
      
      continue;}
    else {
      const v1111 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 0)];
      const v1112 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 1)];
      const v1113 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 2)];
      const v1114 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 3)];
      const cv62 = v1112;
      const cv63 = v1111;
      const cv64 = v130;
      const cv65 = v1113;
      const cv66 = v1114;
      const cv1117 = v258;
      
      v62 = cv62;
      v63 = cv63;
      v64 = cv64;
      v65 = cv65;
      v66 = cv66;
      v1117 = cv1117;
      
      continue;}
    
    
    
    
    
    
    
    }
  return;
  
  
  
  
  
  };
export async function Mafia(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4));
  const ctc7 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc6, ctc1, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc6, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc6]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc1, ctc6]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4]);
  
  
  const v19 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v24] = txn1.data;
  const v26 = txn1.time;
  const v23 = txn1.from;
  ;
  const v27 = ctc.iam(v24);
  const txn2 = await (ctc.recv(2, 1, [ctc0], false, false));
  const [v32] = txn2.data;
  const v35 = txn2.time;
  const v31 = txn2.from;
  ;
  const v34 = stdlib.addressEq(v23, v31);
  stdlib.assert(v34, {
    at: './index.rsh:73:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Mafia'
    });
  const v36 = v32;
  const txn3 = await (ctc.recv(3, 1, [ctc0], false, false));
  const [v41] = txn3.data;
  const v44 = txn3.time;
  const v40 = txn3.from;
  ;
  const v43 = stdlib.addressEq(v23, v40);
  stdlib.assert(v43, {
    at: './index.rsh:79:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Mafia'
    });
  const v45 = v41;
  const txn4 = await (ctc.recv(4, 1, [ctc0], false, false));
  const [v50] = txn4.data;
  const v53 = txn4.time;
  const v49 = txn4.from;
  ;
  const v52 = stdlib.addressEq(v23, v49);
  stdlib.assert(v52, {
    at: './index.rsh:85:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Mafia'
    });
  const v54 = v50;
  const txn5 = await (ctc.recv(5, 1, [ctc1], false, false));
  const [v59] = txn5.data;
  const v61 = txn5.time;
  const v58 = txn5.from;
  ;
  let v62 = true;
  let v63 = true;
  let v64 = false;
  let v65 = true;
  let v66 = true;
  let v1117 = v61;
  
  while ((() => {
    const v72 = v63 ? true : v62;
    const v73 = v72 ? true : v65;
    const v74 = v73 ? true : v66;
    
    return v74;})()) {
    const v79 = stdlib.protect(ctc3, await interact.makeMove(), {
      at: './index.rsh:103:63:application',
      fs: ['at ./index.rsh:100:27:application call to [unknown function] (defined at: ./index.rsh:100:31:function exp)'],
      msg: 'makeMove',
      who: 'Mafia'
      });
    let v82;
    switch (v79[0]) {
      case 'None': {
        
        v82 = stdlib.checkedBigNumberify('./index.rsh:106:44:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v86 = v79[1];
        v82 = v86;
        
        break;
        }
      }
    const v92 = stdlib.lt(v82, stdlib.checkedBigNumberify('./index.rsh:106:49:decimal', stdlib.UInt_max, 4));
    stdlib.assert(v92, {
      at: './index.rsh:106:27:application',
      fs: ['at ./index.rsh:100:27:application call to [unknown function] (defined at: ./index.rsh:100:31:function exp)'],
      msg: null,
      who: 'Mafia'
      });
    
    
    const txn6 = await (ctc.sendrecv(7, 1, stdlib.checkedBigNumberify('./index.rsh:108:23:dot', stdlib.UInt_max, 8), [ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc1, ctc3], [v27, v36, v45, v54, v62, v63, v65, v66, v1117, v79], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc3], true, true, false, (async (txn6) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:108:23:dot', stdlib.UInt_max, 6), v27, v36, v45, v54, v62, v63, v65, v66, v1117]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:108:23:dot', stdlib.UInt_max, 6), v27, v36, v45, v54, v62, v63, v65, v66]);
      const [v94] = txn6.data;
      const v97 = txn6.time;
      const v93 = txn6.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v96 = stdlib.addressEq(v27, v93);
      stdlib.assert(v96, {
        at: './index.rsh:108:23:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Mafia'
        });
      sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:109:25:after expr stmt semicolon', stdlib.UInt_max, 7), v27, v36, v45, v54, v62, v63, v65, v66, v94, v97]);
      sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:109:25:after expr stmt semicolon', stdlib.UInt_max, 7), v27, v36, v45, v54, v62, v63, v65, v66, v94]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:109:25:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [v94] = txn6.data;
    const v97 = txn6.time;
    const v93 = txn6.from;
    ;
    const v96 = stdlib.addressEq(v27, v93);
    stdlib.assert(v96, {
      at: './index.rsh:108:23:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Mafia'
      });
    const txn7 = await (ctc.recv(8, 1, [ctc3], false, false));
    const [v116] = txn7.data;
    const v119 = txn7.time;
    const v115 = txn7.from;
    ;
    const v118 = stdlib.addressEq(v36, v115);
    stdlib.assert(v118, {
      at: './index.rsh:118:24:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Mafia'
      });
    const txn8 = await (ctc.recv(9, 1, [ctc4], false, false));
    const [v130] = txn8.data;
    const v133 = txn8.time;
    const v129 = txn8.from;
    ;
    const v132 = stdlib.addressEq(v45, v129);
    stdlib.assert(v132, {
      at: './index.rsh:125:25:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Mafia'
      });
    let v135;
    switch (v94[0]) {
      case 'None': {
        
        v135 = false;
        
        break;
        }
      case 'Some': {
        const v139 = v94[1];
        v135 = true;
        
        break;
        }
      }
    let v145;
    switch (v116[0]) {
      case 'None': {
        
        v145 = false;
        
        break;
        }
      case 'Some': {
        const v149 = v116[1];
        v145 = true;
        
        break;
        }
      }
    let v156;
    switch (v94[0]) {
      case 'None': {
        
        v156 = stdlib.checkedBigNumberify('./index.rsh:132:48:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v160 = v94[1];
        v156 = v160;
        
        break;
        }
      }
    let v168;
    switch (v116[0]) {
      case 'None': {
        
        v168 = stdlib.checkedBigNumberify('./index.rsh:133:52:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v172 = v116[1];
        v168 = v172;
        
        break;
        }
      }
    const v178 = stdlib.lt(v156, stdlib.checkedBigNumberify('./index.rsh:136:34:decimal', stdlib.UInt_max, 4));
    stdlib.assert(v178, {
      at: './index.rsh:136:24:application',
      fs: [],
      msg: null,
      who: 'Mafia'
      });
    const v179 = stdlib.lt(v168, stdlib.checkedBigNumberify('./index.rsh:137:36:decimal', stdlib.UInt_max, 4));
    stdlib.assert(v179, {
      at: './index.rsh:137:24:application',
      fs: [],
      msg: null,
      who: 'Mafia'
      });
    const v180 = v130 ? v135 : false;
    const v181 = stdlib.eq(v156, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 2));
    const v182 = v180 ? v181 : false;
    const v186 = stdlib.eq(v156, v168);
    const v187 = v145 ? v186 : false;
    const v188 = [v63, v62, v65, v66];
    const v190 = stdlib.Array_set(v188, v156, false);
    const v192 = v187 ? v188 : v190;
    const v194 = v135 ? v192 : v188;
    const v195 = [false, v62, v65, v66];
    const v196 = v182 ? v195 : v194;
    stdlib.protect(ctc2, await interact.SeeResults(v196), {
      at: './index.rsh:153:40:application',
      fs: ['at ./index.rsh:152:21:application call to [unknown function] (defined at: ./index.rsh:152:61:function exp)'],
      msg: 'SeeResults',
      who: 'Mafia'
      });
    
    
    const txn9 = await (ctc.sendrecv(10, 0, stdlib.checkedBigNumberify('./index.rsh:155:56:dot', stdlib.UInt_max, 9), [ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc1, ctc6], [v27, v36, v45, v54, v62, v63, v65, v66, v130, v133, v196], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn9) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:155:56:dot', stdlib.UInt_max, 9), v27, v36, v45, v54, v62, v63, v65, v66, v130, v133, v196]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:155:56:dot', stdlib.UInt_max, 9), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196]);
      const [] = txn9.data;
      const v218 = txn9.time;
      const v209 = txn9.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v211 = stdlib.addressEq(v36, v209);
      const v212 = stdlib.addressEq(v27, v209);
      const v213 = v211 ? true : v212;
      const v214 = stdlib.addressEq(v45, v209);
      const v215 = v213 ? true : v214;
      const v216 = stdlib.addressEq(v54, v209);
      const v217 = v215 ? true : v216;
      stdlib.assert(v217, {
        at: './index.rsh:155:56:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Mafia'
        });
      sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:156:25:after expr stmt semicolon', stdlib.UInt_max, 10), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v218]);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:156:25:after expr stmt semicolon', stdlib.UInt_max, 10), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:156:25:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [] = txn9.data;
    const v218 = txn9.time;
    const v209 = txn9.from;
    ;
    const v211 = stdlib.addressEq(v36, v209);
    const v212 = stdlib.addressEq(v27, v209);
    const v213 = v211 ? true : v212;
    const v214 = stdlib.addressEq(v45, v209);
    const v215 = v213 ? true : v214;
    const v216 = stdlib.addressEq(v54, v209);
    const v217 = v215 ? true : v216;
    stdlib.assert(v217, {
      at: './index.rsh:155:56:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Mafia'
      });
    const v222 = [v63, v62, v65, v66];
    const v223 = stdlib.protect(ctc1, await interact.getVote(v222), {
      at: './index.rsh:161:67:application',
      fs: ['at ./index.rsh:160:27:application call to [unknown function] (defined at: ./index.rsh:160:31:function exp)'],
      msg: 'getVote',
      who: 'Mafia'
      });
    
    
    const txn10 = await (ctc.sendrecv(11, 1, stdlib.checkedBigNumberify('./index.rsh:163:23:dot', stdlib.UInt_max, 10), [ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc6, ctc1, ctc1], [v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v218, v223], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1], true, true, false, (async (txn10) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:163:23:dot', stdlib.UInt_max, 10), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v218]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:163:23:dot', stdlib.UInt_max, 10), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196]);
      const [v225] = txn10.data;
      const v228 = txn10.time;
      const v224 = txn10.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v227 = stdlib.addressEq(v27, v224);
      stdlib.assert(v227, {
        at: './index.rsh:163:23:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Mafia'
        });
      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:164:25:after expr stmt semicolon', stdlib.UInt_max, 11), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v225, v228]);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:164:25:after expr stmt semicolon', stdlib.UInt_max, 11), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v225]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:164:25:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [v225] = txn10.data;
    const v228 = txn10.time;
    const v224 = txn10.from;
    ;
    const v227 = stdlib.addressEq(v27, v224);
    stdlib.assert(v227, {
      at: './index.rsh:163:23:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Mafia'
      });
    const txn11 = await (ctc.recv(12, 1, [ctc1], false, false));
    const [v235] = txn11.data;
    const v238 = txn11.time;
    const v234 = txn11.from;
    ;
    const v237 = stdlib.addressEq(v36, v234);
    stdlib.assert(v237, {
      at: './index.rsh:169:24:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Mafia'
      });
    const txn12 = await (ctc.recv(13, 1, [ctc1], false, false));
    const [v245] = txn12.data;
    const v248 = txn12.time;
    const v244 = txn12.from;
    ;
    const v247 = stdlib.addressEq(v45, v244);
    stdlib.assert(v247, {
      at: './index.rsh:175:25:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Mafia'
      });
    const txn13 = await (ctc.recv(14, 1, [ctc1], false, false));
    const [v255] = txn13.data;
    const v258 = txn13.time;
    const v254 = txn13.from;
    ;
    const v257 = stdlib.addressEq(v54, v254);
    stdlib.assert(v257, {
      at: './index.rsh:181:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Mafia'
      });
    const v275 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v277 = v275 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v281 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v283 = stdlib.add(v277, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v284 = v281 ? v283 : v277;
    const v288 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v290 = stdlib.add(v284, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v291 = v288 ? v290 : v284;
    const v295 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v297 = stdlib.add(v291, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v298 = v295 ? v297 : v291;
    const v318 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v320 = v318 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v324 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v326 = stdlib.add(v320, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v327 = v324 ? v326 : v320;
    const v331 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v333 = stdlib.add(v327, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v334 = v331 ? v333 : v327;
    const v338 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v340 = stdlib.add(v334, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v341 = v338 ? v340 : v334;
    const v361 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v363 = v361 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v367 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v369 = stdlib.add(v363, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v370 = v367 ? v369 : v363;
    const v374 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v376 = stdlib.add(v370, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v377 = v374 ? v376 : v370;
    const v381 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v383 = stdlib.add(v377, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v384 = v381 ? v383 : v377;
    const v404 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v406 = v404 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v410 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v412 = stdlib.add(v406, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v413 = v410 ? v412 : v406;
    const v417 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v419 = stdlib.add(v413, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v420 = v417 ? v419 : v413;
    const v424 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v426 = stdlib.add(v420, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v427 = v424 ? v426 : v420;
    const v439 = ['None', null];
    const v675 = stdlib.gt(v298, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0));
    const v677 = v675 ? v298 : stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0);
    const v681 = stdlib.gt(v341, v677);
    const v683 = v681 ? v341 : v677;
    const v687 = stdlib.gt(v384, v683);
    const v689 = v687 ? v384 : v683;
    const v693 = stdlib.gt(v427, v689);
    const v695 = v693 ? v427 : v689;
    const v700 = stdlib.eq(v695, v298);
    const v719 = v63 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v724 = stdlib.add(v719, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v725 = v62 ? v724 : v719;
    const v730 = stdlib.add(v725, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v731 = v65 ? v730 : v725;
    const v736 = stdlib.add(v731, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v737 = v66 ? v736 : v731;
    const v741 = stdlib.div(v737, stdlib.checkedBigNumberify('./index.rsh:190:50:decimal', stdlib.UInt_max, 2));
    const v743 = stdlib.gt(v298, v741);
    const v744 = v700 ? v743 : false;
    const v748 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
    const v749 = [v748, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
    const v751 = [v439, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
    const v752 = v744 ? v749 : v751;
    const v757 = v752[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v758 = v752[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v759;
    switch (v757[0]) {
      case 'None': {
        
        const v804 = stdlib.eq(v695, v341);
        const v847 = stdlib.gt(v341, v741);
        const v848 = v804 ? v847 : false;
        const v852 = stdlib.add(v758, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v853 = ['Some', v758];
        const v854 = [v853, v758];
        const v855 = [v757, v852];
        const v856 = v848 ? v854 : v855;
        v759 = v856;
        
        break;
        }
      case 'Some': {
        const v859 = v757[1];
        v759 = v752;
        
        break;
        }
      }
    const v865 = v759[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v866 = v759[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v867;
    switch (v865[0]) {
      case 'None': {
        
        const v912 = stdlib.eq(v695, v384);
        const v955 = stdlib.gt(v384, v741);
        const v956 = v912 ? v955 : false;
        const v960 = stdlib.add(v866, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v961 = ['Some', v866];
        const v962 = [v961, v866];
        const v963 = [v865, v960];
        const v964 = v956 ? v962 : v963;
        v867 = v964;
        
        break;
        }
      case 'Some': {
        const v967 = v865[1];
        v867 = v759;
        
        break;
        }
      }
    const v973 = v867[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v974 = v867[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v975;
    switch (v973[0]) {
      case 'None': {
        
        const v1020 = stdlib.eq(v695, v427);
        const v1063 = stdlib.gt(v427, v741);
        const v1064 = v1020 ? v1063 : false;
        const v1068 = stdlib.add(v974, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v1069 = ['Some', v974];
        const v1070 = [v1069, v974];
        const v1071 = [v973, v1068];
        const v1072 = v1064 ? v1070 : v1071;
        v975 = v1072;
        
        break;
        }
      case 'Some': {
        const v1075 = v973[1];
        v975 = v867;
        
        break;
        }
      }
    const v1080 = v975[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
    let v1086;
    switch (v1080[0]) {
      case 'None': {
        
        v1086 = false;
        
        break;
        }
      case 'Some': {
        const v1090 = v1080[1];
        v1086 = true;
        
        break;
        }
      }
    if (v1086) {
      let v1096;
      switch (v1080[0]) {
        case 'None': {
          
          v1096 = stdlib.checkedBigNumberify('./index.rsh:201:70:decimal', stdlib.UInt_max, 5);
          
          break;
          }
        case 'Some': {
          const v1100 = v1080[1];
          v1096 = v1100;
          
          break;
          }
        }
      const v1106 = stdlib.Array_set(v196, v1096, false);
      const v1107 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 0)];
      const v1108 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 1)];
      const v1109 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 2)];
      const v1110 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 3)];
      const cv62 = v1108;
      const cv63 = v1107;
      const cv64 = v130;
      const cv65 = v1109;
      const cv66 = v1110;
      const cv1117 = v258;
      
      v62 = cv62;
      v63 = cv63;
      v64 = cv64;
      v65 = cv65;
      v66 = cv66;
      v1117 = cv1117;
      
      continue;}
    else {
      const v1111 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 0)];
      const v1112 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 1)];
      const v1113 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 2)];
      const v1114 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 3)];
      const cv62 = v1112;
      const cv63 = v1111;
      const cv64 = v130;
      const cv65 = v1113;
      const cv66 = v1114;
      const cv1117 = v258;
      
      v62 = cv62;
      v63 = cv63;
      v64 = cv64;
      v65 = cv65;
      v66 = cv66;
      v1117 = cv1117;
      
      continue;}
    
    
    
    
    
    
    
    }
  return;
  
  
  
  
  
  };
export async function Player(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc1, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc1, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1]);
  
  
  const v19 = await ctc.creationTime();
  
  const v21 = ctc.selfAddress('Player', false, stdlib.checkedBigNumberify('./index.rsh:64:24:application', stdlib.UInt_max, 20));
  
  
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:67:20:dot', stdlib.UInt_max, 0), [ctc1, ctc0], [v19, v21], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:67:20:dot', stdlib.UInt_max, 0), v19]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:67:20:dot', stdlib.UInt_max, 0)]);
    const [v24] = txn1.data;
    const v26 = txn1.time;
    const v23 = txn1.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v27 = v24;
    sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:69:21:after expr stmt semicolon', stdlib.UInt_max, 1), v23, v26, v27]);
    sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:69:21:after expr stmt semicolon', stdlib.UInt_max, 1), v23, v27]);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:69:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v24] = txn1.data;
  const v26 = txn1.time;
  const v23 = txn1.from;
  ;
  const v27 = v24;
  
  
  const txn2 = await (ctc.sendrecv(2, 1, stdlib.checkedBigNumberify('./index.rsh:73:20:dot', stdlib.UInt_max, 1), [ctc0, ctc1, ctc0, ctc0], [v23, v26, v27, v23], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:73:20:dot', stdlib.UInt_max, 1), v23, v26, v27]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:73:20:dot', stdlib.UInt_max, 1), v23, v27]);
    const [v32] = txn2.data;
    const v35 = txn2.time;
    const v31 = txn2.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v34 = stdlib.addressEq(v23, v31);
    stdlib.assert(v34, {
      at: './index.rsh:73:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player'
      });
    const v36 = v32;
    sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:75:21:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v27, v35, v36]);
    sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:75:21:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v27, v36]);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:75:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v32] = txn2.data;
  const v35 = txn2.time;
  const v31 = txn2.from;
  ;
  const v34 = stdlib.addressEq(v23, v31);
  stdlib.assert(v34, {
    at: './index.rsh:73:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player'
    });
  const v36 = v32;
  
  
  const txn3 = await (ctc.sendrecv(3, 1, stdlib.checkedBigNumberify('./index.rsh:79:20:dot', stdlib.UInt_max, 2), [ctc0, ctc0, ctc1, ctc0, ctc0], [v23, v27, v35, v36, v23], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn3) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:79:20:dot', stdlib.UInt_max, 2), v23, v27, v35, v36]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:79:20:dot', stdlib.UInt_max, 2), v23, v27, v36]);
    const [v41] = txn3.data;
    const v44 = txn3.time;
    const v40 = txn3.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v43 = stdlib.addressEq(v23, v40);
    stdlib.assert(v43, {
      at: './index.rsh:79:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player'
      });
    const v45 = v41;
    sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:81:21:after expr stmt semicolon', stdlib.UInt_max, 3), v23, v27, v36, v44, v45]);
    sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:81:21:after expr stmt semicolon', stdlib.UInt_max, 3), v23, v27, v36, v45]);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:81:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v41] = txn3.data;
  const v44 = txn3.time;
  const v40 = txn3.from;
  ;
  const v43 = stdlib.addressEq(v23, v40);
  stdlib.assert(v43, {
    at: './index.rsh:79:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player'
    });
  const v45 = v41;
  
  
  const txn4 = await (ctc.sendrecv(4, 1, stdlib.checkedBigNumberify('./index.rsh:85:20:dot', stdlib.UInt_max, 3), [ctc0, ctc0, ctc0, ctc1, ctc0, ctc0], [v23, v27, v36, v44, v45, v23], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn4) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:85:20:dot', stdlib.UInt_max, 3), v23, v27, v36, v44, v45]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:85:20:dot', stdlib.UInt_max, 3), v23, v27, v36, v45]);
    const [v50] = txn4.data;
    const v53 = txn4.time;
    const v49 = txn4.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v52 = stdlib.addressEq(v23, v49);
    stdlib.assert(v52, {
      at: './index.rsh:85:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player'
      });
    const v54 = v50;
    sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:87:21:after expr stmt semicolon', stdlib.UInt_max, 4), v27, v36, v45, v53, v54]);
    sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:87:21:after expr stmt semicolon', stdlib.UInt_max, 4), v27, v36, v45, v54]);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:87:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v50] = txn4.data;
  const v53 = txn4.time;
  const v49 = txn4.from;
  ;
  const v52 = stdlib.addressEq(v23, v49);
  stdlib.assert(v52, {
    at: './index.rsh:85:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player'
    });
  const v54 = v50;
  const txn5 = await (ctc.recv(5, 1, [ctc1], false, false));
  const [v59] = txn5.data;
  const v61 = txn5.time;
  const v58 = txn5.from;
  ;
  let v62 = true;
  let v63 = true;
  let v64 = false;
  let v65 = true;
  let v66 = true;
  let v1117 = v61;
  
  while ((() => {
    const v72 = v63 ? true : v62;
    const v73 = v72 ? true : v65;
    const v74 = v73 ? true : v66;
    
    return v74;})()) {
    const txn6 = await (ctc.recv(7, 1, [ctc3], false, false));
    const [v94] = txn6.data;
    const v97 = txn6.time;
    const v93 = txn6.from;
    ;
    const v96 = stdlib.addressEq(v27, v93);
    stdlib.assert(v96, {
      at: './index.rsh:108:23:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player'
      });
    const txn7 = await (ctc.recv(8, 1, [ctc3], false, false));
    const [v116] = txn7.data;
    const v119 = txn7.time;
    const v115 = txn7.from;
    ;
    const v118 = stdlib.addressEq(v36, v115);
    stdlib.assert(v118, {
      at: './index.rsh:118:24:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player'
      });
    const txn8 = await (ctc.recv(9, 1, [ctc4], false, false));
    const [v130] = txn8.data;
    const v133 = txn8.time;
    const v129 = txn8.from;
    ;
    const v132 = stdlib.addressEq(v45, v129);
    stdlib.assert(v132, {
      at: './index.rsh:125:25:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player'
      });
    let v135;
    switch (v94[0]) {
      case 'None': {
        
        v135 = false;
        
        break;
        }
      case 'Some': {
        const v139 = v94[1];
        v135 = true;
        
        break;
        }
      }
    let v145;
    switch (v116[0]) {
      case 'None': {
        
        v145 = false;
        
        break;
        }
      case 'Some': {
        const v149 = v116[1];
        v145 = true;
        
        break;
        }
      }
    let v156;
    switch (v94[0]) {
      case 'None': {
        
        v156 = stdlib.checkedBigNumberify('./index.rsh:132:48:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v160 = v94[1];
        v156 = v160;
        
        break;
        }
      }
    let v168;
    switch (v116[0]) {
      case 'None': {
        
        v168 = stdlib.checkedBigNumberify('./index.rsh:133:52:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v172 = v116[1];
        v168 = v172;
        
        break;
        }
      }
    const v178 = stdlib.lt(v156, stdlib.checkedBigNumberify('./index.rsh:136:34:decimal', stdlib.UInt_max, 4));
    stdlib.assert(v178, {
      at: './index.rsh:136:24:application',
      fs: [],
      msg: null,
      who: 'Player'
      });
    const v179 = stdlib.lt(v168, stdlib.checkedBigNumberify('./index.rsh:137:36:decimal', stdlib.UInt_max, 4));
    stdlib.assert(v179, {
      at: './index.rsh:137:24:application',
      fs: [],
      msg: null,
      who: 'Player'
      });
    const v180 = v130 ? v135 : false;
    const v181 = stdlib.eq(v156, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 2));
    const v182 = v180 ? v181 : false;
    const v186 = stdlib.eq(v156, v168);
    const v187 = v145 ? v186 : false;
    const v188 = [v63, v62, v65, v66];
    const v190 = stdlib.Array_set(v188, v156, false);
    const v192 = v187 ? v188 : v190;
    const v194 = v135 ? v192 : v188;
    const v195 = [false, v62, v65, v66];
    const v196 = v182 ? v195 : v194;
    const txn9 = await (ctc.recv(10, 0, [], false, false));
    const [] = txn9.data;
    const v218 = txn9.time;
    const v209 = txn9.from;
    ;
    const v211 = stdlib.addressEq(v36, v209);
    const v212 = stdlib.addressEq(v27, v209);
    const v213 = v211 ? true : v212;
    const v214 = stdlib.addressEq(v45, v209);
    const v215 = v213 ? true : v214;
    const v216 = stdlib.addressEq(v54, v209);
    const v217 = v215 ? true : v216;
    stdlib.assert(v217, {
      at: './index.rsh:155:56:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player'
      });
    const txn10 = await (ctc.recv(11, 1, [ctc1], false, false));
    const [v225] = txn10.data;
    const v228 = txn10.time;
    const v224 = txn10.from;
    ;
    const v227 = stdlib.addressEq(v27, v224);
    stdlib.assert(v227, {
      at: './index.rsh:163:23:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player'
      });
    const txn11 = await (ctc.recv(12, 1, [ctc1], false, false));
    const [v235] = txn11.data;
    const v238 = txn11.time;
    const v234 = txn11.from;
    ;
    const v237 = stdlib.addressEq(v36, v234);
    stdlib.assert(v237, {
      at: './index.rsh:169:24:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player'
      });
    const txn12 = await (ctc.recv(13, 1, [ctc1], false, false));
    const [v245] = txn12.data;
    const v248 = txn12.time;
    const v244 = txn12.from;
    ;
    const v247 = stdlib.addressEq(v45, v244);
    stdlib.assert(v247, {
      at: './index.rsh:175:25:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player'
      });
    const txn13 = await (ctc.recv(14, 1, [ctc1], false, false));
    const [v255] = txn13.data;
    const v258 = txn13.time;
    const v254 = txn13.from;
    ;
    const v257 = stdlib.addressEq(v54, v254);
    stdlib.assert(v257, {
      at: './index.rsh:181:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player'
      });
    const v275 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v277 = v275 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v281 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v283 = stdlib.add(v277, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v284 = v281 ? v283 : v277;
    const v288 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v290 = stdlib.add(v284, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v291 = v288 ? v290 : v284;
    const v295 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v297 = stdlib.add(v291, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v298 = v295 ? v297 : v291;
    const v318 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v320 = v318 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v324 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v326 = stdlib.add(v320, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v327 = v324 ? v326 : v320;
    const v331 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v333 = stdlib.add(v327, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v334 = v331 ? v333 : v327;
    const v338 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v340 = stdlib.add(v334, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v341 = v338 ? v340 : v334;
    const v361 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v363 = v361 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v367 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v369 = stdlib.add(v363, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v370 = v367 ? v369 : v363;
    const v374 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v376 = stdlib.add(v370, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v377 = v374 ? v376 : v370;
    const v381 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v383 = stdlib.add(v377, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v384 = v381 ? v383 : v377;
    const v404 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v406 = v404 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v410 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v412 = stdlib.add(v406, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v413 = v410 ? v412 : v406;
    const v417 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v419 = stdlib.add(v413, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v420 = v417 ? v419 : v413;
    const v424 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v426 = stdlib.add(v420, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v427 = v424 ? v426 : v420;
    const v439 = ['None', null];
    const v675 = stdlib.gt(v298, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0));
    const v677 = v675 ? v298 : stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0);
    const v681 = stdlib.gt(v341, v677);
    const v683 = v681 ? v341 : v677;
    const v687 = stdlib.gt(v384, v683);
    const v689 = v687 ? v384 : v683;
    const v693 = stdlib.gt(v427, v689);
    const v695 = v693 ? v427 : v689;
    const v700 = stdlib.eq(v695, v298);
    const v719 = v63 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v724 = stdlib.add(v719, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v725 = v62 ? v724 : v719;
    const v730 = stdlib.add(v725, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v731 = v65 ? v730 : v725;
    const v736 = stdlib.add(v731, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v737 = v66 ? v736 : v731;
    const v741 = stdlib.div(v737, stdlib.checkedBigNumberify('./index.rsh:190:50:decimal', stdlib.UInt_max, 2));
    const v743 = stdlib.gt(v298, v741);
    const v744 = v700 ? v743 : false;
    const v748 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
    const v749 = [v748, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
    const v751 = [v439, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
    const v752 = v744 ? v749 : v751;
    const v757 = v752[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v758 = v752[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v759;
    switch (v757[0]) {
      case 'None': {
        
        const v804 = stdlib.eq(v695, v341);
        const v847 = stdlib.gt(v341, v741);
        const v848 = v804 ? v847 : false;
        const v852 = stdlib.add(v758, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v853 = ['Some', v758];
        const v854 = [v853, v758];
        const v855 = [v757, v852];
        const v856 = v848 ? v854 : v855;
        v759 = v856;
        
        break;
        }
      case 'Some': {
        const v859 = v757[1];
        v759 = v752;
        
        break;
        }
      }
    const v865 = v759[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v866 = v759[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v867;
    switch (v865[0]) {
      case 'None': {
        
        const v912 = stdlib.eq(v695, v384);
        const v955 = stdlib.gt(v384, v741);
        const v956 = v912 ? v955 : false;
        const v960 = stdlib.add(v866, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v961 = ['Some', v866];
        const v962 = [v961, v866];
        const v963 = [v865, v960];
        const v964 = v956 ? v962 : v963;
        v867 = v964;
        
        break;
        }
      case 'Some': {
        const v967 = v865[1];
        v867 = v759;
        
        break;
        }
      }
    const v973 = v867[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v974 = v867[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v975;
    switch (v973[0]) {
      case 'None': {
        
        const v1020 = stdlib.eq(v695, v427);
        const v1063 = stdlib.gt(v427, v741);
        const v1064 = v1020 ? v1063 : false;
        const v1068 = stdlib.add(v974, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v1069 = ['Some', v974];
        const v1070 = [v1069, v974];
        const v1071 = [v973, v1068];
        const v1072 = v1064 ? v1070 : v1071;
        v975 = v1072;
        
        break;
        }
      case 'Some': {
        const v1075 = v973[1];
        v975 = v867;
        
        break;
        }
      }
    const v1080 = v975[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
    let v1086;
    switch (v1080[0]) {
      case 'None': {
        
        v1086 = false;
        
        break;
        }
      case 'Some': {
        const v1090 = v1080[1];
        v1086 = true;
        
        break;
        }
      }
    if (v1086) {
      let v1096;
      switch (v1080[0]) {
        case 'None': {
          
          v1096 = stdlib.checkedBigNumberify('./index.rsh:201:70:decimal', stdlib.UInt_max, 5);
          
          break;
          }
        case 'Some': {
          const v1100 = v1080[1];
          v1096 = v1100;
          
          break;
          }
        }
      const v1106 = stdlib.Array_set(v196, v1096, false);
      const v1107 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 0)];
      const v1108 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 1)];
      const v1109 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 2)];
      const v1110 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 3)];
      const cv62 = v1108;
      const cv63 = v1107;
      const cv64 = v130;
      const cv65 = v1109;
      const cv66 = v1110;
      const cv1117 = v258;
      
      v62 = cv62;
      v63 = cv63;
      v64 = cv64;
      v65 = cv65;
      v66 = cv66;
      v1117 = cv1117;
      
      continue;}
    else {
      const v1111 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 0)];
      const v1112 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 1)];
      const v1113 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 2)];
      const v1114 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 3)];
      const cv62 = v1112;
      const cv63 = v1111;
      const cv64 = v130;
      const cv65 = v1113;
      const cv66 = v1114;
      const cv1117 = v258;
      
      v62 = cv62;
      v63 = cv63;
      v64 = cv64;
      v65 = cv65;
      v66 = cv66;
      v1117 = cv1117;
      
      continue;}
    
    
    
    
    
    
    
    }
  return;
  
  
  
  
  
  };
export async function Veteran(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4));
  const ctc7 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc6, ctc1, ctc1, ctc1, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc6, ctc1, ctc1, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc6, ctc1, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc6, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc1, ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3]);
  
  
  const v19 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v24] = txn1.data;
  const v26 = txn1.time;
  const v23 = txn1.from;
  ;
  const v27 = v24;
  const txn2 = await (ctc.recv(2, 1, [ctc0], false, false));
  const [v32] = txn2.data;
  const v35 = txn2.time;
  const v31 = txn2.from;
  ;
  const v34 = stdlib.addressEq(v23, v31);
  stdlib.assert(v34, {
    at: './index.rsh:73:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Veteran'
    });
  const v36 = v32;
  const txn3 = await (ctc.recv(3, 1, [ctc0], false, false));
  const [v41] = txn3.data;
  const v44 = txn3.time;
  const v40 = txn3.from;
  ;
  const v43 = stdlib.addressEq(v23, v40);
  stdlib.assert(v43, {
    at: './index.rsh:79:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Veteran'
    });
  const v45 = ctc.iam(v41);
  const txn4 = await (ctc.recv(4, 1, [ctc0], false, false));
  const [v50] = txn4.data;
  const v53 = txn4.time;
  const v49 = txn4.from;
  ;
  const v52 = stdlib.addressEq(v23, v49);
  stdlib.assert(v52, {
    at: './index.rsh:85:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Veteran'
    });
  const v54 = v50;
  const txn5 = await (ctc.recv(5, 1, [ctc1], false, false));
  const [v59] = txn5.data;
  const v61 = txn5.time;
  const v58 = txn5.from;
  ;
  let v62 = true;
  let v63 = true;
  let v64 = false;
  let v65 = true;
  let v66 = true;
  let v1117 = v61;
  
  while ((() => {
    const v72 = v63 ? true : v62;
    const v73 = v72 ? true : v65;
    const v74 = v73 ? true : v66;
    
    return v74;})()) {
    const txn6 = await (ctc.recv(7, 1, [ctc3], false, false));
    const [v94] = txn6.data;
    const v97 = txn6.time;
    const v93 = txn6.from;
    ;
    const v96 = stdlib.addressEq(v27, v93);
    stdlib.assert(v96, {
      at: './index.rsh:108:23:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Veteran'
      });
    const txn7 = await (ctc.recv(8, 1, [ctc3], false, false));
    const [v116] = txn7.data;
    const v119 = txn7.time;
    const v115 = txn7.from;
    ;
    const v118 = stdlib.addressEq(v36, v115);
    stdlib.assert(v118, {
      at: './index.rsh:118:24:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Veteran'
      });
    const v124 = v64 ? false : true;
    const v126 = v65 ? v124 : false;
    let v128;
    if (v126) {
      const v127 = stdlib.protect(ctc4, await interact.makeMove(), {
        at: './index.rsh:123:96:application',
        fs: ['at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:33:function exp)'],
        msg: 'makeMove',
        who: 'Veteran'
        });
      v128 = v127;
      }
    else {
      v128 = false;
      }
    
    
    const txn8 = await (ctc.sendrecv(9, 1, stdlib.checkedBigNumberify('./index.rsh:125:25:dot', stdlib.UInt_max, 10), [ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc1, ctc4], [v27, v36, v45, v54, v62, v63, v65, v66, v94, v116, v119, v128], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc4], true, true, false, (async (txn8) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:125:25:dot', stdlib.UInt_max, 8), v27, v36, v45, v54, v62, v63, v65, v66, v94, v116, v119]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:125:25:dot', stdlib.UInt_max, 8), v27, v36, v45, v54, v62, v63, v65, v66, v94, v116]);
      const [v130] = txn8.data;
      const v133 = txn8.time;
      const v129 = txn8.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v132 = stdlib.addressEq(v45, v129);
      stdlib.assert(v132, {
        at: './index.rsh:125:25:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Veteran'
        });
      let v135;
      switch (v94[0]) {
        case 'None': {
          
          v135 = false;
          
          break;
          }
        case 'Some': {
          const v139 = v94[1];
          v135 = true;
          
          break;
          }
        }
      let v145;
      switch (v116[0]) {
        case 'None': {
          
          v145 = false;
          
          break;
          }
        case 'Some': {
          const v149 = v116[1];
          v145 = true;
          
          break;
          }
        }
      let v156;
      switch (v94[0]) {
        case 'None': {
          
          v156 = stdlib.checkedBigNumberify('./index.rsh:132:48:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v160 = v94[1];
          v156 = v160;
          
          break;
          }
        }
      let v168;
      switch (v116[0]) {
        case 'None': {
          
          v168 = stdlib.checkedBigNumberify('./index.rsh:133:52:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v172 = v116[1];
          v168 = v172;
          
          break;
          }
        }
      const v178 = stdlib.lt(v156, stdlib.checkedBigNumberify('./index.rsh:136:34:decimal', stdlib.UInt_max, 4));
      stdlib.assert(v178, {
        at: './index.rsh:136:24:application',
        fs: [],
        msg: null,
        who: 'Veteran'
        });
      const v179 = stdlib.lt(v168, stdlib.checkedBigNumberify('./index.rsh:137:36:decimal', stdlib.UInt_max, 4));
      stdlib.assert(v179, {
        at: './index.rsh:137:24:application',
        fs: [],
        msg: null,
        who: 'Veteran'
        });
      const v180 = v130 ? v135 : false;
      const v181 = stdlib.eq(v156, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 2));
      const v182 = v180 ? v181 : false;
      const v186 = stdlib.eq(v156, v168);
      const v187 = v145 ? v186 : false;
      const v188 = [v63, v62, v65, v66];
      const v190 = stdlib.Array_set(v188, v156, false);
      const v192 = v187 ? v188 : v190;
      const v194 = v135 ? v192 : v188;
      const v195 = [false, v62, v65, v66];
      const v196 = v182 ? v195 : v194;
      sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:151:25:after expr stmt semicolon', stdlib.UInt_max, 9), v27, v36, v45, v54, v62, v63, v65, v66, v130, v133, v196]);
      sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:151:25:after expr stmt semicolon', stdlib.UInt_max, 9), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:151:25:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [v130] = txn8.data;
    const v133 = txn8.time;
    const v129 = txn8.from;
    ;
    const v132 = stdlib.addressEq(v45, v129);
    stdlib.assert(v132, {
      at: './index.rsh:125:25:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Veteran'
      });
    let v135;
    switch (v94[0]) {
      case 'None': {
        
        v135 = false;
        
        break;
        }
      case 'Some': {
        const v139 = v94[1];
        v135 = true;
        
        break;
        }
      }
    let v145;
    switch (v116[0]) {
      case 'None': {
        
        v145 = false;
        
        break;
        }
      case 'Some': {
        const v149 = v116[1];
        v145 = true;
        
        break;
        }
      }
    let v156;
    switch (v94[0]) {
      case 'None': {
        
        v156 = stdlib.checkedBigNumberify('./index.rsh:132:48:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v160 = v94[1];
        v156 = v160;
        
        break;
        }
      }
    let v168;
    switch (v116[0]) {
      case 'None': {
        
        v168 = stdlib.checkedBigNumberify('./index.rsh:133:52:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v172 = v116[1];
        v168 = v172;
        
        break;
        }
      }
    const v178 = stdlib.lt(v156, stdlib.checkedBigNumberify('./index.rsh:136:34:decimal', stdlib.UInt_max, 4));
    stdlib.assert(v178, {
      at: './index.rsh:136:24:application',
      fs: [],
      msg: null,
      who: 'Veteran'
      });
    const v179 = stdlib.lt(v168, stdlib.checkedBigNumberify('./index.rsh:137:36:decimal', stdlib.UInt_max, 4));
    stdlib.assert(v179, {
      at: './index.rsh:137:24:application',
      fs: [],
      msg: null,
      who: 'Veteran'
      });
    const v180 = v130 ? v135 : false;
    const v181 = stdlib.eq(v156, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 2));
    const v182 = v180 ? v181 : false;
    const v186 = stdlib.eq(v156, v168);
    const v187 = v145 ? v186 : false;
    const v188 = [v63, v62, v65, v66];
    const v190 = stdlib.Array_set(v188, v156, false);
    const v192 = v187 ? v188 : v190;
    const v194 = v135 ? v192 : v188;
    const v195 = [false, v62, v65, v66];
    const v196 = v182 ? v195 : v194;
    stdlib.protect(ctc2, await interact.SeeResults(v196), {
      at: './index.rsh:153:40:application',
      fs: ['at ./index.rsh:152:21:application call to [unknown function] (defined at: ./index.rsh:152:61:function exp)'],
      msg: 'SeeResults',
      who: 'Veteran'
      });
    
    
    const txn9 = await (ctc.sendrecv(10, 0, stdlib.checkedBigNumberify('./index.rsh:155:56:dot', stdlib.UInt_max, 9), [ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc1, ctc6], [v27, v36, v45, v54, v62, v63, v65, v66, v130, v133, v196], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn9) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:155:56:dot', stdlib.UInt_max, 9), v27, v36, v45, v54, v62, v63, v65, v66, v130, v133, v196]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:155:56:dot', stdlib.UInt_max, 9), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196]);
      const [] = txn9.data;
      const v218 = txn9.time;
      const v209 = txn9.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v211 = stdlib.addressEq(v36, v209);
      const v212 = stdlib.addressEq(v27, v209);
      const v213 = v211 ? true : v212;
      const v214 = stdlib.addressEq(v45, v209);
      const v215 = v213 ? true : v214;
      const v216 = stdlib.addressEq(v54, v209);
      const v217 = v215 ? true : v216;
      stdlib.assert(v217, {
        at: './index.rsh:155:56:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Veteran'
        });
      sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:156:25:after expr stmt semicolon', stdlib.UInt_max, 10), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v218]);
      sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:156:25:after expr stmt semicolon', stdlib.UInt_max, 10), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:156:25:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [] = txn9.data;
    const v218 = txn9.time;
    const v209 = txn9.from;
    ;
    const v211 = stdlib.addressEq(v36, v209);
    const v212 = stdlib.addressEq(v27, v209);
    const v213 = v211 ? true : v212;
    const v214 = stdlib.addressEq(v45, v209);
    const v215 = v213 ? true : v214;
    const v216 = stdlib.addressEq(v54, v209);
    const v217 = v215 ? true : v216;
    stdlib.assert(v217, {
      at: './index.rsh:155:56:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Veteran'
      });
    const txn10 = await (ctc.recv(11, 1, [ctc1], false, false));
    const [v225] = txn10.data;
    const v228 = txn10.time;
    const v224 = txn10.from;
    ;
    const v227 = stdlib.addressEq(v27, v224);
    stdlib.assert(v227, {
      at: './index.rsh:163:23:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Veteran'
      });
    const txn11 = await (ctc.recv(12, 1, [ctc1], false, false));
    const [v235] = txn11.data;
    const v238 = txn11.time;
    const v234 = txn11.from;
    ;
    const v237 = stdlib.addressEq(v36, v234);
    stdlib.assert(v237, {
      at: './index.rsh:169:24:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Veteran'
      });
    const v242 = [v63, v62, v65, v66];
    const v243 = stdlib.protect(ctc1, await interact.getVote(v242), {
      at: './index.rsh:173:68:application',
      fs: ['at ./index.rsh:172:29:application call to [unknown function] (defined at: ./index.rsh:172:33:function exp)'],
      msg: 'getVote',
      who: 'Veteran'
      });
    
    
    const txn12 = await (ctc.sendrecv(13, 1, stdlib.checkedBigNumberify('./index.rsh:175:25:dot', stdlib.UInt_max, 12), [ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc6, ctc1, ctc1, ctc1, ctc1], [v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v225, v235, v238, v243], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1], true, true, false, (async (txn12) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:175:25:dot', stdlib.UInt_max, 12), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v225, v235, v238]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:175:25:dot', stdlib.UInt_max, 12), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v225, v235]);
      const [v245] = txn12.data;
      const v248 = txn12.time;
      const v244 = txn12.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v247 = stdlib.addressEq(v45, v244);
      stdlib.assert(v247, {
        at: './index.rsh:175:25:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Veteran'
        });
      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:176:25:after expr stmt semicolon', stdlib.UInt_max, 13), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v225, v235, v245, v248]);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:176:25:after expr stmt semicolon', stdlib.UInt_max, 13), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v225, v235, v245]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:176:25:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [v245] = txn12.data;
    const v248 = txn12.time;
    const v244 = txn12.from;
    ;
    const v247 = stdlib.addressEq(v45, v244);
    stdlib.assert(v247, {
      at: './index.rsh:175:25:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Veteran'
      });
    const txn13 = await (ctc.recv(14, 1, [ctc1], false, false));
    const [v255] = txn13.data;
    const v258 = txn13.time;
    const v254 = txn13.from;
    ;
    const v257 = stdlib.addressEq(v54, v254);
    stdlib.assert(v257, {
      at: './index.rsh:181:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Veteran'
      });
    const v275 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v277 = v275 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v281 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v283 = stdlib.add(v277, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v284 = v281 ? v283 : v277;
    const v288 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v290 = stdlib.add(v284, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v291 = v288 ? v290 : v284;
    const v295 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v297 = stdlib.add(v291, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v298 = v295 ? v297 : v291;
    const v318 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v320 = v318 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v324 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v326 = stdlib.add(v320, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v327 = v324 ? v326 : v320;
    const v331 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v333 = stdlib.add(v327, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v334 = v331 ? v333 : v327;
    const v338 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v340 = stdlib.add(v334, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v341 = v338 ? v340 : v334;
    const v361 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v363 = v361 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v367 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v369 = stdlib.add(v363, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v370 = v367 ? v369 : v363;
    const v374 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v376 = stdlib.add(v370, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v377 = v374 ? v376 : v370;
    const v381 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v383 = stdlib.add(v377, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v384 = v381 ? v383 : v377;
    const v404 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v406 = v404 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v410 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v412 = stdlib.add(v406, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v413 = v410 ? v412 : v406;
    const v417 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v419 = stdlib.add(v413, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v420 = v417 ? v419 : v413;
    const v424 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v426 = stdlib.add(v420, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v427 = v424 ? v426 : v420;
    const v439 = ['None', null];
    const v675 = stdlib.gt(v298, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0));
    const v677 = v675 ? v298 : stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0);
    const v681 = stdlib.gt(v341, v677);
    const v683 = v681 ? v341 : v677;
    const v687 = stdlib.gt(v384, v683);
    const v689 = v687 ? v384 : v683;
    const v693 = stdlib.gt(v427, v689);
    const v695 = v693 ? v427 : v689;
    const v700 = stdlib.eq(v695, v298);
    const v719 = v63 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v724 = stdlib.add(v719, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v725 = v62 ? v724 : v719;
    const v730 = stdlib.add(v725, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v731 = v65 ? v730 : v725;
    const v736 = stdlib.add(v731, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v737 = v66 ? v736 : v731;
    const v741 = stdlib.div(v737, stdlib.checkedBigNumberify('./index.rsh:190:50:decimal', stdlib.UInt_max, 2));
    const v743 = stdlib.gt(v298, v741);
    const v744 = v700 ? v743 : false;
    const v748 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
    const v749 = [v748, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
    const v751 = [v439, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
    const v752 = v744 ? v749 : v751;
    const v757 = v752[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v758 = v752[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v759;
    switch (v757[0]) {
      case 'None': {
        
        const v804 = stdlib.eq(v695, v341);
        const v847 = stdlib.gt(v341, v741);
        const v848 = v804 ? v847 : false;
        const v852 = stdlib.add(v758, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v853 = ['Some', v758];
        const v854 = [v853, v758];
        const v855 = [v757, v852];
        const v856 = v848 ? v854 : v855;
        v759 = v856;
        
        break;
        }
      case 'Some': {
        const v859 = v757[1];
        v759 = v752;
        
        break;
        }
      }
    const v865 = v759[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v866 = v759[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v867;
    switch (v865[0]) {
      case 'None': {
        
        const v912 = stdlib.eq(v695, v384);
        const v955 = stdlib.gt(v384, v741);
        const v956 = v912 ? v955 : false;
        const v960 = stdlib.add(v866, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v961 = ['Some', v866];
        const v962 = [v961, v866];
        const v963 = [v865, v960];
        const v964 = v956 ? v962 : v963;
        v867 = v964;
        
        break;
        }
      case 'Some': {
        const v967 = v865[1];
        v867 = v759;
        
        break;
        }
      }
    const v973 = v867[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v974 = v867[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v975;
    switch (v973[0]) {
      case 'None': {
        
        const v1020 = stdlib.eq(v695, v427);
        const v1063 = stdlib.gt(v427, v741);
        const v1064 = v1020 ? v1063 : false;
        const v1068 = stdlib.add(v974, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v1069 = ['Some', v974];
        const v1070 = [v1069, v974];
        const v1071 = [v973, v1068];
        const v1072 = v1064 ? v1070 : v1071;
        v975 = v1072;
        
        break;
        }
      case 'Some': {
        const v1075 = v973[1];
        v975 = v867;
        
        break;
        }
      }
    const v1080 = v975[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
    let v1086;
    switch (v1080[0]) {
      case 'None': {
        
        v1086 = false;
        
        break;
        }
      case 'Some': {
        const v1090 = v1080[1];
        v1086 = true;
        
        break;
        }
      }
    if (v1086) {
      let v1096;
      switch (v1080[0]) {
        case 'None': {
          
          v1096 = stdlib.checkedBigNumberify('./index.rsh:201:70:decimal', stdlib.UInt_max, 5);
          
          break;
          }
        case 'Some': {
          const v1100 = v1080[1];
          v1096 = v1100;
          
          break;
          }
        }
      const v1106 = stdlib.Array_set(v196, v1096, false);
      const v1107 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 0)];
      const v1108 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 1)];
      const v1109 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 2)];
      const v1110 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 3)];
      const cv62 = v1108;
      const cv63 = v1107;
      const cv64 = v130;
      const cv65 = v1109;
      const cv66 = v1110;
      const cv1117 = v258;
      
      v62 = cv62;
      v63 = cv63;
      v64 = cv64;
      v65 = cv65;
      v66 = cv66;
      v1117 = cv1117;
      
      continue;}
    else {
      const v1111 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 0)];
      const v1112 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 1)];
      const v1113 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 2)];
      const v1114 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 3)];
      const cv62 = v1112;
      const cv63 = v1111;
      const cv64 = v130;
      const cv65 = v1113;
      const cv66 = v1114;
      const cv1117 = v258;
      
      v62 = cv62;
      v63 = cv63;
      v64 = cv64;
      v65 = cv65;
      v66 = cv66;
      v1117 = cv1117;
      
      continue;}
    
    
    
    
    
    
    
    }
  return;
  
  
  
  
  
  };
export async function Villager(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4));
  const ctc10 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc9, ctc1, ctc1, ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc9, ctc1, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc9, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc9]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc1, ctc9]);
  
  
  const v19 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v24] = txn1.data;
  const v26 = txn1.time;
  const v23 = txn1.from;
  ;
  const v27 = v24;
  const txn2 = await (ctc.recv(2, 1, [ctc0], false, false));
  const [v32] = txn2.data;
  const v35 = txn2.time;
  const v31 = txn2.from;
  ;
  const v34 = stdlib.addressEq(v23, v31);
  stdlib.assert(v34, {
    at: './index.rsh:73:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Villager'
    });
  const v36 = v32;
  const txn3 = await (ctc.recv(3, 1, [ctc0], false, false));
  const [v41] = txn3.data;
  const v44 = txn3.time;
  const v40 = txn3.from;
  ;
  const v43 = stdlib.addressEq(v23, v40);
  stdlib.assert(v43, {
    at: './index.rsh:79:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Villager'
    });
  const v45 = v41;
  const txn4 = await (ctc.recv(4, 1, [ctc0], false, false));
  const [v50] = txn4.data;
  const v53 = txn4.time;
  const v49 = txn4.from;
  ;
  const v52 = stdlib.addressEq(v23, v49);
  stdlib.assert(v52, {
    at: './index.rsh:85:20:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Villager'
    });
  const v54 = ctc.iam(v50);
  const txn5 = await (ctc.recv(5, 1, [ctc1], false, false));
  const [v59] = txn5.data;
  const v61 = txn5.time;
  const v58 = txn5.from;
  ;
  let v62 = true;
  let v63 = true;
  let v64 = false;
  let v65 = true;
  let v66 = true;
  let v1117 = v61;
  
  while ((() => {
    const v72 = v63 ? true : v62;
    const v73 = v72 ? true : v65;
    const v74 = v73 ? true : v66;
    
    return v74;})()) {
    const txn6 = await (ctc.recv(7, 1, [ctc3], false, false));
    const [v94] = txn6.data;
    const v97 = txn6.time;
    const v93 = txn6.from;
    ;
    const v96 = stdlib.addressEq(v27, v93);
    stdlib.assert(v96, {
      at: './index.rsh:108:23:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Villager'
      });
    const txn7 = await (ctc.recv(8, 1, [ctc3], false, false));
    const [v116] = txn7.data;
    const v119 = txn7.time;
    const v115 = txn7.from;
    ;
    const v118 = stdlib.addressEq(v36, v115);
    stdlib.assert(v118, {
      at: './index.rsh:118:24:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Villager'
      });
    const txn8 = await (ctc.recv(9, 1, [ctc4], false, false));
    const [v130] = txn8.data;
    const v133 = txn8.time;
    const v129 = txn8.from;
    ;
    const v132 = stdlib.addressEq(v45, v129);
    stdlib.assert(v132, {
      at: './index.rsh:125:25:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Villager'
      });
    let v135;
    switch (v94[0]) {
      case 'None': {
        
        v135 = false;
        
        break;
        }
      case 'Some': {
        const v139 = v94[1];
        v135 = true;
        
        break;
        }
      }
    let v145;
    switch (v116[0]) {
      case 'None': {
        
        v145 = false;
        
        break;
        }
      case 'Some': {
        const v149 = v116[1];
        v145 = true;
        
        break;
        }
      }
    let v156;
    switch (v94[0]) {
      case 'None': {
        
        v156 = stdlib.checkedBigNumberify('./index.rsh:132:48:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v160 = v94[1];
        v156 = v160;
        
        break;
        }
      }
    let v168;
    switch (v116[0]) {
      case 'None': {
        
        v168 = stdlib.checkedBigNumberify('./index.rsh:133:52:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v172 = v116[1];
        v168 = v172;
        
        break;
        }
      }
    const v178 = stdlib.lt(v156, stdlib.checkedBigNumberify('./index.rsh:136:34:decimal', stdlib.UInt_max, 4));
    stdlib.assert(v178, {
      at: './index.rsh:136:24:application',
      fs: [],
      msg: null,
      who: 'Villager'
      });
    const v179 = stdlib.lt(v168, stdlib.checkedBigNumberify('./index.rsh:137:36:decimal', stdlib.UInt_max, 4));
    stdlib.assert(v179, {
      at: './index.rsh:137:24:application',
      fs: [],
      msg: null,
      who: 'Villager'
      });
    const v180 = v130 ? v135 : false;
    const v181 = stdlib.eq(v156, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 2));
    const v182 = v180 ? v181 : false;
    const v186 = stdlib.eq(v156, v168);
    const v187 = v145 ? v186 : false;
    const v188 = [v63, v62, v65, v66];
    const v190 = stdlib.Array_set(v188, v156, false);
    const v192 = v187 ? v188 : v190;
    const v194 = v135 ? v192 : v188;
    const v195 = [false, v62, v65, v66];
    const v196 = v182 ? v195 : v194;
    stdlib.protect(ctc2, await interact.SeeResults(v196), {
      at: './index.rsh:153:40:application',
      fs: ['at ./index.rsh:152:21:application call to [unknown function] (defined at: ./index.rsh:152:61:function exp)'],
      msg: 'SeeResults',
      who: 'Villager'
      });
    
    
    const txn9 = await (ctc.sendrecv(10, 0, stdlib.checkedBigNumberify('./index.rsh:155:56:dot', stdlib.UInt_max, 9), [ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc1, ctc9], [v27, v36, v45, v54, v62, v63, v65, v66, v130, v133, v196], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn9) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:155:56:dot', stdlib.UInt_max, 9), v27, v36, v45, v54, v62, v63, v65, v66, v130, v133, v196]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:155:56:dot', stdlib.UInt_max, 9), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196]);
      const [] = txn9.data;
      const v218 = txn9.time;
      const v209 = txn9.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v211 = stdlib.addressEq(v36, v209);
      const v212 = stdlib.addressEq(v27, v209);
      const v213 = v211 ? true : v212;
      const v214 = stdlib.addressEq(v45, v209);
      const v215 = v213 ? true : v214;
      const v216 = stdlib.addressEq(v54, v209);
      const v217 = v215 ? true : v216;
      stdlib.assert(v217, {
        at: './index.rsh:155:56:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Villager'
        });
      sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:156:25:after expr stmt semicolon', stdlib.UInt_max, 10), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v218]);
      sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:156:25:after expr stmt semicolon', stdlib.UInt_max, 10), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:156:25:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [] = txn9.data;
    const v218 = txn9.time;
    const v209 = txn9.from;
    ;
    const v211 = stdlib.addressEq(v36, v209);
    const v212 = stdlib.addressEq(v27, v209);
    const v213 = v211 ? true : v212;
    const v214 = stdlib.addressEq(v45, v209);
    const v215 = v213 ? true : v214;
    const v216 = stdlib.addressEq(v54, v209);
    const v217 = v215 ? true : v216;
    stdlib.assert(v217, {
      at: './index.rsh:155:56:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Villager'
      });
    const txn10 = await (ctc.recv(11, 1, [ctc1], false, false));
    const [v225] = txn10.data;
    const v228 = txn10.time;
    const v224 = txn10.from;
    ;
    const v227 = stdlib.addressEq(v27, v224);
    stdlib.assert(v227, {
      at: './index.rsh:163:23:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Villager'
      });
    const txn11 = await (ctc.recv(12, 1, [ctc1], false, false));
    const [v235] = txn11.data;
    const v238 = txn11.time;
    const v234 = txn11.from;
    ;
    const v237 = stdlib.addressEq(v36, v234);
    stdlib.assert(v237, {
      at: './index.rsh:169:24:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Villager'
      });
    const txn12 = await (ctc.recv(13, 1, [ctc1], false, false));
    const [v245] = txn12.data;
    const v248 = txn12.time;
    const v244 = txn12.from;
    ;
    const v247 = stdlib.addressEq(v45, v244);
    stdlib.assert(v247, {
      at: './index.rsh:175:25:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Villager'
      });
    const v252 = [v63, v62, v65, v66];
    const v253 = stdlib.protect(ctc1, await interact.getVote(v252), {
      at: './index.rsh:179:69:application',
      fs: ['at ./index.rsh:178:30:application call to [unknown function] (defined at: ./index.rsh:178:34:function exp)'],
      msg: 'getVote',
      who: 'Villager'
      });
    
    
    const txn13 = await (ctc.sendrecv(14, 1, stdlib.checkedBigNumberify('./index.rsh:181:26:dot', stdlib.UInt_max, 13), [ctc0, ctc0, ctc0, ctc0, ctc4, ctc4, ctc4, ctc4, ctc4, ctc9, ctc1, ctc1, ctc1, ctc1, ctc1], [v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v225, v235, v245, v248, v253], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1], true, true, false, (async (txn13) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:181:26:dot', stdlib.UInt_max, 13), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v225, v235, v245, v248]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:181:26:dot', stdlib.UInt_max, 13), v27, v36, v45, v54, v62, v63, v65, v66, v130, v196, v225, v235, v245]);
      const [v255] = txn13.data;
      const v258 = txn13.time;
      const v254 = txn13.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v257 = stdlib.addressEq(v54, v254);
      stdlib.assert(v257, {
        at: './index.rsh:181:26:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Villager'
        });
      const v275 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
      const v277 = v275 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
      const v281 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
      const v283 = stdlib.add(v277, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
      const v284 = v281 ? v283 : v277;
      const v288 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
      const v290 = stdlib.add(v284, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
      const v291 = v288 ? v290 : v284;
      const v295 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
      const v297 = stdlib.add(v291, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
      const v298 = v295 ? v297 : v291;
      const v318 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
      const v320 = v318 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
      const v324 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
      const v326 = stdlib.add(v320, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
      const v327 = v324 ? v326 : v320;
      const v331 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
      const v333 = stdlib.add(v327, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
      const v334 = v331 ? v333 : v327;
      const v338 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
      const v340 = stdlib.add(v334, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
      const v341 = v338 ? v340 : v334;
      const v361 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
      const v363 = v361 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
      const v367 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
      const v369 = stdlib.add(v363, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
      const v370 = v367 ? v369 : v363;
      const v374 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
      const v376 = stdlib.add(v370, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
      const v377 = v374 ? v376 : v370;
      const v381 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
      const v383 = stdlib.add(v377, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
      const v384 = v381 ? v383 : v377;
      const v404 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
      const v406 = v404 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
      const v410 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
      const v412 = stdlib.add(v406, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
      const v413 = v410 ? v412 : v406;
      const v417 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
      const v419 = stdlib.add(v413, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
      const v420 = v417 ? v419 : v413;
      const v424 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
      const v426 = stdlib.add(v420, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
      const v427 = v424 ? v426 : v420;
      const v439 = ['None', null];
      const v675 = stdlib.gt(v298, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0));
      const v677 = v675 ? v298 : stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0);
      const v681 = stdlib.gt(v341, v677);
      const v683 = v681 ? v341 : v677;
      const v687 = stdlib.gt(v384, v683);
      const v689 = v687 ? v384 : v683;
      const v693 = stdlib.gt(v427, v689);
      const v695 = v693 ? v427 : v689;
      const v700 = stdlib.eq(v695, v298);
      const v719 = v63 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
      const v724 = stdlib.add(v719, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
      const v725 = v62 ? v724 : v719;
      const v730 = stdlib.add(v725, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
      const v731 = v65 ? v730 : v725;
      const v736 = stdlib.add(v731, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
      const v737 = v66 ? v736 : v731;
      const v741 = stdlib.div(v737, stdlib.checkedBigNumberify('./index.rsh:190:50:decimal', stdlib.UInt_max, 2));
      const v743 = stdlib.gt(v298, v741);
      const v744 = v700 ? v743 : false;
      const v748 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
      const v749 = [v748, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
      const v751 = [v439, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
      const v752 = v744 ? v749 : v751;
      const v757 = v752[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
      const v758 = v752[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
      let v759;
      switch (v757[0]) {
        case 'None': {
          
          const v804 = stdlib.eq(v695, v341);
          const v847 = stdlib.gt(v341, v741);
          const v848 = v804 ? v847 : false;
          const v852 = stdlib.add(v758, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
          const v853 = ['Some', v758];
          const v854 = [v853, v758];
          const v855 = [v757, v852];
          const v856 = v848 ? v854 : v855;
          v759 = v856;
          
          break;
          }
        case 'Some': {
          const v859 = v757[1];
          v759 = v752;
          
          break;
          }
        }
      const v865 = v759[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
      const v866 = v759[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
      let v867;
      switch (v865[0]) {
        case 'None': {
          
          const v912 = stdlib.eq(v695, v384);
          const v955 = stdlib.gt(v384, v741);
          const v956 = v912 ? v955 : false;
          const v960 = stdlib.add(v866, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
          const v961 = ['Some', v866];
          const v962 = [v961, v866];
          const v963 = [v865, v960];
          const v964 = v956 ? v962 : v963;
          v867 = v964;
          
          break;
          }
        case 'Some': {
          const v967 = v865[1];
          v867 = v759;
          
          break;
          }
        }
      const v973 = v867[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
      const v974 = v867[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
      let v975;
      switch (v973[0]) {
        case 'None': {
          
          const v1020 = stdlib.eq(v695, v427);
          const v1063 = stdlib.gt(v427, v741);
          const v1064 = v1020 ? v1063 : false;
          const v1068 = stdlib.add(v974, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
          const v1069 = ['Some', v974];
          const v1070 = [v1069, v974];
          const v1071 = [v973, v1068];
          const v1072 = v1064 ? v1070 : v1071;
          v975 = v1072;
          
          break;
          }
        case 'Some': {
          const v1075 = v973[1];
          v975 = v867;
          
          break;
          }
        }
      const v1080 = v975[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
      let v1086;
      switch (v1080[0]) {
        case 'None': {
          
          v1086 = false;
          
          break;
          }
        case 'Some': {
          const v1090 = v1080[1];
          v1086 = true;
          
          break;
          }
        }
      if (v1086) {
        let v1096;
        switch (v1080[0]) {
          case 'None': {
            
            v1096 = stdlib.checkedBigNumberify('./index.rsh:201:70:decimal', stdlib.UInt_max, 5);
            
            break;
            }
          case 'Some': {
            const v1100 = v1080[1];
            v1096 = v1100;
            
            break;
            }
          }
        const v1106 = stdlib.Array_set(v196, v1096, false);
        const v1107 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 0)];
        const v1108 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 1)];
        const v1109 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 2)];
        const v1110 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 3)];
        const cv62 = v1108;
        const cv63 = v1107;
        const cv64 = v130;
        const cv65 = v1109;
        const cv66 = v1110;
        const cv1117 = v258;
        
        (() => {
          const v62 = cv62;
          const v63 = cv63;
          const v64 = cv64;
          const v65 = cv65;
          const v66 = cv66;
          const v1117 = cv1117;
          
          if ((() => {
            const v72 = v63 ? true : v62;
            const v73 = v72 ? true : v65;
            const v74 = v73 ? true : v66;
            
            return v74;})()) {
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:98:25:after expr stmt semicolon', stdlib.UInt_max, 6), v27, v36, v45, v54, v62, v63, v65, v66, v1117]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:98:25:after expr stmt semicolon', stdlib.UInt_max, 6), v27, v36, v45, v54, v62, v63, v65, v66]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:98:25:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.view = [ctc8, []];
            sim_r.isHalt = true;
            }})();}
      else {
        const v1111 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 0)];
        const v1112 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 1)];
        const v1113 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 2)];
        const v1114 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 3)];
        const cv62 = v1112;
        const cv63 = v1111;
        const cv64 = v130;
        const cv65 = v1113;
        const cv66 = v1114;
        const cv1117 = v258;
        
        (() => {
          const v62 = cv62;
          const v63 = cv63;
          const v64 = cv64;
          const v65 = cv65;
          const v66 = cv66;
          const v1117 = cv1117;
          
          if ((() => {
            const v72 = v63 ? true : v62;
            const v73 = v72 ? true : v65;
            const v74 = v73 ? true : v66;
            
            return v74;})()) {
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:98:25:after expr stmt semicolon', stdlib.UInt_max, 6), v27, v36, v45, v54, v62, v63, v65, v66, v1117]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:98:25:after expr stmt semicolon', stdlib.UInt_max, 6), v27, v36, v45, v54, v62, v63, v65, v66]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:98:25:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.view = [ctc8, []];
            sim_r.isHalt = true;
            }})();}
      return sim_r;
      })));
    const [v255] = txn13.data;
    const v258 = txn13.time;
    const v254 = txn13.from;
    ;
    const v257 = stdlib.addressEq(v54, v254);
    stdlib.assert(v257, {
      at: './index.rsh:181:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Villager'
      });
    const v275 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v277 = v275 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v281 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v283 = stdlib.add(v277, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v284 = v281 ? v283 : v277;
    const v288 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v290 = stdlib.add(v284, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v291 = v288 ? v290 : v284;
    const v295 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:69:decimal', stdlib.UInt_max, 0));
    const v297 = stdlib.add(v291, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v298 = v295 ? v297 : v291;
    const v318 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v320 = v318 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v324 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v326 = stdlib.add(v320, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v327 = v324 ? v326 : v320;
    const v331 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v333 = stdlib.add(v327, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v334 = v331 ? v333 : v327;
    const v338 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:105:decimal', stdlib.UInt_max, 1));
    const v340 = stdlib.add(v334, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v341 = v338 ? v340 : v334;
    const v361 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v363 = v361 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v367 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v369 = stdlib.add(v363, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v370 = v367 ? v369 : v363;
    const v374 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v376 = stdlib.add(v370, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v377 = v374 ? v376 : v370;
    const v381 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:141:decimal', stdlib.UInt_max, 2));
    const v383 = stdlib.add(v377, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v384 = v381 ? v383 : v377;
    const v404 = stdlib.eq(v225, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v406 = v404 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v410 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v412 = stdlib.add(v406, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v413 = v410 ? v412 : v406;
    const v417 = stdlib.eq(v245, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v419 = stdlib.add(v413, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v420 = v417 ? v419 : v413;
    const v424 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:185:177:decimal', stdlib.UInt_max, 3));
    const v426 = stdlib.add(v420, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v427 = v424 ? v426 : v420;
    const v439 = ['None', null];
    const v675 = stdlib.gt(v298, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0));
    const v677 = v675 ? v298 : stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0);
    const v681 = stdlib.gt(v341, v677);
    const v683 = v681 ? v341 : v677;
    const v687 = stdlib.gt(v384, v683);
    const v689 = v687 ? v384 : v683;
    const v693 = stdlib.gt(v427, v689);
    const v695 = v693 ? v427 : v689;
    const v700 = stdlib.eq(v695, v298);
    const v719 = v63 ? stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('reach standard library:182:22:decimal', stdlib.UInt_max, 0);
    const v724 = stdlib.add(v719, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v725 = v62 ? v724 : v719;
    const v730 = stdlib.add(v725, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v731 = v65 ? v730 : v725;
    const v736 = stdlib.add(v731, stdlib.checkedBigNumberify('reach standard library:183:18:decimal', stdlib.UInt_max, 1));
    const v737 = v66 ? v736 : v731;
    const v741 = stdlib.div(v737, stdlib.checkedBigNumberify('./index.rsh:190:50:decimal', stdlib.UInt_max, 2));
    const v743 = stdlib.gt(v298, v741);
    const v744 = v700 ? v743 : false;
    const v748 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
    const v749 = [v748, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
    const v751 = [v439, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
    const v752 = v744 ? v749 : v751;
    const v757 = v752[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v758 = v752[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v759;
    switch (v757[0]) {
      case 'None': {
        
        const v804 = stdlib.eq(v695, v341);
        const v847 = stdlib.gt(v341, v741);
        const v848 = v804 ? v847 : false;
        const v852 = stdlib.add(v758, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v853 = ['Some', v758];
        const v854 = [v853, v758];
        const v855 = [v757, v852];
        const v856 = v848 ? v854 : v855;
        v759 = v856;
        
        break;
        }
      case 'Some': {
        const v859 = v757[1];
        v759 = v752;
        
        break;
        }
      }
    const v865 = v759[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v866 = v759[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v867;
    switch (v865[0]) {
      case 'None': {
        
        const v912 = stdlib.eq(v695, v384);
        const v955 = stdlib.gt(v384, v741);
        const v956 = v912 ? v955 : false;
        const v960 = stdlib.add(v866, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v961 = ['Some', v866];
        const v962 = [v961, v866];
        const v963 = [v865, v960];
        const v964 = v956 ? v962 : v963;
        v867 = v964;
        
        break;
        }
      case 'Some': {
        const v967 = v865[1];
        v867 = v759;
        
        break;
        }
      }
    const v973 = v867[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v974 = v867[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v975;
    switch (v973[0]) {
      case 'None': {
        
        const v1020 = stdlib.eq(v695, v427);
        const v1063 = stdlib.gt(v427, v741);
        const v1064 = v1020 ? v1063 : false;
        const v1068 = stdlib.add(v974, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v1069 = ['Some', v974];
        const v1070 = [v1069, v974];
        const v1071 = [v973, v1068];
        const v1072 = v1064 ? v1070 : v1071;
        v975 = v1072;
        
        break;
        }
      case 'Some': {
        const v1075 = v973[1];
        v975 = v867;
        
        break;
        }
      }
    const v1080 = v975[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
    let v1086;
    switch (v1080[0]) {
      case 'None': {
        
        v1086 = false;
        
        break;
        }
      case 'Some': {
        const v1090 = v1080[1];
        v1086 = true;
        
        break;
        }
      }
    if (v1086) {
      let v1096;
      switch (v1080[0]) {
        case 'None': {
          
          v1096 = stdlib.checkedBigNumberify('./index.rsh:201:70:decimal', stdlib.UInt_max, 5);
          
          break;
          }
        case 'Some': {
          const v1100 = v1080[1];
          v1096 = v1100;
          
          break;
          }
        }
      const v1106 = stdlib.Array_set(v196, v1096, false);
      const v1107 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 0)];
      const v1108 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 1)];
      const v1109 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 2)];
      const v1110 = v1106[stdlib.checkedBigNumberify('./index.rsh:202:91:spread', stdlib.UInt_max, 3)];
      const cv62 = v1108;
      const cv63 = v1107;
      const cv64 = v130;
      const cv65 = v1109;
      const cv66 = v1110;
      const cv1117 = v258;
      
      v62 = cv62;
      v63 = cv63;
      v64 = cv64;
      v65 = cv65;
      v66 = cv66;
      v1117 = cv1117;
      
      continue;}
    else {
      const v1111 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 0)];
      const v1112 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 1)];
      const v1113 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 2)];
      const v1114 = v196[stdlib.checkedBigNumberify('./index.rsh:206:87:spread', stdlib.UInt_max, 3)];
      const cv62 = v1112;
      const cv63 = v1111;
      const cv64 = v130;
      const cv65 = v1113;
      const cv66 = v1114;
      const cv1117 = v258;
      
      v62 = cv62;
      v63 = cv63;
      v64 = cv64;
      v65 = cv65;
      v66 = cv66;
      v1117 = cv1117;
      
      continue;}
    
    
    
    
    
    
    
    }
  return;
  
  
  
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
gtxn 2 Sender
byte "{{m8}}"
==
||
gtxn 2 Sender
byte "{{m9}}"
==
||
gtxn 2 Sender
byte "{{m10}}"
==
||
gtxn 2 Sender
byte "{{m11}}"
==
||
gtxn 2 Sender
byte "{{m12}}"
==
||
gtxn 2 Sender
byte "{{m13}}"
==
||
gtxn 2 Sender
byte "{{m14}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  stepargs: [null, {
    count: 7,
    size: 113
    }, {
    count: 9,
    size: 177
    }, {
    count: 10,
    size: 209
    }, {
    count: 11,
    size: 241
    }, {
    count: 11,
    size: 217
    }, null, {
    count: 15,
    size: 222
    }, {
    count: 16,
    size: 231
    }, {
    count: 17,
    size: 232
    }, {
    count: 16,
    size: 218
    }, {
    count: 17,
    size: 226
    }, {
    count: 18,
    size: 234
    }, {
    count: 19,
    size: 242
    }, {
    count: 20,
    size: 250
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 7
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:67:20:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 255
store 254
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
load 254
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
store 253
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
concat
load 254
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:73:20:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:73:20:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
load 253
store 252
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
load 254
concat
load 252
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 10
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
concat
load 254
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:79:20:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:79:20:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
load 252
store 251
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
concat
load 254
concat
load 253
concat
load 251
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
store 251
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 3
int 3
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:85:20:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:85:20:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
load 251
store 250
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 4
int 4
itob
load 254
concat
load 253
concat
load 252
concat
load 250
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:92:19:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
int 1
itob // bool
substring 7 8
concat
int 1
itob // bool
substring 7 8
concat
int 1
itob // bool
substring 7 8
concat
int 1
itob // bool
substring 7 8
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, null, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
gtxna 0 ApplicationArgs 14
store 247
// Handler 7
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 15
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 251
itob // bool
substring 7 8
concat
load 250
itob // bool
substring 7 8
concat
load 249
itob // bool
substring 7 8
concat
load 248
itob // bool
substring 7 8
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:108:23:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:108:23:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 7
int 7
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 251
itob // bool
substring 7 8
concat
load 250
itob // bool
substring 7 8
concat
load 249
itob // bool
substring 7 8
concat
load 248
itob // bool
substring 7 8
concat
load 247
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
gtxna 0 ApplicationArgs 14
store 247
gtxna 0 ApplicationArgs 15
store 246
// Handler 8
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 16
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 7
int 7
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 251
itob // bool
substring 7 8
concat
load 250
itob // bool
substring 7 8
concat
load 249
itob // bool
substring 7 8
concat
load 248
itob // bool
substring 7 8
concat
load 247
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:118:24:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:118:24:dot"
// "[]"
load 254
gtxn 0 Sender
==
assert
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 8
int 8
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 251
itob // bool
substring 7 8
concat
load 250
itob // bool
substring 7 8
concat
load 249
itob // bool
substring 7 8
concat
load 248
itob // bool
substring 7 8
concat
load 247
concat
load 246
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
gtxna 0 ApplicationArgs 14
store 247
gtxna 0 ApplicationArgs 15
store 246
gtxna 0 ApplicationArgs 16
btoi
store 245
// Handler 9
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 17
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 8
int 8
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 251
itob // bool
substring 7 8
concat
load 250
itob // bool
substring 7 8
concat
load 249
itob // bool
substring 7 8
concat
load 248
itob // bool
substring 7 8
concat
load 247
concat
load 246
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:125:25:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:125:25:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
load 247
int 0
getbyte
int 0
==
bz l1
int 0
store 240
l1:
load 247
int 0
getbyte
int 1
==
bz l2
load 247
substring 1 9
btoi
store 239
int 1
store 240
l2:
l0:
load 246
int 0
getbyte
int 0
==
bz l4
int 0
store 239
l4:
load 246
int 0
getbyte
int 1
==
bz l5
load 246
substring 1 9
btoi
store 238
int 1
store 239
l5:
l3:
load 247
int 0
getbyte
int 0
==
bz l7
int 0
store 238
l7:
load 247
int 0
getbyte
int 1
==
bz l8
load 247
substring 1 9
btoi
dup
store 237
store 238
l8:
l6:
load 246
int 0
getbyte
int 0
==
bz l10
int 0
store 237
l10:
load 246
int 0
getbyte
int 1
==
bz l11
load 246
substring 1 9
btoi
dup
store 236
store 237
l11:
l9:
// Nothing
// "./index.rsh:136:24:application"
// "[]"
load 238
int 4
<
assert
// Nothing
// "./index.rsh:137:24:application"
// "[]"
load 237
int 4
<
assert
load 250
itob // bool
substring 7 8
load 251
itob // bool
substring 7 8
concat
load 249
itob // bool
substring 7 8
concat
load 248
itob // bool
substring 7 8
concat
dup
dup
store 236
load 238
int 0
setbyte
load 236
load 239
load 238
load 237
==
&&
select
load 240
select
byte base64(AA==)
load 245
load 240
&&
load 238
int 2
==
&&
select
store 235
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 9
int 9
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 251
itob // bool
substring 7 8
concat
load 250
itob // bool
substring 7 8
concat
load 249
itob // bool
substring 7 8
concat
load 248
itob // bool
substring 7 8
concat
load 245
itob // bool
substring 7 8
concat
load 235
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
gtxna 0 ApplicationArgs 14
btoi
store 247
gtxna 0 ApplicationArgs 15
store 246
// Handler 10
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 16
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 9
int 9
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 251
itob // bool
substring 7 8
concat
load 250
itob // bool
substring 7 8
concat
load 249
itob // bool
substring 7 8
concat
load 248
itob // bool
substring 7 8
concat
load 247
itob // bool
substring 7 8
concat
load 246
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:155:56:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:155:56:dot"
// "[]"
load 254
gtxn 0 Sender
==
load 255
gtxn 0 Sender
==
||
load 253
gtxn 0 Sender
==
||
load 252
gtxn 0 Sender
==
||
assert
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 10
int 10
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 251
itob // bool
substring 7 8
concat
load 250
itob // bool
substring 7 8
concat
load 249
itob // bool
substring 7 8
concat
load 248
itob // bool
substring 7 8
concat
load 247
itob // bool
substring 7 8
concat
load 246
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
gtxna 0 ApplicationArgs 14
btoi
store 247
gtxna 0 ApplicationArgs 15
store 246
gtxna 0 ApplicationArgs 16
btoi
store 245
// Handler 11
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 17
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 10
int 10
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 251
itob // bool
substring 7 8
concat
load 250
itob // bool
substring 7 8
concat
load 249
itob // bool
substring 7 8
concat
load 248
itob // bool
substring 7 8
concat
load 247
itob // bool
substring 7 8
concat
load 246
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:163:23:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:163:23:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 11
int 11
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 251
itob // bool
substring 7 8
concat
load 250
itob // bool
substring 7 8
concat
load 249
itob // bool
substring 7 8
concat
load 248
itob // bool
substring 7 8
concat
load 247
itob // bool
substring 7 8
concat
load 246
concat
load 245
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
gtxna 0 ApplicationArgs 14
btoi
store 247
gtxna 0 ApplicationArgs 15
store 246
gtxna 0 ApplicationArgs 16
btoi
store 245
gtxna 0 ApplicationArgs 17
btoi
store 244
// Handler 12
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 18
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 11
int 11
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 251
itob // bool
substring 7 8
concat
load 250
itob // bool
substring 7 8
concat
load 249
itob // bool
substring 7 8
concat
load 248
itob // bool
substring 7 8
concat
load 247
itob // bool
substring 7 8
concat
load 246
concat
load 245
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:169:24:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:169:24:dot"
// "[]"
load 254
gtxn 0 Sender
==
assert
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 12
int 12
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 251
itob // bool
substring 7 8
concat
load 250
itob // bool
substring 7 8
concat
load 249
itob // bool
substring 7 8
concat
load 248
itob // bool
substring 7 8
concat
load 247
itob // bool
substring 7 8
concat
load 246
concat
load 245
itob
concat
load 244
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
gtxna 0 ApplicationArgs 14
btoi
store 247
gtxna 0 ApplicationArgs 15
store 246
gtxna 0 ApplicationArgs 16
btoi
store 245
gtxna 0 ApplicationArgs 17
btoi
store 244
gtxna 0 ApplicationArgs 18
btoi
store 243
// Handler 13
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 19
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 12
int 12
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 251
itob // bool
substring 7 8
concat
load 250
itob // bool
substring 7 8
concat
load 249
itob // bool
substring 7 8
concat
load 248
itob // bool
substring 7 8
concat
load 247
itob // bool
substring 7 8
concat
load 246
concat
load 245
itob
concat
load 244
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:175:25:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:175:25:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 13
int 13
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 251
itob // bool
substring 7 8
concat
load 250
itob // bool
substring 7 8
concat
load 249
itob // bool
substring 7 8
concat
load 248
itob // bool
substring 7 8
concat
load 247
itob // bool
substring 7 8
concat
load 246
concat
load 245
itob
concat
load 244
itob
concat
load 243
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
gtxna 0 ApplicationArgs 14
btoi
store 247
gtxna 0 ApplicationArgs 15
store 246
gtxna 0 ApplicationArgs 16
btoi
store 245
gtxna 0 ApplicationArgs 17
btoi
store 244
gtxna 0 ApplicationArgs 18
btoi
store 243
gtxna 0 ApplicationArgs 19
btoi
store 242
// Handler 14
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 20
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 13
int 13
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 251
itob // bool
substring 7 8
concat
load 250
itob // bool
substring 7 8
concat
load 249
itob // bool
substring 7 8
concat
load 248
itob // bool
substring 7 8
concat
load 247
itob // bool
substring 7 8
concat
load 246
concat
load 245
itob
concat
load 244
itob
concat
load 243
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:181:26:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:181:26:dot"
// "[]"
load 252
gtxn 0 Sender
==
assert
int 0
int 1
load 245
int 0
==
select
dup
dup
store 236
int 1
+
load 244
int 0
==
select
dup
dup
store 235
int 1
+
load 243
int 0
==
select
dup
dup
store 234
int 1
+
load 242
int 0
==
select
store 233
int 0
int 1
load 245
int 1
==
select
dup
dup
store 232
int 1
+
load 244
int 1
==
select
dup
dup
store 231
int 1
+
load 243
int 1
==
select
dup
dup
store 230
int 1
+
load 242
int 1
==
select
store 229
int 0
int 1
load 245
int 2
==
select
dup
dup
store 228
int 1
+
load 244
int 2
==
select
dup
dup
store 227
int 1
+
load 243
int 2
==
select
dup
dup
store 226
int 1
+
load 242
int 2
==
select
store 225
int 0
int 1
load 245
int 3
==
select
dup
dup
store 224
int 1
+
load 244
int 3
==
select
dup
dup
store 223
int 1
+
load 243
int 3
==
select
dup
dup
store 222
int 1
+
load 242
int 3
==
select
store 221
int 0
load 233
load 233
int 0
>
select
dup
store 220
load 229
load 229
load 220
>
select
dup
store 219
load 225
load 225
load 219
>
select
dup
store 218
load 221
load 221
load 218
>
select
store 217
int 0
int 1
load 250
select
dup
dup
store 216
int 1
+
load 251
select
dup
dup
store 215
int 1
+
load 249
select
dup
dup
store 214
int 1
+
load 248
select
int 2
/
store 213
int 0
byte base64(AAAAAAAAAAA=)
concat
int 1
itob
concat
int 1
int 0
concat
int 0
itob
concat
load 217
load 233
==
load 233
load 213
>
&&
select
dup
store 212
substring 0 9
store 211
load 212
substring 9 17
btoi
store 210
load 211
int 0
getbyte
int 0
==
bz l1
load 211
load 210
int 1
+
itob
concat
int 1
load 210
concat
load 210
itob
concat
load 217
load 229
==
load 229
load 213
>
&&
select
store 209
l1:
load 211
int 0
getbyte
int 1
==
bz l2
load 211
substring 1 9
btoi
store 208
load 212
store 209
l2:
l0:
load 209
substring 0 9
store 208
load 209
substring 9 17
btoi
store 207
load 208
int 0
getbyte
int 0
==
bz l4
load 208
load 207
int 1
+
itob
concat
int 1
load 207
concat
load 207
itob
concat
load 217
load 225
==
load 225
load 213
>
&&
select
store 206
l4:
load 208
int 0
getbyte
int 1
==
bz l5
load 208
substring 1 9
btoi
store 205
load 209
store 206
l5:
l3:
load 206
substring 0 9
store 205
load 206
substring 9 17
btoi
store 204
load 205
int 0
getbyte
int 0
==
bz l7
load 205
load 204
int 1
+
itob
concat
int 1
load 204
concat
load 204
itob
concat
load 217
load 221
==
load 221
load 213
>
&&
select
store 203
l7:
load 205
int 0
getbyte
int 1
==
bz l8
load 205
substring 1 9
btoi
store 202
load 206
store 203
l8:
l6:
load 203
substring 0 9
dup
store 202
int 0
getbyte
int 0
==
bz l10
int 0
store 201
l10:
load 202
int 0
getbyte
int 1
==
bz l11
load 202
substring 1 9
btoi
store 200
int 1
store 201
l11:
l9:
load 201
bz l12
load 202
int 0
getbyte
int 0
==
bz l14
int 5
store 200
l14:
load 202
int 0
getbyte
int 1
==
bz l15
load 202
substring 1 9
btoi
dup
store 199
store 200
l15:
l13:
load 246
load 200
int 0
setbyte
dup
store 199
int 0
getbyte
store 198
load 199
int 1
getbyte
store 197
load 199
int 2
getbyte
store 196
load 199
int 3
getbyte
store 195
load 198
load 197
||
dup
store 194
load 196
||
dup
store 193
load 195
||
dup
store 192
bz l16
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 197
itob // bool
substring 7 8
concat
load 198
itob // bool
substring 7 8
concat
load 196
itob // bool
substring 7 8
concat
load 195
itob // bool
substring 7 8
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
l16:
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
l12:
load 246
int 0
getbyte
store 200
load 246
int 1
getbyte
store 199
load 246
int 2
getbyte
store 198
load 246
int 3
getbyte
store 197
load 200
load 199
||
load 198
||
load 197
||
bz l17
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 199
itob // bool
substring 7 8
concat
load 200
itob // bool
substring 7 8
concat
load 198
itob // bool
substring 7 8
concat
load 197
itob // bool
substring 7 8
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
l17:
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
done:
int 1
return
`],
  unsupported: false,
  viewKeys: 0,
  viewSize: 0
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v62",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v63",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v65",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v130",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v133",
                "type": "uint256"
              },
              {
                "internalType": "bool[4]",
                "name": "v196",
                "type": "bool[4]"
              }
            ],
            "internalType": "struct T27",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T32",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v62",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v63",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v65",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v130",
                "type": "bool"
              },
              {
                "internalType": "bool[4]",
                "name": "v196",
                "type": "bool[4]"
              },
              {
                "internalType": "uint256",
                "name": "v218",
                "type": "uint256"
              }
            ],
            "internalType": "struct T30",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v225",
                "type": "uint256"
              }
            ],
            "internalType": "struct T34",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T35",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v62",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v63",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v65",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v130",
                "type": "bool"
              },
              {
                "internalType": "bool[4]",
                "name": "v196",
                "type": "bool[4]"
              },
              {
                "internalType": "uint256",
                "name": "v225",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v228",
                "type": "uint256"
              }
            ],
            "internalType": "struct T33",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v235",
                "type": "uint256"
              }
            ],
            "internalType": "struct T37",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T38",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v62",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v63",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v65",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v130",
                "type": "bool"
              },
              {
                "internalType": "bool[4]",
                "name": "v196",
                "type": "bool[4]"
              },
              {
                "internalType": "uint256",
                "name": "v225",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v235",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v238",
                "type": "uint256"
              }
            ],
            "internalType": "struct T36",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v245",
                "type": "uint256"
              }
            ],
            "internalType": "struct T40",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T41",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v62",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v63",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v65",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v130",
                "type": "bool"
              },
              {
                "internalType": "bool[4]",
                "name": "v196",
                "type": "bool[4]"
              },
              {
                "internalType": "uint256",
                "name": "v225",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v235",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v245",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v248",
                "type": "uint256"
              }
            ],
            "internalType": "struct T39",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v255",
                "type": "uint256"
              }
            ],
            "internalType": "struct T43",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T44",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v35",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v41",
                "type": "address"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v44",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v50",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v53",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v62",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v63",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v65",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v1117",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_None",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Some",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T19",
                "name": "v94",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v62",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v63",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v65",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              },
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_None",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Some",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T19",
                "name": "v94",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v97",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_None",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Some",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T19",
                "name": "v116",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v62",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v63",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v65",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              },
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_None",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Some",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T19",
                "name": "v94",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_None",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Some",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T19",
                "name": "v116",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v119",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v130",
                "type": "bool"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v62",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v63",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v65",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v130",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v133",
                "type": "uint256"
              },
              {
                "internalType": "bool[4]",
                "name": "v196",
                "type": "bool[4]"
              }
            ],
            "internalType": "struct T27",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T32",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v62",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v63",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v65",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v130",
                "type": "bool"
              },
              {
                "internalType": "bool[4]",
                "name": "v196",
                "type": "bool[4]"
              },
              {
                "internalType": "uint256",
                "name": "v218",
                "type": "uint256"
              }
            ],
            "internalType": "struct T30",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v225",
                "type": "uint256"
              }
            ],
            "internalType": "struct T34",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T35",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v62",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v63",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v65",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v130",
                "type": "bool"
              },
              {
                "internalType": "bool[4]",
                "name": "v196",
                "type": "bool[4]"
              },
              {
                "internalType": "uint256",
                "name": "v225",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v228",
                "type": "uint256"
              }
            ],
            "internalType": "struct T33",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v235",
                "type": "uint256"
              }
            ],
            "internalType": "struct T37",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T38",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v62",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v63",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v65",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v130",
                "type": "bool"
              },
              {
                "internalType": "bool[4]",
                "name": "v196",
                "type": "bool[4]"
              },
              {
                "internalType": "uint256",
                "name": "v225",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v235",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v238",
                "type": "uint256"
              }
            ],
            "internalType": "struct T36",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v245",
                "type": "uint256"
              }
            ],
            "internalType": "struct T40",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T41",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v62",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v63",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v65",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v130",
                "type": "bool"
              },
              {
                "internalType": "bool[4]",
                "name": "v196",
                "type": "bool[4]"
              },
              {
                "internalType": "uint256",
                "name": "v225",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v235",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v245",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v248",
                "type": "uint256"
              }
            ],
            "internalType": "struct T39",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v255",
                "type": "uint256"
              }
            ],
            "internalType": "struct T43",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T44",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v35",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v41",
                "type": "address"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v44",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v50",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v53",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v62",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v63",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v65",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v1117",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_None",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Some",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T19",
                "name": "v94",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v62",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v63",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v65",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              },
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_None",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Some",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T19",
                "name": "v94",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v97",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_None",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Some",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T19",
                "name": "v116",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v27",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v45",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v62",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v63",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v65",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v66",
                "type": "bool"
              },
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_None",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Some",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T19",
                "name": "v94",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_None",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Some",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T19",
                "name": "v116",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v119",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v130",
                "type": "bool"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a1604080516020808201835243825282518082018452600080825292518152835180830184905290518185015283518082038501815260609091019093528251920191909120905561432e806100826000396000f3fe6080604052600436106100c65760003560e01c8063419ab6851161007f578063c2965d6b11610059578063c2965d6b1461017f578063d279a3e614610192578063d37c54e6146101a5578063e4c9c1ad146101b8576100cd565b8063419ab685146101465780638d34ffec14610159578063a578fd6d1461016c576100cd565b80630e02fe3b146100d25780631c5e0806146100e75780631c8d0edc146100fa5780632329e9881461010d57806331463b77146101205780633182155114610133576100cd565b366100cd57005b600080fd5b6100e56100e0366004613019565b6101cb565b005b6100e56100f5366004612ffd565b6102f4565b6100e5610108366004612f41565b61050a565b6100e561011b366004612fe1565b610659565b6100e561012e366004612fcf565b6108aa565b6100e5610141366004612fe1565b610a56565b6100e561015436600461304e565b610c3e565b6100e561016736600461305f565b610db2565b6100e561017a366004612ffd565b610f23565b6100e561018d366004612fe1565b6114c7565b6100e56101a036600461302a565b61168f565b6100e56101b3366004612f41565b611891565b6100e56101c636600461303c565b611a07565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461020857600080fd5b60008080556040805160208101909152908152341561022657600080fd5b6102366040830160208401612eec565b6001600160a01b031681526040517f3edc19012383f1a954d272136ca587df4f30f9b69fd94318a56658f3640102eb90610271908490613a02565b60405180910390a16040805160608082018352600082840190815233835243602080850191825286516001600160a01b039081168452865160019281019290925285518116968201969096529051928101929092525190921660808301529060a0015b60408051601f198184030181529190528051602090910120600055505050565b60405161030890600b908390602001613f84565b6040516020818303038152906040528051906020012060001c6000541461032e57600080fd5b60008055341561033d57600080fd5b3361034e6040830160208401612eec565b6001600160a01b03161461036157600080fd5b7f557b0dab736ea4fa39ac3fe28eab7c93fa71671273f97938e5ff2967f0c079188160405161039091906139e4565b60405180910390a16103a0612837565b6103ad6020830183612eec565b6001600160a01b031681526103c86040830160208401612eec565b6001600160a01b031660208201526103e66060830160408401612eec565b6001600160a01b031660408201526104046080830160608401612eec565b6001600160a01b0316606082015261042260a0830160808401612f0d565b1515608082015261043960c0830160a08401612f0d565b151560a082015261045060e0830160c08401612f0d565b151560c0820152610468610100830160e08401612f0d565b151560e082015261048161012083016101008401612f0d565b151561010082015260408051608081810190925290610120840190600490839083908082843760009201919091525050506101208201526101a08201356101408201526101e0820135610160820152436101808201526040516104eb90600c90839060200161408a565b60408051601f1981840301815291905280516020909101206000555050565b60405161051e906004908390602001613ac2565b6040516020818303038152906040528051906020012060001c6000541461054457600080fd5b60008055341561055357600080fd5b7f429f43a9b9767aae172976ed1d50a35ba8602be766b892e673eae4fa3f60621581604051610582919061391c565b60405180910390a16105926128a8565b61059f6020830183612eec565b81516001600160a01b0390911690526105be6040830160208401612eec565b81516001600160a01b039091166020909101526105e16060830160408401612eec565b81516001600160a01b0390911660409091015261060460a0830160808401612eec565b81516001600160a01b03909116606091820152602080830180516001908190528151909201829052805160006040909101528051909201819052815160800152514360a0909101526106558161265b565b5050565b60405161066d906009908390602001613db5565b6040516020818303038152906040528051906020012060001c6000541461069357600080fd5b6000805534156106a257600080fd5b336106b36040830160208401612eec565b6001600160a01b0316146106de57336106cf6020830183612eec565b6001600160a01b0316146106e1565b60015b61070557336106f66060830160408401612eec565b6001600160a01b031614610708565b60015b61072c573361071d6080830160608401612eec565b6001600160a01b03161461072f565b60015b61073857600080fd5b7f5e8d30ee41aef910334b58479e6703e777d09c4e1bbf51d69f64aeff51290c358160405161076791906139a9565b60405180910390a1610777612907565b6107846020830183612eec565b6001600160a01b0316815261079f6040830160208401612eec565b6001600160a01b031660208201526107bd6060830160408401612eec565b6001600160a01b031660408201526107db6080830160608401612eec565b6001600160a01b031660608201526107f960a0830160808401612f0d565b1515608082015261081060c0830160a08401612f0d565b151560a082015261082760e0830160c08401612f0d565b151560c082015261083f610100830160e08401612f0d565b151560e082015261085861012083016101008401612f0d565b15156101008201526040805160808181019092529061014084019060049083908390808284376000920191909152505050610120820152436101408201526040516104eb90600a908390602001613eb2565b6040516108be906006908390602001613b22565b6040516020818303038152906040528051906020012060001c600054146108e457600080fd5b6000805534156108f357600080fd5b336109016020830183612eec565b6001600160a01b03161461091457600080fd5b7f84a94d99db553f191152f410f844b216cdb992d207a25052b9ee4196c0614a3b816040516109439190613938565b60405180910390a161095361296a565b6109606020830183612eec565b6001600160a01b0316815261097b6040830160208401612eec565b6001600160a01b031660208201526109996060830160408401612eec565b6001600160a01b031660408201526109b76080830160608401612eec565b6001600160a01b031660608201526109d560a0830160808401612f0d565b151560808201526109ec60c0830160a08401612f0d565b151560a0820152610a0360e0830160c08401612f0d565b151560c0820152610a1b610100830160e08401612f0d565b151560e0820152610a353683900383016101208401612f5c565b610100820152436101208201526040516104eb906007908390602001613c12565b604051610a6a90600a908390602001613e9d565b6040516020818303038152906040528051906020012060001c60005414610a9057600080fd5b600080553415610a9f57600080fd5b33610aad6020830183612eec565b6001600160a01b031614610ac057600080fd5b7fc1d373c6d5ce06a85b87b8b7e726571227070ee227c2057fd95e6c4559cc9b5681604051610aef91906139c6565b60405180910390a1610aff6129cc565b610b0c6020830183612eec565b6001600160a01b03168152610b276040830160208401612eec565b6001600160a01b03166020820152610b456060830160408401612eec565b6001600160a01b03166040820152610b636080830160608401612eec565b6001600160a01b03166060820152610b8160a0830160808401612f0d565b15156080820152610b9860c0830160a08401612f0d565b151560a0820152610baf60e0830160c08401612f0d565b151560c0820152610bc7610100830160e08401612f0d565b151560e0820152610be061012083016101008401612f0d565b151561010082015260408051608081810190925290610120840190600490839083908082843760009201919091525050506101208201526101c0820135610140820152436101608201526040516104eb90600b908390602001613f99565b604051610c52906001908390602001613be9565b6040516020818303038152906040528051906020012060001c60005414610c7857600080fd5b600080805560408051602081019091529081523415610c9657600080fd5b33610ca46020840184612eec565b6001600160a01b031614610cb757600080fd5b610cc76080830160608401612eec565b6001600160a01b031681526040517f7f55e461f19b8e55c2df30bc3729bc44f30a8840b4080b2ca042f714a6ef17a490610d02908490613a66565b60405180910390a16040805160808101825260008082526020808301829052928201819052606082015290610d3990840184612eec565b6001600160a01b03168152610d546060840160408501612eec565b6001600160a01b039081166020838101918252436040808601918252865185166060808801918252825160029581019590955287518716928501929092529351851690830152516080820152905190911660a082015260c0016102d4565b604051610dc690600290839060200161427b565b6040516020818303038152906040528051906020012060001c60005414610dec57600080fd5b600080805560408051602081019091529081523415610e0a57600080fd5b33610e186020840184612eec565b6001600160a01b031614610e2b57600080fd5b610e3b60a0830160808401612eec565b6001600160a01b031681526040517ffbc23c26fff09990d250679e774a4f97fffa235ee72aafc6b5389c4f14a9434c90610e76908490613a94565b60405180910390a16040805160a0810182526000808252602080830182905292820181905260608201819052608082015290610eb490840184612eec565b6001600160a01b03168152610ecf6040840160208501612eec565b6001600160a01b03166020820152610eed6080840160608501612eec565b6001600160a01b0390811660408084019190915243606084015283519091166080830152516102d4906003908390602001613ad6565b604051610f37906008908390602001613ccf565b6040516020818303038152906040528051906020012060001c60005414610f5d57600080fd5b60008055610f69612a36565b3415610f7457600080fd5b33610f856060840160408501612eec565b6001600160a01b031614610f9857600080fd5b6000610fac61012084016101008501612f27565b6001811115610fcb57634e487b7160e01b600052602160045260246000fd5b1415610fda5760008152611023565b6001610fee61012084016101008501612f27565b600181111561100d57634e487b7160e01b600052602160045260246000fd5b1415611023576101408201356020820152600181525b600061103761018084016101608501612f27565b600181111561105657634e487b7160e01b600052602160045260246000fd5b141561106857600060408201526110b4565b600161107c61018084016101608501612f27565b600181111561109b57634e487b7160e01b600052602160045260246000fd5b14156110b4576101a08201356060820152600160408201525b60006110c861012084016101008501612f27565b60018111156110e757634e487b7160e01b600052602160045260246000fd5b14156110f95760006080820152611145565b600161110d61012084016101008501612f27565b600181111561112c57634e487b7160e01b600052602160045260246000fd5b14156111455761014082013560a0820181905260808201525b600061115961018084016101608501612f27565b600181111561117857634e487b7160e01b600052602160045260246000fd5b141561118a57600060c08201526111d6565b600161119e61018084016101608501612f27565b60018111156111bd57634e487b7160e01b600052602160045260246000fd5b14156111d6576101a082013560e0820181905260c08201525b60048160800151106111e757600080fd5b60048160c00151106111f857600080fd5b61120860c0830160a08401612f0d565b610100820151901515905261122360a0830160808401612f0d565b61010082015190151560209091015261124260e0830160c08401612f0d565b610100820151600291151560209092020152611265610100830160e08401612f0d565b6101008201519015156060909101526101208101516000905261128e60a0830160808401612f0d565b6101208201519015156020909101526112ad60e0830160c08401612f0d565b6101208201519015156040909101526112cd610100830160e08401612f0d565b6101208201519015156060909101526112ee61020083016101e08401612f0d565b6112f95760006112fc565b80515b611307576000611310565b60028160800151145b61136b57805161132557806101000151611366565b8060400151611335576000611341565b8060c001518160800151145b61135f5761135a8161010001518260800151600061278f565b611366565b8061010001515b611372565b8061012001515b6101408201526040517f1fa475e4e866e2e0ad734265d0f97629bc2f3fe9b6f47ebfa1d403e1b298b8eb906113a890849061397f565b60405180910390a16113b8612aa0565b6113c56020840184612eec565b6001600160a01b031681526113e06040840160208501612eec565b6001600160a01b031660208201526113fe6060840160408501612eec565b6001600160a01b0316604082015261141c6080840160608501612eec565b6001600160a01b0316606082015261143a60a0840160808501612f0d565b1515608082015261145160c0840160a08501612f0d565b151560a082015261146860e0840160c08501612f0d565b151560c0820152611480610100840160e08501612f0d565b151560e082015261149961020084016101e08501612f0d565b15156101008201524361012082015261014080830151908201526040516102d4906009908390602001613dca565b6040516114db906007908390602001613bfd565b6040516020818303038152906040528051906020012060001c6000541461150157600080fd5b60008055341561151057600080fd5b336115216040830160208401612eec565b6001600160a01b03161461153457600080fd5b7f21061e0fab6cef68d4841743a7cf8a1e56d23d2e7ed3eedd2ef5747b5091da6981604051611563919061395f565b60405180910390a1611573612afe565b6115806020830183612eec565b6001600160a01b0316815261159b6040830160208401612eec565b6001600160a01b031660208201526115b96060830160408401612eec565b6001600160a01b031660408201526115d76080830160608401612eec565b6001600160a01b031660608201526115f560a0830160808401612f0d565b1515608082015261160c60c0830160a08401612f0d565b151560a082015261162360e0830160c08401612f0d565b151560c082015261163b610100830160e08401612f0d565b151560e08201526116553683900383016101008401612f5c565b61010082015261166e3683900383016101808401612f5c565b610120820152436101408201526040516104eb906008908390602001613ce4565b6040516116a390600c908390602001614075565b6040516020818303038152906040528051906020012060001c600054146116c957600080fd5b6000805534156116d857600080fd5b336116e96060830160408401612eec565b6001600160a01b0316146116fc57600080fd5b7fbedfba065ce7fd72ed6f354187888bd57513b33096143fb17463d2ff87207c8c8160405161172b9190613a2a565b60405180910390a161173b612b7c565b6117486020830183612eec565b6001600160a01b031681526117636040830160208401612eec565b6001600160a01b031660208201526117816060830160408401612eec565b6001600160a01b0316604082015261179f6080830160608401612eec565b6001600160a01b031660608201526117bd60a0830160808401612f0d565b151560808201526117d460c0830160a08401612f0d565b151560a08201526117eb60e0830160c08401612f0d565b151560c0820152611803610100830160e08401612f0d565b151560e082015261181c61012083016101008401612f0d565b151561010082015260408051608081810190925290610120840190600490839083908082843760009201919091525050506101208201526101a0808301356101408301526101c083013561016083015261020083013561018083015243908201526040516104eb90600d908390602001614187565b6040516118a5906003908390602001613ac2565b6040516020818303038152906040528051906020012060001c600054146118cb57600080fd5b6000808055604080516020810190915290815234156118e957600080fd5b336118f76020840184612eec565b6001600160a01b03161461190a57600080fd5b61191a60c0830160a08401612eec565b6001600160a01b031681526040517f097b60c116bb37a646065055583b19ee207e830c895304a49eca5dc7a8381910906119559084906138ee565b60405180910390a16040805160a0810182526000808252602082018190529181018290526060810182905260808101919091526119986040840160208501612eec565b6001600160a01b031681526119b36060840160408501612eec565b6001600160a01b031660208201526119d160a0840160808501612eec565b6001600160a01b0390811660408084019190915243606084015283519091166080830152516102d4906004908390602001613ad6565b604051611a1b90600d908390602001614172565b6040516020818303038152906040528051906020012060001c60005414611a4157600080fd5b60008055611a4d612bf4565b3415611a5857600080fd5b33611a696080840160608501612eec565b6001600160a01b031614611a7c57600080fd5b6101a082013515611a8e576000611a91565b60015b81526101c082013515611aa5578051611ab3565b8051611ab39060019061428f565b60208201526101e082013515611acd578060200151611ade565b60018160200151611ade919061428f565b604082015261022082013515611af8578060400151611b09565b60018160400151611b09919061428f565b60608201526101a0820135600114611b22576000611b25565b60015b60808201526101c0820135600114611b41578060800151611b52565b60018160800151611b52919061428f565b60a08201526101e0820135600114611b6e578060a00151611b7f565b60018160a00151611b7f919061428f565b60c0820152610220820135600114611b9b578060c00151611bac565b60018160c00151611bac919061428f565b60e08201526101a0820135600214611bc5576000611bc8565b60015b6101008201526101c0820135600214611be657806101000151611bf8565b6001816101000151611bf8919061428f565b6101208201526101e0820135600214611c1657806101200151611c28565b6001816101200151611c28919061428f565b610140820152610220820135600214611c4657806101400151611c58565b6001816101400151611c58919061428f565b6101608201526101a0820135600314611c72576000611c75565b60015b6101808201526101c0820135600314611c9357806101800151611ca5565b6001816101800151611ca5919061428f565b6101a08201526101e0820135600314611cc357806101a00151611cd5565b6001816101a00151611cd5919061428f565b6101c0820152610220820135600314611cf357806101c00151611d05565b6001816101c00151611d05919061428f565b6101e082015261020081018051600090525160016020909101526060810151611d2f576000611d35565b80606001515b610220820181905260e082015111611d5257806102200151611d58565b8060e001515b610240820181905261016082015111611d7657806102400151611d7d565b8061016001515b61026082018190526101e082015111611d9b57806102600151611da2565b806101e001515b610280820152611db860c0830160a08401612f0d565b611dc3576000611dc6565b60015b6102a0820152611ddc60a0830160808401612f0d565b611deb57806102a00151611dfd565b6001816102a00151611dfd919061428f565b6102c0820152611e1360e0830160c08401612f0d565b611e2257806102c00151611e34565b6001816102c00151611e34919061428f565b6102e08201526002611e4d610100840160e08501612f0d565b611e5c57816102e00151611e6e565b6001826102e00151611e6e919061428f565b611e7891906142a7565b61030082015261032081018051600190819052815160006040909101819052915161034084018051919091525160209081019290925261020083015161036084018051919091525190910152606081015161028082015114611edb576000611ee8565b8061030001518160600151115b611ef757806103600151611efe565b8061034001515b610380820181905251516000906001811115611f2a57634e487b7160e01b600052602160045260246000fd5b1415611fcf576103c0810180516001908190526103808301805160209081015184516040015292516103e0850180519190915281518401519051840152805151610400850151525190910151611f80919061428f565b6104008201516020015260e081015161028082015114611fa1576000611fae565b8061030001518160e00151115b611fbd57806104000151611fc4565b806103e001515b6103a0820152612017565b600161038082015151516001811115611ff857634e487b7160e01b600052602160045260246000fd5b1415612017576103808101518051604001516104208301526103a08201525b60006103a08201515151600181111561204057634e487b7160e01b600052602160045260246000fd5b14156120e757610460810180516001908190526103a08301805160209081015184516040015292516104808501805191909152815184015190518401528051516104a0850151525190910151612096919061428f565b6104a082015160200152610160810151610280820151146120b85760006120c6565b806103000151816101600151115b6120d557806104a001516120dc565b8061048001515b61044082015261212f565b60016103a08201515151600181111561211057634e487b7160e01b600052602160045260246000fd5b141561212f576103a08101518051604001516104c08301526104408201525b60006104408201515151600181111561215857634e487b7160e01b600052602160045260246000fd5b14156121ff57610500810180516001908190526104408301805160209081015184516040015292516105208501805191909152815184015190518401528051516105408501515251909101516121ae919061428f565b610540820151602001526101e0810151610280820151146121d05760006121de565b806103000151816101e00151115b6121ed578061054001516121f4565b8061052001515b6104e0820152612247565b60016104408201515151600181111561222857634e487b7160e01b600052602160045260246000fd5b1415612247576104408101518051604001516105608301526104e08201525b60006104e08201515151600181111561227057634e487b7160e01b600052602160045260246000fd5b14156122835760006105808201526122cc565b60016104e0820151515160018111156122ac57634e487b7160e01b600052602160045260246000fd5b14156122cc576104e081015151604001516105a082015260016105808201525b806105800151156124e25760006104e08201515151600181111561230057634e487b7160e01b600052602160045260246000fd5b14156123135760056105c082015261235c565b60016104e08201515151600181111561233c57634e487b7160e01b600052602160045260246000fd5b141561235c576104e081015151604001516105e082018190526105c08201525b60408051608081810190925261239491610120850190600490839083908082843760009201829052506105c08601519250905061278f565b6106008201526040517f15de5fc589d035fc20a275703900a3987a6115612fccbf4754e17c1c73a8b77f906123ca908490613a48565b60405180910390a16123da6128a8565b6123e76020840184612eec565b81516001600160a01b0390911690526124066040840160208501612eec565b81516001600160a01b039091166020909101526124296060840160408501612eec565b81516001600160a01b0390911660409091015261244c6080840160608501612eec565b81516001600160a01b0391909116606090910152610600820180516020908101518184018051911515909152915151915191151591015261249561012084016101008501612f0d565b602082018051911515604092830152610600840180519092015181519015156060918201529151909101518151901515608090910152514360a0909101526124dc8161265b565b50610655565b7f15de5fc589d035fc20a275703900a3987a6115612fccbf4754e17c1c73a8b77f826040516125119190613a48565b60405180910390a16125216128a8565b61252e6020840184612eec565b81516001600160a01b03909116905261254d6040840160208501612eec565b81516001600160a01b039091166020909101526125706060840160408501612eec565b81516001600160a01b039091166040909101526125936080840160608501612eec565b81516001600160a01b03919091166060909101526125b961016084016101408501612f0d565b602082015190151590526125d561014084016101208501612f0d565b6020808301519115159101526125f361012084016101008501612f0d565b602082015190151560409091015261261361018084016101608501612f0d565b60208201519015156060909101526126336101a084016101808501612f0d565b602082018051911515608090920191909152514360a0909101526126568161265b565b505050565b80602001516020015161267357602081015151612676565b60015b6126885780602001516060015161268b565b60015b61269d578060200151608001516126a0565b60015b15612785576040805161012081018252600080825260208083018281528385018381526060808601858152608080880187815260a0808a0189815260c08b018a815260e08c018b81526101008d019b8c528e51516001600160a01b039081168e528f518c01518116909a528e518e01518a169098528d518701519098169094528b8801805151151590925281518801511515909352805190930151151590945281519093015115159091525101519091529151909161276491600691849101613b37565b60408051601f1981840301815291905280516020909101206000555061278c565b6000805533ff5b50565b612797612e2f565b60005b6004811015612804578481600481106127c357634e487b7160e01b600052603260045260246000fd5b60200201518282600481106127e857634e487b7160e01b600052603260045260246000fd5b91151560209092020152806127fc816142c7565b91505061279a565b508181846004811061282657634e487b7160e01b600052603260045260246000fd5b911515602090920201529392505050565b604080516101a081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152610120810161288d612e2f565b81526020016000815260200160008152602001600081525090565b6040805160c0808201835260008284018181526060808501839052608080860184905260a0808701859052928652865194850187528385526020808601859052968501849052908401839052830182905282015290918201905b905290565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152610120810161295d612e2f565b8152602001600081525090565b60408051610140810182526000808252602080830182905282840182905260608084018390526080840183905260a0840183905260c0840183905260e0840183905284519081018552828152908101829052928301529061010082019061295d565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091526101208101612a22612e2f565b815260200160008152602001600081525090565b604051806101600160405280600015158152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001612a86612e2f565b8152602001612a93612e2f565b8152602001612902612e2f565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526101408101612902612e2f565b60408051610160810182526000808252602080830182905282840182905260608084018390526080840183905260a0840183905260c0840183905260e084018390528451808201865283815280830184905280860184905261010085015284519081018552828152908101829052928301529061012082019061295d565b604080516101c081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091526101208101612bd2612e2f565b8152602001600081526020016000815260200160008152602001600081525090565b60405180610620016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001612c956040805160608101909152806000815260006020820181905260409091015290565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001612cf76040805160608101909152806000815260006020820181905260409091015290565b8152602001612d04612e4d565b8152602001612d11612e4d565b8152602001612d1e612e4d565b8152602001612d2b612e4d565b81526040805160608101825260008082526020828101829052928201529101908152602001612d58612e4d565b8152602001612d65612e4d565b815260200160008152602001612d79612e4d565b81526040805160608101825260008082526020828101829052928201529101908152602001612da6612e4d565b8152602001612db3612e4d565b815260200160008152602001612dc7612e4d565b81526040805160608101825260008082526020828101829052928201529101908152602001612df4612e4d565b8152602001612e01612e4d565b8152602001600081526020016000151581526020016000815260200160008152602001600081526020016129025b60405180608001604052806004906020820280368337509192915050565b6040805160a081018252600091810182815260608201839052608082019290925290819061295d565b80356001600160a01b0381168114612e8d57600080fd5b919050565b80358015158114612e8d57600080fd5b803560028110612e8d57600080fd5b600060c08284031215612ec2578081fd5b50919050565b60006101e08284031215612ec2578081fd5b60006102008284031215612ec2578081fd5b600060208284031215612efd578081fd5b612f0682612e76565b9392505050565b600060208284031215612f1e578081fd5b612f0682612e92565b600060208284031215612f38578081fd5b612f0682612ea2565b600060c08284031215612f52578081fd5b612f068383612eb1565b600060608284031215612f6d578081fd5b6040516060810181811067ffffffffffffffff82111715612f9c57634e487b7160e01b83526041600452602483fd5b604052612fa883612ea2565b8152612fb660208401612e92565b6020820152604083013560408201528091505092915050565b60006101808284031215612ec2578081fd5b60006101e08284031215612ff3578081fd5b612f068383612ec8565b6000610200828403121561300f578081fd5b612f068383612eda565b600060408284031215612ec2578081fd5b60006102208284031215612ec2578081fd5b60006102408284031215612ec2578081fd5b600060808284031215612ec2578081fd5b600060a08284031215612ec2578081fd5b8060005b600481101561309d5761308682612e92565b151584526020938401939190910190600101613074565b50505050565b8060005b600481101561309d57815115158452602093840193909101906001016130a7565b600281106130e657634e487b7160e01b600052602160045260246000fd5b9052565b6001600160a01b03806130fc83612e76565b1683528061310c60208401612e76565b1660208401528061311f60408401612e76565b166040840152606082013560608401528061313c60808401612e76565b166080840152505050565b6001600160a01b038061315983612e76565b1683528061316960208401612e76565b1660208401528061317c60408401612e76565b1660408401525061318f60608201612e76565b6001600160a01b031660608301526131a960808201612e92565b151560808301526131bc60a08201612e92565b151560a08301526131cf60c08201612e92565b151560c08301526131e260e08201612e92565b151560e083015261010090810135910152565b6132078261320283612ea2565b6130c8565b61321360208201612e92565b15156020830152604090810135910152565b6132308282516130c8565b602081810151151590830152604090810151910152565b6001600160a01b038061325983612e76565b168352602082013560208401528061327360408401612e76565b166040840152505050565b6132988261328b83612e76565b6001600160a01b03169052565b6132a460208201612e76565b6001600160a01b031660208301526132be60408201612e76565b6001600160a01b031660408301526132d860608201612e76565b6001600160a01b031660608301526132f260808201612e92565b1515608083015261330560a08201612e92565b151560a083015261331860c08201612e92565b151560c083015261332b60e08201612e92565b151560e08301526101006133438184018383016131f5565b5061016090810135910152565b61335d8261328b83612e76565b61336960208201612e76565b6001600160a01b0316602083015261338360408201612e76565b6001600160a01b0316604083015261339d60608201612e76565b6001600160a01b031660608301526133b760808201612e92565b151560808301526133ca60a08201612e92565b151560a08301526133dd60c08201612e92565b151560c08301526133f060e08201612e92565b151560e08301526101006134088184018383016131f5565b5061016061341a8184018284016131f5565b506101c090810135910152565b6134348261328b83612e76565b61344060208201612e76565b6001600160a01b0316602083015261345a60408201612e76565b6001600160a01b0316604083015261347460608201612e76565b6001600160a01b0316606083015261348e60808201612e92565b151560808301526134a160a08201612e92565b151560a08301526134b460c08201612e92565b151560c08301526134c760e08201612e92565b151560e08301526101006134dc828201612e92565b1515908301526101208181013590830152610140612656818401828401613070565b61350b8261328b83612e76565b61351760208201612e76565b6001600160a01b0316602083015261353160408201612e76565b6001600160a01b0316604083015261354b60608201612e76565b6001600160a01b0316606083015261356560808201612e92565b1515608083015261357860a08201612e92565b151560a083015261358b60c08201612e92565b151560c083015261359e60e08201612e92565b151560e08301526101006135b3828201612e92565b1515908301526101206135ca818401838301613070565b506101a090810135910152565b6135e48261328b83612e76565b6135f060208201612e76565b6001600160a01b0316602083015261360a60408201612e76565b6001600160a01b0316604083015261362460608201612e76565b6001600160a01b0316606083015261363e60808201612e92565b1515608083015261365160a08201612e92565b151560a083015261366460c08201612e92565b151560c083015261367760e08201612e92565b151560e083015261010061368c828201612e92565b1515908301526101206136a3818401838301613070565b506101a081810135908301526101c090810135910152565b6136c88261328b83612e76565b6136d460208201612e76565b6001600160a01b031660208301526136ee60408201612e76565b6001600160a01b0316604083015261370860608201612e76565b6001600160a01b0316606083015261372260808201612e92565b1515608083015261373560a08201612e92565b151560a083015261374860c08201612e92565b151560c083015261375b60e08201612e92565b151560e0830152610100613770828201612e92565b151590830152610120613787818401838301613070565b506101a081810135908301526101c080820135908301526101e090810135910152565b6137b78261328b83612e76565b6137c360208201612e76565b6001600160a01b031660208301526137dd60408201612e76565b6001600160a01b031660408301526137f760608201612e76565b6001600160a01b0316606083015261381160808201612e92565b1515608083015261382460a08201612e92565b151560a083015261383760c08201612e92565b151560c083015261384a60e08201612e92565b151560e083015261010061385f828201612e92565b151590830152610120613876818401838301613070565b506101a081810135908301526101c080820135908301526101e0808201359083015261020090810135910152565b6001600160a01b03806138b683612e76565b168352806138c660208401612e76565b16602084015260408201356040840152806138e360608401612e76565b166060840152505050565b60c081016138fc82846130ea565b6001600160a01b0361391060a08501612e76565b1660a083015292915050565b60c0810161392a82846130ea565b60a092830135919092015290565b61018081016139478284613147565b6101206139588184018286016131f5565b5092915050565b6101e0810161396e828461327e565b6101806139588184018286016131f5565b610200810161398e8284613350565b6101e061399c818501612e92565b1515818401525092915050565b6101e081016139b88284613427565b6101c061399c818501612e92565b6101e081016139d582846134fe565b6101c092830135919092015290565b61020081016139f382846135d7565b6101e092830135919092015290565b81358152604081016001600160a01b03613a1e60208501612e76565b16602083015292915050565b6102208101613a3982846136bb565b61020092830135919092015290565b6102408101613a5782846137aa565b61022092830135919092015290565b60808101613a748284613247565b6001600160a01b03613a8860608501612e76565b16606083015292915050565b60a08101613aa282846138a4565b6001600160a01b03613ab660808501612e76565b16608083015292915050565b82815260c08101612f0660208301846130ea565b82815260c08101612f06602083018480516001600160a01b0390811683526020808301518216908401526040808301518216908401526060808301519084015260809182015116910152565b8281526101408101612f066020830184613147565b82815281516001600160a01b0316602080830191909152820151610140820190613b6c60408401826001600160a01b03169052565b5060408301516001600160a01b03811660608401525060608301516001600160a01b038116608084015250608083015180151560a08401525060a083015180151560c08401525060c083015180151560e08401525060e0830151610100613bd68185018315159052565b8085015161012085015250509392505050565b82815260808101612f066020830184613247565b8281526101a08101612f06602083018461327e565b82815281516001600160a01b031660208201526101a0810160208301516001600160a01b03811660408401525060408301516001600160a01b03811660608401525060608301516001600160a01b038116608084015250608083015180151560a08401525060a083015180151560c08401525060c083015180151560e08401525060e0830151610100613ca88185018315159052565b8401519050610120613cbc84820183613225565b8085015161018085015250509392505050565b8281526102008101612f066020830184613350565b82815281516001600160a01b03166020820152610200810160208301516001600160a01b03811660408401525060408301516001600160a01b03811660608401525060608301516001600160a01b038116608084015250608083015180151560a08401525060a083015180151560c08401525060c083015180151560e08401525060e0830151610100613d7a8185018315159052565b8401519050610120613d8e84820183613225565b8401519050613da1610180840182613225565b506101408301516101e08301529392505050565b8281526101e08101612f066020830184613427565b82815281516001600160a01b031660208201526101e0810160208301516001600160a01b03811660408401525060408301516001600160a01b03811660608401525060608301516001600160a01b038116608084015250608083015180151560a08401525060a083015180151560c08401525060c083015180151560e08401525060e0830151610100613e608185018315159052565b8401519050610120613e758482018315159052565b840151610140848101919091528401519050613e956101608401826130a3565b509392505050565b8281526101e08101612f0660208301846134fe565b82815281516001600160a01b031660208201526101e0810160208301516001600160a01b03811660408401525060408301516001600160a01b03811660608401525060608301516001600160a01b038116608084015250608083015180151560a08401525060a083015180151560c08401525060c083015180151560e08401525060e0830151610100613f488185018315159052565b8401519050610120613f5d8482018315159052565b8401519050610140613f71848201836130a3565b808501516101c085015250509392505050565b8281526102008101612f0660208301846135d7565b82815281516001600160a01b03166020820152610200810160208301516001600160a01b03811660408401525060408301516001600160a01b03811660608401525060608301516001600160a01b038116608084015250608083015180151560a08401525060a083015180151560c08401525060c083015180151560e08401525060e083015161010061402f8185018315159052565b84015190506101206140448482018315159052565b8401519050610140614058848201836130a3565b8401516101c084015250610160909201516101e090910152919050565b8281526102208101612f0660208301846136bb565b82815281516001600160a01b03166020820152610220810160208301516001600160a01b03811660408401525060408301516001600160a01b03811660608401525060608301516001600160a01b038116608084015250608083015180151560a08401525060a083015180151560c08401525060c083015180151560e08401525060e08301516101006141208185018315159052565b84015190506101206141358482018315159052565b8401519050610140614149848201836130a3565b8401516101c0840152506101608301516101e08301526101809092015161020090910152919050565b8281526102408101612f0660208301846137aa565b82815281516001600160a01b03166020820152610240810160208301516001600160a01b03811660408401525060408301516001600160a01b03811660608401525060608301516001600160a01b038116608084015250608083015180151560a08401525060a083015180151560c08401525060c083015180151560e08401525060e083015161010061421d8185018315159052565b84015190506101206142328482018315159052565b8401519050610140614246848201836130a3565b8401516101c0840152506101608301516101e08301526101808301516102008301526101a09092015161022090910152919050565b82815260a08101612f0660208301846138a4565b600082198211156142a2576142a26142e2565b500190565b6000826142c257634e487b7160e01b81526012600452602481fd5b500490565b60006000198214156142db576142db6142e2565b5060010190565b634e487b7160e01b600052601160045260246000fdfea26469706673582212201dd22bf75539ccd2567be548648589555802e6b4961aa4ec87dd47732d2d8a2b64736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

