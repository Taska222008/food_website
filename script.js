const dishBtnContainer = document.querySelector(".dish-type");
const foodMenuEle = document.querySelector(".food-menu");
const detailEle = document.querySelector(".info");
const search_input = document.querySelector(".search-box")
const date_time = document.querySelector(".date")
const stock_counter = document.querySelector(".item-counter span")

const screen_overlay = document.querySelector(".screen-overlay")
const cart_btn = document.querySelector(".cart")
const cart_popup = document.querySelector(".cart-popup")
const close_btn = document.querySelector(".close-btn")

const cart_menu = document.querySelector(".cart-main")
const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];

let add_btn;

// const addBtn = document.querySelector(".add_quan_btn");
// let removeBtn = document.querySelector(".remove_quan_btn");
// let quantityEle = document.querySelector(".quan_val");

let basket = []

let quan = 1;


let currentType = "hotDish";

let current_item;


date_time.innerHTML = new Intl.DateTimeFormat("en-GB", {dateStyle:"full"}).format(new Date())


let foodMenuData = {
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
            id: 11,
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
            id: 13,
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
            id: 17,
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
            id: 23,
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
            id: 22,
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
            id: 29,
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
            id: 27,
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
            id: 38,
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
            id: 36,
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
            id: 35,
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
            id: 37,
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
            id: 39,
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
            id: 34,
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
            id: 32,
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
            id: 31,
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
            id: 33,
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
            id: 42,
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
            id: 41,
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
            id: 43,
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
            id: 46,
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
            id: 42,
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
            id: 48,
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
            id: 41,
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
            id: 44,
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
            id: 59,
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
            id: 54,
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
            id: 52,
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
            id: 51,
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
            id: 53,
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
            id: 56,
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatCurrency(number) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(number);
}


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
    currentType = type
    renderFoodMenu(foodMenuData[type]);
    search_input.value = ""

  }
});

function renderFoodItem(data) {

    const image_id = currentType === "hotDish" ? data.id : `${data.id}`.charAt(1)



    return`
    <div item-id="${data.id}" class="food-item anime ${data.id === current_item?.id ? "selected" : ""} ${data.stock <= 0 ? "off_stock": ""}">
        <img src="./images/food${image_id}.png" alt="">
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

renderFoodMenu(foodMenuData[currentType]);

function renderExtra(addOns) {
    let content = '';
    addOns.forEach(function(item, idx) {
        const ct = `
            <div class="add-on-item">
                <div>
                    <input type="checkbox" id="extra${idx}" name="${item.name}" value="${item.price}">
                    <label for="extra${idx}"> ${item.name}</label>
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

    const cover_image = currentType === "hotDish" ? details.id : `${details.id}`.charAt(1)

    const detail = `
        <div class="info-container" details-id="${details.id}">
            <div class="food-descript">
                <img src="./images/food_full_${cover_image}.png" alt="">
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
                    <input class="quan_val" type="text" value=1>
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
    
    const add_btn = document.querySelector(".add_quan_btn");
    const remove_btn = document.querySelector(".remove_quan_btn");
    const quan_display = document.querySelector(".quan_val")

    add_btn.addEventListener("click", function(){

        if(quan >= current_item.stock){return}
        quan ++
        quan_display.value = quan
    })
    remove_btn.addEventListener("click", function(){
        if(quan <= 1){return}
        quan --
        quan_display.value = quan
    })
}

function total_stock_counter(isRemoveCart){
    if (isRemoveCart) {
        stock_counter.innerHTML = basket.length;
        return;
    }
    const total_item = basket.length
    stock_counter.innerHTML = total_item + 1
}

foodMenuEle.addEventListener('click', function(e) {

    let pervious_ele = foodMenuEle.querySelector('.selected')

    let selecter_ele = e.target.closest('.food-item')

    if(!selecter_ele) return;

    const selectedId = selecter_ele.getAttribute('item-id');
    const selectItem = foodMenuData[currentType].find(function(item) {
        return item.id == selectedId;
    })
    // console.log(selectItem)
    
    if(selectItem.stock == 0) return;
    current_item = selectItem
        
    if(pervious_ele){
        pervious_ele.classList.remove('selected')
    }
    

    selecter_ele.classList.add("selected")
    renderDetails(selectItem);


    add_btn = document.querySelector(".info-add-to-cart button")

    add_btn.addEventListener("click", function(e){
        if (!current_item) {
            alert_active("❌ Please select food!");
            return;
        };
        alert_active()

        const selected_info = document.querySelector(".info-container")
        let name = selected_info.querySelector(".detail-title").innerHTML

        let quantity = parseInt(selected_info.querySelector(".quan_val").value)
        selected_info.querySelector(".quan_val").value = 1
        quan = 1
        let note = selected_info.querySelector(".food-note input").value
        selected_info.querySelector(".food-note input").value = ""
        let extra_list = selected_info.querySelectorAll(".food-add-on input")

        let extra_total = 0
        let options = []

        total_stock_counter()

        extra_list.forEach(function(item){
            if(item.checked){ 
                const extra = {
                    name: item.getAttribute("name"),
                    id: item.getAttribute("id"),
                    value: parseFloat(item.getAttribute("value")),
                }
                extra_total += (extra.value * quantity)

                options.push(extra)
                item.checked = false
            }

        })
    
        const order = {
            id: selectItem.id,
            name,
            quantity,
            note,
            extras: options,
            unit_price: selectItem.price,
            total_price: selectItem.price * quantity + extra_total,
            cate: currentType,
        }
        
        basket.push(order)

        if(selectItem.stock >= 1){
            selectItem.stock -= quantity
            let a = renderFoodItem(selectItem)
            selecter_ele = foodMenuEle.querySelector(`div[item-id="${current_item.id}"]`);
            if (!selecter_ele) return;
            selecter_ele.insertAdjacentHTML("afterend", a)
            selecter_ele.remove()
            selecter_ele = foodMenuEle.querySelector(`div[item-id="${selectItem.id}"]`)
        }
        if(selectItem.stock == 0) {
            selecter_ele.classList.remove("selected");
            current_item = null;
        }
    })
});

renderFoodMenu(foodMenuData[currentType]);

cart_btn.addEventListener("click", function(e){
    openCartModel(e)
    cart_menu.innerHTML = renderCartMenu(basket);
})

screen_overlay.addEventListener("click", function(e){
    closeCartModel(e)
})

close_btn.addEventListener("click", function(e){
    closeCartModel(e)
})