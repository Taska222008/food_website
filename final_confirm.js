const finalConfirmModal = document.querySelector('.final-confirm-popup');
const finalConfirmOverlay = document.querySelector('.screen-overlay-final-confirm');
const closeFinalConfirmBtn = document.querySelector('.final-cf-pop-header .close-btn');
const listFoodFinalConfirm = document.querySelector('.final-cf-pop-list-food');
const formOrder = document.querySelector('#orderForm');
const submitFormBtn = document.querySelector(".final-cf-pop-btn button");
const shippingCost = document.querySelector("#shipping_cost");
const subTotalSummary = document.querySelector("#subtotal_summary");
const totalSummary = document.querySelector("#total_summary");
let SHIPPING_COST = 10;
let subTotalAmount;
let totalAmount;

function groupItemInBasket(itemList) {
    const summaryCart = {};
    const sumCartArr = [];
    itemList.forEach((item, index) => {
        if (item.extras.length == 0 && item.note == '') {
            if (!summaryCart[item.id]) {
                summaryCart[item.id] = {...item};
                sumCartArr.push(summaryCart[item.id]);
            } else {
                summaryCart[item.id].quantity += item.quantity;
                summaryCart[item.id].total_price += item.total_price;
            }
        } else {
            summaryCart[`${item.id}-other-${index}`] = {...item};
            sumCartArr.push({...summaryCart[`${item.id}-other-${index}`]});
        }
    });
    return sumCartArr;
}

function renderFoodItemSummary() {
    const sumCartArr = groupItemInBasket(basket);
    listFoodFinalConfirm.innerHTML = renderCartMenu(sumCartArr, true);
}

function showFinalConfirmModal() {
    finalConfirmModal.classList.add('active');
    finalConfirmOverlay.classList.add('active');
    console.log('basket', basket)
    renderFoodItemSummary();
    subTotalAmount = calcSubtotal();
    totalAmount = subTotalAmount + SHIPPING_COST;
    shippingCost.value = formatCurrency(SHIPPING_COST);
    subTotalSummary.value = formatCurrency(subTotalAmount);
    totalSummary.value = formatCurrency(totalAmount);
};

function hideFinalConfirmModal() {
    finalConfirmModal.classList.remove('active');
    finalConfirmOverlay.classList.remove('active');
};

function resetBasket() {
    basket = [];
    hideFinalConfirmModal();
    closeCartModel();
    stock_counter.innerHTML = 0;
}

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
  


closeFinalConfirmBtn.addEventListener('click', hideFinalConfirmModal);
finalConfirmOverlay.addEventListener('click', hideFinalConfirmModal);

submitFormBtn.addEventListener('click', (e) => {
    const orderData = {};
    for (let i = 0; i < formOrder.elements.length; i++) {
        orderData[formOrder.elements[i].name] = formOrder.elements[i].value;
    };
    orderData.shipping_cost = SHIPPING_COST;
    orderData.subtotal_summary = subTotalAmount;
    orderData.total_summary = totalAmount;
    orderData.basket = [...basket];
    orderData.time = Date.now();
    orderHistory.push(orderData);

    if (orderData.cus_name == ""){
        alert_active("Please enter your name")
    }
    else if (orderData.cus_phone == ""){
        alert_active("Please enter your phone number")
    }
    else if(orderData.cus_address == ""){
        alert_active("Please enter your address")
    }
    else if (orderData.cus_email == ""){
        alert_active("Please enter your email address")
    }
    else if (emailIsValid(orderData.cus_email) == false){
        alert_active("Email address not valid")
    }
    
    else{

        placeOrderAPI(orderData).then((res) => {
            orderData.orderID = res;
            alert_active(`<div style="font-size: 20px; font-weight: bold">✅ Order succesfully </div> <br /> <div style="font-style: italic;">Order ID: ${res.toUpperCase()} </div> <br/> <small>We will contact you shortly</small>`, 3);
            localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
            const orderListHtml = renderOrderHtmlEmail(groupItemInBasket(orderData.basket));
            
            const emailObj = {
                ...orderData,
                name: orderData.cus_name,
                orderID: res,
                link: `${window.location.origin}/order?id=${res}`,
                order_list: orderListHtml,
            }
            notifyEmail(emailObj);
            setTimeout(() => {
                window.location.href = `${window.location.origin}/order?id=${res}`;
            }, 3000);
            resetBasket();
        });
    }
});

