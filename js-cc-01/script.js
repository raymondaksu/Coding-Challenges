document.getElementById("button_1").addEventListener("click", check)
// document.getElementById("button_1").addEventListener("keypress", function(e) { 
//     if (e.code === 13) { 
//         document.getElementById("button_1").addEventListener("click", guess_the_number); 
//     } 
// })
function check () {
    const number = document.getElementById("guess").value;
    if (number !== "") {
        if (number > 0) {
        let fibonacciArray = []
        for (let i = 0; i < parseInt(number)+1; i++) {
            if (fibonacciArray.length === 0) {
                fibonacciArray[i] = 0;
            }

            else if (fibonacciArray.length === 1) {
                fibonacciArray[i] = 1;
            }

            else {
                fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];
            }
        }
        let result = fibonacciArray[fibonacciArray.length-1];
        document.getElementById("result_fibo").innerHTML = "The " + number + " th fibonacci number is " + result;
    }   else {
        document.getElementById("result_fibo").innerHTML = "Please enter positive integer!";
    }
    } else {
        document.getElementById("result_fibo").innerHTML = "You must enter input...";
    }
}

function reset(){
    document.getElementById('fibonacci_number').value = "";
}