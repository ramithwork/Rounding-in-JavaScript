const input = document.getElementById('float')
input.focus()

const roundBtn = document.getElementById('round')
roundBtn.addEventListener('click', () => {
    const value = parseFloat(input.value)
    if (isNaN(value)) {
        invalidInput()
        return
    }
    showResult(Math.round(value), 'rounded')
})

const ceilBtn = document.getElementById('ceil')
ceilBtn.addEventListener('click', () => {
    const value = parseFloat(input.value)
    if (isNaN(value)) {
        invalidInput()
        return
    }
    showResult(Math.ceil(value), 'ceiled')
})

const floorBtn = document.getElementById('floor')
floorBtn.addEventListener('click', () => {
    const value = parseFloat(input.value)
    if (isNaN(value)) {
        invalidInput()
        return
    }
    showResult(Math.floor(value), 'floored')
})

function invalidInput() {
    alert('Please enter a valid number')
    input.focus()
}

function showResult(result, type) {
    const div = document.getElementById('result')
    div.innerHTML = `Result: ${type} to ${result}`
}