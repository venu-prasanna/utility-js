const tail = require('./tail')


describe('Tail', () => {

    it('tail([1,2,3])  shoud return [2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    it('tail([])  should reutrn []', () => {
        expect(tail([])).toEqual([]);
    });

})
