const square1 = document.querySelector('.square');
const interface = document.querySelector('.gameInterface');
const circle=document.querySelector('.finalPoint');

square1.style.left=0;
square1.style.top=0;

const squareHeight=square1.offsetHeight;

const getRandom= function(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min+1)) + min)*squareHeight;
}// je fais un petit tricks pour générer des nombres entre la largeur et hauteur du rectangle
//et aussi je dois générer les nombres aléatoires avec un intervalle de la largeur du carré 


const setPosCircle= function(){//generation d'une pos aléatoire du cercle
    circle.style.left = `${getRandom(0,(interface.offsetWidth-squareHeight)/squareHeight)}`+'px';
    circle.style.top = `${getRandom(0,(interface.offsetHeight-squareHeight)/squareHeight)}`+'px';
}

const equalPos= function(posSquare,posCircle){
    if(posSquare.style.left===posCircle.style.left && 
        posSquare.style.top===posCircle.style.top){
            alert('tu as gagne');
        }
}


const press= function(ev){
    console.log(ev.key)
    
    if(ev.key === 'ArrowUp')
    {
        if(parseInt(square1.style.top)===0)//test si ca sort pas du cadre
        {
            console.log('tu vas trop loin');
        }
        else{
        square1.style.top = parseInt(square1.style.top) - 30 +'px'
        }
    }
    if(ev.key==='ArrowRight'){
        if(parseInt(square1.style.left)===interface.offsetWidth-30)//test si ca sort pas du cadre
        {
            console.log('tu vas trop loin');
        }
        else{
            square1.style.left =parseInt(square1.style.left)  + 30 + 'px';
        }
    }
    if(ev.key==='ArrowDown'){
        if(parseInt(square1.style.top)===interface.offsetHeight-30) //test si ca sort pas du cadre
        {
            console.log('tu vas trop loin');
        }
        else{
            square1.style.top =parseInt(square1.style.top)+30+'px';
        }
    }
    if(ev.key==='ArrowLeft'){
        if(parseInt(square1.style.left)===0)//test si ca sort pas du cadre
        {
            console.log('oula tu vas trop loin');
        }
        else{
            square1.style.left =parseInt(square1.style.left)-30+'px';
        }
    }
    equalPos(square1,circle);
}

setPosCircle();
document.addEventListener('keydown',press);

