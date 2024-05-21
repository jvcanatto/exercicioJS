const adicionar = () => {
    let itemNovo = document.createElement("li")

    itemNovo.textContent = "Item Adicionado"

    let lista = document.getElementById("List")

    lista.appendChild(itemNovo)
}

const remover = () => {
    const list = document.getElementById("List");

    if (list.children.length > 0) {   
        list.removeChild(list.lastElementChild);
    }

    else{
        alert("Não há mais itens...")
    }
}