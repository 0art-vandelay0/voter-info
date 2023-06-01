window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();

        let drinkMenu = document.getElementById("voting");
        drinkMenu.setAttribute("class", "hidden");
        let under18Message = document.getElementById("under-21");
        under18Message.setAttribute("class", "hidden");

        const age = parseInt(document.querySelector("input#age").value);

        if (age > 21) {  // updated to check if age is greater than 21
            drinkMenu.removeAttribute("class");
        } else if (age === 21) { // new else if statement
            drinkMenu.removeAttribute("class");
        } else {
            under18Message.removeAttribute("class");
        }
    };
};