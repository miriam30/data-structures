var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.newKey = 1;
  someInstance.oldKey = 1;
  someInstance.storage = {}

  return someInstance;
};

var queueMethods = {
  enqueue: function(data){
    this.storage[this.newKey] = data;
    this.newKey++
  },
  dequeue: function(){
    var value = this.storage[this.oldKey]
    delete this.storage[this.oldKey]
    this.oldKey++
    return value
  },
  size: function(){
    if (this.newKey - this.oldKey >0) {
      return this.newKey - this.oldKey
    } else {
      return 0
    }
  }
};
