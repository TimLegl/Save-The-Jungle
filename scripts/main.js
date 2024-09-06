// Icon selektieren
const menuIcon = document.querySelector(".menu-icon");
// Navigation Container selektieren
const navContainer = document.querySelector(".nav-container");

// Initiale Rotationsvariable
let isRotated = false;

// EventListener hinzufügen
menuIcon.addEventListener("click", function() {
    // Rotation um 180 Grad umschalten
    if (isRotated) {
        menuIcon.style.transform = "rotate(0deg)";
        navContainer.classList.remove("nav-show");
        navContainer.classList.add("nav-hide");

    } else if (!isRotated) {
        menuIcon.style.transform = "rotate(180deg)";
        navContainer.classList.remove("nav-hide");
        navContainer.classList.add("nav-show");
    }
    isRotated = !isRotated;
});

// Zu Sektionen Scrollen
// const elementSection01 = document.getElementById("home");
// const elementSection02 = document.getElementById("about");
// const elementSection03 = document.getElementById("career");
// const elementSection04 = document.getElementById("contact");


// function meineScrollFunktion() {
//   scrollElement.scrollIntoView({ behavior: 'smooth', block: "end"});
// }

// Objekt erstellen und Schlüssel-Wert-Paare erstellen
const sections = {
  home: document.getElementById("home"),
  about: document.getElementById("about"),
  help: document.getElementById("help"),
  contact: document.getElementById("contact")
};

// Funktion erstellen und ein Ereignisobjekt als Parameter 'meinEvent' übergeben (enthält Informationen über das Ereignis das ausgelöst wurde z.B. 'click')
function meineScrollFunktion(meinEvent) {
  // Standardverhalten ignorieren
  meinEvent.preventDefault();
  // 'data-target'-Attribut selektieren
  const zielId = meinEvent.target.getAttribute("data-target");

  // Dynamisch nav-Höhe ermitteln
  const navHoehe = document.querySelector('nav').offsetHeight;

  // Elemente in Array in Variable speichern
  const scrollElement = sections[zielId];
  // Wenn Element aus Array "sections" geklickt wird
  if (scrollElement) {
    // Scrolle in Sichtbereich des Elements
    // scrollElement.scrollIntoView({ behavior: 'smooth', block: "end"});
    window.scrollTo({
      top: scrollElement.offsetTop - navHoehe, behavior: "smooth"
    });
  }
}

// Alle <li>-Elemente selektieren
const navigationListitems = document.querySelectorAll("li");
// Alle <a>-Elemente selektieren
const navigationLinks = document.querySelectorAll("a");

// Funktion bei Klick-Event auf ein <li>-Element auslösen('data-target'-Attribut im HTML-Dokument festlegen nötig)
navigationListitems.forEach(link => {
  link.addEventListener("click", meineScrollFunktion);
});

// Funktion bei Klick-Event auf ein <a>-Element auslösen ('data-target'-Attribut im HTML-Dokument festlegen nötig)
navigationLinks.forEach(link => {
  link.addEventListener("click", meineScrollFunktion);
});

// E-Mail Eingabe beim Absenden prüfen
// Button selektieren
const absendenElement = document.getElementById("absendenElement");
// Input-Feld selektieren
const inputFeld = document.getElementById("newsletter");
// RegEx E-Mail Muster erstellen
const emailMuster = /^[a-z0-9ß]{4,}@(web|hotmail|outlook|gmail|proton|icloud|yahoo)(\.(de|com))$/i;

// Klick-Ereignis EventListener hinzufügen
absendenElement.addEventListener("click", function(dasAbsendenEvent){
  dasAbsendenEvent.preventDefault();
  // Meldung wenn Feld leer
  if(inputFeld.value == ""){
    // inputFeld.value = "Das Feld darf nicht leer sein.";
    hinweisEinblenden("The field cannot be empty.");
  } else if(!emailMuster.test(inputFeld.value)){
    hinweisEinblenden("Please enter a valid email.")
  } else {
    hinweisEinblenden("You have been registered.\nPlease confirm the link in your email inbox.", true)
  };
});
//Neue Klasse gruenHinweis: Im else-Block wird die Funktion hinweisEinblenden mit einem zusätzlichen Parameter true aufgerufen, um anzugeben, dass der Hinweis grün dargestellt werden soll.

// Hinweis anzeigen Funktion
const hinweisEinblenden = (meldung, erfolgreicheEingabe = false) => {
  
  // Bestehenden Container entfernen
  let bestehendeMeldung = document.querySelector(".hinweisRahmen");
  if(bestehendeMeldung) {
    bestehendeMeldung.remove()
  }
  // Elemente im Arbeitsspeicher erstellen
  const hinweisContainer = document.createElement("div");
  const hinweisText = document.createElement("p");

  // Klassen dem Container hinzufügen
  hinweisContainer.classList.add("hinweisRahmen");

  // Prüfen ob RegEx Prüfung erfolgreich
  if(erfolgreicheEingabe) {
    hinweisContainer.classList.add("erfolgRahmen");
    inputFeld.value = "";
  }

  // Übergebenen String in Variable speichern
  hinweisText.innerText = meldung;
  // Text Element dem Cotainer hinzufügen
  hinweisContainer.appendChild(hinweisText);
  // Container nach inputFeld anzeigen
  inputFeld.insertAdjacentElement("afterend", hinweisContainer);
}
