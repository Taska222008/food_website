const dish_containeer = document.querySelector(".dish-type")

dish_containeer.addEventListener("click", function(e){
    
    if(e.target.classList[1] == "dish-btn"){
        document.querySelectorAll(".dish-btn").forEach(function(i){
            i.classList.remove("active")
        })

        e.target.classList.add("active")
    
    }
} )