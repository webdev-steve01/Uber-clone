const moonPath =
  "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z";

const sunPath =
  "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z";

const darkMode = document.querySelector("#darkMode");

let toggle = false;
darkMode.addEventListener("click", () => {
  const timeline = anime
    .timeline({
      duration: 750,
      easing: "easeOutExpo",
    })
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }],
    })
    .add({
      targets: ".sun",
    })
    .add(
      {
        targets: ".first-part",
        backgroundColor: toggle ? "rgb(0, 0, 0)" : "rgb(255,255,255)",
        color: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
      },
      "-= 550"
    )
    .add({
      targets: ".form",
      border: toggle ? "1px solid transparent" : "1px solid black",
    })
    .add(
      {
        targets: ".btn",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(0, 0, 0)",
        color: toggle ? "rgb(22,22,21)" : "#ffffff",
      },
      "-=750"
    );
  if (toggle == true) {
    toggle = false;
  } else {
    toggle = true;
  }
});
