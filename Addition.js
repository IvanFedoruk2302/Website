async function submitForm() {
  const formData = {
      fullName: document.getElementById('fullName').value,
      dob: document.getElementById('dob').value,
      phoneNumber: document.getElementById('phoneNumber').value,
      email: document.getElementById('email').value,
      region: document.getElementById('region').value,
      city: document.getElementById('city').value,
      occupation: document.getElementById('occupation').value,
  };

  try {
      const response = await fetch('New_Members.json', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
          console.log('Данные успешно отправлены');
      } else {
          console.error('Ошибка при отправке данных');
      }
  } catch (error) {
      console.error('Произошла ошибка:', error);
  }
}