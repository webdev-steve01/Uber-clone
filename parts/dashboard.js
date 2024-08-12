const profile = document.querySelector("#profile");
const extraFeatures = document.getElementById("try");
const toggle = true;

profile.addEventListener("click", () => {
  extraFeatures.style.display ='block'
  // alert("yo");
  if (toggle) {
    toggle = false;
  } else {
    toggle = true
  }

});

document.addEventListener('click', () => {
  extraFeatures.style.display = 'none'
}, true)
