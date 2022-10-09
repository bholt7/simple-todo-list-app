// select all items that I will need
let list = document.querySelector('#list')
let form = document.querySelector('#new-item-form')
let input = document.querySelector('#item-input')

// when form is submited add a new item
form.addEventListener('submit', e => {
  e.preventDefault()
  // create an item and add to list
  const item = document.createElement('div')

  item.textContent = input.value

  item.classList.add('list-item')

  list.appendChild(item)

  
  //console.log(item)

  // clear input 
  input.value = ''

  // delete item from list with clicked
  item.addEventListener('click', () => {
    item.remove()
  })


})