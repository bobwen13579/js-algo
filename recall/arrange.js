// 全排列
 /**
  * @description: [1,2,3] => [[1,2,3] ....[3,2,1]]
  * @param {*}
  * @return {*}
  */
 const permute = (inputs = [1,2,3]) => {
    const res = [];
    // 巧妙
    const track = [];
    backtrack(inputs, track, res);
    console.log(res)
 }
 // 树的节点决策
 const backtrack = (inputs, track, res) => {
    // 遍历到终点
    if(track.length === inputs.length) {
        res.push([...track])
        return
    }
    // 子节点遍历
    inputs.forEach(el => {
        //判定条件
        if(!track.includes(el)){
            track.push(element);
            backtrack(inputs,track, res);
            // 会退到上一个节点做决策
            track.pop();
        }
    }); 
 }

 permute([0,1])