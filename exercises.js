module.exports = {
/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */
firstReverse : function(str){
    let reverseStr = '';
    if (typeof str === 'string'){
        return str.split('').reverse().join('');
    } else {
        return null;
    }
    
    return reverseStr;
},
 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */
alphaOrder : function (str){
    let alpha = '';
    if (typeof str === 'string'){
        return str.split('').sort().join('');
    } else {
        return null;
    }
    
    return alpha;
},
 /** Function: vowelCount
 * The function will take the num parameter being passed in and
 * return the number of vowels in the string
 * @param {string} num
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */
vowelCount : function (str){
    let arr = [];
    if(typeof str === 'string'){
        for (let i = 0; i < str.length; i++) {
            if(str[i].match(/[aeiouAEIOU]/)){
                arr.push(str[i]);
            }
        }
        return arr.length;
    } else {
        return null;
    }
},

 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */
timeConvert : function(str){
    if(typeof str === 'number'){
    var min = str % 60;
    var h = (str - min)/ 60;
    return h + ':' + min;
    } else {
        return null;
    }
},
 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */
repeatString : function (str, num){
    if (num > 0 ){
        var rep = str.repeat(num);
        return rep;
    } else {
        return null;
    }
}

/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */
}

/*module.exports = {
    firstReverse: firstReverse,
    alphaOrder: alphaOrder,
    vowelCount: null,
    timeConvert: null,
    repeatString: null
}*/
