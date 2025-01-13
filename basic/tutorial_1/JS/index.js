const button = document.getElementById('alertButton');
const dynamicText = document.getElementById('dynamicText');

button.addEventListener('click', function() {
    alert('你點擊了按鈕！');
    dynamicText.textContent = '你已經點擊過按鈕了！';
    button.style.backgroundColor = '#28a745';
    button.textContent = '已點擊';
    button.disabled = true;
});