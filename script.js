var wikitext = document.getElementById("wikitext");
var btn = document.getElementById("btn");
var div1 = document.getElementById("div1");
var randomBtn = document.getElementById("random_btn");


wikitext.addEventListener('keydown', pressEnterBtn);

//hit Search button to get results
btn.addEventListener('click', wikiLoad);

// press Enter key to get wikipedia articles
function pressEnterBtn(e) {
  if (e.keyCode == 13) {
    wikiLoad();
  }
}

//get Wikipedia articles from wiki Api
function wikiLoad(e){
  e.preventDefault();
  var request = new XMLHttpRequest();
  request.open('GET', 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + wikitext.value + '&origin=*');
  request.onload = function() {
    var theData = JSON.parse(request.responseText);
    div1.innerHTML = "";
    for (var i = 0; i < theData[1].length; i++) {
      console.log(theData[1][i] + " " + theData[3][i]);
      div1.innerHTML += '<a href=' + theData[3][i] +' target="_blank"><div class="links"><span class="alias">' + theData[1][i] + '</span><br>' + theData[2][i] + '</div></a>';
    }
  };
  request.send();
}
