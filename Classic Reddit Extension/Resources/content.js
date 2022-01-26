const side = document.querySelector('.side')
side.classList.add('visible')

let sideButton = document.createElement('button');
sideButton.classList.add('extension___sidebutton');
sideButton.innerText = 'Toggle sidebar';
sideButton.addEventListener('click', () => {
    side.classList.toggle('visible');
})

side.parentNode.insertBefore(sideButton, side);

