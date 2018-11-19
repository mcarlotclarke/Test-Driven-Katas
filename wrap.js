// const wrap = (line, maxLen) => "";

// if str is empty
// if str.length is less than numCol

function wrap (str, numCol){
    if (str.length === 0){
        return '';
    } else if (str.length < numCol){
        return str;
    } else if (str.length === numCol){
        return str;
    }
}

// console.log('Lorem ipsum dolor \n sit eu amet, elit na \n magna sem amet nulla \n vel purus ac ligula.')

module.exports = wrap;
