const toggle_btn=document.querySelector('.toggle_btn');
const nav=document.querySelector('.nav_links');

toggle_btn.addEventListener('click',()=>{
   nav.classList.toggle('toggle')
})