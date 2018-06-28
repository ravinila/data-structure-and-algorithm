/* Create a event emitter with subscirbe, emit, release events */
/* Which has to do the following performance */

/* START - CODE USAGE */
var emitter = new Emitter();

/* Callbacks */
var callback1 = function (a, b) { console.log("callback1", a, b); };
var callback2 = function (a, b) { console.log("callback2", a, b); };
var callback3 = function (a, b) { console.log("callback3", a, b); };

// 1. Support subscribing to events.
var sub1 = emitter.subscribe('event_name', callback1);
var sub2 = emitter.subscribe('event_name', callback2);
var sub3 = emitter.subscribe('event_name', callback3);

// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.

var foo = "FOO", bar = "BAR"; // Here foo & bar are arguments used to pass on callbacks

emitter.emit('event_name', foo, bar);
/* 

Output:
callback1 FOO BAR
callback2 FOO BAR
callback3 FOO BAR

** This outputs same like calling the below callbacks : 

callback1(foo, bar);
callback2(foo, bar);
callback3(foo, bar);

*/

// 3. Support unsubscribing existing subscriptions by releasing them.
sub2.release(); // `sub2` is the reference returned by `subscribe` above
/* Here the sub2 is removed from the emitter */

emitter.emit('event_name', foo, bar);

/* 

Output:
callback1 FOO BAR
callback3 FOO BAR

** This outputs same like calling the below callbacks : 

callback1(foo, bar);
callback3(foo, bar);

*/

/* END - CODE USAGE */


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
      
      /* Store callbacks for the release (or remove) purpose */
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
