var menu = document.getElementById("menu");
var addCart = document.getElementById("panier")

var Requetemeyokochocommande = new XMLHttpRequest();
Requetemeyokochocommande.open('GET', 'https://raw.githubusercontent.com/Lechienblanc/vitrine/main/Tsukiji.json')
Requetemeyokochocommande.onload = function(){
    var datayokochocommande = JSON.parse(Requetemeyokochocommande.responseText);
    transformenhtml(datayokochocommande)
};
Requetemeyokochocommande.send();


function transformenhtml(data){
    var htmlString = "";

    for (i = 0; i < data.length; i++){

        htmlString += "<img src=" + data[i].img + " " + "class =" + "img_produit" + " " + "alt =" + "image_produit" +" > " +
        "<p class= produit" + [i] + ">" + data[i].name + "<br>" +
        data[i].description + "<br>" +
        data[i].prix + "<br>" +
        "<button id=" + "panier> Ajouter au panier " + "</button> </p> <br>";
    } 
    menu.insertAdjacentHTML('afterbegin', htmlString)
}

addCart.addEventListener("click", function() {

})