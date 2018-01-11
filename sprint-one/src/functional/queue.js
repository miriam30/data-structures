var Queue = function() {
  var someInstance = {};
  var newKey = 1
  var oldKey = 1

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[newKey] = value
    newKey++
  };

  someInstance.dequeue = function() {
    var val = storage[oldKey]
    delete storage[oldKey]
    oldKey++
    return val
  };

  someInstance.size = function() {
    if(newKey - oldKey > 0){
      return newKey - oldKey
    } else {
      return 0
    }
  };

  return someInstance;
};
