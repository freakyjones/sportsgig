console.log('hello')
const togglebtn=document.querySelector('.toggle_btn')
const buttons=document.querySelector('.btn_section')
console.log(buttons)
const img=document.querySelector('img');


togglebtn.addEventListener('click',()=>{
    if(buttons.style="diaplay:none"){
        buttons.classList.toggle('visibility')
    
    }
})
