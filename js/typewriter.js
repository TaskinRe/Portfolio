
  const text = "Storyteller | Physics Enthusiast | Explorer";
  let index = 0;
  const typewriterElement = document.getElementById("typewriter");
  typewriterElement.innerHTML = ""; // Clear existing content

  function typeWriter() {
    if (index < text.length) {
      typewriterElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 90); // Adjust typing speed here (in milliseconds)
    } else {
      index = 0; // Reset index for next iteration
      setTimeout(resetTypewriter, 900); // Wait for 2 seconds before resetting
    }
  }

  // Function to reset typewriter after displaying all text
  function resetTypewriter() {
    typewriterElement.innerHTML = ""; // Clear content
    setTimeout(typeWriter, 100); // Start typing again after a short delay
  }

  // Call the typewriter function when the page loads
  window.onload = typeWriter;

