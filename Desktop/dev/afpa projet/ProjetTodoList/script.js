// const taskbutton=document.querySelector("button");

// document.addEventListener("click",(button) =>
// {let ValInput = document.getElementById("Val");
// let Val = ValInput.value
// console.log(Val);
// })

// Récuperer la Valeur de L'input et l'afficher
const taskButton = document.querySelector("button");

taskButton.addEventListener("click", () => {
    let ValInput = document.getElementById("Val").value;

    // Afficher la valeur dans la console
    console.log(ValInput);

    // Créer un conteneur pour la valeur et les boutons
    const displayArea = document.getElementById("displayArea");
    const displayElement = document.createElement("div");

    const textElement = document.createElement("p");
    textElement.textContent = ValInput;

    // Créer les boutons Valider et Supprimer
    const validateButton = document.createElement("button");
    validateButton.textContent = "Finis";
    validateButton.addEventListener("click", () => {
        textElement.style.color = textElement.style.color == "green" ? "black" : "green";
    });

    const modifyButton = document.createElement("button");
    modifyButton.textContent = "Modifier";
    modifyButton.addEventListener("click", () => {
        const newValue = prompt("Entrez la nouvelle valeur :", textElement.textContent);
        if (newValue !== null && newValue.trim() !== "") {
            textElement.textContent = newValue;
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.addEventListener("click", () => {
        displayArea.removeChild(displayElement);
    });

    // Ajouter les éléments au conteneur displayElement
    displayElement.appendChild(textElement);
    displayElement.appendChild(validateButton);
    displayElement.appendChild(modifyButton);
    displayElement.appendChild(deleteButton);

    // Ajouter le conteneur displayElement au displayArea
    displayArea.appendChild(displayElement);

    // Réinitialiser l'input
    document.getElementById("Val").value = "";
});