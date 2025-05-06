const confirmBasket = document.querySelector('.confirm-basket');
const cartPopUpSubtotal = document.querySelector('.cart-footer-subtotal');

function openCartModel(){
    cart_popup.classList.add("active")
    screen_overlay.classList.add("active")
    cartPopUpSubtotal.innerHTML = `Sub-total: ${formatCurrency(calcSubtotal())}`;
}

function closeCartModel(){
    cart_popup.classList.remove("active")
    screen_overlay.classList.remove("active")
}

function renderCartItem(data, index, isFinal=false){
    const image_id = data.id.toString().length == 1 ? data.id : `${data.id}`.charAt(1)
    const extra = data.extras.map((i) => i.name).join(' , ');

    return`
    <div class="food-info" food-id="${data.id}" key="${index}" quan="${data.quantity}">
        <div class="remove_item food-info-item">${!isFinal ? '<button class="remove_basket">&times;</button>' : "▸"}</div>
        <div class="food-info-item" style="width: 60px;">
            <img src="./images/food${image_id}.png" alt="">
        </div>

        <div class="food-name food-info-item">
            ${data.name}
            <div class="food-name-extras">${data.extras.length != 0 ? `- Extra: ${extra}` : ''}</div>
            <div class="food-name-extras">${data.note && `- Note: ${data.note}`}</div>
        </div>

        <div class="food-quantity-basket food-info-item" style="text-align: center">
            ${data.quantity}
        </div>

        <div class="food-price food-info-item">
            ${formatCurrency(data.total_price)}
        </div>

    </div>`
}

function calcSubtotal () {
    const subtotal = basket.reduce((total, item) => {
        return total + item.total_price;
    }, 0);
    return subtotal;
}

function renderCartMenu(cart, isFinal=false){
    let contain = ''
    cart.forEach(function(food, index){
        contain += renderCartItem(food, index, isFinal)
    })
    return contain
    
}
cart_menu.addEventListener("click", function(e){
    if(e.target.className == "remove_basket"){
     
        item_pos = e.target.closest(".food-info").getAttribute("key")
        item_id = e.target.closest(".food-info").getAttribute("food-id")
        item_stock = e.target.closest(".food-info").getAttribute("quan")
        basket.splice(parseInt(item_pos), 1)

        cart_menu.innerHTML = renderCartMenu(basket);

        restock_item(item_id, parseInt(item_stock));
        cartPopUpSubtotal.innerHTML = `Sub-total: ${formatCurrency(calcSubtotal())}`;
    }
})

function restock_item(food_id, item_stock){
    let menu_item;
    for(cate in foodMenuData){

        menu_item = foodMenuData[cate].find(function(i){
            
            return i.id == food_id
        })
        
        if(menu_item){
            menu_item.stock += item_stock
            update_stock_dom(food_id, menu_item)
        }   
    } 
}

function update_stock_dom(id, menu_item){
    const food_items = document.querySelectorAll(".food-item")
    food_items.forEach(function(i){
        if(i.getAttribute("item-id") == id){
            i.querySelector(".item-avai").innerHTML = `${menu_item.stock} Bowls available`
        }
    })
    total_stock_counter(true)
}

confirmBasket.addEventListener('click', (e) => {
    if (basket.length <= 0) {
        alert_active("🛒 Please add food to basket!", 1.5);
        return;
    }
    showFinalConfirmModal();
});
