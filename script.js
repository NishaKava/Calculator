
// DOM Elements 
const value1  = document.querySelector('.value1')
const value2  = document.querySelector('.value2')
const value3  = document.querySelector('.value3')
const value4  = document.querySelector('.value4')
const keys    = document.querySelector('.buttons-container')






const add          = document.querySelector('.add')
const sub          = document.querySelector('.sub')
const multiply     = document.querySelector('.multiply')
const divide       = document.querySelector('.divide')
const percent      = document.querySelector('.percent')
const equal        = document.querySelector('.equal')
const openBracket  = document.querySelector('.open-bracket')
const closeBracket = document.querySelector('.close-bracket')
const sqrt         = document.querySelector('.sqrt')

keys.addEventListener('click', (event) => {
  //console.log("hi");
  // Access the clicked element
  const { target } = event;
  //console.log(target.classList.contains('operator'));

  // Check if the clicked element is a button.
  // If not, exit from the function
  // if (!target.matches('button')) {
  //   return;
  // }

  let targetValue = target.innerText
 
  console.log(value1.value);

  if (target.classList.contains('number')) {
    if(value1.innerText == 0){
      value1.innerText = targetValue
    }else{
      value1.innerText += (targetValue)
    }
  }

  if (target.classList.contains('sqrt')) {
    // Implement the logic to calculate the square root
    const number = parseFloat(value1.innerText);
    if (!isNaN(number)) {
      const result = Math.sqrt(number);
      value1.innerText = result;
    }
  }
  

  if (target.classList.contains('bracket') ||
      target.classList.contains('operator') ) {
      if(value1.innerText == 0){
        value1.innerText = targetValue
      }
      else{
        value1.innerText += targetValue

      }
  }

  if (target.classList.contains('equal')) {
    try{
      let result = eval('(' + value1.innerText.toString() +')')
      if(value3.innerText != null || undefined){
        value4.innerText = value3.innerText
        value3.innerText = value2.innerText 
        value2.innerText = value1.innerText
        value1.innerText = result
      }
      else if(value2.innerText != null || undefined){
        value3.innerText = value2.innerText 
        value2.innerText = value1.innerText
        value1.innerText = result
      }else{
        value2.innerText = value1.innerText
        value1.innerText = result
      }
      
    }
    catch{
        alert("please give proper input")
    }
   
  }

  if (target.classList.contains('clear-1' )) {
    if(value1.innerText.length > 0)
     value1.innerText = value1.innerText.slice(0, -1) 
  }

  if (target.classList.contains('clear' )) {
    value1.innerText = '0'
    value2.innerText = ''
    value3.innerText = ''
    value4.innerText = ''
  }



})

