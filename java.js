// je code mon site
// github git commit / git push / git clone 

const presentation = document.querySelector('.texte_presentation');
const parcours = document.querySelector('.texte_parcours');
const interet = document.querySelector('.texte_interet');
const projet = document.querySelector('.texte_projet');

const buttonPresentation = document.querySelector('.presentation');
const buttonParcours = document.querySelector('.parcours');
const buttonInteret = document.querySelector('.interet');
const buttonProjet = document.querySelector('.projet');
const buttonGauche = document.querySelector('.gauche');
const queryBarreDeGauche = document.querySelector('.barre_de_gauche');


// les fonctions permettant de renvoyer sur mes réseaux
// en mode blank dans un nouvel onglet
// pour resize la page utilisation de window.innerHeight innerwidth 
// ils donnent la largeur et la hauteur de la page
// dans trnasition après le temps je peux choisir le type de transition

const functionClick= function(ev)
{
    if(ev.target.className === "utilisateur instagram")
    {
        window.open('https://www.instagram.com/bastpoy/', '_blank');    }
    if(ev.target.className === "utilisateur facebook")
    {
        window.open('https://www.facebook.com/profile.php?id=100010020970241', '_blank');
    }
    if(ev.target.className === "utilisateur linkedin")
    {
        window.open('https://www.linkedin.com/in/bastien-poyet-67414b14a/', '_blank');
    }
    if(ev.target.className === "utilisateur twitter")
    {
        window.open('https://twitter.com/zigotys', '_blank');
    }

    //tout ce qui concerne la navigation a gauche
    //Quand je clique ca va directement dans la div
    if(ev.target.className==="gauche presentation")
    {
        window.scrollTo({top: presentation.offsetTop, behavior: 'smooth'});
    }
    if(ev.target.className==="gauche parcours")
    {
        window.scrollTo({top: parcours.offsetTop, behavior: 'smooth'});
    }
    if(ev.target.className==="gauche interet")
    {
        window.scrollTo({top: interet.offsetTop, behavior: 'smooth'});
    }
    if(ev.target.className==="gauche projet")
    {
        window.scrollTo({top: projet.offsetTop, behavior: 'smooth'});
    }
}

// dans la fonction colorScrollLeft on change la couleur des boutons à gauche
// lorsque l'on scroll dans les div vers le bas
// c'est un code un peu lourd mais à chaque fois que je set une couleur
//je déselectionne les autres ducoup j'appel chaque classe en même temps

const colorScrollLeft=function()
{
    if(window.scrollY < presentation.offsetTop + (window.innerHeight/2) &&
    window.scrollY > presentation.offsetTop - (window.innerHeight/2))
    {
        buttonPresentation.style.backgroundColor = 'RGBa(255,255,255,0.2)'
        buttonParcours.style.backgroundColor = 'inherit'
        buttonInteret.style.backgroundColor = 'inherit'
        buttonProjet.style.backgroundColor = 'inherit'
        buttonGauche.style.transition = '0.5s'
        
    }
    else if(window.scrollY < parcours.offsetTop + (window.innerHeight/2) &&
    window.scrollY > parcours.offsetTop - (window.innerHeight/2))
    {
        buttonParcours.style.backgroundColor = 'RGBa(255,255,255,0.2)'
        buttonInteret.style.backgroundColor = 'inherit'
        buttonPresentation.style.backgroundColor = 'inherit'
        buttonProjet.style.backgroundColor = 'inherit'
        buttonGauche.style.transition = '0.5s'
    } 
    else if(window.scrollY < interet.offsetTop + (window.innerHeight/2) &&
    window.scrollY > interet.offsetTop - (window.innerHeight/2))
    {
        buttonInteret.style.backgroundColor = 'RGBa(255,255,255,0.2)'
        buttonParcours.style.backgroundColor = 'inherit'
        buttonPresentation.style.backgroundColor = 'inherit'
        buttonProjet.style.backgroundColor = 'inherit'
        buttonGauche.style.transition = '0.5s'
    }
    else if(window.scrollY < projet.offsetTop + (window.innerHeight/2) &&
    window.scrollY > projet.offsetTop - (window.innerHeight/2))
    {
        buttonProjet.style.backgroundColor = 'RGBa(255,255,255,0.2)'
        buttonInteret.style.backgroundColor = 'inherit'
        buttonParcours.style.backgroundColor = 'inherit'
        buttonPresentation.style.backgroundColor = 'inherit'
        buttonGauche.style.transition = '0.5s'
    }
    else{
        buttonGauche.style.backgroundColor = 'inherit';
        buttonGauche.style.transition = '0.5s'
    }
}

const mouseHover = function(ev)
{
    if(ev.target.className === "gauche presentation")
    {
        buttonPresentation.style.backgroundColor = 'RGBa(255,255,255,0.2)';
    }
    if(ev.target.className === "gauche projet")
    {
        buttonProjet.style.backgroundColor = 'RGBa(255,255,255,0.2)';
    }
    if(ev.target.className === "gauche interet")
    {
        buttonInteret.style.backgroundColor = 'RGBa(255,255,255,0.2)';
    }
    if(ev.target.className === "gauche parcours")
    {
        buttonParcours.style.backgroundColor = 'RGBa(255,255,255,0.2)';
    }

}


document.addEventListener('click',functionClick);
document.addEventListener('scroll',colorScrollLeft);
document.addEventListener('mouseout', mouseHover);





    

    