function viewPanier() {
    let panierTotal = localStorage.getItem("prixTotal");
    let dansPanier = localStorage.getItem("produitInPanier");
    dansPanier = JSON.parse(dansPanier);
    let produitPanier = document.querySelector(".pshow");
    if ( dansPanier && produitPanier) {
        produitPanier.innerHTML = '';
        Object.values(dansPanier).map(item => {
            produitPanier.innerHTML += `
            <tr>
                <th> Produit </th>
                <th> Quantité </th>
                <th> Prix </th>
                <th>  </th>
            </tr>
            <tr>
                <th> ${item.name}</th>
                <th> <button class="enlever"> < </button> <span>${item.unité}</span> <button class="ajouter"> > </button></th>
                <th> ${item.prix * item.unité},00 €</th>
                <th><button name="" class="delete"> X </button></th>
            </tr>
            `
        });
        produitPanier.innerHTML += `<p class="total"> Total : ${panierTotal},00 € </p> `
        
        manageQuantity();
    }

}

function manageQuantity() {
    let enleve = document.querySelectorAll('.enlever');
    let ajoute = document.querySelectorAll('.ajouter');
    let currentQuantity = 0;
    let currentProduct = '';
    let dansPanier = localStorage.getItem('produitInPanier');
    dansPanier = JSON.parse(dansPanier);
    
    for(let i=0; i < ajoute.length; i++) {
        enleve[i].addEventListener('click', () => {
            
            // console.log(dansPanier);
            // currentQuantity = enleve[i].parentElement.querySelector('span').textContent;
            // console.log(currentQuantity);
            // currentProduct = enleve[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            // console.log(currentProduct);

            
            if( dansPanier[currentProduct].unité > 1 ) {
                dansPanier[currentProduct].unité -= 1;
                cartNumbers(dansPanier[currentProduct], "enlever");
                totalCost(cartItems[currentProduct], "enlever");
                localStorage.setItem('produitInPanier', JSON.stringify(dansPanier));
                viewPanier();
            }
        });
        ajoute[i].addEventListener('click', () => {
            console.log(dansPanier);
            currentQuantity = ajoute[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = ajoute[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            ajoute[currentProduct].unité += 1;
            cartNumbers(dansPanier[currentProduct]);
            prixTotal(dansPanier[currentProduct]);
            localStorage.setItem('produitInPanier', JSON.stringify(dansPanier));
            viewPanier();
        });
    }
}


// function click_remove(data) {
//     let enleve = document.getElementsByClassName('.enlever');
//     let panier = localStorage.getItem('produitInPanier');
//     enleve.addEventListener('click', () => {
//         panier[data.name].unité -= 1 ;

//     })
// }
viewPanier();

