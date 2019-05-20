/*

Input:
var x = {
    name: "Vijay",
      address: {
          personel: {
                city: "Mananthavady",
              area: {
                landmark: "Well"
            },
              attractions: ["lake", "park"]
        }
    }
}


Write a function flatten(x, "user") which will flatten the object like this :


Output:

{
  "user_address_personel_attractions_0": "lake",
  "user_address_personel_attractions_1": "park",
  "user_address_personel_area_landmark": "Well",
  "user_address_personel_city": "Mananthavady",
  "user_name": "Vijay"
}
*/

function flatten(obj, name) {

  return Object.keys(obj).reduce((flattenedObject, currentProperty) => {
    if(typeof(obj[currentProperty]) == "object") {
      flattenedObject = {...flatten(obj[currentProperty], name+"_"+currentProperty), ...flattenedObject}
    } else {
      flattenedObject[name+"_"+currentProperty] = obj[currentProperty];
    }
    return flattenedObject;
  }, {})
}

console.log(flatten(x, "user"));
