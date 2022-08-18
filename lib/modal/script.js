let cancelBtn = document.querySelector('.cancel_btn');
let modalAlert = document.querySelector('.modal_alert');
let bgDark = document.querySelector('.bg_dark');
function cancelX() {
   modalAlert.style.display = 'none';
   bgDark.style.display = 'none';
}
function modalAlertOpen() {

   modalAlert.style.display = 'block';
   bgDark.style.display = 'block';
   const timer = setTimeout(function () {
      modalAlert.style.transform = 'translate(-50%, -50%)';
   }, 10);

   function stopFunction() {
     clearTimeout(timer);
   }
}
// 모달게시판
let cancelBtn1 = document.querySelector('.cancel_btn1');
let modalPost = document.querySelector('.modal_post');
let bgDark1 = document.querySelector('.bg_dark1');
function cancelX1() {
   modalPost.style.display = 'none';
   bgDark1.style.display = 'none';
}
function modalPostOpen() {

   modalPost.style.display = 'block';
   bgDark1.style.display = 'block';
   const timer = setTimeout(function () {
      modalPost.style.transform = 'translate(-50%, -50%)';
   }, 10);

   function stopFunction() {
     clearTimeout(timer);
   }
}
