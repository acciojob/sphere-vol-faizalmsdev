function volume_sphere(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the radius input value
  var radiusInput = document.getElementById('radius');
  var radius = parseFloat(radiusInput.value);
  
  // Calculate the volume
  var volume = (4/3) * Math.PI * Math.pow(radius, 3);
  
  // Display the volume in the volume field
  var volumeField = document.getElementById('volume');
  volumeField.value = volume.toFixed(2); // Display volume with 2 decimal places
}
