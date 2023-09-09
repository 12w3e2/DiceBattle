// Generation Random numbers
let randomNumber1=Math.floor(Math.random()*6+1);
let randomNumber2=Math.floor(Math.random()*6+1);
let randomNumber3=Math.floor(Math.random()*6+1);
let randomNumber4=Math.floor(Math.random()*6+1);
// Generate random images
let randomImage1="dice"+randomNumber1+".png";
let randomImage2="dice"+randomNumber2+".png";
let randomImage3="dice"+randomNumber3+".png";
let randomImage4="dice"+randomNumber4+".png";

//DOM to select the image element.
const Image1=document.getElementById("image1");
const Image2=document.getElementById("image2");
const Image3=document.getElementById("image3");
const Image4=document.getElementById("image4");

Image1.setAttribute("src",randomImage1);
Image2.setAttribute("src",randomImage2);
Image3.setAttribute("src",randomImage3);
Image4.setAttribute("src",randomImage4);
let imageEmpty;
//Conditional statement.
if (randomNumber1>randomNumber2 && randomNumber1>randomNumber3 && randomNumber1>randomNumber4) {
    document.getElementById("result").innerHTML="Dicenator Wins!!";
    


}
else if (randomNumber2>randomNumber1 && randomNumber2>randomNumber3 && randomNumber2>randomNumber4) {
    document.getElementById("result").innerHTML="Angry Duck Wins!!";
    

}
else if (randomNumber3>randomNumber1 && randomNumber3>randomNumber2 && randomNumber3>randomNumber4) {
    document.getElementById("result").innerHTML="The Gladiator Wins!!";
    

}
else if (randomNumber4>randomNumber1 && randomNumber4>randomNumber2 && randomNumber4>randomNumber3) {
    document.getElementById("result").innerHTML="Super Dice Wins!!";
}
else {
    document.getElementById("result").innerHTML="DRAW";
    document.getElementById("trophy").setAttribute("src",imageEmpty);
       

}
