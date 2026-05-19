// BURBUJAS

const bubblesContainer = document.querySelector('.bubbles');

for(let i = 0; i < 30; i++){

  const bubble = document.createElement('div');

  bubble.classList.add('bubble');

  let size = Math.random() * 40 + 10;

  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';

  bubble.style.left = Math.random() * 100 + '%';

  bubble.style.animationDuration = (Math.random() * 8 + 5) + 's';

  bubble.style.opacity = Math.random();

  bubblesContainer.appendChild(bubble);

}


// MOSTRAR INVITACION

function startParty(){

  document.getElementById('welcome').style.display = 'none';

  document.getElementById('invitation').style.display = 'block';

  // MÚSICA

  const music = document.getElementById('bgMusic');

  if(music){

    music.volume = 0.5;

    music.play().catch(error => {
      console.log(error);
    });

  }

}