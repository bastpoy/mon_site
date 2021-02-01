const presentation = document.querySelector('.texte_presentation');
const parcours = document.querySelector('.texte_parcours');
const interet = document.querySelector('.texte_interet');
const projet = document.querySelector('.texte_projet');

const presentationTop = presentation.offsetTop;
const parcoursTop = parcours.offsetTop;
const interetTop = interet.offsetTop;
const projetTop = projet.offsetTop;

// les fonctions permettant de renvoyer sur mes réseaux
// en mode blank dans un nouvel onglet
// pour resize la page utilisation de window.innerHeight innerwidth 
// ils donnent la largeur et la hauteur de la page
// dans trnasition après le temps je peux choisir le type de transition

const functionClick= function(ev)
{
    if(ev.target.className==="utilisateur instagram")
    {
        window.open('https://www.instagram.com/bastpoy/', '_blank');    }
    if(ev.target.className==="utilisateur facebook")
    {
        window.open('https://www.facebook.com/profile.php?id=100010020970241', '_blank');
    }
    if(ev.target.className==="utilisateur linkedin")
    {
        window.open('https://www.linkedin.com/in/bastien-poyet-67414b14a/', '_blank');
    }
    if(ev.target.className==="utilisateur twitter")
    {
        window.open('https://twitter.com/zigotys', '_blank');
    }

    //tout ce qui concerne la navigation a gauche
    //Quand je clique ca va directement dans la div
    if(ev.target.className==="gauche presentation")
    {
        window.scrollTo(0,presentationTop);
        console.log(window.offsetTop);
    }
    if(ev.target.className==="gauche parcours")
    {
        window.scrollTo(0,parcoursTop);
    }
    if(ev.target.className==="gauche interet")
    {
        window.scrollTo(0,interetTop);
    }
    if(ev.target.className==="gauche projet")
    {
        window.scrollTo(0,projetTop);
    }
}


document.addEventListener('click',functionClick);

/*if((window.scrollY < (presentationTop + (window.innerHeight/2))) && 
(window.scrollY > (presentationTop - (window.innerHeight / 2) + 1)))
    {
        document.querySelector('.presentation').style.backgroundColor = '#2980b9' ;
        console.log("bienvenue");
    }*/
    if(window.scrollY < (presentationTop + (window.innerHeight/2)))
    {
        document.querySelector('.presentation').style.backgroundColor = '#9b59b6'
    }else{
        document.querySelector('.presentation').style.backgroundColor = '#34495e'
    } 
    

    