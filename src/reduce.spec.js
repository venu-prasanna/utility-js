const reduce = require('./reduce');

describe('Reduce',() => {
    it('reduce([],(x,y)=>x+y) should return undefined',()=>{
        expect(reduce([],(x,y)=>[])).toEqual(undefined);
    });
    
    it('reduce([],v(x,y)=>x+y,10) should return 10',()=>{
        expect(reduce([],(x,y)=>[],10)).toEqual(10);
    });

    
    it('reduce([a,b,c],(x,y)=>x+y) should return abc',()=>{
        expect(reduce(['a','b','c'],(x,y)=>x+y)).toEqual('abc');
    });
    
    it('reduce([a,b,c],(x,y)=>x+y,"z") should return zabc',()=>{
        expect(reduce(['a','b','c'],(x,y)=>x+y,'z')).toEqual('zabc');
    });
})