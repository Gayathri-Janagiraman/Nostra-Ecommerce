//Search Bar
var search = document.getElementById("search");
var items = document.querySelectorAll(".item");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    items.forEach(function(item) {
        var productName = item.querySelector("h3").textContent.toUpperCase();
        if (productName.indexOf(enteredValue) < 0) {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    });
});

//Check Box
var checkboxes = document.getElementsByName("check");
var items = document.querySelectorAll(".item");
var filters = [];

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("click", function(event) {
        var value = event.target.value.toUpperCase();

        if (event.target.checked) {
            filters.push(value);
        } else {
            var index = filters.indexOf(value);
            if (index > -1) {
                filters.splice(index, 1);
            }
        }

        items.forEach(function(item) {
            var text = item.querySelector("h3").textContent.toUpperCase();
            var show = filters.length === 0 || filters.some(f => text.includes(f));
            item.style.display = show ? "block" : "none";
        });
    });
});
