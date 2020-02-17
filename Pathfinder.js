//class Pathfinder from CityBuilder Project, adjusted for OJD.
//Pseudocode from: https://en.wikipedia.org/wiki/A*_search_algorithm


class Pathfinder {
	constructor(start, goal, nodes){
		this.start = start;
		this.goal = goal;
		this.path = [];
		this.nodes = nodes;
	}

	reconstruct_path(cameFrom, current){
		this.path.push(current);
		for (var i = 0; i < cameFrom.size; i++) {
			current = cameFrom.get(current);
			if(current != undefined){
				this.path.push(current);
			}
		}
		return this.path;
	}

	h(from){
		var distance_vector = [this.goal.getCoordinates()[0]-from[0], this.goal.getCoordinates()[1]-from[1]];
		var h_distance = Math.floor(Math.sqrt(distance_vector[0]*distance_vector[0] + distance_vector[1]*distance_vector[1]));
		return h_distance;
	}
	d(too, from){
		var distance_vector = [too[0]-from[0], too[1]-from[1]]
		var d_distance = Math.floor(Math.sqrt(distance_vector[0]*distance_vector[0] + distance_vector[1]*distance_vector[1]));
		return d_distance;
	}
	A_start(){
		/*
		if start == goal, reconstruct path.
		Start in start city, find known nodes, calculate distance;
		F(n) = g(n) + h(n), g(n) is length of current path and h(n) is actual distance from current node to goal.

		For node n, gScore[n] is the cost of the cheapest path from start to n currently known.
		d(current,neighbor) is the weight of the edge from current to neighbor
		tentative_gScore is the distance from start to the neighbor through current

		tentative_gScore = gScore[current] + d(current, neighbor)
            if tentative_gScore < gScore[neighbor]
                This path to neighbor is better than any previous one. Record it!
		*/

		var openSet = [this.start];

		const cameFrom = new Map();
		const gScore = new Map();
		gScore.set(this.start, 0);
		const fScore = new Map();
		fScore.set(this.start, this.h(this.start.getCoordinates()));
		var current = null;



		while(openSet.length > 0){
			//get the current node with lowest fScore.
			var current_best_score = Infinity;
			for (var i = 0; i < openSet.length; i++) {
				if (fScore.get(openSet[i]) < current_best_score){
					current_best_score = fScore.get(openSet[i]);
					current = openSet[i];
				}
			}
			if(current == this.goal){
				//todo
				return this.reconstruct_path(cameFrom, current);
			}
			//remove current from openSet
			openSet.splice(openSet.indexOf(current), 1);
			for (var i = 0; i < current.getConnectedNodes().length; i++) {
				var neighbor = current.getConnectedNodes()[i];
				// tentative_gScore is the distance from start to the neighbor through current
				var tentative_gScore = gScore.get(current) + this.d(current.getCoordinates(), neighbor.getCoordinates());

				//if neighbor doenst have gscore set it to Infinity.
				if(gScore.get(neighbor) == null){
					gScore.set(neighbor, Infinity);
				}
				if (tentative_gScore < gScore.get(neighbor)){
					cameFrom.set(neighbor, current);
					gScore.set(neighbor, tentative_gScore);
					fScore.set(neighbor, gScore.get(neighbor)+this.h(neighbor.getCoordinates()));

					if(!openSet.includes(neighbor)){
						openSet.push(neighbor);
					}
				}

			}
		}
		return this.reconstruct_path(cameFrom, current);

	}
}