class Node{
	constructor(x, y, description, name){
		this.x = x;
		this.y = y;
		this.description = description;
		this.connectedNodes = [];
		this.name = name;
		this.max_distance = 60;
	}

	getConnectedNodes(){
		return this.connectedNodes;
	}

	addNode(n){
		this.connectedNodes.push(n);
	}

	getName(){
		return this.name;
	}

	getCoordinates(){
		return [this.x, this.y];
	}

	getDescription(){
		return this.description;
	}

	checkNodes(nodes, forbiddennodes, width, height){
		this.connectedNodes = [];
		for (var i = 0; i < nodes.length; i++) {
			if (this != nodes[i]){
				/*if((!forbiddennodes.includes(this.getName()) && forbiddennodes.includes(nodes[i].getName())) || (forbiddennodes.includes(this.getName()) && !forbiddennodes.includes(nodes[i].getName()))){
					;
				} else {
				}*/
				//todo
				var node_distance = width/33;
				var distance_vector = [(this.x*width)-(nodes[i].getCoordinates()[0]*width), (this.y*height)-(nodes[i].getCoordinates()[1]*height)];
				var distance = Math.floor(Math.sqrt(distance_vector[0]*distance_vector[0] + distance_vector[1]*distance_vector[1]));
				if(distance < node_distance){
					this.connectedNodes.push(nodes[i]);
				}
			}
		}
	}
}