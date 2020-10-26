const assert = require("assert");

describe("add", function () {
    it("should add numbers correctly in python", function () {
      var add = Polyglot.eval("python", "2 + 3");
      assert.equal(add, 5);
    });
});
