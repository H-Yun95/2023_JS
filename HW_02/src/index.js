function changeColor() {
  const color0 = "color_blue";
  const color1 = "color_violet";
  const color2 = "color_yellow";
  if (window.innerWidth < 400) {
    document.body.className = color1;
  } else if (window.innerWidth > 600) {
    document.body.className = color2;
  } else {
    document.body.className = color0;
  }
}

window.addEventListener("resize", changeColor);
