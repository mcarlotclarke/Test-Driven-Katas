// const wrap = (line, maxLen) => "";

// if str is empty
// if str.length is less than numCol
function wrap (str, numCol){
    if (str.length === 0){
        return '';
    } else if (str.length < numCol){
        return str;
    }
}

module.exports = wrap;