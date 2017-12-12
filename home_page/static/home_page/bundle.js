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
  var text = $("#textArea").val();
  var lines = text.split(/\r|\r\n|\n/);
  var count = lines.length;

  button.disabled = true;
  button.style.cursor = "wait";

  document.getElementById('form').style.display = "none";
  document.getElementById('description').style.display = "none";
  document.getElementById('ytvid').style.display = "flex";
  document.getElementById('player').style.display = "block";
  document.getElementById('loadingGif').style.display = "block";
  document.getElementById('massage').innerHTML = "<span>" + count + " url's?! that could take a while...<br> so please enjoy this lovely video while we getting all your images size</span>";

  var videos = [
    "FNQxxpM1yOs",
    "8UVNT4wvIGY",
    "FavUpD_IjVY",
    "jdYJf_ybyVo",
    "23QOy9Q2qNI",
    "PDhVJfEFxik",
    "CF5u78G7pY4",
    "nfWlot6h_JM",
    "VHtKx2jk40U"
  ];
  var randomItem = videos[Math.random() * videos.length | 0];

  document.getElementById('player').setAttribute("src", "http://www.youtube.com/embed/" + randomItem + "?autoplay=1");

}
