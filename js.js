//******innerHTML*****//

//getting/reading the content of an element--->

let xyz = document.getElementById('div1')
console.log(xyz.innerHTML)//it prints the innerHTML(the entire content both elements and texts inside this element) of the div element which's id is div1. 

/*
output -->  
 <ul>
        <li>lorem11</li>
        <li>lorem11</li>
        <li>lorem11</li>
        <li>lorem11</li>
    </ul>
*/

//changing/updating the content of an elemet--->

let xyz1 = document.getElementById('id-p')
console.log(xyz1.innerHTML)//"<i>MY NAME IS SF</i>", JUST LIKE IT WAS ORIGINALLY

xyz1.innerHTML = "<u>MY NAME IS JW</u>"
console.log(xyz1.innerHTML)//"<u>MY NAME IS JW</u>", ITS BEEN CHANGED TO

//setting/creating content within an elemet---->
let xyz2 = document.getElementById('id-h1')
console.log(xyz2.innerHTML)//nothing since no content is there

xyz2.innerHTML = "Content is being added"
console.log(xyz2.innerHTML)//"Content is being added"


//adding (instead of creating a new one or replacing an existing one) content---->

let abc = document.getElementById("div2")

// abc.innerHTML = "<p>this is paragraph 3</p>" // this one replaces the other two paragraphs inside #div2. if you want to add another element(s)beside the existing ones, use the follwoing method --

abc.innerHTML += "<p>This is paragraph 3</p>"

/*
output --> 

This is paragraph 1
This is paragraph 2
This is paragraph 3
*/

//removing content --->

let dfg = document.getElementById('div3')

console.log(dfg.innerHTML)
/* <p>This is paragraph 4</p>
<p>This is paragraph 5</p>*/

dfg.innerHTML=""
console.log(dfg.innerHTML)//the previous output would be gone