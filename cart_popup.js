function openCartModel(){
    cart_popup.classList.add("active")
    screen_overlay.classList.add("active")

}

function closeCartModel(){
    cart_popup.classList.remove("active")
    screen_overlay.classList.remove("active")
}

function renderCartItem(data){
    const image_id = data.id.toString().length == 1 ? data.id : `${data.id}`.charAt(1)
    
    // console.log("base:", data.id.toString().length)
    // console.log("edited:", image_id)
    

    return`
    <div class="food-info" food-id="${data.id}">

                <div>
                    <img src="./images/food${image_id}.png" alt="">
                </div>
    
                <div>
                    Dish
                    <div class="food-name">
                        ${data.name}
                    </div>
                </div>

                <div>
                    Quantity
                    <div class="food-quantity">
                        ${data.quantity}
                    </div>
                </div>

                <div>
                    Price
                    <div class="food-price">
                        $${data.total_price}
                    </div>
                </div>

            </div>`
}
function renderCartMenu(cart){
    let contain = ""
    cart.forEach(function(food){
        contain += renderCartItem(food)
    })
    cart_menu.innerHTML = contain
    
}