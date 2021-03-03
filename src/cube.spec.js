const cube = require('./cube');


describe('Cube', () => {

    it('Cube(2)  should return 8', () => {
        expect(cube(2)).toEqual(8);
    });

    it('Cube(3)  should return 27', () => {
        expect(cube(3)).toEqual(27);
    });
})