/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var arr = moves.split('');
    var vertical = 0, horizontal = 0;
    for(let i in arr) {
        switch (arr[i]) {
            case 'U': 
                vertical ++;
                break;
            case 'D':
                vertical --;
                break;
            case 'L':
                horizontal ++;
                break;                
            case 'R':
                horizontal --;
                break;                
        }
    }
    if(horizontal === 0 && vertical ===0) {
        return true;
    }
    return false;
};

var l = 'UD';
console.log(judgeCircle(l));
