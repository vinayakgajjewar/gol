// utility function to clear the canvas
function clearCanvas(canvas) {
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

// called when page is loaded
function draw() {
  const canvas = document.getElementById('gol-canvas');
  if (canvas.getContext) {
    const context = canvas.getContext('2d');
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 50; j++) {
        context.strokeRect(i * 10, j * 10, 10, 10);
      }
    }
  }
}