function show(){
  let name1 = document.querySelector('@name').Value;
  let email = document.querySelector('@email').Value;
  let mobile = document.querySelector('@mobile').value;
  let pass = document.querySelector('@pass').value;
  let cpass = document.querySelector('@cpass').value;
  
  if(name1 ===""){
      document.querySelector('#error_name').innerHTML = "please Enter Your name";
      document.querySelector('#error_name').Style.color = "red";
      document.querySelector('#error_name').Style.fontweight = "700";
      document.querySelector('name').Style.border = "2px solid red";
      document.querySelector('name').style.outline = "red";
      return false;
  }

  else if(email === ""){
      document.querySelector('#error_email').innerHTML = "please Enter your email";
      document.querySelector('#error_email').style.color = "red";
      document.querySelector('#error_email').style.fontweight = "700";
      document.getElementById('#error_email').style.border = "2px solid red";
      document.getElementById('#error_email').style.outline = "red";
      return false;
  }

  //mobile validation

  else if(mobile === ""){
  alert("please enter mobile number");
   return false;
  }

  else if(isNaN(mobile)){
      alert("not a number")
      return false;
  }

  else if(mobile.length !== 10){
      alert("mpbile number should be 10 digit");
      return false;
  }

  else if(!pass.match(/[1234567890]/)){
      alert("password should be strong");
      return false;
  }

  else if(!pass.match(/[!@#$%^&*()<>/]/)){
      alert("password should be strong")
      return false;
  }

  else if(!pass.match(/[QWETYUOPASDFGHJKLZXCVBNM]/)){
      alert("password should be strong")
      return false;
  }

  else if(!pass.match(/[qwertyuiopasdfghjklzxcvbnm]/)){
      alert("password should be strong")
      return false;
  }
  else if(pass.length !==8){
      alert("should be 8 digit")
      return false;
  }
  else if(pass !== cpass){
      alert("password and confirm password doesnot matched");
      document.querySelector('#pass').value="";
      document.querySelector('#cpass').value="";
      document.querySelector('#pass').focus();
      return false;
  }
  else{
      alert("submitted")
  }
}
function hidevalidation(arg){

  if(arg ==="nm"){
      document.querySelector('#name').style.border = "2px solid black";
      document.querySelector('#email').style.outline = "black";
      document.querySelector('#error_name').innerHTML = "";
      document.querySelector('#error_name').style.color = "balck";
      return false;
  }

  if(arg === "em"){
      document.querySelector('#email').style.border = "2px solid black";
      document.querySelector('#email').style.outline = "black";
      document.querySelector('#error_email').innerHTML = "";
      document.querySelector('#error_email').style.color = "black";
      return false;
  }
}
// console.log(name,mobile,pass,cpass)
// console.log(email)

// =====================Login=====================================

"use strict";
function generate(){
    let str = "1234567890qwertyuiopasdfghjklzxcvbnm*@";
    let finaloutput = "";
    for (let i=0;i<6;i++){
        let random = Math.random();
        let aftermultiply = str.length*random;
        let afterflow=Math.floor(aftermultiply)
        let output=str.charAt(afterflow)
        finaloutput=finaloutput+output
    }
    document.querySelector('#show').innerHTML=finaloutput
}



// =========================Cart===============================
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.getAttribute('data-name');
        const productPrice = parseFloat(product.getAttribute('data-price'));

        // Create product object
        const productObj = {
            name: productName,
            price: productPrice
        };

        // Get existing cart from localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add product to cart
        cart.push(productObj);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${productName} added to cart!`);
    });
});