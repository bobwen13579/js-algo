/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    const nodes = Array(N).fill(0);
    const graph = nodes.map(i => []);
    dislikes.forEach(i => { 
        const [s, e] = i;
        const sIndex = s - 1;
        const eIndex = e - 1;
        // console.log(graph,s,e)
        graph[sIndex].push(eIndex);
        graph[eIndex].push(sIndex);
    })
    for(let i =0; i < nodes.length; i++) {
        depth(i, nodes, graph)
        if (nodes[i] === 0 && !depth(i, nodes,graph,color)) return false;
        return true;
    }
};

const depth = (index, nodes, graph, color=1) => {
    nodes[index] = color;
    console.log(color);
    for(let i = 0; i < graph[index].length; i++){
        const next = graph[index][i];
        if (next === 0 && !depth(next, nodes, graph, -color) )return false;
        else if (next == color) return false;
    }
    return true;
};

console.log(possibleBipartition(3, [[1,2],[1,3],[2,3]]))