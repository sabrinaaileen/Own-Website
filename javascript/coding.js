function changeTextThree(event) {
  event.preventDefault();
  let codingTitle = document.querySelector("#coding-title");
  codingTitle.innerHTML = "Schauen wir uns meine Projekte an";
  let codingUndertitle = document.querySelector("#coding-undertitle");
  codingUndertitle.innerHTML =
    "Begonnen habe ich mit einem simplen Projekt über Spezi, danach habe ich meine erste Wetter Applikation programmiert. Dann programmierte ich eine Website über mich und eine über mein Hobby, um meine CSS Fertigkeiten zu erweitern und zu verbessern. Ich habe ein Weltuhr-Projekt realisiert und dann mein zweites Wetter-Projekt mit React programmiert. Jedes Projekt, welches ich poste, hat einen Link unter seinem Bild, damit Sie es sich genauer anschauen können. Viel Spaß!";
}

let changeLanguageThree = document.querySelector("#german-three");
changeLanguageThree.addEventListener("click", changeTextThree);
