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

	checkNodes(nodes, width, height){
		for (var i = 0; i < nodes.length; i++) {
			var isFound = false;
			if(this.connectedNodes.includes(nodes[i])){
				isFound = true;
			}
			if (this != nodes[i] && !isFound){
				var distance_vector = [(this.x*width)-(nodes[i].getCoordinates()[0]*width), (this.y*height)-(nodes[i].getCoordinates()[1]*height)];
				var distance = Math.floor(Math.sqrt(distance_vector[0]*distance_vector[0] + distance_vector[1]*distance_vector[1]));
				if(distance < (width/height)*24){
					this.connectedNodes.push(nodes[i]);
				}
			}
		}
	}
}