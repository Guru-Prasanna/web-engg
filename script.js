
function setCookie() {
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2022 12:00:00 UTC";
console.log("Hello");
console.log(document.cookie); 
}

function clipboard(){
    navigator.clipboard.readText()
    .then(text => {
      console.log('Pasted content: ', text);
  })
    .catch(err => {
      console.error('Failed to read clipboard contents: ', err);
    });
  
}
