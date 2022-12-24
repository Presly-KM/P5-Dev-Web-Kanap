fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => addProducts(data))

function addProducts(donnees) {
    const imageUrl = donnees[0].imageUrl
    const anchor = makeAnchor(imageUrl)
    appendChildren(anchor)
}

function makeAnchor(url) {
    const anchor = document.createElement("a")
    anchor.href = url
    return anchor
}

function appendChildren(anchor) {
    const items = document.querySelector("#items")
    if (items != null) {
        items.appendChild(anchor)
    }
}






