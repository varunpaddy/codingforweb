const returnKey = document.getElementById('return'); 


function handleReturnKeyDown(event) {
  if (event.code === 'Enter') { 
  
    returnKey.style.backgroundColor = '#333';

    setTimeout(function () {
      window.location.href = 'VIsuals/index.html';
    }, 1000);
  }
}


function handleReturnKeyUp(event) {
  if (event.code === 'Enter') {
 
    returnKey.style.backgroundColor = ''; 
  }
}

document.addEventListener('keydown', handleReturnKeyDown);
document.addEventListener('keyup', handleReturnKeyUp);


const deleteKey = document.getElementById('delete');

function handleDeleteKeyDown(event) {
  if (event.code === 'Backspace') { 

    deleteKey.style.backgroundColor = '#333';

    setTimeout(function () {
        window.location.href = '3D/index.html';
      }, 1000);
  }
}


function handleDeleteKeyUp(event) {
  if (event.code === 'Backspace') {

    deleteKey.style.backgroundColor = ''; 
  }
}


document.addEventListener('keydown', handleDeleteKeyDown);
document.addEventListener('keyup', handleDeleteKeyUp);



const spacebar = document.getElementById('space');


function handleSpacebarKeyDown(event) {
  if (event.code === 'Space') {

      spacebar.style.backgroundColor = '#333';
      setTimeout(function () {
        window.location.href = 'https://www.kyte-agency.com';
    }, 1000);
  }
}


function handleSpacebarKeyUp(event) {
  if (event.code === 'Space') {

    spacebar.style.backgroundColor = ''; 
  }
}

document.addEventListener('keydown', handleSpacebarKeyDown);
document.addEventListener('keyup', handleSpacebarKeyUp);



const escKey = document.getElementById('esc');
const body = document.body;
const h1 = document.querySelector('h1');

function handleEscKeyDown(event) {
  if (event.code === 'Escape') { 

    escKey.style.backgroundColor = '#333';
    escKey.style.color = '#F0EADB';
    body.style.backgroundColor = '#F0EADB';
    h1.style.color = '#333'
  }
}



function handleEscKeyUp(event) {
  if (event.code === 'Escape') {

    escKey.style.backgroundColor = '#F0EADB';
    escKey.style.color = "#333"
  }

  if (event.code === 'Escape') {

    const currentBackgroundColor = getComputedStyle(body).backgroundColor;


    if (currentBackgroundColor === 'rgb(30, 27, 31) ') {
      body.style.backgroundColor = '#F0EADB';
      h1.style.color = '#1e1b1f';
      escKey.style.color = "#333"
    } else {
      body.style.backgroundColor = '#1e1b1f';
      h1.style.color = '#F0EADB';
      escKey.style.color = '#F0EADB';

    }
  }
}

document.addEventListener('keydown', handleEscKeyDown);
document.addEventListener('keyup', handleEscKeyUp);




const eKey = document.getElementById('e');


function handleEKeyDown(event) {
  if (event.key === 'e') { 
    eKey.style.backgroundColor = '#333';
  }
}


function handleEKeyUp(event) {
  if (event.key === 'e') {

    eKey.style.backgroundColor = ''; 
  }
}

document.addEventListener('keydown', handleEKeyDown);
document.addEventListener('keyup', handleEKeyUp);



const cKey = document.getElementById('c');


function handleCKeyDown(event) {
  if (event.key === 'c') { 
    cKey.style.backgroundColor = '#333';
    cKey.style.color = "#F0EADB";
  }
}


function handleCKeyUp(event) {
  if (event.key === 'c') {

    cKey.style.backgroundColor = ''; 
    cKey.style.color = '';
  }
}

document.addEventListener('keydown', handleCKeyDown);
document.addEventListener('keyup', handleCKeyUp);

const vKey = document.getElementById('v');


function handleVKeyDown(event) {
  if (event.key === 'v') { 
    vKey.style.backgroundColor = '#333';
    vKey.style.color = "#F0EADB";
  }
}


function handleVKeyUp(event) {
  if (event.key === 'v') {

    vKey.style.backgroundColor = ''; 
    vKey.style.color = '';
  }
}
b
document.addEventListener('keydown', handleVKeyDown);
document.addEventListener('keyup', handleVKeyUp);

const bKey = document.getElementById('b');


function handleBKeyDown(event) {
  if (event.key === 'b') { 
    bKey.style.backgroundColor = '#333';
    bKey.style.color = "#F0EADB";
  }
}


function handleBKeyUp(event) {
  if (event.key === 'b') {

    bKey.style.backgroundColor = ''; 
    bKey.style.color = '';
  }
}

document.addEventListener('keydown', handleBKeyDown);
document.addEventListener('keyup', handleBKeyUp);

const nKey = document.getElementById('n');


function handleNKeyDown(event) {
  if (event.key === 'n') { 
    nKey.style.backgroundColor = '#333';
    nKey.style.color = "#F0EADB";
  }
}


function handleNKeyUp(event) {
  if (event.key === 'n') {

    nKey.style.backgroundColor = ''; 
    nKey.style.color = '';
  }
}

document.addEventListener('keydown', handleNKeyDown);
document.addEventListener('keyup', handleNKeyUp);


const shiftKey = document.getElementById('shift');

function handleShiftKeyDown(event) {
  if (event.key === 'Shift') { 
    shiftKey.style.backgroundColor = '#333';
    shiftKey.style.color = "#F0EADB"
  }
}

function handleShiftKeyUp(event) {
  if (event.key === 'Shift') {
    shiftKey.style.backgroundColor = ''; 
    shiftKey.style.color = '';
  
    setTimeout (function() {
    window.location.href = 'https://lowcarbcatastrophes.framer.website/'; 
    } ,1000);
  }
}

document.addEventListener('keydown', handleShiftKeyDown);
document.addEventListener('keyup', handleShiftKeyUp);












  
  


 





