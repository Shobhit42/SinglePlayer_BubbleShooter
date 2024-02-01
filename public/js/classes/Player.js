class Player {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    // Increase the player (smiley ball) size
    const playerRadius = this.radius * 1.5;

    // Draw the circle (smiley face)
    c.beginPath();
    c.arc(this.x, this.y, playerRadius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();

    // Draw the eyes
    const eyeRadius = playerRadius / 8;
    const eyeOffsetX = playerRadius / 3;
    const eyeOffsetY = -playerRadius / 4;

    c.beginPath();
    c.arc(this.x - eyeOffsetX, this.y + eyeOffsetY, eyeRadius, 0, Math.PI * 2, false);
    c.arc(this.x + eyeOffsetX, this.y + eyeOffsetY, eyeRadius, 0, Math.PI * 2, false);
    c.fillStyle = 'black'; // Color of the eyes
    c.fill();

    // Draw the smile
    const smileRadius = playerRadius / 3;
    const smileOffsetY = playerRadius / 4;

    c.beginPath();
    c.arc(this.x, this.y + smileOffsetY, smileRadius, 0, Math.PI, false);
    c.lineWidth = playerRadius / 16; // Adjust the line width for the smile
    c.strokeStyle = 'black'; // Color of the smile
    c.stroke();
}

}
