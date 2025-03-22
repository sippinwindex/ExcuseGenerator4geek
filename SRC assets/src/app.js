// app.js
window.onload = function() {
  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car'];
  const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function generateExcuse() {
      const randomWho = who[Math.floor(Math.random() * who.length)];
      const randomAction = action[Math.floor(Math.random() * action.length)];
      const randomWhat = what[Math.floor(Math.random() * what.length)];
      const randomWhen = when[Math.floor(Math.random() * when.length)];
      return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  }

  const excuseElement = document.getElementById('excuse');

  function updateExcuse() {
      if (excuseElement) {
          excuseElement.classList.add('fade-out'); // Start fade-out

          setTimeout(() => {
              excuseElement.textContent = generateExcuse(); // Change the text
              excuseElement.classList.remove('fade-out'); // Remove fade-out class
          }, 300); // Wait for the fade-out transition (adjust time if needed)
      }
  }

  if (excuseElement) {
      excuseElement.textContent = generateExcuse(); // Initial excuse

      // Optional:  Change the excuse periodically
      setInterval(updateExcuse, 5000); // Change every 5 seconds
  }

  console.log("Hello Rigo from the console!");
};

const rigoImage = document.querySelector('img[alt="Rigo Baby"]');

if (rigoImage) {
  rigoImage.addEventListener('mouseover', () => {
      rigoImage.style.transform = 'scale(1.1)'; // Slight zoom
      rigoImage.style.transition = 'transform 0.3s ease';
  });

  rigoImage.addEventListener('mouseout', () => {
      rigoImage.style.transform = 'scale(1)'; // Reset to original size
      rigoImage.style.transition = 'transform 0.3s ease';
  });
}