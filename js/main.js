'use strict';

//select form
const form = document.querySelector('form');
const allInputs = document.querySelectorAll('input');
let valid = 0;

// set attributes required and pattern
document.querySelector("input[name=firstname]").setAttribute("required","required");
document.querySelector("input[name=lastname]").setAttribute("required","required");
document.querySelector("input[name=email]").setAttribute("required","required");
document.querySelector("input[name=password]").setAttribute("required","required");
document.querySelector("input[name=phonenumber]").setAttribute("pattern","(\+358)[0-9]{9}");
document.querySelector("input[name=postalcode]").setAttribute("pattern","[0-9]{5}");

//checkKEmpty
//if no match, make input border red

function checkEmpty(node) {

  if (node.value === "") {

    node.style.borderColor = "red";

  } else {valid++};

}
//checkPattern
//if no match, make input border red

function checkPattern(node) {

  let node1= new RegExp(node.getAttribute("pattern"));

  if (node1.test(node.value)) {

    valid++;

  } else {node.style.borderColor = "red"
  };

}

//when form is submitted
form.addEventListener('submit', (evt)=> {
  valid=0;
  //console.log("submition");
  evt.preventDefault(); //stop submit
  for(let i=0; i < allInputs.length ; i++) {
    if (allInputs[i].required === true) {
      checkEmpty(allInputs[i]);
    }

    if(allInputs[i].hasAttribute("pattern")){
      checkPattern(allInputs[i]);
  }

    if (allInputs[i].hasAttribute("pattern") && allInputs[i].required === true){valid--};
    if (allInputs[i].hasAttribute("pattern")!== true && allInputs[i].required !== true){valid++};
}
  //console.log(valid);
  //when validation ok

  if (valid === allInputs.length){
    form.submit();
  }

    })