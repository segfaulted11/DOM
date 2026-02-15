//adding a class
let cls = document.getElementById("id1")
cls.classList.add('cls3')
console.log(cls.className)//cls1, cls2, cls3

//removing a class
cls.classList.remove('cls2')
console.log(cls.className)//cls1, cls3