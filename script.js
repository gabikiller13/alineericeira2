function openYouTube() {
  window.open('https://www.youtube.com', '_blank');
}

function getRandomPosition(element) {
  const x = Math.random() * (window.innerWidth - element.clientWidth);
  const y = Math.random() * (window.innerHeight - element.clientHeight);
  return { x, y };
}

function moveButton() {
  const button = document.getElementById('noButton');
  const newPosition = getRandomPosition(button);
  button.style.position = 'absolute';
  button.style.left = `${newPosition.x}px`;
  button.style.top = `${newPosition.y}px`;
}

document.getElementById('noButton').addEventListener('mouseover', moveButton);