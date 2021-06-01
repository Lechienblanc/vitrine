function submitform() {

    console.log(document.getElementById('nom').value)
    console.log(document.getElementById('prenom').value)
    console.log(document.getElementById('entreprise').value)
    console.log(document.getElementById('telephone').value)
    console.log(document.getElementById('text').value)
    console.log(document.getElementById('email').value)
    console.log(document.getElementById('choix').value)
    if (document.getElementById('text').value != "" && document.getElementById('email').value != "" && document.getElementById('choix').value != ""){
        document.getElementById("confirmation").innerHTML = "Votre message a bien été envoyé"
    }
}
