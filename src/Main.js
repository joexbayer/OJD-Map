var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = document.body.clientWidth; //document.width is obsolete
canvas.height = document.body.clientHeight*0.98; //document.height is obsolete
canvas.style.backgroundImage = "url('src/OJD_Map.png')";
canvas.style.backgroundSize = canvas.width+"px "+canvas.height+"px";


var drawList = [];
var tempNode_list = {};


//covert nodes from DB
var nodes = [];
for (var node in NodesDB) {
	new_node = new Node(NodesDB[node][x], NodesDB[node][y], NodesDB[node][description], node);
    nodes.push(new_node);
}
var total_nodes = 363;

//convert rooms from DB
var rooms = [];
for (var db_room in RoomsDB) {
	var roomkeys = [];
	for(var key in RoomsDB[db_room]){
		roomkeys.push(key);
	}
	new_node = new Node(RoomsDB[db_room][roomkeys[roomkeys.length-1]][x], RoomsDB[db_room][roomkeys[roomkeys.length-1]][y], RoomsDB[db_room][roomkeys[roomkeys.length-1]][description], roomkeys[roomkeys.length-1]);
	nodes.push(new_node);
	new_room = new Room(db_room, RoomsDB[db_room]['name'], RoomsDB[db_room]['floor'], RoomsDB[db_room]['type'], new_node);
	rooms.push(new_room);
}

//function to use pathfinder.
var path = [];
function findRoom(room_id){
	for (var i = 0; i < rooms.length; i++) {
		if(rooms[i].getRoomID() == room_id){
			var pathfinder = new Pathfinder(nodes[0], rooms[i].getRoomNode(), nodes);
			path = pathfinder.A_start();
		} 
	}
}


/*function getNodeMap(){
	for (var node_tmp in tempNode_list) {
		console.log("'"+node_tmp+"' : {'x': "+tempNode_list[node_tmp]['x']+", 'y': "+tempNode_list[node_tmp]['y']+", 'description': '"+tempNode_list[node_tmp]['description']+"'},");
	}
}*/
function mouseClick(e){
	x=e.clientX;
	y=e.clientY;

	for (var i = 0; i < rooms.length; i++) {
			var distance_vector = [x-rooms[i].getRoomNode().getCoordinates()[0]*canvas.width, y-rooms[i].getRoomNode().getCoordinates()[1]*canvas.height];
			var distance = Math.floor(Math.sqrt(distance_vector[0]*distance_vector[0] + distance_vector[1]*distance_vector[1]));
			if (distance < (canvas.width/canvas.height)*20){
				findRoom(rooms[i].getRoomID());
			}
		}

	/* Code for adding nodes
	x=e.clientX/canvas.width;
	y=e.clientY/canvas.height;
	var nodeinf = {'x':x,'y':y,'description':'Template'};
	tempNode_list['node'+total_nodes] = nodeinf;
	nodes.push(new Node(x, y, "Template", 'node'+total_nodes));
	total_nodes++;*/
}


//add all Rooms too UL list in html file
var search_box_value = document.getElementById("search-box");
search_box_value.addEventListener('input', showRooms);
function showRooms(){
	var ul = document.getElementById("ul-list");
	var search_box_value = document.getElementById("search-box").value;
	ul.innerHTML = "";
	for (var i = 0; i < rooms.length; i++) {
		if(rooms[i].getRoomName().toLowerCase().includes(search_box_value.toLowerCase()) || rooms[i].getRoomID().includes(search_box_value) || search_box_value == ""){
			var li = document.createElement("li");
			var li_div = document.createElement("div");
			li_div.setAttribute("class", "search-result");
			li_div.setAttribute("onclick", "findRoom("+rooms[i].getRoomID()+")");
			var li_div_p = document.createElement("p");
			var li_div_p_2 = document.createElement("p");
			li_div_p.innerHTML = rooms[i].getRoomName()+" - "+rooms[i].getRoomID();
			li_div_p_2.innerHTML = "Floor "+rooms[i].getRoomFloor() + " - Type: "+rooms[i].getRoomType();
			li_div.appendChild(li_div_p);
			li_div.appendChild(li_div_p_2);
			li.appendChild(li_div);
			ul.appendChild(li);
		}
	}
}
showRooms();

