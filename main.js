// Selectors
const buttons = document.querySelectorAll('button');
const audios = document.querySelectorAll('audio');

// Logic
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener('click', () => {
        audios[i].play();

        button.onkeydown = function (event) {

            if (event.code === 'Enter' || event.code === 'Space') {
                button.classList.add('ativa');
            }
        }
        
        button.onkeyup = function () {
            button.classList.remove('ativa');
        }
    })
}