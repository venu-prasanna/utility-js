const head = require('./head');
const tail = require('./tail');

const filterElement = (list,result,callBackFunction) => {
    if(list.length > 0){
        let element  = head(list);
        if(callBackFunction(element)){
            result[result.length] = element;
        }
        return filterElement(tail(list),result,callBackFunction);
    }
    return result;
}

const filter = (list,callBackFunction) => {
    return filterElement(list,[],callBackFunction);
}

module.exports = filter;