// i could not get an api key for the maps so i embedded it from google maps


const profile = document.querySelector("#profile");
const extraFeatures = document.getElementById("try");
const forME = document.getElementById('forMe')
const forAnother = document.querySelectorAll('.forAnother')
const switcher = document.getElementById("textWitch");
const changeClass = document.querySelectorAll('.round-button');
const currentText = document.querySelectorAll('.currentText')
const ham = document.getElementById('hamburger')
const innerBody = document.querySelectorAll('innerBody')
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

// const dropDown = () => {
//   forAnother.style.display = 'block'
// }
const replaceText = () => {
  forAnother.style.display = 'none'
  let holder;
  let giver;
  holder = forME.textContent
  giver = forAnother.textContent
  forME.textContent = giver
  forAnother.textContent = holder
}


changeClass.forEach((s) => {
  s.addEventListener('click', () => {
    s.classList.toggle("test")
  })
})
switcher.addEventListener('click', dropDown)

forAnother.forEach((s) => {
  s.addEventListener('click', () => {
  })
})

ham.addEventListener('click', () => {
  innerBody.forEach((s) => {
    s.classList.toggle('innerBodyShown')
  })
})

