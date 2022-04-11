let navhead=document.getElementById("navhead")
let corporate=document.getElementById("corporate")
let l1=document.getElementById("l1")
let navhead2=document.getElementById("navhead2")
let l2=document.getElementById("l2")
let worldwide=document.getElementById("worldwide")

corporate.addEventListener("click",()=>{
     navhead.classList.toggle("flex")
    navhead.classList.toggle("block")
    l1.classList.toggle("white")

})
worldwide.addEventListener("click",()=>{
    navhead2.classList.toggle("flex")
   navhead2.classList.toggle("block")
   l2.classList.toggle("white")
   // l1.style.font="black"
})