/* Create a event emitter with subscirbe, emit, release events */
/* Which has to do the following performance */

/* START - TESTING */
var emitter = new Emitter();

// 1. Support subscribing to events.
var sub = emitter.subscribe('event_name', callback);
var sub2 = emitter.subscribe('event_name', callback2);

// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('event_name', foo, bar);

callback(foo, bar);
callback2(foo, bar);

// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above

emitter.emit('event_name', foo, bar);

callback2(foo, bar);

/* END - TESTING */


/* ****************** Actual Emitter Implementation ********************* */

function Emitter(){
  var events = {}, subMap = {}, increment = 0;
  
  /* Subscribe handler */
  this.subscribe = function(eventName, callback){
       
    return new Sub(eventName, callback);
    
    function Sub(eventName, callback){
      
	  /* Generate a random uniq id and map it to subMap hash */
      var __id = Math.random().toString(36).substr(2, 9) + increment++;
      
      if(!events[eventName]) {
        events[eventName] = [];
      }
      events[eventName].push(callback);
      
      this.release = function(){
        events[eventName] = events[eventName].filter(function(item){
        	return subMap[__id] !== item;
        });
        
      }
      
      /* Store callbacks for the release (or remove) purpose
      subMap[__id] = callback;
      
    }
  }
  
  /* Emit handler */
  this.emit = function(){
    var args = Array.prototype.slice.call(arguments);
    var eventName = args[0];
    args = args.slice(1);
    if(events[eventName]){
      events[eventName].forEach(function(item, i){
        item.apply(this, args);
      });
    }
  }
  
}
