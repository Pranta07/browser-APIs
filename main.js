/* console.log("start");
setTimeout(() => {
    console.log("after 3.5 sec");
}, 3500);
 */

/* const value = prompt("Give Money! I will give you double!");
if (value) {
    const m = parseFloat(value) * 2;
    // console.log(parseFloat(value) * 2);
    alert(`ai ne tor tk ${m}`);
}
 */

/* const op = confirm("Do you want see your website loacation?");
if (op) {
    console.log(location.href);
} */
const getItems = () => {
    let items;
    if (localStorage["cart"]) {
        items = JSON.parse(localStorage["cart"]);
    } else {
        items = {};
    }
    return items;
};

const clearItems = () => {
    document.getElementById("list").textContent = "";
    localStorage.removeItem("cart");
};

const showList = (name, price) => {
    const li = document.createElement("li");
    li.innerText = `${name}: ${price}`;
    document.getElementById("list").appendChild(li);
};

const getData = () => {
    const nameField = document.getElementById("name");
    const priceField = document.getElementById("price");
    const name = nameField.value;
    const price = priceField.value;
    nameField.value = "";
    priceField.value = "";
    storeData(name, price);
};
const storeData = (name, price) => {
    const items = getItems();
    if (items[name]) {
        items[name] = parseInt(items[name]) + parseInt(price);
    } else {
        items[name] = price;
    }
    localStorage["cart"] = JSON.stringify(items); //this can be done using also localStorage.setItem("name", "John Doe");
    showList(name, price);
    //console.log(items);
};

const items = getItems();
for (const key in items) {
    showList(key, items[key]);
}
