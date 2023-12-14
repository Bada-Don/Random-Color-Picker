function getColour() {
    const getNum = Math.floor(Math.random() * 16777215);
    const getColour = "#"+getNum.toString(16);
    console.log(getNum);
    document.getElementById("colorcode").innerText = "Colour is: " + getColour;
    document.body.style.backgroundColor = getColour;
}
document.getElementById("btn").addEventListener("click", getColour);
getColour();