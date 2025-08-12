const audio = document.getElementById('radio');
const playBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');
const recBtn = document.querySelector('.rec');
const subscribeBtn = document.getElementById('subscribeBtn');
const subscribeModal = document.getElementById('subscribeModal');
const reminderBtn = document.getElementById('reminderBtn');

playBtn?.addEventListener('click', ()=> {
  audio?.play().catch(()=> alert('Unable to auto-play. Tap again to start.'));
});

stopBtn?.addEventListener('click', ()=> {
  if(!audio) return;
  audio.pause();
  audio.currentTime = 0;
});

recBtn?.addEventListener('click', ()=> {
  alert('Recording is limited to live clips. Log in to continue.');
});

subscribeBtn?.addEventListener('click', ()=> {
  if (typeof subscribeModal.showModal === 'function') {
    subscribeModal.showModal();
  } else {
    alert('Subscribe: you@example.com');
  }
});

reminderBtn?.addEventListener('click', ()=> {
  alert('Reminder set! We will nudge you before the premiere.');
});

// Keyboard controls
document.addEventListener('keydown', (e)=>{
  if(e.code === 'Space' || e.key.toLowerCase() === 'k'){ e.preventDefault(); audio?.paused ? audio.play() : audio.pause(); }
});
