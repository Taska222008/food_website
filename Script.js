const dishBtnContainer = document.querySelector(".dish-type");
const foodMenuEle = document.querySelector(".food-menu");
const detailEle = document.querySelector(".info");
const search_input = document.querySelector(".search-box")
// const addBtn = document.querySelector(".add_quan_btn");
// let removeBtn = document.querySelector(".remove_quan_btn");
// let quantityEle = document.querySelector(".quan_val");



let currentType = "hotDish";



const foodMenuData = {
    hotDish: [
        {
            id: 1,
            name: "Spicy seasoned seafood noodles",
            price: 2.29,
            stock: 20,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors. Garnished with fresh herbs and a hint of lime for a zesty finish.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
        {
            id: 4,
            name: "Salted Pasta with mushroom sauce",
            price: 5.59,
            stock: 12,
            details: {
                desc: "A creamy and savory pasta dish served with a rich mushroom sauce, perfectly seasoned to enhance the earthy flavors of the mushrooms. Garnished with freshly grated Parmesan and parsley for a gourmet touch.",
                extra: [
                { name: "Extra Cheese", price: 1.5 },
                { name: "Mushroom", price: 2 },
                { name: "Chicken", price: 4 },
                ],
            },
        },
        {
            id: 3,
            name: "Beef dumpling in hot and sour soup",
            price: 12.33,
            stock: 16,
            details: {
                desc: "A hearty and tangy soup with tender beef dumplings, simmered in a flavorful broth with a perfect balance of hot and sour notes. Served with fresh cilantro and a splash of vinegar for extra zest.",
                extra: [
                { name: "Extra Dumpling", price: 3 },
                { name: "Chili Oil", price: 1 },
                { name: "Tofu", price: 2.5 },
                ],
            },
        },
        {
            id: 7,
            name: "Healthy noodle with spinach leaf",
            price: 10.99,
            stock: 26,
            details: {
                desc: "A nutritious and light noodle dish featuring fresh spinach leaves and a subtle garlic-infused sauce. A perfect choice for a healthy yet satisfying meal.",
                extra: [
                { name: "Grilled Chicken", price: 3.5 },
                { name: "Boiled Egg", price: 2 },
                { name: "Avocado", price: 4 },
                ],
            },
        },
        {
            id: 5,
            name: "Hot spicy fried rice with omelet",
            price: 60.33,
            stock: 0,
            details: {
                desc: "A fiery and flavorful fried rice dish loaded with spices, vegetables, and a fluffy omelet on top. The bold spices provide a tantalizing heat that is balanced by the creamy omelet.",
                extra: [
                { name: "Extra Omelet", price: 3 },
                { name: "Shrimp", price: 5 },
                { name: "Vegetables", price: 2 },
                ],
            },
        },
        {
            id: 6,
            name: "Spicy instant noodle with special omelette",
            price: 100.0,
            stock: 88,
            details: {
                desc: "A luxurious take on instant noodles, elevated with a special omelet and a blend of spices that provide a mouthwatering kick. Topped with fresh scallions and sesame seeds.",
                extra: [
                { name: "Extra Sauce", price: 1 },
                { name: "Egg", price: 2 },
                { name: "Beef", price: 5 },
                ],
            },
        },
        {
            id: 2,
            name: "Spicy seasoned seafood noodles",
            price: 44.05,
            stock: 2,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
        {
            id: 8,
            name: "Spicy seasoned seafood noodles",
            price: 20.12,
            stock: 5,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
        {
            id: 9,
            name: "Spicy seasoned seafood noodles",
            price: 73.24,
            stock: 7,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
    ],
    coldDish: [
        {
            id: 1,
            name: "Spicy seasoned seafood noodles",
            price: 2.29,
            stock: 20,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors. Garnished with fresh herbs and a hint of lime for a zesty finish.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
    
        {
            id: 3,
            name: "Beef dumpling in hot and sour soup",
            price: 12.33,
            stock: 16,
            details: {
                desc: "A hearty and tangy soup with tender beef dumplings, simmered in a flavorful broth with a perfect balance of hot and sour notes. Served with fresh cilantro and a splash of vinegar for extra zest.",
                extra: [
                { name: "Extra Dumpling", price: 3 },
                { name: "Chili Oil", price: 1 },
                { name: "Tofu", price: 2.5 },
                ],
            },
        },
        {
            id: 7,
            name: "Healthy noodle with spinach leaf",
            price: 10.99,
            stock: 26,
            details: {
                desc: "A nutritious and light noodle dish featuring fresh spinach leaves and a subtle garlic-infused sauce. A perfect choice for a healthy yet satisfying meal.",
                extra: [
                { name: "Grilled Chicken", price: 3.5 },
                { name: "Boiled Egg", price: 2 },
                { name: "Avocado", price: 4 },
                ],
            },
        },
       
    ],
    soup: [
        {
            id: 3,
            name: "Beef dumpling in hot and sour soup",
            price: 12.33,
            stock: 16,
            details: {
                desc: "A hearty and tangy soup with tender beef dumplings, simmered in a flavorful broth with a perfect balance of hot and sour notes. Served with fresh cilantro and a splash of vinegar for extra zest.",
                extra: [
                { name: "Extra Dumpling", price: 3 },
                { name: "Chili Oil", price: 1 },
                { name: "Tofu", price: 2.5 },
                ],
            },
        },
        {
            id: 2,
            name: "Salted Pasta with mushroom sauce",
            price: 5.59,
            stock: 12,
            details: {
                desc: "A creamy and savory pasta dish served with a rich mushroom sauce, perfectly seasoned to enhance the earthy flavors of the mushrooms. Garnished with freshly grated Parmesan and parsley for a gourmet touch.",
                extra: [
                { name: "Extra Cheese", price: 1.5 },
                { name: "Mushroom", price: 2 },
                { name: "Chicken", price: 4 },
                ],
            },
        },
        {
            id: 9,
            name: "Spicy seasoned seafood noodles",
            price: 73.24,
            stock: 7,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
        {
            id: 7,
            name: "Healthy noodle with spinach leaf",
            price: 10.99,
            stock: 26,
            details: {
                desc: "A nutritious and light noodle dish featuring fresh spinach leaves and a subtle garlic-infused sauce. A perfect choice for a healthy yet satisfying meal.",
                extra: [
                { name: "Grilled Chicken", price: 3.5 },
                { name: "Boiled Egg", price: 2 },
                { name: "Avocado", price: 4 },
                ],
            },
        },
       
    ],
    grill: [
        {
            id: 8,
            name: "Spicy seasoned seafood noodles",
            price: 20.12,
            stock: 5,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
        {
            id: 6,
            name: "Spicy instant noodle with special omelette",
            price: 100.0,
            stock: 88,
            details: {
                desc: "A luxurious take on instant noodles, elevated with a special omelet and a blend of spices that provide a mouthwatering kick. Topped with fresh scallions and sesame seeds.",
                extra: [
                { name: "Extra Sauce", price: 1 },
                { name: "Egg", price: 2 },
                { name: "Beef", price: 5 },
                ],
            },
        },
        {
            id: 5,
            name: "Hot spicy fried rice with omelet",
            price: 60.33,
            stock: 0,
            details: {
                desc: "A fiery and flavorful fried rice dish loaded with spices, vegetables, and a fluffy omelet on top. The bold spices provide a tantalizing heat that is balanced by the creamy omelet.",
                extra: [
                { name: "Extra Omelet", price: 3 },
                { name: "Shrimp", price: 5 },
                { name: "Vegetables", price: 2 },
                ],
            },
        },
        {
            id: 7,
            name: "Healthy noodle with spinach leaf",
            price: 10.99,
            stock: 26,
            details: {
                desc: "A nutritious and light noodle dish featuring fresh spinach leaves and a subtle garlic-infused sauce. A perfect choice for a healthy yet satisfying meal.",
                extra: [
                { name: "Grilled Chicken", price: 3.5 },
                { name: "Boiled Egg", price: 2 },
                { name: "Avocado", price: 4 },
                ],
            },
        },
        {
            id: 9,
            name: "Spicy seasoned seafood noodles",
            price: 73.24,
            stock: 7,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
        {
            id: 4,
            name: "Salted Pasta with mushroom sauce",
            price: 5.59,
            stock: 12,
            details: {
                desc: "A creamy and savory pasta dish served with a rich mushroom sauce, perfectly seasoned to enhance the earthy flavors of the mushrooms. Garnished with freshly grated Parmesan and parsley for a gourmet touch.",
                extra: [
                { name: "Extra Cheese", price: 1.5 },
                { name: "Mushroom", price: 2 },
                { name: "Chicken", price: 4 },
                ],
            },
        },
        {
            id: 2,
            name: "Spicy seasoned seafood noodles",
            price: 44.05,
            stock: 2,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
        {
            id: 1,
            name: "Spicy seasoned seafood noodles",
            price: 2.29,
            stock: 20,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors. Garnished with fresh herbs and a hint of lime for a zesty finish.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
        {
            id: 3,
            name: "Beef dumpling in hot and sour soup",
            price: 12.33,
            stock: 16,
            details: {
                desc: "A hearty and tangy soup with tender beef dumplings, simmered in a flavorful broth with a perfect balance of hot and sour notes. Served with fresh cilantro and a splash of vinegar for extra zest.",
                extra: [
                { name: "Extra Dumpling", price: 3 },
                { name: "Chili Oil", price: 1 },
                { name: "Tofu", price: 2.5 },
                ],
            },
        },
    ],
    appetizer: [
        {
            id: 2,
            name: "Spicy seasoned seafood noodles",
            price: 44.05,
            stock: 2,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
        {
            id: 1,
            name: "Spicy seasoned seafood noodles",
            price: 2.29,
            stock: 20,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors. Garnished with fresh herbs and a hint of lime for a zesty finish.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
        {
            id: 3,
            name: "Beef dumpling in hot and sour soup",
            price: 12.33,
            stock: 16,
            details: {
                desc: "A hearty and tangy soup with tender beef dumplings, simmered in a flavorful broth with a perfect balance of hot and sour notes. Served with fresh cilantro and a splash of vinegar for extra zest.",
                extra: [
                { name: "Extra Dumpling", price: 3 },
                { name: "Chili Oil", price: 1 },
                { name: "Tofu", price: 2.5 },
                ],
            },
        },
        {
            id: 6,
            name: "Spicy instant noodle with special omelette",
            price: 100.0,
            stock: 88,
            details: {
                desc: "A luxurious take on instant noodles, elevated with a special omelet and a blend of spices that provide a mouthwatering kick. Topped with fresh scallions and sesame seeds.",
                extra: [
                { name: "Extra Sauce", price: 1 },
                { name: "Egg", price: 2 },
                { name: "Beef", price: 5 },
                ],
            },
        },
        {
            id: 2,
            name: "Spicy seasoned seafood noodles",
            price: 44.05,
            stock: 2,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
        {
            id: 8,
            name: "Spicy seasoned seafood noodles",
            price: 20.12,
            stock: 5,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
        {
            id: 1,
            name: "Spicy seasoned seafood noodles",
            price: 2.29,
            stock: 20,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors. Garnished with fresh herbs and a hint of lime for a zesty finish.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
        {
            id: 4,
            name: "Salted Pasta with mushroom sauce",
            price: 5.59,
            stock: 12,
            details: {
                desc: "A creamy and savory pasta dish served with a rich mushroom sauce, perfectly seasoned to enhance the earthy flavors of the mushrooms. Garnished with freshly grated Parmesan and parsley for a gourmet touch.",
                extra: [
                { name: "Extra Cheese", price: 1.5 },
                { name: "Mushroom", price: 2 },
                { name: "Chicken", price: 4 },
                ],
            },
        },
    ],
    dessert: [
        {
            id: 9,
            name: "Spicy seasoned seafood noodles",
            price: 73.24,
            stock: 7,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
        {
            id: 4,
            name: "Salted Pasta with mushroom sauce",
            price: 5.59,
            stock: 12,
            details: {
                desc: "A creamy and savory pasta dish served with a rich mushroom sauce, perfectly seasoned to enhance the earthy flavors of the mushrooms. Garnished with freshly grated Parmesan and parsley for a gourmet touch.",
                extra: [
                { name: "Extra Cheese", price: 1.5 },
                { name: "Mushroom", price: 2 },
                { name: "Chicken", price: 4 },
                ],
            },
        },
        {
            id: 2,
            name: "Spicy seasoned seafood noodles",
            price: 44.05,
            stock: 2,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
        {
            id: 1,
            name: "Spicy seasoned seafood noodles",
            price: 2.29,
            stock: 20,
            details: {
                desc: "A bold and flavorful dish featuring tender noodles tossed in a rich, spicy sauce, infused with aromatic seasonings. Loaded with a medley of fresh seafood, including shrimp, squid, and mussels, this dish offers a perfect balance of heat and savory ocean flavors. Garnished with fresh herbs and a hint of lime for a zesty finish.",
                extra: [
                { name: "Egg", price: 2 },
                { name: "Noodle", price: 2.5 },
                { name: "Beef", price: 5.5 },
                ],
            },
        },
        {
            id: 3,
            name: "Beef dumpling in hot and sour soup",
            price: 12.33,
            stock: 16,
            details: {
                desc: "A hearty and tangy soup with tender beef dumplings, simmered in a flavorful broth with a perfect balance of hot and sour notes. Served with fresh cilantro and a splash of vinegar for extra zest.",
                extra: [
                { name: "Extra Dumpling", price: 3 },
                { name: "Chili Oil", price: 1 },
                { name: "Tofu", price: 2.5 },
                ],
            },
        },
        {
            id: 6,
            name: "Spicy instant noodle with special omelette",
            price: 100.0,
            stock: 88,
            details: {
                desc: "A luxurious take on instant noodles, elevated with a special omelet and a blend of spices that provide a mouthwatering kick. Topped with fresh scallions and sesame seeds.",
                extra: [
                { name: "Extra Sauce", price: 1 },
                { name: "Egg", price: 2 },
                { name: "Beef", price: 5 },
                ],
            },
        },
    ],
};



search_input.addEventListener("change", (e) => {
    let search_value = search_input.value;
    search_food(search_value)

})

function search_food(value) {
    let search_data = foodMenuData[currentType].filter(function(e){
        if(e.name.toLowerCase().includes(value.toLowerCase())){
            return true
        }
    })
    renderFoodMenu(search_data)
}


dishBtnContainer.addEventListener("click", function (e) {
  if (e.target.classList[1] === "dish-btn") {
    // remove all active class out of all buttons
    document.querySelectorAll(".dish-btn").forEach(function (ele) {
      ele.classList.remove("active");
    });

    // add the active class to clicked button
    e.target.classList.add("active");


    let type = e.target.getAttribute("type")
    renderFoodMenu(foodMenuData[type])
    currentType = type
    search_input.value = ""

  }
});

function renderFoodItem(data) {
    return`
    <div item-id="${data.id}" class="food-item anime">
        <img src="./images/food${data.id}.png" alt="">
        <div class="food-item-info">
            <p>${data.name}</p>
            <p class="item-price">$ ${data.price}</p>
            <p class="item-avai">${data.stock} Bowls available</p>
        </div>
        <a class="add-to-cart-mini"><img src="./images/plus.png" alt=""></a>
    </div>
    `;
}

function renderFoodMenu(food_list) {
    let contain = "";
    food_list.forEach(function(food){
        contain += renderFoodItem(food)
    })
    foodMenuEle.innerHTML = contain
}

renderFoodMenu(foodMenuData[currentType])

// function renderFoodItem(data) {
//   return `
//         <div item-id="${data.id}" class="food-item anime">
//             <img src="./img/food${data.id}.png" alt="">
//             <div class="food-item-info">
//                 <p>${data.name}</p>
//                 <p class="item-price">$ ${data.price}</p>
//                 <p class="item-avai">${data.stock} Bowls available</p>
//             </div>
//             <a class="add-to-cart-mini"><img src="./img/plus.png" alt=""></a>
//         </div>
//     `;
// }
// function renderFoodMenu(dataList) {
//   foodMenuEle.classList.remove("goup-effect");
//   let content = "";
//   dataList.forEach(function (food) {
//     content += renderFoodItem(food);
//   });

//   foodMenuEle.classList.remove("goup-effect");
//   setTimeout(() => {
//     foodMenuEle.innerHTML = content;
//     foodMenuEle.classList.add("goup-effect");
//   }, 100);
// }

function renderExtra(addOns) {
    let content = '';
    addOns.forEach(function(item, idx) {
        const ct = `
            <div class="add-on-item">
                <div>
                    <input type="checkbox" id="extra${idx}" name="vehicle1" value="${item.price}">
                    <label for="extra1"> ${item.name}</label>
                </div>
                <p>+${item.price}</p>
            </div>
            <hr>
        `
        content += ct;
    });
    return content;
};

function renderDetails(details) {
    const footerEle = detailEle.innerHTML;
    const detail = `
        <div class="info-container" details-id="${details.id}">
            <div class="food-descript">
                <img src="./images/food_full_${details.id}.png" alt="">
                <div class="goup-effect">
                    <h3 class="detail-title">${details.name}</h3>
                    <p class="detail-price">$ ${details.price}</p>
                </div>
                <p class="food_des goup-effect">${details.details.desc}</p>
            </div>
            <div class="food-add-on goup-effect">
                ${renderExtra(details.details.extra)}
            </div>
            <div class="food-note">
                <input type="text" placeholder="Order Note...">
            </div>
            <div class="food-quantity">
                <div>
                    <button class="remove_quan_btn">-</button>
                    <input class="quan_val" type="text" value=0>
                    <button class="add_quan_btn">+</button>
                </div>
                
            </div>
        </div>
            
        <div class="info-add-to-cart">
            <button>Add to cart</button>
        </div>
    `;
    detailEle.innerHTML = detail  ;
    // + footerEle
    let quan = 0;
    const add_btn = document.querySelector(".add_quan_btn");
    const remove_btn = document.querySelector(".remove_quan_btn");
    const quan_display = document.querySelector(".quan_val")

    add_btn.addEventListener("click", function(){
        quan ++
        quan_display.value = quan
    })
    remove_btn.addEventListener("click", function(){
        if(quan <= 0){return}
        quan --
        quan_display.value = quan
    })
}

foodMenuEle.addEventListener('click', function(e) {
    const selectedId = e.target.closest('.food-item').getAttribute('item-id');
    const selectItem = foodMenuData[currentType].find(function(item) {
        return item.id == selectedId;
    })
    console.log(selectItem)
    renderDetails(selectItem);
});

// removeBtn?.addEventListener('click', function(e) {
//     const currQuan = parseInt(quantityEle.innerHTML);
//     currQuan += 1;
//     quantityEle.innerHTML = currQuan;
// })

renderFoodMenu(foodMenuData[currentType]);