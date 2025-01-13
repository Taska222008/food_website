const dishBtnContainer = document.querySelector('.dish-type');

const foodList = [
    {
        imgUrl: "./img/food1.png",
        name: "Spicy seasoned seafood noodles",
        price: 2.29,
        stock: 20,
    },
    {
        imgUrl: "./img/food2.png",
        name: "Salted Pasta with mushroom sauce",
        price: 5.59,
        stock: 12,
    },
    {
        imgUrl: "./img/food3.png",
        name: "Beef dumpling in hot and sour soup",
        price: 12.33,
        stock: 16,
    },
    {
        imgUrl: "./img/food4.png",
        name: "Healthy noodle with spinach leaf",
        price: 10.99,
        stock: 26,
    },
    {
        imgUrl: "./img/food5.png",
        name: "Hot spicy fried rice with omelet",
        price: 60.33,
        stock: 0,
    },
    {
        imgUrl: "./img/food6.png",
        name: "Spicy instant noodle with special omelette",
        price: 100.00,
        stock: 88,
    },
    {
        imgUrl: "./img/food7.png",
        name: "Spicy seasoned seafood noodles",
        price: 44.05,
        stock: 2,
    },
    {
        imgUrl: "./img/food8.png",
        name: "Spicy seasoned seafood noodles",
        price: 20.12,
        stock: 5,
    },
    {
        imgUrl: "./img/food9.png",
        name: "Spicy seasoned seafood noodles",
        price: 73.24,
        stock: 7,
    },
];

dishBtnContainer.addEventListener('click', function(e) {
    if (e.target.classList[1] === 'dish-btn') {
        // remove all active class out of all buttons
        document.querySelectorAll('.dish-btn').forEach(function(ele) {
            ele.classList.remove('active');
        })

        // add the active class to clicked button
        e.target.classList.add('active')
    }
});

function renderFoodItem(data) {
    return `
        <div class="food-item">
            <img src="${data.imgUrl}" alt="">
            <div class="food-item-info">
                <p>${data.name}</p>
                <p class="item-price">$ ${data.price}</p>
                <p class="item-avai">${data.stock} Bowls available</p>
            </div>
        </div>
    `
};
function renderFoodMenu(dataList) {
    const menu = document.querySelector('.food-menu');
    let content = '';
    dataList.forEach(function(food) {
        content += renderFoodItem(food);
    })
    menu.innerHTML = content;
};

renderFoodMenu(foodList);