function launch(appName) {
  var xhr = new XMLHttpRequest();
  var url = `open/app/${appName}`;
  xhr.open("POST", url, false);
  xhr.send();
}

function close(appName) {
  var xhr = new XMLHttpRequest();
  var url = `close/app/${appName}`;
  xhr.open("POST", url, false);
  xhr.send();
}
