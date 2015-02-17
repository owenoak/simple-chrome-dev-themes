var xhr = new XMLHttpRequest();
var stylesheet = 'theme.css';

xhr.open("GET", "/" + stylesheet, false);
xhr.send();
chrome.devtools.panels.applyStyleSheet(xhr.responseText);
