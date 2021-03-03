const filter = require('./filter')

describe('Filter',()=>{
    it('filter([], x => true) should return []',() => {
        expect(filter([],() => true)).toEqual([]);
    });

    it('filter([1,2,3],x => true) should return [1,2,3]',() => {
        expect(filter([1,2,3],() => true)).toEqual([1,2,3]);
    });

    it('filter([1,2,3],x => false) should return []',() => {
        expect(filter([1,2,3],() =>false)).toEqual([]);
    });

    it('filter([1,2,3], x => x>1) should return [2,3]',() => {
        expect(filter([1,2,3],(element)=> element >1)).toEqual([2,3]);
    });

    it('filter([a,B,c,D], filterUpperCase) should return [B,D]',() => {
        const filterUpperCase = (element) => {
            return (element == element.toUpperCase());
        }
        expect(filter(['a','B','c','D'],filterUpperCase)).toEqual(['B','D']);
    });
})