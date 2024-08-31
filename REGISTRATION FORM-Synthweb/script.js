    document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (firstName === '' || lastName === '') {
        alert('Name should not be empty');
        return;
    }

    if (firstName.length > 30 || lastName.length > 30) {
        alert('Name should not exceed 30 characters');
        return;
    }

    if (email === '') {
        alert('Email field should not be empty');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Email should be valid');
        return;
    }

    if (phone === '') {
        alert('Phone number should not be empty');
        return;
    }

    const phonePattern = /^[0-9]{9,11}$/;
    if (!phonePattern.test(phone)) {
        alert('Phone number should only have numerical digits and length should be between 9-11');
        return;
    }

    alert('Successfully submitted');
    });
