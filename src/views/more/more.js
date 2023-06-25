import './more.css'


let guanbi = document.querySelector('.guanbi')
console.log(guanbi)
guanbi.addEventListener('click',function(){
    // location.href = '';
    window.history.back();
})

