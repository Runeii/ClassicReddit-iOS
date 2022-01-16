var styles = `
html,
body,
body > .header,
body > .content,
body > .side,
body > .footer-parent {
    max-width: 100vw; !important;
    width: 100vw;
    overflow-x: hidden !important;
    margin-right: 0px !important;
}
body {
    display: flex;
    flex-direction: column;
}

body > .header {
    order: 1;
}
body > .side {
    order: 2;
    overflow: hidden;
    width: 80vw;
    max-width: 600px;
    max-height: 99999px;
    margin: 0 auto 40px !important;
}
.side.hidden {
    padding: 0 !important;
    max-height: 0px;
    margin: 0px !important;
}
.extension___sidebutton {
    margin: 20px auto 20px;
    width: auto;
    max-width: 80vw;
    font-size: 3em;
}
body > .content {
    order: 3;
}
body > .footer-parent {
    order: 4;
}
div.child,
div.comment {
    margin-left: 10px !important;
    margin-right: 0 !important;
    padding-right: 0 !important;
}
div.child {
border-left-color: #333;
}
.tabmenu,
.comment .flat-list.buttons,
.midcol,
.mobile-web-redirect-bar,
.listingsignupbar,
.debuginfo,
.infobar-toaster-container,
#hsts_pixel {
    display: none !important;
}`
const css = document.createElement("style")
css.type = "text/css"
css.textContent = styles
document.head.appendChild(css)


const side = document.querySelector('.side')
side.classList.add('hidden')

const sideButton = document.createElement('button');
sideButton.classList.add('extension___sidebutton');
sideButton.innerText = 'Toggle sidebar';
sideButton.addEventListener('click', () => {
    side.classList.toggle('hidden');
})
side.parentNode.insertBefore(sideButton, side);