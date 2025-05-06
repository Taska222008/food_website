const popup_alert = document.querySelector(".alert")

function alert_active(content = "Add to cart", time=0.6){
    popup_alert.innerHTML = content
    popup_alert.classList.add("active")

    setTimeout(function(){
        popup_alert.classList.remove("active")
    }, time*1000)
}

