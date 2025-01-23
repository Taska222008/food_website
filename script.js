const dishBtnContainer = document.querySelector(".dish-type");
const foodMenuEle = document.querySelector(".food-menu");
const detailEle = document.querySelector(".info");
const addBtn = document.querySelector(".add_quan_btn");
let removeBtn = document.querySelector(".remove_quan_btn");
let quantityEle = document.querySelector(".quan_val");

const currentType = "hotDish";
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
            id: 4,
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
            id: 7,
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
            id: 6,
            name: "Creamy seafood pasta",
            price: 3.49,
            stock: 15,
        },
        {
            id: 5,
        name: "Garlic butter shrimp linguine",
        price: 6.99,
        stock: 10,
        },
        {
            id: 5,
        name: "Pork dumplings in savory broth",
        price: 11.25,
        stock: 18,
        },
        {
            id: 4,
        name: "Quinoa salad with spinach and avocado",
        price: 9.79,
        stock: 30,
        },
        {
            id: 1,
        name: "Egg fried rice with chili sauce",
        price: 55.99,
        stock: 3,
        },
        {
            id: 2,
        name: "Vegetable ramen with soft boiled egg",
        price: 98.75,
        stock: 85,
        },
        {
            id: 8,
        name: "Seafood curry noodles",
        price: 45.5,
        stock: 6,
        },
        {
            id: 9,
        name: "Chicken ramen in spicy broth",
        price: 21.25,
        stock: 9,
        },
        {
            id: 3,
        name: "Special mixed seafood udon",
        price: 70.0,
        stock: 4,
        },
    ],
    soup: [
        {
        name: "Classic chicken noodle soup",
        price: 4.99,
        stock: 25,
        },
        {
        name: "Creamy tomato basil soup",
        price: 3.89,
        stock: 18,
        },
        {
        name: "Hearty beef and barley soup",
        price: 7.45,
        stock: 12,
        },
        {
        name: "Spicy lentil and vegetable soup",
        price: 5.99,
        stock: 20,
        },
        {
        name: "Seafood chowder with herbs",
        price: 12.5,
        stock: 8,
        },
        {
        name: "Butternut squash soup",
        price: 6.49,
        stock: 22,
        },
        {
        name: "Miso soup with tofu and seaweed",
        price: 3.75,
        stock: 30,
        },
        {
        name: "Clam chowder in sourdough bread bowl",
        price: 9.99,
        stock: 10,
        },
        {
        name: "Thai coconut chicken soup",
        price: 8.25,
        stock: 15,
        },
    ],
    grill: [
        {
        name: "Grilled chicken with BBQ sauce",
        price: 7.99,
        stock: 20,
        },
        {
        name: "Smoky grilled beef steak",
        price: 15.49,
        stock: 12,
        },
        {
        name: "Grilled salmon with lemon butter",
        price: 12.99,
        stock: 18,
        },
        {
        name: "Grilled vegetable skewer platter",
        price: 6.49,
        stock: 25,
        },
        {
        name: "Grilled pork chops with rosemary",
        price: 14.25,
        stock: 10,
        },
        {
        name: "Grilled lamb kebabs with yogurt dip",
        price: 16.99,
        stock: 8,
        },
        {
        name: "Grilled shrimp tacos",
        price: 10.49,
        stock: 15,
        },
        {
        name: "Grilled corn on the cob with spices",
        price: 5.25,
        stock: 22,
        },
        {
        name: "Grilled cheese sandwich",
        price: 4.99,
        stock: 30,
        },
    ],
    appetizer: [
        {
        name: "Crispy spring rolls",
        price: 4.99,
        stock: 25,
        },
        {
        name: "Garlic breadsticks with marinara dip",
        price: 3.79,
        stock: 30,
        },
        {
        name: "Stuffed mushroom caps",
        price: 6.49,
        stock: 18,
        },
        {
        name: "Mini bruschetta with tomato and basil",
        price: 5.25,
        stock: 22,
        },
        {
        name: "Fried mozzarella sticks",
        price: 7.99,
        stock: 15,
        },
        {
        name: "Spicy chicken wings",
        price: 8.49,
        stock: 10,
        },
        {
        name: "Cheesy nachos with jalapeños",
        price: 6.99,
        stock: 20,
        },
        {
        name: "Classic deviled eggs",
        price: 4.49,
        stock: 25,
        },
        {
        name: "Potato skins with bacon and cheese",
        price: 7.25,
        stock: 12,
        },
    ],
    dessert: [
        {
        name: "Classic tiramisu",
        price: 5.99,
        stock: 20,
        },
        {
        name: "Cheesecake with berry topping",
        price: 6.49,
        stock: 18,
        },
        {
        name: "Chocolate lava cake",
        price: 7.99,
        stock: 15,
        },
        {
        name: "Vanilla ice cream with caramel drizzle",
        price: 4.49,
        stock: 30,
        },
        {
        name: "Strawberry shortcake",
        price: 5.25,
        stock: 25,
        },
        {
        name: "Apple pie with cinnamon",
        price: 4.99,
        stock: 22,
        },
        {
        name: "Creamy panna cotta with fruit",
        price: 6.79,
        stock: 12,
        },
        {
        name: "Churros with chocolate dip",
        price: 5.99,
        stock: 10,
        },
        {
        name: "Lemon tart with whipped cream",
        price: 6.25,
        stock: 18,
        },
    ],
};

dishBtnContainer.addEventListener("click", function (e) {
  if (e.target.classList[1] === "dish-btn") {
    // remove all active class out of all buttons
    document.querySelectorAll(".dish-btn").forEach(function (ele) {
      ele.classList.remove("active");
    });

    // add the active class to clicked button
    e.target.classList.add("active");
    const typeFood = e.target.getAttribute("type");
    console.log(typeFood);
    renderFoodMenu(foodMenuData[typeFood]);
    currentType = typeFood;
  }
});

function renderFoodItem(data) {
  return `
        <div item-id="${data.id}" class="food-item anime">
            <img src="./img/food${data.id}.png" alt="">
            <div class="food-item-info">
                <p>${data.name}</p>
                <p class="item-price">$ ${data.price}</p>
                <p class="item-avai">${data.stock} Bowls available</p>
            </div>
            <a class="add-to-cart-mini"><img src="./img/plus.png" alt=""></a>
        </div>
    `;
}
function renderFoodMenu(dataList) {
  foodMenuEle.classList.remove("goup-effect");
  let content = "";
  dataList.forEach(function (food) {
    content += renderFoodItem(food);
  });

  foodMenuEle.classList.remove("goup-effect");
  setTimeout(() => {
    foodMenuEle.innerHTML = content;
    foodMenuEle.classList.add("goup-effect");
  }, 100);
}

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
                <img src="./img/food_full_${details.id}.png" alt="">
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
    detailEle.innerHTML = detail + footerEle ;
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
