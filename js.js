// ********Traversing elements******

// basics --->

/*
When we say “traversing elements” in JavaScript DOM, we basically mean:
👉 Moving around the HTML tree from one element to another.
That’s it. You’re navigating the DOM like it’s a little family tree 🌳

🧠 Think of the DOM like a Family Tree

Imagine this HTML:

<div id="parent">
  <h1>Title</h1>
  <p>Paragraph</p>
</div>


The <div> is the parent
The <h1> and <p> are its children
And <h1> and <p> are siblings to each other

Traversing = walking through these relationships.

🔥 Types of DOM Traversing

There are mainly 3 directions you move:
1️⃣ Going Down (Parent → Child)
2️⃣ Going Up (Child → Parent)
3️⃣ Going Sideways (Sibling → Sibling)
*/


//1️⃣get the parent element--->
let children = document.getElementsByClassName("p-cls")

// To get the parent node of a specified node in the DOM tree, you use the parentNode property.

console.log(children[0].parentNode)
console.log(children[1].parentNode)
console.log(children[2].parentNode)

//they all returns the entire element of their parent (which is div). 

/*
output -->
<div>
    <p class="p-cls">paragraph 1</p>
    <p class="p-cls">paragraph 2</p>
    <p class="p-cls">paragraph 3</p>
</div>
*/

// The node.parentNode returns the read-only parent node of a specified node or null if it does not exist.




//2️⃣ get children of an element ---->

let parent = document.querySelector(".parent")

//to get the first child-
console.log(parent.firstElementChild)//<li>First Child</li>

//to get the last child-
console.log(parent.lastElementChild)//<li>Last Child</li>

//to get any child-
console.log(parent.children)//it returns an html colection of all the children

console.log(parent.children[2])//<li>Middle Child</li>

//you can also manipulate after selecting-

parent.children[3].innerText = "lol"

console.log(parent.children[3])




//3️⃣ get siblings of an element ------>

let currentChild = document.querySelector('#current-child')

//to get the next sibling element
console.log(currentChild.nextElementSibling)//<li>Fourth Child</li>

//to get the previous sibling element
console.log(currentChild.previousElementSibling)//<li>Second Child</li>