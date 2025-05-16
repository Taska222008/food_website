emailjs.init({
    publicKey: "DuQjvhy1QXswHHjgb",
});

function renderOrderHtmlEmail(orderItems) {
    return `
    <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
        <h2 style="font-size: 16px; color: #222;">Order details:</h2>
        <table style="width: 100%; border-collapse: collapse;">
        <thead>
            <tr>
                <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ccc;">Item</th>
                <th style="text-align: center; padding: 8px; border-bottom: 1px solid #ccc;">Qty</th>
                <th style="text-align: right; padding: 8px; border-bottom: 1px solid #ccc;">Unit price</th>
                <th style="text-align: right; padding: 8px; border-bottom: 1px solid #ccc;">Subtotal</th>
            </tr>
        </thead>
        <tbody>
            ${orderItems.map(item => {
                const extrasText = item.extras?.length ? item.extras.map(extra => `${extra.name} (+$${extra.value})`).join(', ') : '';
                const noteText = item.note?.trim() ? `Note: ${item.note}` : '';
                const subNote = [extrasText, noteText].filter(Boolean).join(' | ');
                const subNoteHtml = subNote ? `<div style="font-size: 12px; color: #777;">${subNote}</div>`: '';

                return `
                    <tr>
                        <td style="padding: 8px; vertical-align: top;">
                            ${item.name}
                            ${subNoteHtml}
                        </td>
                        <td style="padding: 8px; text-align: center;">${item.quantity}</td>
                        <td style="padding: 8px; text-align: right;">$${item.unit_price.toFixed(2)}</td>
                        <td style="padding: 8px; text-align: right;">$${item.total_price.toFixed(2)}</td>
                    </tr>
                `;
            }).join('')}
        </tbody>
        </table>
    </div>
    `;
}
  

function notifyEmail(emailObj) {
    console.log('>>> notifyEmail', emailObj)
    emailjs.send("service_yxsji4c","template_37v24jm", {
        ...emailObj,
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.error("Lỗi gửi email:", err);
    });
}