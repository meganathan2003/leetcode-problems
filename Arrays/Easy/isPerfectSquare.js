/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {

    if (num === 1 || num === 0) return true;


    let left = 1;
    let right = num / 2; // 8


    while (left <= right) { // 1 <= 8

        let mid = Math.floor(left + (right - left) / 2);
        console.log(mid);


        if (mid * mid === num) {
            return true;
        }
        if (mid * mid < num) {
            left = mid + 1
        }
        if (mid * mid > num) {

            right = mid - 1;
        }

    };

    return false;
}

const num = 16;
console.log(isPerfectSquare(num));
