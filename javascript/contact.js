function changeTextFour(event) {
  event.preventDefault();
  let contactHeading = document.querySelector("#contact-heading");
  contactHeading.innerHTML =
    "Und jetzt: Wie können Sie Kontakt mit mir aufnehmen?";
  let contactIntro = document.querySelector("#contact-intro");
  contactIntro.innerHTML =
    "Ich will mich zunächst bei Ihnen bedanken, dass Sie sich die Zeit genommen haben, meine Website nicht nur zu besuchen, sondern sie auch zu erkunden. Ich wollte Ihnen zeigen, wer ich bin. Und nun zeige ich Ihnen einige Wege, wie Sie Kontakt mit mir aufnehmen können. Und vergessen Sie nicht, meine Profile in den Schauspielerportalen zu besuchen.";
  let contactMailText = document.querySelector("#contact-mail-text");
  contactMailText.innerHTML =
    "Der wahrscheinlich einfachste Weg wird über Email sein, <br> solange Outlook nicht all meine Mails in den Spam Ordner verfrachtet <br> So ist es aber eine Gewohnheit diesen jeden Tag zu überprüfen ;)";
  let emailButton = document.querySelector("#email-button");
  emailButton.innerHTML = "Schreiben Sie eine Email";
  let contactMoreWays = document.querySelector("#contact-more-ways");
  contactMoreWays.innerHTML = "Und noch mehr:";
  let lookingForward = document.querySelector("#looking-forward");
  lookingForward.innerHTML = "Ich freue mich Sie kennen zu lernen!";
}

let changeLanguageFour = document.querySelector("#german-four");
changeLanguageFour.addEventListener("click", changeTextFour);
