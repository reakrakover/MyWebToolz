function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
// use like
r(function(){
  var links = document.getElementsByClassName('links')
  if (links.length < 11) {
    document.getElementById('main').style.height = "100vh"
  }
  else {
    document.getElementById('main').style.height = "100%"
  }

});