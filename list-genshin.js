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
function belimember1(){
     let ID = document.getElementById('gameid').value;
     let SR = document.getElementById('server').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%20Blessing%20Welkin%20Moon%201x%20Genshin%20Impact:%2076.000%0aUser%20ID:%20' + ID +'('+ SR + ')';
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}
function beli1(){
     let ID = document.getElementById('gameid').value;
     let SR = document.getElementById('server').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%2060%20Crystals%20Genshin%20Impact:%2015.000%0aUser%20ID:%20' + ID +'('+ SR + ')';
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}
function beli2(){
     let ID = document.getElementById('gameid').value;
     let SR = document.getElementById('server').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%20330%20Crystals%20Genshin%20Impact:%2076.000%0aUser%20ID:%20' + ID +'('+ SR + ')';
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}
function beli3(){
     let ID = document.getElementById('gameid').value;
     let SR = document.getElementById('server').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%201090%20Crystals%20Genshin%20Impact:%20225.000%0aUser%20ID:%20' + ID +'('+ SR + ')';
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}
function beli4(){
     let ID = document.getElementById('gameid').value;
     let SR = document.getElementById('server').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%202240%20Crystals%20Genshin%20Impact:%20465.000%0aUser%20ID:%20' + ID +'('+ SR + ')';
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}
function beli5(){
     let ID = document.getElementById('gameid').value;
     let SR = document.getElementById('server').value;
     document.getElementById('beli').href = 'https://wa.me/6289514433486?text=Beli%203880%20Crystals%20Genshin%20Impact:%20775.000%0aUser%20ID:%20' + ID +'('+ SR + ')';
     if(ID == '') {
          alert('Ketik ID Game Terlebih Dahulu !!!');
          document.getElementById('beli').href = '#';
     }
}
