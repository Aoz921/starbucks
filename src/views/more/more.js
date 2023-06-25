import './more.css'
let ziti = document.querySelector('.ziti');
// console.log(ziti);
// ziti.addEventListener('click', () => {
//     location.href = './button/dibu.html';
// });  

let guanbi = document.querySelector('.guanbi')
console.log(guanbi)
guanbi.addEventListener('click',function(){
    // location.href = '';
    window.history.back();
})