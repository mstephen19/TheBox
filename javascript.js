/*A variable makes things a lot easier*/
const theBox = document.getElementById("box");

/*Grow*/
document.getElementById("growBtn").addEventListener("click", function(){

    theBox.style.height = "500px";
    theBox.style.width = "500px";

});

/*Blue*/
document.getElementById("blueBtn").addEventListener("click", function(){

    theBox.style.backgroundColor = "blue";

});

/*Fade*/
const fadeBtn = document.getElementById("fadeBtn");
fadeBtn.addEventListener("click", function(){

    theBox.style.opacity = "0";

});
fadeBtn.addEventListener("mouseenter", function() {
    fadeBtn.classList.remove('fadeAnim');
  });
fadeBtn.addEventListener("mouseleave", function() {
    fadeBtn.classList.add('fadeAnim');
  });

/*Wobble*/
document.getElementById("wobbleBtn").addEventListener("click", function(){

    theBox.classList.add('wobbleNow');
/*Remove class after animation stops*/
    setTimeout(() => { theBox.classList.remove('wobbleNow');}, 2500, );

});

/*Reset*/
document.getElementById("resetBtn").addEventListener("click", function(){

    theBox.classList.remove('wobbleNow');
    theBox.style.opacity = "100";
    theBox.style.height = "300px";
    theBox.style.width = "300px";
    theBox.style.backgroundColor = "purple";
});

/*ResetBtn Animation*/
const resetBtn = document.getElementById("resetBtn")

resetBtn.addEventListener("mouseover", function(){
    resetBtn.textContent = "You Sure?";
})
resetBtn.addEventListener("mouseout", function(){
    resetBtn.textContent = "Reset";
})