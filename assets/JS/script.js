let button = document.querySelectorAll(".btn");
let myBasketStorage = localStorage.getItem("basket");
function createStorage() {
    if (!localStorage.getItem("basket")) {
        localStorage.setItem("basket", JSON.stringify([]));
    }
}
createStorage();
function basketCount() {
    document.querySelector("#basketCount").innerText = JSON.parse(localStorage.getItem("basket")).length;
}
basketCount();

button.forEach(btncard => {
    btncard.addEventListener("click", function (e) {
        e.preventDefault();
        let Id = this.parentElement.parentElement.getAttribute("data-id");
        let price = this.previousElementSibling.innerText;
        let name = this.parentElement.firstElementChild.innerText;
        let image = this.parentElement.previousElementSibling.src;
        createStorage();
        let basket = getBasket(Id, price, name, image);
        localStorage.setItem("basket", JSON.stringify(basket));
        basketCount();
    })
});

function getBasket(Id, price, name, image) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    let existMeal = basket.find(item => item.id == Id);
    if (existMeal == undefined) {
        basket.push({
            id: Id,
            price: price,
            name: name,
            image: image,
            count: 1
        })
    }
    else {
        existMeal.count++;
    }
    return basket;
}




