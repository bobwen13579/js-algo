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
    // 多联通分量
    for(let i =0; i < nodes.length; i++) {
        if (nodes[i] === 0 && !dfsCheckDifColor(i, nodes,graph,1)) return false;
    }
    return true;
};

const dfsCheckDifColor = (index, nodes, graph, color=1) =>{
    nodes[index] = color;
    const nearNodes = graph[index];
    for(let i = 0; i < nearNodes.length; i++){
        const nextNodeCur = nearNodes[i];
        const next = nodes[nextNodeCur];
        // console.log(graph,nodes);
        if (next === color) return false;
        if (next === 0 && !depth(nextNodeCur, nodes, graph, -color) )return false;
    }
    return true;
};

// console.log(possibleBipartition(5, [[1,2],[3,4],[4,5],[3,5]]))