function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
// use like
r(function(){
  var button = document.getElementById("button");
  button.disabled = true;
});

function checkLength() {
  var textarea = document.querySelector("textarea");
  var button = document.getElementById("button");
  if (textarea.textLength == 0) {
    button.disabled = true;
  }
  else {
    button.disabled = false;
  }
}

function formSubmit() {
  button.disabled = true;
  button.style.cursor = "wait";
  
  
}