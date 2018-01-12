var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods)
    someInstance.counter = 0,
    someInstance.storage = {}
  return someInstance;
};

  var stackMethods = {
    push: function(data){
      this.storage[this.counter] = data;
      this.counter++;
    },
    pop: function(){
      this.counter--
      var value = this.storage[this.counter];
      delete this.storage[this.counter];
      return value;
    },
    size: function(){
      if(this.counter >0){
        return this.counter;
      } else {
        return 0;
      }
    }
};
