// get all elements with a class of collapsible
const collapsible = document.querySelectorAll(".collapsible");
console.log(collapsible);
// loop through each element we selected
collapsible.forEach((item)=>{ // we'll call each element item
    item.addEventListener("click", function(){
        this.classList.toggle("collapsible-expanded");
    })
})