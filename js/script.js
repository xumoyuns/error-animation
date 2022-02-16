document.addEventListener("mousemove", function (e) {
  var fontType = [
    "Shizuru",
    "Redressed",
    "Syne Tactile",
    "Playfair Display",
    "Inconsolata",
    "Lobster",
    "Dancing Script",
    "Architects Daughter",
    "Indie Flower",
    "Questrial",
    "Cookie",
  ];
  var num;
  num = Math.floor(Math.random() * 11);
  console.log(fontType[num]);
  let body = document.querySelector("body");
  let iconBox = document.createElement("div");
  iconBox.textContent = "ERROR";
  iconBox.classList.add("icon-box");

  let x = e.offsetX;
  let y = e.offsetY;

  iconBox.style.left = x + "px";
  iconBox.style.top = y + "px";

  let size = Math.random() * 80;
  iconBox.style.width = Math.random() * 80 + size + "px";
  iconBox.style.color = "#" + (((1 << 44) * Math.random()) | 100).toString(16);
  iconBox.style.fontSize = Math.random() * 40 + "px";
  iconBox.style.fontFamily = fontType[num];

  iconBox.style.height = Math.random() * 400 + size + "px";

  let transformValue = Math.random() * 360;
  iconBox.style.transform = " rotate(" + transformValue + "deg)";

  body.appendChild(iconBox);

  setTimeout(function () {
    iconBox.remove();
  }, 1000);
});
