const toConvertButton = document.querySelector("#button_check");
const input = document.querySelector("#number");
const result = document.querySelector("#show_result");


let roman = '';
let i;

function convert_to_roman(x) {
  // const myNumber = input.value;

    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    if (x == NaN || x < 1) {
      alert('Please insert a valid entry!')
    } else {
    for ( i in lookup ) {
      console.log(i)
      while ( x >= lookup[i] ) {
        roman += i;
        x -= lookup[i];
      }
    }

    const myNumber = input.value;
    result.innerHTML = `${myNumber} = ${roman}`;
  }
}

toConvertButton.addEventListener("click", () => {
  const myNumber = input.value;
  convert_to_roman(myNumber);
  input.value = "";
  roman = '';
});
