const popup_alert = document.querySelector(".alert")

function alert_active(content = "Add to cart"){
    popup_alert.innerHTML = content
    popup_alert.classList.add("active")
    screen_overlay.classList.add("active")

    setTimeout(function(){
        popup_alert.classList.remove("active")
        screen_overlay.classList.remove("active")
    }, 600)
}

