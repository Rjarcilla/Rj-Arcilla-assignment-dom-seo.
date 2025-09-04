const description = document.getElementById('description');
const changeDescriptionBtn = document.getElementById('changeDescriptionBtn');
const addGuitarBtn = document.getElementById('addGuitarBtn');
const removeElementBtn = document.getElementById('removeElementBtn');
const guitarList = document.getElementById('guitarList');

let newGuitarCount = 0;

changeDescriptionBtn.addEventListener('click', () => {
  description.textContent = "Discover unique tones and styles with our exclusive guitar collection. Your perfect guitar awaits!";
});

addGuitarBtn.addEventListener('click', () => {
  newGuitarCount++;
  const newGuitar = document.createElement('li');
  newGuitar.textContent = `New Guitar Model ${newGuitarCount}`;
  guitarList.appendChild(newGuitar);
});

removeElementBtn.addEventListener('click', () => {
  if (guitarList.lastElementChild) {
    guitarList.removeChild(guitarList.lastElementChild);
  } else if (description) {
    description.remove();
  }
});
