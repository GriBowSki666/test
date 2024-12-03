const addInput = document.getElementsByName("addInput")[0];
const addButton = document.getElementsByName("addButton")[0];
const searchInput = document.getElementsByName("searchInput")[0];
const itemList = document.getElementsByName("itemList")[0];

const items = ["Abaddon", "Axe", "Clockwerk", "Dragon Knight", "Clinkz"];

function dI(f = "") {
    itemList.innerText = "";
    const filteredItems = items.filter(item => item.toLowerCase().includes(f.toLowerCase()));
    filteredItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        itemList.appendChild(li);
    });
}

function aI() {
    const newItem = addInput.value.trim();
    if (newItem && !items.includes(newItem)) {
        items.push(newItem);
        dI();
    }
    addInput.value = "";
}

addButton.addEventListener("click", aI);
addInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") aI();
});

searchInput.addEventListener("input", () => {
    dI(searchInput.value);
});

dI();