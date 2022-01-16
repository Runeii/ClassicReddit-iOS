const url = new URL(window.location);
const sourceURL = url.href;
url.host = 'old.reddit.com';
window.location.replace(url.href);
