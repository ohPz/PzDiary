const openWindowButton = document.getElementById('openWindowButton');

openWindowButton.addEventListener('click', function () {
  const newWindow = window.open('https://www.google.com', '_blank');
}); //구글 새창으로 열기
