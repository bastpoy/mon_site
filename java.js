const instagram=document.querySelector('.instagram');
const facebook=document.querySelector('.facebook');
const linkedin=document.querySelector('.linkedin');
const twitter=document.querySelector('.twitter');

// les fonctions permettant de renvoyer sur mes réseaux
const reseau= function(ev)
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
}

document.addEventListener('click',reseau);
