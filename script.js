const circles = document.querySelectorAll('.circle');

let selectedCircle;

circles.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.add('selected');

    if (selectedCircle === element) {
      return;
    }

    if (selectedCircle) {
      selectedCircle.classList.remove('selected');
    }
    selectedCircle = element;
  });
});

const button = document.getElementById('submit');

button.addEventListener('click', () => {
  if (selectedCircle) {
    const value = selectedCircle.innerText;
    changeClass();
    const text = document.getElementById('Value-Selected');
    text.innerText = `You selected ${value} out of 5`;
  } else {
    alert('Please, select a circle.');
  }
});

function changeClass() {
  const container = document.getElementById('rate');
  container.classList.add('hidden');

  const thanks = document.getElementById('thanks');
  thanks.classList.remove('hidden');
}
