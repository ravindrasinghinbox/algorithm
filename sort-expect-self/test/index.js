var assert = chai.assert;

describe('Sort element expect self',function(){
    it("Should work with 0 element",function(){
        var output = [30, 20, 10].arrange(0);
        assert.deepEqual([30, 10, 20],output);
    });
    it("Should work with 2 element",function(){
        var output = [10, 4, 11, 7, 6, 20].arrange(2);
        assert.deepEqual([4, 6, 11, 7, 10, 20],output);
    });
    it("Should work with 3 element",function(){
        var output = [30, 20, 10, 15].arrange(3);
        assert.deepEqual([10, 20, 30, 15],output);
    });
    it("Should work equal with 3 element",function(){
        var output = [30, 20, 10, 15].arrange(3);
        assert.notDeepEqual([10, 20, 30],output);
    });
});