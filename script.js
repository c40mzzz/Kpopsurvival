javascript
document.getElementById('start-btn').addEventListener('click', function() {
    alert('Iniciando simulación...');
document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('selection-screen').style.display = 'block';
});

document.getElementById('ten-participants').addEventListener('click', function() {
    startSimulation(10);
});

document.getElementById('sixteen-participants').addEventListener('click', function() {
    startSimulation(16);
});

function startSimulation(participants) {
    console.log(`Iniciando simulación con ${participants} participantes`);
    // Aquí puedes agregar la lógica para iniciar la simulación
}
