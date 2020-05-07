console.log('hello')

const hamburger=document.querySelector('.hamburger_img');
const navigation=document.querySelector('.nav');

hamburger.addEventListener('click',()=>{
    navigation.classList.toggle('visibility')
})