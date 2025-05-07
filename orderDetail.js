function renderOrderDetailsPage (orderId, orderDetail) {
    let orderListHTML = renderOrderHtmlEmail(groupItemInBasket(orderDetail.basket));
    let mainContent = `
        <div class="order-detail">
            <div class="order-detail-info">
                <div class="order-detail-info-back"><a href="${window.location.origin}">Back Home</a></div>
                <h2>
                    <img src="./images/confirm.png" />
                    Order Confirmation #${orderId.toUpperCase()}
                </h2>

                <div class="order-detail-info-cus">
                    <p>- Customer name: <b>${orderDetail.cus_name}</b></p>
                    <p>- Contact: <b>${orderDetail.cus_phone}</b></p>
                    <p>- Delivery to: <b>${orderDetail.cus_address}</b></p>
                    <p>A confirmation email has been sent to: ${orderDetail.cus_email}</p>
                </div>

                <div class="order-detail-info-list">
                    ${orderListHTML}
                </div>
                <div style="position: relative;">
                    <div class="order-detail-info-sum">
                        <div>Shipping: $${orderDetail.shipping_cost.toFixed(2)}</div>
                        <div>SubTotal: $${orderDetail.subtotal_summary.toFixed(2)}</div>
                        <div>Order Total: $${orderDetail.total_summary.toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </div>
    `
    

    return mainContent;
}

window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get("id");
    if (window.location.pathname === "/order" && orderId) {
        fetchOrderDetails(orderId).then((data) => {
            console.log('data', data)
            if (!data) {
                window.location.href= window.location.origin;
                return;
            }
            document.body.innerHTML = renderOrderDetailsPage(orderId, data);
        })
        // render the order detail page here
    }
})

