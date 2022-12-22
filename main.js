function morettt(){
  let lol=document.getElementById('ttt-btn');
  let hel=document.getElementById('ttt-desc');
  if(hel.style.display == 'none')
  {
    lol.innerHTML='LESS..';
    hel.style.display = 'block';
    hel.style.transition='ease-out 0.6s';
  }
  else{
    lol.innerHTML='MORE..';
    hel.style.display = 'none';
    hel.style.transition='ease-in 0.6s'
  }
}
function moresnake(){
  let lol=document.getElementById('snake-btn');
  let hel= document.getElementById('snake-desc');
  if(hel.style.display == 'none')
  {
    lol.innerHTML='LESS..';
    hel.style.display = 'block';
    hel.style.transition='ease-out 0.6s';
  }
  else{
    lol.innerHTML='MORE..';
    hel.style.display = 'none';
    hel.style.transition='ease-in 0.6s'
  }
}
function morechess(){
  let lol=document.getElementById('chess-btn');
  let hel= document.getElementById('chess-desc');
  if(hel.style.display == 'none')
  {
    lol.innerHTML='LESS..';
    hel.style.display = 'block';
    hel.style.transition='ease-out 0.6s';
  }
  else{
    lol.innerHTML='MORE..';
    hel.style.display = 'none';
    hel.style.transition='ease-in 0.6s'
  }
}
function morebubble(){
  let lol=document.getElementById('bubble-btn');
  let hel= document.getElementById('bubble-desc');
  if(hel.style.display == 'none')
  {
    lol.innerHTML='LESS..';
    hel.style.display = 'block';
    hel.style.transition='ease-out 0.6s';
  }
  else{
    lol.innerHTML='MORE..';
    hel.style.display = 'none';
    hel.style.transition='ease-in 0.6s'
  }
}
// function changeBg()
// {
//   const images=[
//     'url("bg3.jpg")',
//     'url("bg4.jpg")',
//     'url("bg7.jpg")',
//     'url("bg8.jpg")',
//     'url("bg12.jpg")',
//     'url("bg13.jpg")',
//     'url("bg14.jpg")'
//   ]

//   const section =document.getElementById('bg');
//   const bg=images[Math.floor(Math.random()*images.length)];
//   section.style.background=`${bg} no-repeat center center/cover`;
// }
// setInterval(changeBg,3000);


