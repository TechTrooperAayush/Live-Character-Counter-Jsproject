let text = document.querySelector("#textarea");
let showvalue = document.querySelector(".value");

text.addEventListener("keyup",function(){
    let textvalue = document.querySelector("#textarea").value;
    let textlength = parseInt(textvalue.length);
    showvalue.innerHTML = textlength;
})
