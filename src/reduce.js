const head = require('./head');
const tail = require('./tail');

const reduceElement = (list,result,callBackFunction) => {
    if(list.length > 0){
        let element = head(list);
        result = result?callBackFunction(result,element):element;
        return reduceElement(tail(list),result,callBackFunction);
    }
    return result;
}

const reduce = (list,callBackFunction,start) => {
    return reduceElement(list,start,callBackFunction);
}

module.exports = reduce;