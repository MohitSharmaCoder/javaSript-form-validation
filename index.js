const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')

name.addEventListener('blur', ()=>{
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str = name.value
    console.log(regex,str)
    if(regex.test(str)){
        console.log("it matched")
        name.classList.remove('is-invalid')
    }
    else{
        name.classList.add('is-invalid')
    }
})
email.addEventListener('blur', ()=>{
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([A-Za-z]){2,7}$/
    let str = email.value
    console.log(regex,str)
    if(regex.test(str)){
        console.log("email matched")
        email.classList.remove('is-invalid')
    }
    else{
        console.log("email not matched")
        phone.classList.add('is-invalid')
    }
})

phone.addEventListener('blur', ()=>{
    // console.log(phone)
    let regex = /^([0-9]){10}$/
    let str = phone.value
    console.log(regex,str)
    if(regex.test(str)){
        console.log("it matched")
        phone.classList.remove('is-invalid')
    }
    else{
        phone.classList.add('is-invalid')
    }
})