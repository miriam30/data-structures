var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {}
    someInstance.add = 1,
    someInstance.shift = 1,
    someInstance.storage = {}

_.extend(someInstance, queueMethods)

return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.add] = value;
    this.add++;
  },
  dequeue: function(){
    var val = this.storage[this.shift];
    delete this.storage[this.shift];
    this.shift++;
    return val;
  },
  size: function() {
    if(this.add - this.shift > 0){
      return this.add - this.shift;
    } else {
      return 0;
    }
  }

  };
