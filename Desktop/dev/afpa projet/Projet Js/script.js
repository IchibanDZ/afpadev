//les tableaux 
// let list_stagiaires = ["Alexandre", "Grégory" , "Tony", "Frédéric", "Cédric", "Nicolas"];
//équivalent à let list_stagiaires = array("Alexandre", "Tony", "Frédéric", "Cédric", "Nicolas")
// console.log(list_stagiaires)
// list_stagiaires.splice(2, 0, 'Stéphane')
// console.log(list_stagiaires)
// list_stagiaires.pop()
// console.log(list_stagiaires)
// list_stagiaires.push('Déborah')
// console.log(list_stagiaires)
// list_stagiaires.splice(4  ,1)
// console.log(list_stagiaires)

// Taille paragraphe
const nodeList = document.querySelectorAll("p");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.fontSize = "20px";
}

// insérer une image 
let imagejavascript = document.createElement('img');
imagejavascript.src = "image4.png";
imagejavascript.alt = 'image avec js';
imageContainer.appendChild(imagejavascript);

// Ecouteurs d'évenement

let secondary_title = document.createElement('p');
secondary_title.id = "grow"
secondary_title.textContent = "ouhzsoihfoihsfgopihjzf"
secondary_title.alt = 'grossisement du texte quand tu cliques';
document.body.appendChild(secondary_title);
size = 10
secondary_title.addEventListener('click', () =>{
    size = size + 5
    secondary_title.style.fontSize = size + "px"
    
if size > 300 then 
size = 20 + 'px'
    console.log('Ok')})
    


