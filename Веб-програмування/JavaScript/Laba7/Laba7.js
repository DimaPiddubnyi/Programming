const items = document.getElementById('items')
const array = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv']

for (let i = 0; i < array.length; i++) {
    let item = document.createElement('li')
    item.innerHTML = array[i]
    items.appendChild(item)
}