function activateInput(input) {
    input.type = 'date';
  }
  
  function deactivateInput(input) {
    if (!input.value) {
      input.type = 'text';
    }
  }
  
  function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const result = document.getElementById('result');
    const birthdateValue = birthdateInput.value;
  
    if (!birthdateValue) {
      result.innerHTML = "Please enter or select your birthdate!";
      return;
    }
  
    const birthDate = new Date(birthdateValue);
  
    // Validate date input
    if (birthDate.toString() === "Invalid Date") {
      result.innerHTML = "Invalid date format! Please use YYYY-MM-DD.";
      
      // Trigger shake animation
      birthdateInput.classList.add('shake');
      setTimeout(() => {
        birthdateInput.classList.remove('shake');
      }, 300);
      return;
    }
  
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
  
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    result.innerHTML = `You are <strong>${age}</strong> years old.`;
  }
  