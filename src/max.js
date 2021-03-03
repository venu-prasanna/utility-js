const reduce = require("./reduce");

const max = (list) => {
    const callBackFunction = (a,b) => (a>b)?a:b;
    return reduce(list,callBackFunction,undefined);
}

module.exports = max;