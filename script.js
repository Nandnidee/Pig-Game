let player1=prompt("Enter Name for player 1 : ");
let player2=prompt("Enter Name for player 2 : ");
const name1=document.querySelector('.name1');
const name2=document.querySelector('.name2');
if(player1!='')name1.textContent=player1;
if(player2!='')name2.textContent=player2;

let score1=document.querySelector('.score1');
let score2=document.querySelector('.score2');
let curr1=document.querySelector('.curr1');
let curr2=document.querySelector('.curr2');
const img =document.querySelector('.dice');
let n=document.querySelector('.new');
let roll=document.querySelector('.roll');
let hold=document.querySelector('.hold');
let n1=document.querySelector('.p1');
let n2=document.querySelector('.p2');

let p1=0;
let p2=0;
roll.disabled = false;
hold.disabled = false;

let isGameInProgress = true; 
n.addEventListener('click',function (e){
    p1=0;
    p2=0;
    score1.textContent=0;
    score2.textContent=0;
    curr1.textContent=0;
    curr2.textContent=0;
    img.src='#';
    n2.classList.remove('active');
    n1.classList.add('active');
    n1.classList.remove('win');
    n2.classList.remove('win');
});
const arr=['image/out.png','image/1.png','image/2.png','image/3.png','image/4.png','image/5.png','image/6.png','image/win.png'];
roll.addEventListener('click',function (e){
   if(isGameInProgress){ const ans=Math.floor(Math.random()*6);
   if(n1.classList.contains('active')){
    if(ans==0||ans>6){
    curr1.textContent=0;
    p1=0;
    img.src='image/out.png';
        n1.classList.remove('active');
        n2.classList.add('active');
   } 
   else{
    img.src=arr[ans];
    p1=p1+ans;
    curr1.textContent=p1;
   }
}else{
    if(ans==0||ans>6){
        curr2.textContent=0;
        p2=0;
        img.src='image/out.png';
            n2.classList.remove('active');
            n1.classList.add('active');
       } 
       else{
        img.src=arr[ans];
        p2=p2+ans;
        curr2.textContent=p2;
       }
}
   }
});
let r1=0;
let r2=0;
hold.addEventListener('click',function (e){
  if(isGameInProgress){
    if(n1.classList.contains('active')){
        r1=p1+r1;
        
        score1.textContent=r1;
        n1.classList.remove('active');
        n2.classList.add('active');
        if(r1>=100){
            img.src=arr[7];
            curr1.textContent="WoW! Aap jeet gaye meri jaan * _ * !!!";
            n1.classList.add('win');
            n2.classList.remove('active');
            isGameInProgress=false;
        }
        else
        curr1.textContent=0;
        p1=0;
    }
    else{
        r2=p2+r2;
        score2.textContent=r2;
        n2.classList.remove('active');
        n1.classList.add('active');
        if(r2>=100){
            img.src=arr[7];
            curr2.textContent="WoW! Aap jeet gaye meri jaan * _ * !!!";
            n2.classList.add('win');
            n1.classList.remove('active');
            isGameInProgress=false;
        }
        else
        curr2.textContent=0;
        p2=0;
       }   }
});
