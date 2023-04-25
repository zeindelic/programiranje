let buttonBold = document.querySelector('#boldButton')
const buttonItalic = document.querySelector('#italicButton')
const buttonLeft = document.querySelector('#leftSideIconButton')
const buttonMiddle = document.querySelector('#middleSideIconButton')
const buttonRight = document.querySelector('#rightSideIconButton')
const buttonUpper = document.querySelector('#upperCaseButton')
const buttonLower = document.querySelector('#lowerCaseButton')
const buttonCapital = document.querySelector('#capitalizeButton')
const buttonClear = document.querySelector('#clearTextButton')
 const textArea = document.querySelector('#textArea')
buttonBold.onclick = () => {
    textArea.style.fontWeight = "Bold";
}
buttonItalic.onclick = () => {
    textArea.style.fontStyle = "italic";
}
buttonLeft.onclick = () => {
    textArea.style.textAlign = "left";
}
buttonMiddle.onclick = () => {
    textArea.style.textAlign = "center";
}
buttonRight.onclick = () => {
    textArea.style.textAlign = "right";
}
buttonUpper.onclick = () => {
   textArea.value = textArea.value.toUpperCase()
}
buttonLower.onclick = () => {
    textArea.value = textArea.value.toLowerCase()
 }
buttonCapital.onclick = () => {

    textArea.style.textTransform='capitalize';  
    // textArea.value.charAt(0).toUpperCase()
    // + textArea.value.slice(1)
}

buttonClear.onclick = () => {
    textArea.value = ''
 }
 function toggle(buttonItalic, buttonBold) {

    
 }

 function saveAsWord() {
    const text = document.getElementById("textArea").value;
    const blob = new Blob([text], { type: "application/msword" });
    saveAs(blob, "myDocument.doc");
}
const download = document.querySelector('#download')
download.onclick= () =>{
    saveAsWord()
}

