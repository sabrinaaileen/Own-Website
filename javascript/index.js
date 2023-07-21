function changeText(event) {
  event.preventDefault();
  if (event.target.value === "german") {
    let helloThere = document.querySelector("#hello-there");
    helloThere.innerHTML = "👋🏽 Seien Sie gegrüßt! Ich bin";
    let based = document.querySelector("#based");
    based.innerHTML =
      " 🇩🇪 Schauspielerin und Frontend Developer aus München, Deutschland";
    let timeToMeet = document.querySelector("#time-to-meet");
    timeToMeet.innerHTML = "Es wird Zeit, sich besser kennenzulernen!";
    let welcome = document.querySelector("#welcome");
    welcome.innerHTML = "Willkommen auf meiner Website!";

    let introductionText = document.querySelector("#introduction-text");
    introductionText.innerHTML = `Ich freue mich so sehr, dass Sie hier sind! Lassen Sie mich Ihnen meine Geschichte erzählen, damit Sie die Möglichkeit haben, mich besser kennenzulernen. Ja, ich bin Schauspielerin und ich liebe es. Doch im letzten Herbst habe ich auch meine Liebe für das Programmieren entdeckt. Bevor ich meine Reise mit SheCodes begann, kam ich mit Python in Kontakt und war überrascht, wie schnell ich es verstanden habe und wie viel Spaß es macht, zu programmieren. Und jetzt kann ich mit HTML, CSS, Javascript und React programmieren. Ich habe ein GitHub-Profil und weiß, wie man auf Netlify hostet. Ich kann mit Flexbox, APIs, Bootstrap, SEO, VS Code, CodeSandbox umgehen und ich weiß, wie man eine Website mit Responsive auf unterschiedlichen Geräten benutzerfreundlich macht. Die nächsten Schritte werden TypeScript und die Verbesserung von Python sein.
<br>
<br>
Diese Website ist also für meine beiden Leidenschaften gedacht. Sie finden alles zu meinen bevorstehenden Auftritten, meinem Showreel, meinen Fotos und den Infos zu meinen Coding-Projekten.
<br>
<br>
 Das Leben kann manchmal hart sein. Aber das sind die Zeiten, die mich herausgefordert haben. Damit ich die Person werden kann, die ich sein möchte. Und manchmal werden wir scheitern und manchmal werden wir fallen. Aber was wichtigste ist: Jedes Mal werden wir wieder aufstehen, aus unseren Fehlern lernen und wachsen.
 <a href="/contact.html" class="contact-button" title="Let's get in touch!"
        >Schreiben Sie mir!</a
      >`;
    let firstImpression = document.querySelector("#first-impression");
    firstImpression.innerHTML = "Der erste Eindruck ist alles";
    let actingOverview = document.querySelector("#acting-overview");
    actingOverview.innerHTML =
      "Hier gelangen Sie zu einer Übersicht meiner bevorstehenden Auftritte und meines Lebenslaufs. Zusätzlich finden Sie hier noch mehr Bilder, mein AboutMe und mein Showreel. Enjoy it!";
    let watchActing = document.querySelector("#watch-acting");
    watchActing.innerHTML = "Schauspiel";
    let codingWork = document.querySelector("#coding-work");
    codingWork.innerHTML = "Meine Coding Projekte";
    let codingOverview = document.querySelector("#coding-overview");
    codingOverview.innerHTML =
      "Hier finden Sie eine Übersicht meiner Projekte. Von den Anfängen bis zur letzten Arbeit";
    let watchCoding = document.querySelector("#watch-coding");
    watchCoding.innerHTML = "Coding";
    let changeToEnglish = document.querySelector("#german-one");
    changeToEnglish.innerHTML = "English";
    let changeValue = document.getElementById("german-one");
    changeValue.value = "english";
  } else {
    location.reload();
  }
}

let changeLanguage = document.querySelector("#german-one");
changeLanguage.addEventListener("click", changeText);
