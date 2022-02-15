let clickCircle = document.querySelector('.click-circle')
let startBTN = document.querySelector('.start-game')

// COMMENTS
let commentBTN = document.querySelector('.comment-submit')
let nameInput = document.querySelector('.comment-name')
let colorInput = document.querySelector('.comment-face')
let textInput = document.querySelector('.comment-text')

const commentField = document.querySelector('.comments-field_body')

const scoreField = document.querySelector('.score-field_body')

let count = 0

let countArray = []
let commentArray = []

    if (localStorage.getItem("results") != null) {
countArray = JSON.parse(localStorage.getItem('results'));
commentArray = JSON.parse(localStorage.getItem('comments'));
renderResults()
renderComments()
}

clickCircle.addEventListener('click', () => {
count++
console.log(count)
})

startBTN.addEventListener('click', () => {
count = 0

startBTN.setAttribute('disabled', true)
setTimeout(() => {
showModal()
}, 2000);
})

commentBTN.addEventListener('click', () => {
let nameValue = nameInput.value
nameInput.value = ''

let textValue = textInput.value
textInput.value = ''

let colorValue = colorInput.value

createComment(nameValue, colorValue, textValue)
renderComments()
})


window.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-danger')) {
    removeModal()
    }
    })
    
    function showModal() {
    let modal = document.createElement('div')
    modal.className = 'modal-wrapper'
    modal.innerHTML = `
    <div class="modal">
    <div class="modal-header">
    <h2>Comments</h2>
    <span class="btn-close">&times;</span>
    </div>
    <div class="body2">
    <p class="clicks">
    ${count}
    </p>
    </div>
    <div class="footer">
    <span class="btn-confirm">Confirm</span>
    <span class="btn-remove">Close</span>
    </div>
    </div>
    `
    document.body.append(modal)
    }
    
    function removeModal() {
    if (document.querySelector('.modal-wrapper')) {
    document.querySelector('.modal-wrapper').remove()
    }
    
    countArray.push(createItem(count, setDate()))
    
    updateLocal()
    renderResults()
    makeButtonActive()
    }
    
    function makeButtonActive() {
    startBTN.removeAttribute('disabled')
    }
    
    function renderResults() {
    scoreField.innerHTML = ''
    
    countArray.sort(compare)
    
    countArray.forEach(element => {
    let newItem = document.createElement('li')
    newItem.className = 'score-field_item'
    newItem.innerHTML = `
    <span class="field_result"><strong>${element.counts}</strong> clicks</span>
    <span class="field_time">${element.time}</span>
    `
    scoreField.append(newItem)
    });
    }
    
    function setDate() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    return time
    }
    
    function createItem(counts, time) {
    let creator = {
    counts: counts,
    time: time
    }
    
    return creator
    }
    
    function compare( a, b ) {
    if ( a.counts > b.counts ){
    return -1;
    }
    if ( a.counts < b.counts ){
    return 1;
    }
    return 0;
    }
    
    function updateLocal() {
    localStorage.setItem('results', JSON.stringify(countArray))
    localStorage.setItem('comments', JSON.stringify(commentArray))
    }
    
    function createComment(name, color, text) {
    const comment = {
    name: name,
    color: color,
    text: text
    }
    
    commentArray.push(comment)
    updateLocal()
    
    return comment
    }
    
    function renderComments() {
    commentField.innerHTML = ''
    
    commentArray.forEach(element => {
    let newItem = document.createElement('li')
    newItem.className = 'comment-field_item'
    newItem.innerHTML = `
    <div class="field-header">
    <span class="field_color" style="background-color:${element.color}"></span>
    <span class="field_name">${element.name}</span>
    </div>
    <div class="field-comment">
    <span class="field_text">${element.text}</span>
    </div>
    `
    commentField.append(newItem)
    });
    }