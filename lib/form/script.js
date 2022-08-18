// 체크박스
let checkOff = document.querySelectorAll('.check_off');
let checkOn = document.querySelectorAll('.check_on');
let checkboxWrap = document.getElementsByClassName('checkbox_wrap');

for(let i=0; i<checkboxWrap.length; i++) {
checkOn[i].style.display='none';
checkboxWrap[i].addEventListener('click', function(){
if(this.nextElementSibling.checked == false) {
   // this.nextElementSibling.checked = true;
   this.firstElementChild.style.display="none";
   this.lastElementChild.style.display="block";
} else {
   // this.nextElementSibling.checked = false;
   this.firstElementChild.style.display="block";
   this.lastElementChild.style.display="none";
}
});
}

// 라디오박스
let radio0 = document.getElementById('radio0');
let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');

let radioOn0 = document.getElementById('radio_on0');
let radioOn1 = document.getElementById('radio_on1');
let radioOn2 = document.getElementById('radio_on2');

let radioOff0 = document.getElementById('radio_off0');
let radioOff1 = document.getElementById('radio_off1');
let radioOff2 = document.getElementById('radio_off2');

radioOn0.style.display="none";
radioOn1.style.display="none";
radioOn2.style.display="none";

radio0.addEventListener('click', function(){
   radioOn0.style.display="block";
   radioOff0.style.display="none";

   radioOn1.style.display="none";
   radioOff1.style.display="block";
   radioOn2.style.display="none";
   radioOff2.style.display="block";

   radio0.style.display="block";
   radio1.style.display="none";
   radio2.style.display="none";
})
radio1.addEventListener('click', function(){
   radioOn1.style.display="block";
   radioOff1.style.display="none";

   radioOn0.style.display="none";
   radioOff0.style.display="block";
   radioOn2.style.display="none";
   radioOff2.style.display="block";

   radio0.style.display="none";
   radio1.style.display="block";
   radio2.style.display="none";
})
radio2.addEventListener('click', function(){
   radioOn2.style.display="block";
   radioOff2.style.display="none";

   radioOn0.style.display="none";
   radioOff0.style.display="block";
   radioOn1.style.display="none";
   radioOff1.style.display="block";

   radio0.style.display="none";
   radio1.style.display="none";
   radio2.style.display="block";
})
