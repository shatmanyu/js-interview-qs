var obj1 = {
    name:"shatmanyu",
    address:{
      city:"delhi"
    }
  }
  console.log("obj1",obj1) 
  
  var obj2 = obj1 // normal copy same memory loc
  obj2.name = "pranav"
  console.log("obj2",obj2,obj1)
  var obj2 = {...obj1} // shallow copy other memory loc
  obj2.name = "pranav"
  obj2.address.city = "Mumbai"
  console.log("obj2",obj2,obj1)
  var obj2 = JSON.parse(JSON.stringify(obj1)) // deep copy other memory loc
  obj2.name = "pranav"
  obj2.address.city = "Mumbai"
  console.log("obj2",obj2,obj1)
  // normal copy/assignment points to same memory loc which will modify original 
  // shallow copy = different from normal copy as this assignes different memory loc if no object in object presents
  // deep copy = this also make different memory loc but for object in object also using Json.parse(Json.stringify(obj))
  // But in deep copy , json doesn't take keys whose values as strings so , we have to use Object.keys method 
  // to iterate the obj and put all values to another obj at different memory loc