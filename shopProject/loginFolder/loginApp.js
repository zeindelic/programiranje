  const regUserName = document.querySelector("#regUserName");
  const regPassWord = document.querySelector("#regPassWord");
  const submitBtn = document.querySelector("#submitBtn");
  const regForm = document.querySelector("#regForm");
 
 function newMail() {
    regForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let registrationData = {
    username: regUserName.value,
    password: regPassWord.value,
  };

  loginAndReg(registrationData);
})  
    
 }
 
  function loginAndReg(registrationData) {

 
    fetch('https://fakestoreapi.com/auth/login')
    .then(res=>res.json())
    .then(json=>console.log(json))

  // Example registration data
  

  // Make a POST request to register
  fetch('https://fakestoreapi.com/auth/login',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(registrationData),
})
    .then(res=>res.json())
    .then(json=>{
        sessionStorage.setItem('user',json.token);
        window.location.href = 'http://127.0.0.1:5500/shopProject/index.html'
    })
    .catch((e) => {
        console.log(e);
        console.log('wrong password or username');
    })

  
}
newMail()


