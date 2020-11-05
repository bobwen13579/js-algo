
    var trap = function(height) {
        if (height.length < 3) return 0;
        let area = 0;
        let lastHeight = 0;
        let left = 0;
        let right = height.length - 1;
        while (left < right) {
            const minH = Math.min(height[left], height[right]);
            console.log(lastHeight, minH);
            if ( minH > lastHeight) {
                lastHeight = minH;
                height.slice(left, right).forEach((i) => {
                    console.log(minH, i);
                    if (minH > i) area += minH - i;
                });
            }
            if (height[right - 1] > minH || height[right - 1] > height[right]) right --;
            else if (height[left - 1] > minH || height[left - 1] > height[left]) left ++;
            else {
                left ++;
                right --;
                console.log('12');
            }
        }
        console.log(area);
        return area;
    };
trap([0, 1, 3, 1, 1 ,3]);