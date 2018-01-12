var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.newKey = 1
  this.oldKey = 1
  this.storage = {}
};

Queue.prototype.enqueue = function(data){
  this.storage[this.newKey] = data;
  this.newKey++
};
Queue.prototype.dequeue = function(){
  var value = this.storage[this.oldKey]
  delete this.storage[this.oldKey]
  this.oldKey++
  return value
};
Queue.prototype.size = function(){
  if(this.newKey-this.oldKey >0){
    return this.newKey-this.oldKey
  } else {
    return 0
  }
  return new Queue
}
