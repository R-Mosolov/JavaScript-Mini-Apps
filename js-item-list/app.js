const arr = [1, 2, 3];

function renderList() {
    const listPlace = document.getElementById("root");

    var newDiv = document.createElement("div");
    newDiv.innerHTML = createList();

    document.body.insertBefore(newDiv, listPlace);
}

function createList() {
    const arrToHandle = [];

    arr.forEach(item => arrToHandle.push(`
        <li>${item}</li>
    `));

    return `
        <ul>
            ${arrToHandle}
        </ul>
    `;
}

renderList();
