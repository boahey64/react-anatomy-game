const searchInput = document.getElementById('textInput');
const stopButton = document.getElementById('stopButton');
const restartButton = document.getElementById('restartButton'); // Add a Restart button
const answers = [
  { word: 'Corpus vertebrae', abbreviations: [''] },
  { word: 'Lamina arcus vertebrae', abbreviations: [''] },
  { word: 'Pediculus arcus vertebrae', abbreviations: [''] },
  {
    word: 'Processus spinosus',
    abbreviations: ['Proc spinosus', 'Proc. spinosus'],
  },
  {
    word: 'Processus transversus',
    abbreviations: ['Proc transversus', 'Proc. transversus'],
  },
  { word: 'Fovea costalis', abbreviations: [''] },
  {
    word: 'Fovea costalis processus transversi',
    abbreviations: [
      'Fovea costalis proc transversi',
      'Fovea costalis proc. transversi',
    ],
  },
  { word: 'Foramen vertebrale', abbreviations: [''] },
  {
    word: 'Processus articularis superior',
    abbreviations: [
      'Proc articularis superior',
      'Proc. articularis superior',
      'Proc. articularis sup',
      'Proc articularis sup',
    ],
  },
  {
    word: 'Processus articularis inferior',
    abbreviations: [
      'Proc articularis inferior',
      'Proc. articularis inferior',
      'Proc. articularis inf',
      'Proc articularis inf',
    ],
  },
  { word: 'Foramen intervertebrale', abbreviations: [''] },
  { word: 'Discus intervertebralis', abbreviations: [''] },
  { word: 'Incisura vertebralis inferior', abbreviations: [''] },
  { word: 'Incisura vertebralis superior', abbreviations: [''] },
  { word: 'Articulatio zygapophysialis', abbreviations: [''] },
  // Add more answers
];

let countEntries = answers.length; // Anzahl der Einträge im Array
let multipliedCount = countEntries * 20; // Multipliziert die Anzahl der Einträge mit 20

let timeRemaining = multipliedCount; // Ändere dies auf deine gewünschte Zeit
let timerInterval = null;
let timerStarted = false;
let allWordsFound = false; // Hinzugefügte Variable, um den Status aller Wörter zu speichern

document.getElementById('output').textContent = multipliedCount;

function startCountdown() {
  timerStarted = true; // Setze timerStarted auf true, wenn der Timer gestartet wird
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const timerElement = document.getElementById('timer');

  if (timeRemaining <= 10) {
    timerElement.style.color = 'red';
  } else {
    timerElement.style.color = 'black';
  }

  timerElement.textContent = `Verbleibende Zeit: ${timeRemaining} Sekunden`;

  if (timeRemaining <= 0 || allWordsFound) {
    stopQuiz();
  } else {
    timeRemaining--;
  }
}

searchInput.addEventListener('input', () => {
  const input = searchInput.value.trim().toLowerCase();

  if (!timerStarted) {
    startCountdown();
  }

  if (input === '') {
    return;
  }

  answers.forEach((answer, index) => {
    const word = answer.word;
    const lowerCaseWord = word.toLowerCase();
    const abbreviations = answer.abbreviations.map((abbr) =>
      abbr.toLowerCase(),
    );

    if (
      !answers[index].found &&
      (lowerCaseWord === input || abbreviations.includes(input))
    ) {
      searchInput.value = '';
      document.getElementById(`${index + 1}`).innerHTML = `${
        index + 1
      }  ${word}`;
      answers[index] = { ...answers[index], found: true };

      if (answers.every((item) => item.found)) {
        allWordsFound = true;
        const gratulation = document.querySelector('.gratulation');
        gratulation.style.display = 'block';
        console.log('Congratulations');
        stopButton.style.display = 'none';
        restartButton.style.display = 'block';
      }

      const answerLabel = `${index + 1}`;
      const divs = document.querySelectorAll('.label');

      // Iteriere durch alle Labels und entferne das Fettdruck-Styling
      divs.forEach((div) => {
        if (div.textContent === answerLabel) {
          div.style.fontWeight = 'normal'; // Setze auf 'normal', um das Fettdruck-Styling zu entfernen
        }
      });
    }
  });
});

stopButton.addEventListener('click', stopQuiz);
restartButton.addEventListener('click', () => {
  location.reload(); // Lade die Seite neu, wenn die Neustart-Schaltfläche geklickt wird
});

function stopQuiz() {
  clearInterval(timerInterval); // Stoppe den Timer, wenn der Benutzer auf "Stop" klickt
  answers.forEach((answer, index) => {
    if (!answer.found) {
      const answerElement = document.getElementById(`${index + 1}`);
      answerElement.innerHTML = `<span style="color: red">${index + 1}  ${
        answer.word
      }</span>`;
    }
  });

  const stopMessage = document.querySelector('.stop-message');
  stopMessage.style.display = 'block';
  searchInput.disabled = true;

  // Verberge die Stop-Schaltfläche und zeige die Neustart-Schaltfläche
  stopButton.style.display = 'none';
  restartButton.style.display = 'block';
}

// Anfangs die Neustart-Schaltfläche ausblenden
restartButton.style.display = 'none';

// Rufe die startCountdown-Funktion auf, um den Timer zu starten, wenn die Eingabe beginnt
