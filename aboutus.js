
const toggle=document.querySelector('.sandwitch_btn');

const nav_links=document.querySelector('.nav_links');
console.log(toggle,nav_links)

toggle.addEventListener("click",()=>{
     nav_links.classList.toggle("toggle");
})

