document.getElementById('contactForm').addEventListener('submit', SendMail);

function SendMail(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var messageme = document.getElementById('messageme').value;

  if (name === '' || email === '' || phone === '' || messageme === '') {
    alert('Please fill in all the fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!validatePhone(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    return;
  }

  if (!validateName(name)) {
    alert('Please enter a valid Name.');
    return;
  }
  var templateParams = {
    name: name,
    email: email,
    phone: phone,
    messageme: messageme
  };

  emailjs.send('service_7diklcq', 'template_pafjhzw', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully.');
      document.getElementById('contactForm').reset(); // Clear the form
    },
    (error) => {
      console.log('FAILED...', error);
      alert('Failed to send your message.');
    }
  );
}

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  return /^\d{10}$/.test(phone);
}
function validateName(name) {
    const nameRegex = /^[A-Za-z\s]+$/; 
    return nameRegex.test(name.trim());
  }