//hide stair nodes
var forbiddenNodes = [];
for (var i = 316; i < 364; i++) {
	forbiddenNodes.push("node"+(i));
}
var showDetails = false;

//toggle function show details
function toggleShowDetails(){
	if(showDetails){
		showDetails = false;
	} else {
		showDetails = true;
	}
}


//main loop
setInterval(function update(){
	
	//create mesh between nodes for pathfinding.
	for (var i = 0; i < nodes.length; i++) {
		nodes[i].checkNodes(nodes, canvas.width, canvas.height);
	}

	//adjust screen if changed
	if(canvas.width != document.body.clientWidth || canvas.height != document.body.clientHeight*0.98){
		canvas.width = document.body.clientWidth;
		canvas.height = document.body.clientHeight*0.98;
		canvas.style.backgroundSize = canvas.width+"px "+canvas.height+"px";
		screen_width = canvas.width;
		screen_height = canvas.height;
	}

	//try to draw paths if one exists
	for (var i = 0; i < path.length; i++) {
		ctx.arc(path[0].getCoordinates()[0]*canvas.width, path[0].getCoordinates()[1]*canvas.height, (canvas.width/canvas.height)*5, 0, 2 * Math.PI);
		ctx.fillStyle = "red";
 		ctx.fill();
 		ctx.closePath();
 		ctx.arc(path[path.length-1].getCoordinates()[0]*canvas.width, path[path.length-1].getCoordinates()[1]*canvas.height, (canvas.width/canvas.height)*5, 0, 2 * Math.PI);
		ctx.fillStyle = "red";
 		ctx.fill();
 		ctx.closePath();
		try {
			if(!forbiddenNodes.includes(path[i].getName()) && !forbiddenNodes.includes(path[i+1].getName())){
				ctx.beginPath();
				ctx.strokeStyle = "red";
				ctx.lineWidth = 4;
				ctx.moveTo(path[i].getCoordinates()[0]*canvas.width, path[i].getCoordinates()[1]*canvas.height);
				ctx.lineTo(path[i+1].getCoordinates()[0]*canvas.width, path[i+1].getCoordinates()[1]*canvas.height);
				ctx.stroke();
				ctx.closePath();
				ctx.arc(path[i].getCoordinates()[0]*canvas.width, path[i].getCoordinates()[1]*canvas.height, (canvas.width/canvas.height)*1, 0, 2 * Math.PI);
				ctx.fillStyle = "red";
	     		ctx.fill();
	     		ctx.closePath();
			}
		} catch(err) {
			//do nothing
		 	;
		}
	}


	//draw nodes if show details is active
	for (var i = 0; i < nodes.length; i++) {
		if(showDetails){
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.arc(nodes[i].getCoordinates()[0]*canvas.width, nodes[i].getCoordinates()[1]*canvas.height, (canvas.width/canvas.height)*1.5, 0, 2 * Math.PI);
			ctx.fillStyle = "pink";
     		ctx.fill();
     		ctx.closePath();
     		for (var j = 0; j < nodes[i].getConnectedNodes().length; j++) {
     			ctx.beginPath();
				ctx.strokeStyle = "pink";
				ctx.moveTo(nodes[i].getCoordinates()[0]*canvas.width, nodes[i].getCoordinates()[1]*canvas.height);
				ctx.lineTo(nodes[i].getConnectedNodes()[j].getCoordinates()[0]*canvas.width, nodes[i].getConnectedNodes()[j].getCoordinates()[1]*canvas.height);
				ctx.stroke();
				ctx.closePath();

     		}
 		}
	}

}, 250); //WAIT 250ms