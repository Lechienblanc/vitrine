var menu = document.getElementById("menu");
var bouton = document.getElementById("btn");
var cachebouton = 1;

bouton.addEventListener("click", function(){
    var Requetemeyokochocommande = new XMLHttpRequest();
    Requetemeyokochocommande.open('GET', 'https://raw.githubusercontent.com/Lechienblanc/vitrine/main/entr%C3%A9e.json')
    Requetemeyokochocommande.onload = function(){
    var datayokochocommande = JSON.parse(Requetemeyokochocommande.responseText);
    transformenhtml(datayokochocommande)
};
Requetemeyokochocommande.send();
cachebouton++;
if (cachebouton > 1){
    bouton.classList.add("hide-me");
}
});

function transformenhtml(data){
    var htmlstring = "";

    for (i = 0; i < data.length; i++){
        htmlstring += "<p>" + data[i].name + "<br>" + data[i].description + "<br>" + data[i].prix + "<br>" + "<img src=" + data[i].img +" " +"height="  + " 300 width=" + "300> <br>" + "<button id=" + "panier> Ajouter au panier " + "</button> " + "<p>";
    } 
    menu.insertAdjacentHTML('beforeend', htmlstring)
}