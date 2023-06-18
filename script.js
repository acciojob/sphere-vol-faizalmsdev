function volume_sphere(event) {
  event.preventDefault();

  var radiusInput = document.getElementById('radius');
  var radius = parseFloat(radiusInput.value);

  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  var volumeField = document.getElementById('volume');
  volumeField.value = volume.toFixed(4); // Display volume with 4 decimal places
}

window.onload = function() {
  document.getElementById('MyForm').onsubmit = volume_sphere;
}
