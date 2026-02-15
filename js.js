//getting/reading attribute (values only)---->

let attribute_get = document.getElementById("id1")


let attribute_get1 = attribute_get.getAttribute('class')//pass the name of the artibute as the argument
console.log(attribute_get1)//cls1, returns the value of the attribute

let attribute_get2 = attribute_get.getAttribute('id')//attribute = id
console.log(attribute_get2)//id1

let attribute_get3 = attribute_get.getAttribute('style')//attribute = style
console.log(attribute_get3)//color:red


//setting/creating attibute (the attribute itself and the value)--->

let attribute_set = document.getElementById("id2")

let attribute_set1 = attribute_set.setAttribute('class','h2-cls')//the attribute itself (class) and its value has been set
console.log(attribute_set.getAttribute('class'))//h2-cls

let attribute_set2 = attribute_set.setAttribute('style','color:maroon')//the color of this element will become maroon


// Removing an attribute (itself)-->

let attribute_remove = document.getElementById("id3")
attribute_remove.removeAttribute('id')//it will remove the attribute id, from the selected element(h1) which had an id and its value was id3.
console.log(attribute_remove.getAttribute('id'))//null


//updating/changing an attribute (value)--->

let attribute_update = document.getElementById("previous")

console.log(attribute_update.getAttribute('id'))//previous, the previous value

attribute_update.setAttribute('id','new')
console.log(attribute_update.getAttribute('id'))//new, the new value once the its been updated.