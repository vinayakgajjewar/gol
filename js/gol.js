function draw() {
  const canvas = document.getElementById('gol-canvas');
  if (canvas.getContext) {
    const context = canvas.getContext('2d');
    context.fillRect(10, 10, 10, 10);
  }
}