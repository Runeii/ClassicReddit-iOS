const side = document.querySelector('.side')

let sideButton = document.createElement('button');
sideButton.classList.add('extension___sidebutton');
sideButton.innerText = 'Toggle sidebar';
sideButton.addEventListener('click', () => {
    side.classList.toggle('visible');
})

side.parentNode.insertBefore(sideButton, side);

const galleryLinks = document.querySelectorAll('a[href*="reddit.com/gallery"]')

const url = new URL(window.location.href);
galleryLinks.forEach(el => {
    url.href = el.href;
    url.hostname = 'old.reddit.com';
    url.path = url.pathname.replace('/gallery', '')
    el.href = url.href
})
