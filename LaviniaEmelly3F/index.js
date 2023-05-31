
const modal = document.getElementById('myModal'); 
const btn = document.getElementById('myBtn'); 
const btnEnviar = document.querySelector('.enviar')
const campos = document.querySelector('.campo');
const closed = document.getElementsByClassName('close')[0];
const like = document.getElementById('coracao');

btn.onclick = function(){
    modal.style.display = "block";
}
closed.onclick = function(){
    modal.style.display = "none";
}
btnEnviar.addEventListener('click', () =>{
    alert('Cliente cadastrado');
});