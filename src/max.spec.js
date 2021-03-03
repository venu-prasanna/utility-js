const max = require('./max');

describe('Max',()=>{
    it('max([1,2,3,4]) should return 4',()=>{
        expect(max([1,2,3,4])).toEqual(4);
    });
})