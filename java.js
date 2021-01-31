const presentationTop = document.querySelector('.texte_presentation');
const parcoursTop = document.querySelector('.texte_parcours');
const interetTop = document.querySelector('.texte_interet');
const projetTop = document.querySelector('.texte_projet');


// les fonctions permettant de renvoyer sur mes réseaux
// en mode blank dans un nouvel onglet
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
        window.scrollTo(0,presentationTop.offsetTop);
        console.log('salut');
    }
    if(ev.target.className==="gauche parcours")
    {
        window.scrollTo(0,parcoursTop.offsetTop);
    }
    if(ev.target.className==="gauche interet")
    {
        window.scrollTo(0,interetTop.offsetTop);
    }
    if(ev.target.className==="gauche projet")
    {
        window.scrollTo(0,projetTop.offsetTop);
    }
}

document.addEventListener('click',functionClick);
