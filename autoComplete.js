
const mainButton = document.getElementById('mainButton');
const individualButton = document.getElementById('individualButton');
const textContainer = document.getElementById('textContainer');
const textContainer2 = document.getElementById('textContainer2');


mainButton.addEventListener('click', () => {
  textContainer2.classList.add('hidden');
  textContainer.classList.remove('hidden');
  mainButton.classList.add('border-b-4', 'border-white');
  individualButton.classList.remove('border-b-4', 'border-white');
});

individualButton.addEventListener('click', () => {
  textContainer.classList.add('hidden');
  textContainer2.classList.remove('hidden');
  individualButton.classList.add('border-b-4', 'border-white');
  mainButton.classList.remove('border-b-4', 'border-white');
});

previewButton.addEventListener('click', () => {
  previewButton.classList.add('border-b-4', 'border-white');
  codeButton.classList.remove('border-b-4', 'border-white');
});

codeButton.addEventListener('click', () => {
  codeButton.classList.add('border-b-4', 'border-white');
  previewButton.classList.remove('border-b-4', 'border-white');
});
    
document.addEventListener('DOMContentLoaded', () => {
  const mainButton = document.getElementById('mainButton');
  const individualButton = document.getElementById('individualButton');
  const textContainer = document.getElementById('textContainer');
  const textContainer2 = document.getElementById('textContainer2');
  const copyButton = document.getElementById('copyButton');

  mainButton.addEventListener('click', () => {
    textContainer2.classList.add('hidden');
    textContainer.classList.remove('hidden');
    mainButton.classList.add('border-b-4', 'border-white');
    individualButton.classList.remove('border-b-4', 'border-white');
  });

  individualButton.addEventListener('click', () => {
    textContainer.classList.add('hidden');
    textContainer2.classList.remove('hidden');
    individualButton.classList.add('border-b-4', 'border-white');
    mainButton.classList.remove('border-b-4', 'border-white');
  });

  copyButton.addEventListener('click', () => {
    const containerToCopy = textContainer.classList.contains('hidden') ? textContainer2 : textContainer;
    const tempInput = document.createElement('textarea');
    tempInput.value = containerToCopy.innerText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
      
    alert('Texto copiado exitosamente!');
  });
});

function mostrarPreview() {
  document.getElementById("previewDiv").classList.remove("hidden");
  document.getElementById("codeDiv").classList.add("hidden");
}

function mostrarCode() {
  document.getElementById("previewDiv").classList.add("hidden");
  document.getElementById("codeDiv").classList.remove("hidden");
}

function mostrarMas() {
  document.getElementById("tecsto").classList.remove('h-auto', 'h-56');

  document.getElementById("3Botones").classList.remove("hidden");
  document.getElementById("divTrans").classList.add("hidden");
  document.getElementById("mostrarMenosBotton").classList.remove("hidden");
  document.getElementById("tecsto").classList.add("h-auto");
}

function mostrarMenos() {
  document.getElementById("tecsto").classList.remove('h-auto', 'h-56');

  document.getElementById("3Botones").classList.add("hidden");
  document.getElementById("divTrans").classList.remove("hidden");
  document.getElementById("mostrarMenosBotton").classList.add("hidden");
  document.getElementById("tecsto").classList.add("h-56");
}

document.addEventListener('DOMContentLoaded', () => {
  const animalInputs = document.querySelectorAll('.animal-input');
  
  animalInputs.forEach(input => {
    const listId = input.getAttribute('id').replace('Input', 'List');
    const list = document.getElementById(listId);
      
    input.addEventListener('input', () => {
      const filter = input.value.toLowerCase();
      const items = list.querySelectorAll('li');
          
      let found = false;
      items.forEach(item => {
        if (item.textContent.toLowerCase().includes(filter)) {
          item.classList.remove('hidden');
          found = true;
        } else {
            item.classList.add('hidden');
        }
      });

      if (!found) {
        const noResult = document.createElement('li');
        noResult.textContent = "No results found";
        noResult.classList.add('p-2', 'text-gray-500', 'cursor-default');
        noResult.id = 'noResults';
        const previousNoResult = list.querySelector('#noResults');
        if (previousNoResult) {
          list.removeChild(previousNoResult);
        }
        list.appendChild(noResult);
      } else {
          const previousNoResult = list.querySelector('#noResults');
          if (previousNoResult) {
            list.removeChild(previousNoResult);
          }
      }
    });

    input.addEventListener('focus', () => {
      list.classList.remove('hidden');
    });

    input.addEventListener('blur', () => {
      setTimeout(() => list.classList.add('hidden'), 200);
    });

    list.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI' && event.target.id !== 'noResults') {
        input.value = event.target.textContent; 
        list.classList.add('hidden'); 
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const botonCopiar3 = document.getElementById('botonCopiar3');

  botonCopiar3.addEventListener('click', () => {
    const textContainer3 = document.getElementById('textContainer3');
    const tempInput = document.createElement('textarea');
      
    tempInput.value = textContainer3.innerText || textContainer3.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
      
    alert('Texto copiado exitosamente!');
  });
});

