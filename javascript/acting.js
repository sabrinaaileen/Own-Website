function changeTextTwo(event) {
  event.preventDefault();
  if (event.target.value === "german") {
    let youAreHere = document.querySelector("#you-are-here");
    youAreHere.innerHTML = "Yeah! Sie sind da!";
    let actingIntroText = document.querySelector("#acting-intro-text");
    actingIntroText.innerHTML =
      "Lassen Sie uns einen Blick auf meine Videos und Fotos werfen!";
    let actingIntroTextTwo = document.querySelector("#acting-intro-text-two");
    actingIntroTextTwo.innerHTML = "Ich hoffe, sie gefallen Ihnen!";
    let actingInfoText = document.querySelector("#acting-info-text");
    actingInfoText.innerHTML =
      "Kommissarin, SEK-Beamte, Bäuerin, rebellische Königstochter, aufgebrachte Souffleuse oder heilige Johanna, kann ich. Egal ob Theater oder Film, ich bin immer bereit, mich zu 100% auf meine Rolle einzulassen. Eine Stärke von mir ist mein Improvisationstalent. Nicht nur mit den Trillerpfeifen auf der Bühne ein absolutes Muss, sondern eine wunderbare Ergänzung für alle Momente des Schauspiels und des Lebens. ";
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
    let changeToEnglish = document.querySelector("#german-two");
    changeToEnglish.innerHTML = "English";
    let changeValue = document.getElementById("german-two");
    changeValue.value = "english";
  } else {
    location.reload();
  }
}

let changeLanguageTwo = document.querySelector("#german-two");
changeLanguageTwo.addEventListener("click", changeTextTwo);
