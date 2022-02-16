// funções de alertas da page 
// menu
var menuHome = document.getElementById('home');
var menuEventos = document.getElementById('evento');
var menuUsuarios = document.getElementById('usuario');
var menuRelatorios = document.getElementById('relatorio');

menuHome.addEventListener('click', function() {
    alert("Você clicou em home")
})

menuEventos.addEventListener('click', function() {
    alert("Você clicou em Eventos")
})

menuUsuarios.addEventListener('click', function() {
    alert("Você clicou em Usuarios")
})

menuRelatorios.addEventListener('click', function() {
    alert("Você clicou em Relatorios")
})

// desconectar
var desconectar = document.getElementById('desconectar');

desconectar.addEventListener('click', function() {
    alert("Realmente deseja nos Deixar?😢")
})

// cards
var cardEventos = document.getElementById('eventos');
var cardUsuarios = document.getElementById('usuarios');
var cardRelatorios = document.getElementById('relatorios');

cardEventos.addEventListener('click', function() {
    alert("Você clicou no card Eventos")
})

cardUsuarios.addEventListener('click', function() {
    alert("Você clicou no card Usuarios")
})

cardRelatorios.addEventListener('click', function() {
    alert("Você clicou no card Relatorios")
})