var btn = document.getElementsByClassName("btn");

function store() { 
let inputNom = document.getElementsByClassName("nom");
var inputMail = document.getElementsByClassName("email");
var inputAddress = document.getElementsByClassName("adresse");
var inputVille = document.getElementsByClassName("ville");
var inputPays = document.getElementsByClassName("pays");
var inputZip = document.getElementsByClassName("zip");
var inputCarteNom = document.getElementsByClassName("nom-carte");
var inputCarteNum= document.getElementsByClassName("numero-carte");
var inputMonth= document.getElementsByClassName("exp-mois");
var inputYear= document.getElementsByClassName("exp-year");
var inputCvv= document.getElementsByClassName("cvv");
localStorage.setItem("nom", inputNom.value);
localStorage.setItem("nom", inputMail.value);
localStorage.setItem("nom", inputAddress.value);
localStorage.setItem("ville", inputVille.value);
localStorage.setItem("pays", inputPays.value);
localStorage.setItem("zip", inputZip.value);
localStorage.setItem("nomCarte", inputCarteNom.value);
localStorage.setItem("numCarte", inputCarteNum.value);
localStorage.setItem("Month", inputMonth.value);
localStorage.setItem("Year", inputYear.value);
localStorage.setItem("CVV", inputCvv.value);
}

btn[0].addEventListener('click', () => {
    store()
});
