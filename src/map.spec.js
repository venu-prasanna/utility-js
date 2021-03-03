const map = require('./map')
const cube = require('./cube')


describe('Map', () => {
    it('map([],cube)  should return []', () => {
        expect(map([],cube)).toEqual([]);
    });

    it('map([1,2,3], identity)  should return [1,2,3]', () => {
        const identity = (number) => number;
        expect(map([1,2,3], identity)).toEqual([1,2,3]);
    });
    
    it('map([1,2,3], cube)  should return [1,8,27]', () => {
        expect(map([1,2,3], cube)).toEqual([1,8,27]);
    });

    it('map([a{x : 10}],someObject => someObject.x + 1)  should return [11]', () => {
        expect(map([{x : 10}],someObject => someObject.x + 1)).toEqual([11]);
    });
})
