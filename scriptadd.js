const nameInput = document.getElementById('nameInput');
const checkButton = document.getElementById('checkButton');
const errorMessage = document.getElementById('errorMessage');
const validMessage = document.getElementById('validMessage');
checkButton.addEventListener('click', function() {
        const nameValue = nameInput.value.trim();

        // Name validation: Only letters (upper and lowercase)

        if (nameValue === '') {
          errorMessage.textContent = 'Đừng để trống nha!';
          errorMessage.style.display = 'block';
          validMessage.style.display = 'none';
        } else if (nameValue === 'Hiền' || nameValue === 'hien' || nameValue === 'Hien'){
          errorMessage.textContent = 'Chú ý viết đủ họ và tên nha!';
          errorMessage.style.display = 'block';
          validMessage.style.display = 'none';
        }
        else if (nameValue === 'tran thu hien' || nameValue === 'Tran Thu Hien'){
          errorMessage.textContent = 'Chú ý viết có dấu nha!';
          errorMessage.style.display = 'block';
          validMessage.style.display = 'none';
        }
        else if (nameValue === 'trần thu hiền'){
          errorMessage.textContent = 'Chú ý viết hoa nha!';
          errorMessage.style.display = 'block';
          validMessage.style.display = 'none';
        }
        else if (nameValue !== 'Trần Thu Hiền'){
          errorMessage.textContent = 'Hãy nhập lại đúng nha!';
          errorMessage.style.display = 'block';
          validMessage.style.display = 'none';
        }
        else {
          validMessage.textContent = 'Thu Hiền chờ xíu nha! Em xứng đáng với điều này.';
          validMessage.style.display = 'block';
          errorMessage.style.display = 'none';
          setTimeout(function(){
              window.location.href =  "amthanh.html"; 
        }, 2000);
        }          
});