document.addEventListener('DOMContentLoaded', function () {
    var inputBoxes = document.querySelectorAll('.inputBox');
  
    inputBoxes.forEach(function (inputBox) {
      var input = inputBox.querySelector('input');
      var span = inputBox.querySelector('span');
     
    input.addEventListener('focus', function () {
        span.style.display = 'none'; 
      });
      input.addEventListener('blur', function () {
        if (input.value.trim() === '') {
          span.style.display = 'block';
        }
      });
    });
  });