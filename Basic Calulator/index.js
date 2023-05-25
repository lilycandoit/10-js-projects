const buttonsEl = document.querySelectorAll('button');

const inputEl = document.getElementById('result');

for (let i=0; i<buttonsEl.length; i++){
  buttonsEl[i].addEventListener('click', () => {
    const btnInput = buttonsEl[i].textContent;

    console.log(btnInput);

    if(btnInput === 'C'){
      clearResult();
    } else if (btnInput === '='){
      calculateResult();
    } else {
      appendValue(btnInput);
    }
  });
}

function clearResult(){
  inputEl.value = '';
}

function calculateResult(){
  inputEl.value = eval(inputEl.value);
}

function appendValue(btnInput){
  inputEl.value += btnInput;
}

//DONE!