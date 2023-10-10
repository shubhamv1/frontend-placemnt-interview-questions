// Define the first object
let obj1 = {
//Define first object
  brand: "Tesla",
  model: "X",
  category: "dual-motor",
  price: "$98490"
}


function check(obj1, obj2) {
  for(let key in obj2){   //iterate through each keys in obj2
    if(!obj1[key]) return false;   //check if key exists in obj1
    else{
      if(obj1[key] !== obj2[key]) return false;   //check if the values are same
    }
  }
  return true;
}
