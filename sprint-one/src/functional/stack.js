var Stack = function() {
  var someInstance = {};
  var newKey = 0
  //var oldKey = 1

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[newKey] = value
    newKey++
  };

  someInstance.pop = function() {
    newKey--;
    var val = storage[newKey]
    delete storage[newKey]
    return val
  };

  someInstance.size = function() {
    if(newKey >0){
      return newKey
    } else {
      return 0
    }
  };

  return someInstance;
};
