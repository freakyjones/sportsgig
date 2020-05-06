
const togglebtn=document.querySelector('.toggle_btn')
const buttons=document.querySelector('.btn_section')


togglebtn.addEventListener('click',()=>{
    if(buttons.style="diaplay:none"){
        buttons.classList.toggle('visibility')
    
    }
})
