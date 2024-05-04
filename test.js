// Function
function playKey (audioSelector) {
    const element = document.querySelector(audioSelector);

    if (element && element.localName === 'audio') {
        element.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const keyList = document.querySelectorAll('.key');

// For
for (let i = 0; i < keyList.length; i++) {

    const key = keyList[i];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`; 

    key.onclick = function () {
        playKey(idAudio);
    }

    key.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter') {
            key.classList.add('ativa');
        }

    }

    key.onkeyup = function () {
        key.classList.remove('ativa');
    }

}