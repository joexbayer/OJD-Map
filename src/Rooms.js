class Room {
	constructor(roomid, roomname, roomfloor, roomtype, node){
		this.roomid = roomid;
		this.name = roomname;
		this.floor = roomfloor;
		this.node = node;
		this.roomtype = roomtype;
	}

	getRoomID(){
		return this.roomid;
	}

	getRoomName(){
		return this.name;
	}

	getRoomFloor(){
		return this.floor;
	}

	getRoomNode(){
		return this.node;
	}

	getRoomType(){
		return this.roomtype;
	}
}