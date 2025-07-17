document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-btn').addEventListener('click', function() {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('selection-screen').style.display = 'block';
    });

    document.getElementById('ten-participants').addEventListener('click', function() {
        configureParticipants(10);
    });

    document.getElementById('sixteen-participants').addEventListener('click', function() {
        configureParticipants(16);
    });

    function configureParticipants(number) {
        document.getElementById('selection-screen').style.display = 'none';
        const participantsConfig = document.getElementById('participants-config');
        participantsConfig.innerHTML = '';

        for (let i = 1; i <= number; i++) {
            const participantDiv = document.createElement('div');
            participantDiv.innerHTML = `
                <h3>Participante ${i}</h3>
                <label>Nombre: </label><input type="text" id="name-${i}"><br>
                <label>Imagen: </label><input type="file" id="image-${i}"><br>
            `;
            participantsConfig.appendChild(participantDiv);
        }

        document.getElementById('setup-screen').style.display = 'block';
    }
});
