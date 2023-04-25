const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const submitBtn = document.querySelector('#submitBtn')
const nameInput = document.querySelector('#nameInput')
let letters = /^[A-Za-z]+$/;



submitBtn.onclick = () =>{
    if (password.value != confirmPassword.value) {
        alert('please enter the same password')
        password.value = ''
        confirmPassword.value = ''
        
    }
    if (  nameInput.value.match(letters) ) {    
    }
    else{
        alert('please insert letters!')
        nameInput.value = ''
    }
    console.log(nameInput.value.charAt(0).toUpperCase());
    if (nameInput.value.charAt(0) === nameInput.value.charAt(0).toUpperCase() ) {
    return true
    }
    else{
        alert('please insert Caps letters!')
        nameInput.value = ''
    }
}