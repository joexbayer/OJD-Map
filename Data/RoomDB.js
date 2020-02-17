var x = 'x';
var y = 'y';
var description = 'description';
var RoomsDB =  {
	'1251' : {
		'name':'Scheme',
		'type':'Møterom',
		'floor':'1',
		'node142': {x: 0.3299050632911392, y: 0.8498583569405099, description: "Room Scheme"}
	},
	'1415' : {
		'name':'Smalltalk',
		'type':'Aud',
		'floor':'1',
		'node143': {'x': 0.809375, 'y': 0.6732522796352584, description: "Room Smalltalk"}
	},
	'1423' : {
		'name':'Simula',
		'type':'Aud',
		'floor':'1',
		'node144': {'x': 0.6227141482194418, 'y': 0.7264437689969605, description: "Room Simula"}
	},
	'1449' : {
		'name':'Biblioteket (Normarc)',
		'type':'Bibliotek',
		'floor':'1',
		'node145': {x: 0.4588607594936709, y: 0.839943342776204, description: "Room Normarc"}
	},
	'1454' : {
		'name':'Sed',
		'type':'Seminarrom',
		'floor':'1',
		'node146': {'x': 0.26756496631376325, 'y': 0.8115501519756839, description: "Room Sed"}
	},
	'1456' : {
		'name':'Shell',
		'type':'Seminarrom',
		'floor':'1',
		'node147': {x: 0.21835443037974683, y: 0.8470254957507082, description: "Room Shell"}
	},
	'2269' : {
		'name':'Python',
		'type':'Seminarrom',
		'floor':'2',
		'node148': {x: 0.02531645569620253, y: 0.4603399433427762, description: "Room Python"}
	},
	'2423' : {
		'name':'Java',
		'type':'Seminarrom',
		'floor':'2',
		'node149': {x: 0.6819620253164557, y: 0.4801699716713881, description: "Room Java"}
	},
	'2428' : {
		'name':'Lisp',
		'type':'Terminalstue',
		'floor':'2',
		'node150': {x: 0.6044303797468354, y: 0.443342776203966, description: "Room Lisp"}
	},
	'2438' : {
		'name':'Logo',
		'type':'Seminarrom',
		'floor':'2',
		'node151': {'x': 0.44465832531280075, 'y': 0.4331306990881459, description: "Room Logo"}
	},
	'2443' : {
		'name':'Modula',
		'type':'Datastue',
		'floor':'2',
		'node152': {'x': 0.3618864292589028, 'y': 0.41033434650455924, description: "Room Modula"}
	},
	'2452' : {
		'name':'Pascal',
		'type':'Seminarrom',
		'floor':'2',
		'node153': {'x': 0.2964388835418672, 'y': 0.42249240121580545, description: "Room Pascal"}
	},
	'2453' : {
		'name':'Perl',
		'type':'Seminarrom',
		'floor':'2',
		'node154': {x: 0.2587025316455696, y: 0.46458923512747874, description: "Room Perl"}
	},
	'2458' : {
		'name':'Postscript',
		'type':'Seminarrom',
		'floor':'2',
		'node155': {x: 0.20015822784810128, y: 0.4603399433427762, description: "Room Postscript"}
	},
	'2465' : {
		'name':'Prolog',
		'type':'Seminarrom',
		'floor':'2',
		'node156': {x: 0.13528481012658228, y: 0.43342776203966005, description: "Room Prolog"}
	},
	'3302' : {
		'name':'Studorg',
		'type':'Seminarrom?',
		'floor':'3',
		'node157': {x: 0.9897151898734177, y: 0.17847025495750707, description: "Room Studorg"}
	},
	'3407' : {
		'name':'Ada',
		'type':'Datastue',
		'floor':'3',
		'node158': {x: 0.9438291139240507, y: 0.15864022662889518, description: "Room Ada"}
	},
	'3408' : {
		'name':'Algol',
		'type':'Seminarrom?',
		'floor':'3',
		'node159': {x: 0.9042721518987342, y: 0.16147308781869688, description: "Room Algol"}
	},
	'3417' : {
		'name':'Assembler',
		'type':'Terminalstue',
		'floor':'3',
		'node161': {'x': 0.836381135707411, 'y': 0.10638297872340426, description: "Room Assembler"}
	},
	'3118' : {
		'name':'Awk',
		'type':'Møterom',
		'floor':'3',
		'node162': {x: 0.7966772151898734, y: 0.29178470254957506, description: "Room Awk"}
	},
	'3418' : {
		'name':'Limbo',
		'type':'Datastue',
		'floor':'3',
		'node163': {'x': 0.77734375, 'y': 0.11246200607902736, description: "Room Limbo"}
	},
	'3426' : {
		'name':'Xml',
		'type':'Seminarrom?',
		'floor':'3',
		'node164': {x: 0.7278481012658228, y: 0.14447592067988668, description: "Room Xml"}
	},
	'3427' : {
		'name':'Bliss',
		'type':'Prosa Rom',
		'floor':'3',
		'node165': {'x': 0.6679499518768046, 'y': 0.10486322188449848, description: "Room Bliss"}
	},
	'3437' : {
		'name':'C',
		'type':'Seminarrom',
		'floor':'3',
		'node166': {x: 0.6170886075949367, y: 0.14730878186968838, description: "Room C"}
	},
	'3438' : {
		'name':'Caml',
		'type':'Seminarrom',
		'floor':'3',
		'node167': {x: 0.560126582278481, y: 0.14730878186968838, description: "Room Caml"}
	},
	'3443' : {
		'name':'Chil',
		'type':'Datastue',
		'floor':'3',
		'node168': {x: 0.5087025316455697, y: 0.14589235127478753, description: "Room Chil"}
	},
	'3452' : {
		'name':'Cobol',
		'type':'Datastue',
		'floor':'3',
		'node169': {x: 0.43829113924050633, y: 0.14589235127478753, description: "Room Cobol"}
	},
	'3453' : {
		'name':'Eiffel',
		'type':'Terminalstue',
		'floor':'3',
		'node170': {x: 0.40189873417721517, y: 0.14305949008498584, description: "Room Eiffel"}
	},
	'3458' : {
		'name':'Euclid',
		'type':'Terminalstue',
		'floor':'3',
		'node171': {x: 0.35680379746835444, y: 0.14730878186968838, description: "Room Euclid"}
	},
	'3459' : {
		'name':'Euler',
		'type':'Terminalstue',
		'floor':'3',
		'node172': {x: 0.32436708860759494, y: 0.12464589235127478, description: "Room Euler"}
	},
	'3467' : {
		'name':'Fortran',
		'type':'Terminalstue',
		'floor':'3',
		'node173': {x: 0.28401898734177217, y: 0.09631728045325778, description: "Room Fortran"}
	},
	'3468' : {
		'name':'Fortress',
		'type':'Terminalstue',
		'floor':'3',
		'node174': {x: 0.21044303797468356, y: 0.09915014164305949, description: "Room Fortress"}
	},
	'3271' : {
		'name':'Black Box',
		'type':'Terminalstue',
		'floor':'3',
		'node175': {x: 0.1930379746835443, y: 0.17847025495750707, description: "Room Black Box"}
	},

}