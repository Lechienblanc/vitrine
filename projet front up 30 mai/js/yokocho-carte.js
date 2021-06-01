var menu = document.getElementById("menu");
let added = document.querySelectorAll('.add');


var Requetemeyokochocommande = new XMLHttpRequest();
Requetemeyokochocommande.open('GET', 'https://raw.githubusercontent.com/Lechienblanc/vitrine/main/entr%C3%A9e.json')
Requetemeyokochocommande.onload = function(){
    var datayokochocommande = JSON.parse(Requetemeyokochocommande.responseText);
    transformenhtml(datayokochocommande)
    addCart(datayokochocommande)
};
Requetemeyokochocommande.send();


function transformenhtml(data){
    var htmlString = "";

    for (i = 0; i < data.length; i++){
        htmlString += "<div class= repas" + [i] + ">" + 
        "<img src=" + data[i].img + " " + "class =" + "img_produit" + " " + "alt =" + "image_produit" +" > " +
        "<p class= produit" + [i] + ">" + data[i].name  + "<br>" +
        data[i].description + "<br>" +
        data[i].prix + "€" + "<br>" +
        "</div>";
    } 
    menu.innerHTML = htmlString
}

function addCart(data) {
    for (let i=0; i < added.length; i++) {
    added[i].addEventListener('click', () => {
        cartNumbers(data[i]);
        prixTotal(data[i])
        prixTotal(datayokochocommande)
    })
}}

function refreshSave() {
    let productNumbers = localStorage.getItem('Quantité');

    if ( productNumbers ) {
        document.querySelector('.article span').textContent = productNumbers
    }
} 
function cartNumbers(data) {
    // console.log("the product click is ", data)
    let productNumbers = localStorage.getItem('Quantité');
    productNumbers = parseInt(productNumbers);

    if ( productNumbers ) {
        localStorage.setItem('Quantité', productNumbers + 1);
        document.querySelector('.article span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('Quantité', 1)
        document.querySelector('.article span').textContent = 1;
    } 

    setItems(data);
}

function setItems (data) {
    let dansPanier = localStorage.getItem('produitInPanier');
    dansPanier = JSON.parse(dansPanier);

    if ( dansPanier != null) {
        if (dansPanier[data.name] == undefined) {
            dansPanier = {
                ...dansPanier,
                [data.name]: data
            }
        }
        dansPanier[data.name].unité += 1;
    } else {
        data.unité = 1;
        dansPanier = {
            [data.name] : data 
        }
    }

    localStorage.setItem("produitInPanier", JSON.stringify(dansPanier));
}

function prixTotal(data) {
    let panierTotal = localStorage.getItem("prixTotal");
    localStorage.setItem("prixTotal", data.prix);

    if ( panierTotal != null) {
        panierTotal = parseInt(panierTotal);
        localStorage.setItem("prixTotal", panierTotal + data.prix);
    } else {
        localStorage.setItem("prixTotal", data.prix);
    }
}


refreshSave();
