/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let listObj = {}
    for(let i=0;i<list1.length;i++){
        for(let j=0;j<list2.length;j++){
            if(list1[i] === list2[j]){
                listObj[list1[i]] = i + j
            }
        }
    }
   let data = Object.keys(listObj).map(item => listObj[item]).sort( (a,b) => a-b)[0]
   let output =  Object.keys(listObj).filter(item => listObj[item] === data)
   return output;
}; 