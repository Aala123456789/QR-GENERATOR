const img = document.getElementById("imgQr"),
btn = document.getElementById("btn"),
inputBox = document.getElementById("qrvalue"),
imgBox = document.querySelector(".imgBox");
 btn.onclick = function () {
     if (inputBox.value.length > 0 ){
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputBox.value;
        imgBox.classList.add("show");
     }
     else{
        inputBox.classList.add("error");
         setTimeout(() =>{
            inputBox.classList.remove("error");

         },1000)
     }
   
 }