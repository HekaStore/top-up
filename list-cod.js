//SIDE-BAR
const sideBar = document.getElementById('sideBar');
const layarHitam = document.getElementById('layarHitam');
sideBar.style.display = 'none';
layarHitam.style.display = 'none';


//beli
function submit() {
     let masukan = document.getElementById('gameid');
     if(masukan.value == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }else {alert('Klik "OK" Jika Anda Benar-Benar Membeli ini')}
}
function beli1(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%2020%20CP%20Call%20Of%20Duty:%205.000%0aUser%20ID:%20' + ID;
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}
function beli2(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%2030%20CP%20Call%20Of%20Duty:%2010.000%0aUser%20ID:%20' + ID;
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}
function beli3(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%2050%20CP%20Call%20Of%20Duty:%2020.000%0aUser%20ID:%20' + ID;
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}
function beli4(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%2070%20CP%20Call%20Of%20Duty:%2050.000%0aUser%20ID:%20' + ID;
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}
function beli5(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%20100%20CP%20Call%20Of%20Duty:%20100.000%0aUser%20ID:%20' + ID;
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}
