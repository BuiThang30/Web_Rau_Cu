const slider = document.getElementById("slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;

function getItemWidth() {
  return slider.children[0].offsetWidth + 40; // card + gap
}

next.onclick = () => {
  const maxIndex = slider.children.length - 3;
  index++;
  if (index > maxIndex) index = 0;
  slider.style.transform = `translateX(${-index * getItemWidth()}px)`;
};

prev.onclick = () => {
  const maxIndex = slider.children.length - 3;
  index--;
  if (index < 0) index = maxIndex;
  slider.style.transform = `translateX(${-index * getItemWidth()}px)`;
};
