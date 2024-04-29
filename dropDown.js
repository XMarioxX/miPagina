
const mainButton = document.getElementById('mainButton');
const individualButton = document.getElementById('individualButton');
const textContainer = document.getElementById('textContainer');
const textContainer2 = document.getElementById('textContainer2');

// Agregar eventos de clic a los botones
mainButton.addEventListener('click', () => {
  // Cambiar el contenido del div cuando se hace clic en el botón Main
  textContainer2.classList.add('hidden');
  textContainer.classList.remove('hidden');
});

individualButton.addEventListener('click', () => {
  // Cambiar el contenido del div cuando se hace clic en el botón Individual
  textContainer.classList.add('hidden');
  textContainer2.classList.remove('hidden');
});
    
  function copyToClipboard() {
    const textToCopy = document.getElementById('textContainer').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Texto copiado al portapapeles');
      showPopup();
    }).catch((error) => {
      console.error('Error al copiar el texto:', error);
    });
  } 
  
  function copyToClipboard() {
    const textToCopy = document.getElementById('textContainer2').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Texto copiado al portapapeles');
      showPopup();
    }).catch((error) => {
      console.error('Error al copiar el texto:', error);
    });
  }
  
  function copyToClipboard2() {
    const textToCopy = document.getElementById('codigo').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Texto copiado al portapapeles');
      showPopup();
    }).catch((error) => {
      console.error('Error al copiar el texto:', error);
    });
  }

  function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    setTimeout(() => {
      popup.classList.add('hidden');
    }, 3000); // Oculta el popup después de 4 segundos
  }

//<!-- Script para mostrar/ocultar el div transparente y los botones -->
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
