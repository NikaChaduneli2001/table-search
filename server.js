const add = document.getElementById('button')
const save = document.getElementById("save")
const buttons = document.getElementById("buttons")
const tables = document.getElementById("tables")
const inputs = document.getElementById('form-div')
const fName = document.getElementById("fname")
const lName = document.getElementById("lname")
const phone = document.getElementById("number")
let input = document.getElementById("search");
const disable = document.getElementById("disable")
add.addEventListener("click", () => {
    inputs.style.display = 'flex'
    buttons.style.filter = 'blur(4px)';
    tables.style.filter = 'blur(4px)';
})
save.addEventListener("click", () => {
    if (lName.value.length > 0 && fName.value.length > 0 && phone.value.length > 0) {
        if (phone.value.length > 9) {
            alert("invalid number")
        } else {
            createElements()
        }

    } else {
        alert("fill inputs !!!, try again")
    }

    clearInputsAndBlurs()
})

disable.addEventListener("click", () => {
    clearInputsAndBlurs()
})

function createElements() {
    const tableElement = document.getElementById('table');
    const trElement = document.createElement('tr');
    const tbodyElement = document.createElement('tbody');
    const nameEle = document.createElement('td');
    const surnameEle = document.createElement('td');
    const phonEle = document.createElement("td")
    nameEle.innerHTML = fName.value;
    surnameEle.innerHTML = lName.value;
    phonEle.innerHTML = phone.value
    trElement.appendChild(nameEle);
    trElement.appendChild(surnameEle);
    trElement.appendChild(phonEle)
    tbodyElement.appendChild(trElement);
    tableElement.prepend(tbodyElement);
}

function search(input) {

    keyword = input.value.toUpperCase();
    let table_3 = document.getElementById("tables");
    let all_tr = table_3.getElementsByTagName("tr");
    for (i = 0; i < all_tr.length; i++) {
        let all_columns = all_tr[i].getElementsByTagName("td");
        for (j = 0; j < all_columns.length; j++) {
            if (all_columns[j]) {
                let column_value = all_columns[j].textContent || all_columns[j].innerText;
                column_value = column_value.toUpperCase();
                if (column_value.indexOf(keyword) > -1) {
                    all_tr[i].style.display = ""; // show
                    break;
                } else {
                    all_tr[i].style.display = "none"; // hide
                }
            }
        }
    }
}

input.addEventListener('keyup', () => {
    search(input)
})

function clearInputsAndBlurs() {
    lName.value = ''
    fName.value = ''
    phone.value = ''
    buttons.style.filter = null;
    tables.style.filter = null;
    inputs.style.display = 'none'
}

