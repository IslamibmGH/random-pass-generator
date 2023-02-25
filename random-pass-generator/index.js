const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


let randPass1El = document.getElementById('passBtn1');
let randPass2El = document.getElementById('passBtn2');

function getRandomPass() {
    return characters[Math.floor(Math.random() * characters.length)]
}

function handleOnClick() {
    for (let j = 0; j < 2; j++) {
        let randPass = '';
        for (let i = 0; i < 15; i++) {
            randPass += getRandomPass();
        }
        if (j === 0) {
            randPass1El.textContent = randPass;
        } else {
            randPass2El.textContent = randPass;
        }
    }
}

function copyText(btnId) {

    // Get a reference to the HTML element
    const element = document.getElementById(btnId);
    if (element.textContent !== '' || element.innerText !== '') {

        // Get the text value of the element
        const text = element.textContent || element.innerText;

        // Create a new textarea element and give it the text to copy
        const textarea = document.createElement('textarea');
        textarea.value = text;

        // Ensure that the textarea is not displayed on the page
        textarea.style.position = 'fixed';
        textarea.style.top = '-9999px';
        textarea.style.left = '-9999px';

        // Add the textarea to the page
        document.body.appendChild(textarea);

        // Select the text to copy and copy it to the clipboard
        textarea.select();
        document.execCommand('copy');

        // Remove the textarea from the page
        document.body.removeChild(textarea);
        alert('Password copied to clipboard!')
    }
}