function makeAppear() {
  document.getElementById("heading").style.opacity = 1;
  document.getElementById("heading").style.transform = "translateX(0px)";

  setTimeout(() => {
    document.getElementById("menu").style.opacity = 1;
  }, 1000);

  setTimeout(() => {
    document.getElementById("menu").style.opacity = 1;
  }, 1000);

  var paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis\
  suscipit, nemo mollitia asperiores maxime ad quidem quas, obcaecati\
  placeat ab reprehenderit ut ullam eos praesentium nam! Sint ullam alias\
  illo!";

  i = -1;
  setTimeout(() => {
    var time = setInterval(() => {
      addText(paragraph[++i], time);
    }, 30);
    document.getElementById("menu").style.opacity = 1;
  }, 1000);
}

function addText(letter) {
  console.log(letter);
  if (letter === undefined) clearInterval(time);
  else document.getElementById("the-text").innerHTML += letter;
}
