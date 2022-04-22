let arrow1 = document.querySelectorAll(".fa-angle-down");

let imdiv = document.querySelector(".images");
let imdiv2 = document.querySelector(".three");
arrow1.forEach(function (ele, i, array) {
    ele.onclick = function () {
        array.forEach(function (e, k, arr) {
            if (k != i) {
                if (e.classList.contains("fa-angle-up")) {
                    e.classList.remove("fa-angle-up");
                    e.parentElement.firstElementChild.style.color = "black";
                    e.classList.add("fa-angle-down");
                    let y = e.parentElement.parentElement.lastElementChild;
                    y.style.display = "none";
                }
            }
        });

        if (ele.classList.contains("fa-angle-down")) {
            ele.classList.remove("fa-angle-down");

            ele.classList.add("fa-angle-up");
            ele.parentElement.firstElementChild.style.color = "red";
            let y = ele.parentElement.parentElement.lastElementChild;
            y.style.display = "block";
            imdiv.style.transform = "translateY(-10px)";
        } else {
            ele.parentElement.firstElementChild.style.color = "black";
            ele.classList.remove("fa-angle-up");
            ele.classList.add("fa-angle-down");
            let y = ele.parentElement.parentElement.lastElementChild;
            y.style.display = "none";
            imdiv.style.transform = "translateY(10px)";
        }
    };
});
