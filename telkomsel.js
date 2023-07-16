//SIDE-BAR
const sideBar = document.getElementById('sideBar');
const layarHitam = document.getElementById('layarHitam');
sideBar.style.display = 'none';
layarHitam.style.display = 'none';


//beli
function submit() {
     let masukan = document.getElementById('gameid');
     if(masukan.value == '') {
          alert('Ketik Nomor Terlebih Dahulu !!!');
     }
     if(confirm('Tekan "OK" jika ingin Membelinya\nTekan "Batal" jika tidak ingin Membelinya')) {
          document.getElementById('beli').href;
     } else {
          document.getElementById('beli').href = 'telkomsel.html';
     }
}
function beli1(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%205.000%20Pulsa%20Telkomsel:%207.000%0aNomor:%20' + ID;
     if(ID == '') {
          alert('Ketik Nomor Terlebih Dahulu !!!');
     }
}
function beli2(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%2010.000%20Pulsa%20Telkomsel:%2012.000%0aNomor:%20' + ID;
     if(ID == '') {
          alert('Ketik Nomor Terlebih Dahulu !!!');
     }
}
function beli3(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%2015.000%20Pulsa%20Telkomsel:%2017.000%0aNomor:%20' + ID;
     if(ID == '') {
          alert('Ketik Nomor Terlebih Dahulu !!!');
     }
}
function beli4(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%2020.000%20Pulsa%20Telkomsel:%2022.000%0aNomor:%20' + ID;
     if(ID == '') {
          alert('Ketik Nomor Terlebih Dahulu !!!');
     }
}
function beli5(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%2025.000%20Pulsa%20Telkomsel:%2027.000%0aNomor:%20' + ID;
     if(ID == '') {
          alert('Ketik Nomor Terlebih Dahulu !!!');
     }
}
function beli6(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%2030.000%20Pulsa%20Telkomsel:%2032.000%0aNomor:%20' + ID;
     if(ID == '') {
          alert('Ketik Nomor Terlebih Dahulu !!!');
     }
}
function beli7(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%2050.000%20Pulsa%20Telkomsel:%52.000%0aNomor:%20' + ID;
     if(ID == '') {
          alert('Ketik Nomor Terlebih Dahulu !!!');
     }
}
