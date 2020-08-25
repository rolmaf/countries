let btn = document.querySelector(".search__btn");
let input = document.querySelector(".search__input");
let countrys = document.querySelectorAll(".country");
let h2 = document.querySelectorAll("h2");

btn.addEventListener("click", () => {
    let value = input.value;
    value = value.toLowerCase().trim();

    if (value != "") {
        let hiddens = document.querySelectorAll(".d-none");
        hiddens.forEach(hidden => {
            hidden.classList.remove("d-none");
        });
        countrys.forEach((num, index) => {
            let text = h2[index].textContent.toLowerCase().trim();
            if (text.indexOf(value) === -1) {
                num.classList.add("d-none");
                console.log("hidden");
            };
            
        });
    };
});
