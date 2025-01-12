const sortList = document.querySelector('.dish-type');
const allSortBtn = sortList.querySelectorAll('.dish-btn');
sortList.addEventListener('click', function(e) {
    console.log(e.target.classList)
    if (e.target.classList[0] === 'button') {
        allSortBtn.forEach((b) => {
            b.classList.remove('active');
        })
        e.target.classList.add('active');
    }
})