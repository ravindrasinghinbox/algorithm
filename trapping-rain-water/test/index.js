if (typeof require !== 'undefined') {
     chai = require('chai');
     fs = require('../index');
}

var assert = chai.assert;

describe('Test', function () {
     var tests = [
          {
               args: [3, 0, 0, 2, 0, 4],
               expected: 10,
               msg: 'It should return 10'
          },
          {
               args: [3, 0, 0, 4],
               expected: 6,
               msg: 'It should return 6'
          },
          {
               args: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
               expected: 6,
               msg: 'It should return 6'
          },
          {
               args: [0, 5, 5, 0],
               expected: 0,
               msg: 'It should return 0'
          },
          {
               args: [0, 0, 0, 0],
               expected: 0,
               msg: 'It should return 0'
          },
     ];

     tests.forEach(function (obj,index) {
          it(obj.msg, function () {
               fs.preview(obj.args,index);
               assert.equal(fs.test(obj.args), obj.expected);
          });
     });
});