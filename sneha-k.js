// Graph coloring problem:
// -The problem is solved by storing the data in the form of a graph and then traversing the graph
// using breadth first search algorithm
// -Each node is colored on the way if not already coloured
// -However, a node is not allowed to have the same color as any of its neighbours


//Hash map --> key is node name, value is object containing properties of node

const probStmt = {
    a:{
        name: "a",
        neighbours:["b","c","e"],
        color:null
    },

    b:{
        name: "b",
        neighbours:["a","c","d"],
        color:null
    },

    c:{
        name: "c",
        neighbours:["a","b","d","e","f"],
        color:null
    },

    d:{
        name: "d",
        neighbours:["b","c","f"],
        color:null
    },

    e:{
        name: "e",
        neighbours:["a","c","f"],
        color:null
    },

    f:{
        name: "f",
        neighbours:["e","c","d"],
        color:null
    }
}

const availColors = ["Blue", "Green", "Red", "Yellow"];

//any 1 node is hardcoded as root
const rootNode = "a";

//Queue to store unvisited nodes
let unvisitedQueue = [];

//-----------------------------------Breadth first search start----------------------------------------

unvisitedQueue.push(rootNode);
probStmt[rootNode].color = availColors[0];

while (unvisitedQueue.length > 0){

    let currNode = unvisitedQueue.shift();
    let currNeighbours = probStmt[currNode].neighbours;
 
    for(let i = 0; i<currNeighbours.length; i++){
        let currNeighbour = probStmt[currNeighbours[i]];

        if(currNeighbour.color === null){
            assignColor(currNeighbour);
            unvisitedQueue.push(currNeighbour.name);            
        } else{
            continue;
        };
    }
};

//-----------------------------------Breadth first search end----------------------------------------


//this function assigns a color to the node that is passed as the argument
//ensures this node does not get assigned a color, belonging to any of its neighbours
function assignColor(node){

    colrQueue = [...availColors];
    neighbours = node.neighbours;

    for (let i=0; i<neighbours.length; i++){

        let neighbourClr = probStmt[neighbours[i]].color;

        //if the neighbour is coloured, remove that color from the queue of possible colors that can be assigned to present node
        if (neighbourClr!==null){
            colrQueue.splice(colrQueue.indexOf(neighbourClr), 1);
        }else{
            continue;
        };
    };

    let nodeClr = colrQueue.shift();
    node.color = nodeClr;

};

//Displays the result in console
for(node in probStmt){
    console.log(`${probStmt[node].name}  :  ${probStmt[node].color}`);
};



