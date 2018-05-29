/* 

Find the pairs of given sum from the given array

Sample example:
---------------

Input:
------
	arr[] = [5, 7, 10, 15, 25, 30, 35] --> array of numbers
	sum = 40 --> number

Output:
-------
	["5,35", "10,30", "15,25"]
  
*/

function getSumCombinationPairs(arr, sum) {
    var map = {}, pairsMap = {}, pairs = [], len = arr.length;

    for (let i = 0; i < len; i++) {
        map[arr[i]] = true;
    }

    for (let i = 0; i < len; i++) {
        let currentItem = arr[i], otherItem = sum - currentItem;
        if (map[otherItem]) {
            let _pairStr = currentItem + "," + otherItem;
            let _pairStrSwap = otherItem + "," + currentItem;

            if (!pairsMap[_pairStrSwap]) {
                pairsMap[_pairStr] = true;
                pairs.push(_pairStr);
            }
        }
    }

    return pairs;
}


/* Sample output */
var combinations = getSumCombinationPairs([5, 10, 15, 25, 30, 35], 40);

console.log(combinations);
