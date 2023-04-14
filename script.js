const letterBoxes = document.querySelectorAll('.letter-box');
const letters = document.querySelectorAll('.letter');

// Array of words for the game
const words = ['REACT', 'COUNT', 'MOUNT', 'ARENA', 'WASTE', 'WAIST', 'BRAID', 'WIDER', 
'WIDTH', 'MIGHT', 'MERCY', 'FOUND', 'KNOCK', 'KNOWN', 'JESUS', 'ABOUT', 'ALERT', 'ARGUE',
'BEACH', 'ABOVE', 'ALIKE', 'ARISE', 'BEGIN', 'BEGAN', 'ABUSE', 'ALIVE', 'ARRAY', 'ACTOR',
'ALLOW', 'ASIDE', 'BEGUN', 'ACUTE', 'ALONE', 'ASSET', 'BEING', 'ADMIT', 'ALONG', 'AUDIO',
'BELOW', 'ADOPT', 'ALTER', 'AUDIT', 'BENCH', 'ADULT', 'AMONG', 'ABOID', 'BILLY', 'AFTER',
'ANGER', 'AWARD', 'BIRTH', 'SLICE'];

// Select a random word from the array
const randomWord = words[Math.floor(Math.random() * words.length)];

// Display the letter boxes for the selected word
for (let i = 0; i < randomWord.length; i++) {
  letterBoxes[i].style.display = 'block';
}

// Event listener for clicking on a letter
letters.forEach(letter => {
  letter.addEventListener('click', () => {
    const clickedLetter = letter.textContent;
    let letterFound = false;
    // Check if the clicked letter matches a letter in the selected word
    for (let i = 0; i < randomWord.length; i++) {
      if (clickedLetter === randomWord[i]) {
        letterBoxes[i].textContent = clickedLetter;
        letterFound = true;
      }
    }
    // If the clicked letter is not in the selected word, change its color
    if (!letterFound) {
      letter.style.backgroundColor = '#ff0000';
      letter.style.color = '#ffffff';
    }
    // Check if the word has been completed
    let wordCompleted = true;
    for (let i = 0; i < randomWord.length; i++) {
      if (letterBoxes[i].textContent === '') {
        wordCompleted = false;
        break;
      }
    }
    // If the word has been completed, show an alert
    if (wordCompleted) {
      document.getElementById("correct-sound").play();
      setTimeout(() => {
        alert('Congratulations! You guessed the word.');
        location.reload();
      }, 100);
    }
  });
});
