let dogumgunu = document.querySelector('#dogumgunu');
let dogumayi = document.querySelector('#dogumayi');
let dogumyili = document.querySelector('#dogumyili');

let btnAdd = document.querySelector('.btnAdd');

yilResult = document.querySelector('.yilHesaplama p');
ayResult = document.querySelector('.ayHesaplama p');
gunResult = document.querySelector('.gunHesaplama p');


function yasHesaplama() {
  let bugun = new Date();
  let bugungun = bugun.getDate();
  let bugunay = bugun.getMonth()+1;
  let bugunyil = bugun.getFullYear();

  let age = bugunyil - Number(dogumyili.value);

  let yil = bugunyil - Number(dogumyili.value);
  let ay = bugunay - Number(dogumayi.value);
  let gun = bugungun - Number(dogumgunu.value);

  if (gun < 0) {
    ay -= 1;
    gun += 30;
  }

  if (ay < 0) {
    yil -= 1;
    ay += 12;
  };

  yilResult.innerHTML = yil;
  ayResult.innerHTML = ay;
  gunResult.innerHTML = gun;

}

btnAdd.addEventListener('click', yasHesaplama);