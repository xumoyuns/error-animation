document.addEventListener("mousemove", function (e) {
  let body = document.querySelector("body");
  let iconBox = document.createElement("div");
  iconBox.textContent = "ERROR";
  iconBox.classList.add("icon-box");

  let x = e.offsetX;
  let y = e.offsetY;

  iconBox.style.left = x + "px";
  iconBox.style.top = y + "px";

  let size = Math.random() * 80;
  iconBox.style.width = Math.random() * 50 + size + "px";
  iconBox.style.color = "#" + (((1 << 44) * Math.random()) | 100).toString(16);
  iconBox.style.fontSize = Math.random() * 20 + "px";

  iconBox.style.height = Math.random() * 200 + size + "px";

  let transformValue = Math.random() * 360;
  iconBox.style.transform = " rotate(" + transformValue + "deg)";

  body.appendChild(iconBox);

  setTimeout(function () {
    iconBox.remove();
  }, 1000);
});
