const head = require('./head');
const tail = require('./tail');

const mapElement = (list,result,callBackFunction)=>{
    if(list.length > 0){
        result[result.length] = callBackFunction(head(list));
        return mapElement(tail(list),result,callBackFunction);
    }
    return result;
}

const map = (list,callBackFunction) => {
    return mapElement(list,[],callBackFunction);
}

module.exports = map;