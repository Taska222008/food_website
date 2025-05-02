function openCartModel(){
    cart_popup.classList.add("active")
    screen_overlay.classList.add("active")

}

function closeCartModel(){
    cart_popup.classList.remove("active")
    screen_overlay.classList.remove("active")
}

function renderCartItem(data, index){
    const image_id = data.id.toString().length == 1 ? data.id : `${data.id}`.charAt(1)
    
    // console.log("base:", data.id.toString().length)
    // console.log("edited:", image_id)
    

    return`
    <div class="food-info" food-id="${data.id}" key="${index}" quan="${data.quantity}">
                <div class="remove_item"><button class="remove_basket">&times;</button></div>
                <div>
                    <img src="./images/food${image_id}.png" alt="">
                </div>
    
                <div>
                    <span class="highlight">Dish</span>
                    <div class="food-name">
                        ${data.name}
                    </div>
                </div>

                <div>
                    <span class="highlight">Quantity</span>
                    <div class="food-quantity">
                        ${data.quantity}
                    </div>
                </div>

                <div>
                    <span class="highlight">Price</span>
                    <div class="food-price">
                        $${data.total_price}
                    </div>
                </div>

            </div>`
}
function renderCartMenu(cart){
    let contain = ""
    cart.forEach(function(food, index){
        contain += renderCartItem(food, index)
    })
    cart_menu.innerHTML = contain
    
}
cart_menu.addEventListener("click", function(e){
    if(e.target.className == "remove_basket"){
     
        item_pos = e.target.closest(".food-info").getAttribute("key")
        item_id = e.target.closest(".food-info").getAttribute("food-id")
        item_stock = e.target.closest(".food-info").getAttribute("quan")
        console.log(item_stock)
        basket.splice(parseInt(item_pos), 1)

        let contain = ""
        basket.forEach(function(food, index){
            contain += renderCartItem(food, index)
        })
        cart_menu.innerHTML = contain

        restock_item(item_id, parseInt(item_stock))

    }
})

function restock_item(food_id, item_stock){
    let menu_item;
    for(cate in foodMenuData){

        menu_item = foodMenuData[cate].find(function(i){
            
            return i.id == food_id
        })
        console.log(menu_item)
        if(menu_item){
            menu_item.stock += item_stock
            update_stock_dom(food_id, menu_item)
        }

        
    }

  

}

function update_stock_dom(id, menu_item){
    const food_items = document.querySelectorAll(".food_item")
    food_items.forEach(function(i){
        if(i.getAttribute("item_id") == id){
            i.querySelector(".item-avai").innerHTML = `${menu_item.stock} Bowls available`
        }
    })
}



