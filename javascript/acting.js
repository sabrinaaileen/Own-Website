function changeTextTwo(event) {
  event.preventDefault();
  let youAreHere = document.querySelector("#you-are-here");
  youAreHere.innerHTML = "Yeah! Sie sind da!";
  let actingIntroText = document.querySelector("#acting-intro-text");
  actingIntroText.innerHTML =
    "Lassen Sie uns einen Blick auf meine Videos und Fotos werfen!";
  let actingIntroTextTwo = document.querySelector("#acting-intro-text-two");
  actingIntroTextTwo.innerHTML = "Ich hoffe, sie gefallen Ihnen!";
  let actingInfoText = document.querySelector("#acting-info-text");
  actingInfoText.innerHTML = "";
  let morePictures = document.querySelector("#more-photos");
  morePictures.innerHTML = "Noch mehr Bilder!";
  let morePicturesText = document.querySelector("#more-photos-text");
  morePicturesText.innerHTML =
    "Ich weiß genau, dass Sie danach gesucht haben und hier sind sie. Die Fotos werden regelmäßig aktualisiert.";
  let showreel = document.querySelector("#showreel");
  showreel.innerHTML = "Und da ist es: Mein SHOWREEL!";
  let showreelInfoText = document.querySelector("#showreel-info-text");
  showreelInfoText.innerHTML =
    "Jetzt kommen Sie in den Genuss meiner Showreel-Szenen. Ich werde mein Repetoire an bewegten Bildern regelmäßig erweitern.";
}

let changeLanguageTwo = document.querySelector("#german-two");
changeLanguageTwo.addEventListener("click", changeTextTwo);
