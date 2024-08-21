const form = document.getElementById('form')
const main = document.querySelector('main')
const thanksForSubscribing = document.getElementById('thanks-for-subscribing')
const boxThanksForSubscribing = document.querySelector('.box-thanks-for-subscribing')
const btnDimissMessage = document.getElementById('btn-dismiss-message')
const input = document.querySelector('input')
const label = document.getElementById('label')

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


// BTN TO DEMISS THE MESSAGE AND BACK TO FORM
const btn = (v) => {
    btnDimissMessage.addEventListener('click', ()=>{
        main.style.display = 'flex';
        thanksForSubscribing.style.display = 'none';
        boxThanksForSubscribing.style.display = 'none';
        input.value = ''
        input.classList.remove('email-invalid')
        input.classList.add('email-valid')
        v.innerHTML = ''
        v.style.color = ''
    })
}


// fUNCTION USED TO CREATE A NEW LABEL ELEMENT
const createLabel = () => {
    label.style.display = 'flex'
    label.style.justifyContent = 'space-between'
    label.style.width = '100%'
    const validEmailRequired = document.createElement('label')
    btn(validEmailRequired)
    label.appendChild(validEmailRequired)
    validEmailRequired.innerHTML = 'Valid email required'
    validEmailRequired.style.color = 'hsl(4, 100%, 67%)'
}

const eventSubmit = (e)=>{
    e.preventDefault()
    const data = {};
    const fields = e.target.querySelectorAll('input, span')
    for(const field of fields){
        data[field.name] = field.value
    }
    const email = data['email'];
    if(emailPattern.test(email)){
        main.style.display = 'none';
        thanksForSubscribing.style.display = 'flex';
        btn()
    }else{
        input.classList.remove('email-valid')
        input.classList.add('email-invalid')
        createLabel()
    }
}

form.addEventListener('submit', eventSubmit)