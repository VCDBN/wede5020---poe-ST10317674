var button = document.querySelector('button');

button.onclick = function submit(){
    
}

// Get form element and required fields
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

// Clear initial values when clicked
nameInput.addEventListener('click', clearInitialValue);
emailInput.addEventListener('click', clearInitialValue);

function clearInitialValue(event) {
  event.target.value = '';
}

// Form submit event listener
form.addEventListener('submit', function(e) {
  // Check if required fields have values
  if (nameInput.value === '' || emailInput.value === '') {
    e.preventDefault(); // Prevent form submission
    alert('Please fill in all required fields.'); // Show pop-up warning
  }
});
