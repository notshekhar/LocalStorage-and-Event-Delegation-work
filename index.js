let form = document.querySelector('.form')
let arr = []
let empty = document.querySelector('.empty')
let input = document.querySelector('.input')
let body = document.querySelector('.items')
if(localStorage.getItem('item')){
  empty.style.display = 'none'
  arr = JSON.parse(localStorage.getItem("item"))
  let html = arr.map(list =>{
    return `<li>${list}</li>`
  }).join('')
  body.innerHTML = html
  if(JSON.parse(localStorage.getItem('item')).length < 1){
    empty.style.display = "block"
  }
}

form.onsubmit = e => {
  arr.push(input.value)
  localStorage.setItem("item", JSON.stringify(arr))
  e.preventDefault()
  input.value = ""
  arr = JSON.parse(localStorage.getItem("item"))
  let html = arr.map(list =>{
    return `<li>${list}</li>`
  }).join('')
  body.innerHTML = html
  body.scrollTop = body.scrollHeight
}
