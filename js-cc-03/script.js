function reverseWords(message) {
    let input = message.split(' ')
    const reversed = input.reverse().join(' ')
    return reversed
   }

function assertEqual(a, b) {
    if (a === b) {
    console.log(`PASS`);
    } else {
    console.log(`FAIL ${a} != ${b}`);
    }
}
   
const input = document.querySelector("#words");
const result = document.querySelector("#result_words");
const button = document.querySelector("#button_1");

button.addEventListener("click", function() {
    result.innerHTML = reverseWords(input.value);
});






