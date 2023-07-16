//SIDE-BAR
const sideBar = document.getElementById('sideBar');
const layarHitam = document.getElementById('layarHitam');
sideBar.style.display = 'none';
layarHitam.style.display = 'none';


//beli
function submit() {
     let masukan = document.getElementById('gameid');
     let konfirmasi = confirm('Tekan "OK" jika ingin Membelinya\nTekan "Batal" jika Tidak ingin Membelinya')
     if(masukan.value == '') {
          alert('Ketik ID Terlebih Dahulu !!!');
     };
     if(konfirmasi == true) {
          document.getElementById('beli').href;
     } else if (konfirmasi == false) {
          document.getElementById('beli').href = "pubg-list.html";
     }
}
function belimember1(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%20Pubg%20Royal%20Pass%20Pubg:%20165.000%0aUser%20ID:%20' + ID;
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}

function beli1(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%2035%20UC%20Pubg:%208.000%0aUser%20ID:%20' + ID;
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}
function beli2(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%2050%20UC%20Pubg:%2011.000%0aUser%20ID:%20' + ID;
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}
function beli3(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%2070%20UC%20Pubg:%2015.000%0aUser%20ID:%20' + ID;
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}
function beli4(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%20131%20UC%20Pubg:%2025.000%0aUser%20ID:%20' + ID;
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}
function beli5(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%20221%20UC%20Pubg:%2041.000%0aUser%20ID:%20' + ID;
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}
function beli6(){
     let ID = document.getElementById('gameid').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%20263%20UC%20Pubg:%2050.000%0aUser%20ID:%20' + ID;
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}

