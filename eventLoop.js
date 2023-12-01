console.log(1)
setTimeout(()=>{
  console.log(2)
},1000)
setTimeout(()=>{
  console.log(3)
},0)
console.log(4)
// event loop - Js is a single threaded lang , it completes synchronous tasks and put async tasks/webApi in event 
// queue , when all sync tasks exit from js callstack , event queue tasks put to js callstack and executes
// this is known as eveent loop
// so , above output is - 1 4 3 2