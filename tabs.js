function text(button) {
    const selectedText = document.getElementById("text");
  
    if (button === "main") {
      selectedText.innerHTML =
        '<span class="text-purple-500">import</span> {Tabs} <span class="text-purple-500">from</span> <span class="text-green-400">"@nextui-org/react"</span>;';
      document.getElementById("mainButton").classList.add("active");
      document.getElementById("individualButton").classList.remove("active");
    } else if (button === "individual") {
      selectedText.innerHTML =
        '<span class="text-purple-500">import</span> {Tabs} <span class="text-purple-500">from</span> <span class="text-green-400">"@nextui-org/tabs"</span>;';
      document.getElementById("individualButton").classList.add("active");
      document.getElementById("mainButton").classList.remove("active");
    }
  
    document.getElementById("mainButton").classList.remove("border-white");
    document.getElementById("individualButton").classList.remove("border-white");
    document.getElementById(button + "Button").classList.add("border-white");
  
    document.getElementById("copy-text").classList.remove("checkmark");
    document.getElementById("copy-text").setAttribute("name", "copy-outline");
  }
  
  document.getElementById("copy-text").addEventListener("click", function () {
    copy();
  });
  
  function copy() {
    const selectedText = document.getElementById("text");
    const textToCopy = selectedText.textContent;
  
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        document.getElementById("copy-text").setAttribute("name", "checkmark");
        setTimeout(() => {
          document
            .getElementById("copy-text")
            .setAttribute("name", "copy-outline");
        }, 1000);
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
      });
  }
  
  
  function text2(button) {
    if (button === "preview") {
      document.getElementById("preview-item-2").classList.add("hidden");
      document.getElementById("preview-item").classList.remove("hidden");
    } else if (button === "code") {
      document.getElementById("preview-item").classList.add("hidden");
      document.getElementById("preview-item-2").classList.remove("hidden");
    }
  
    document.getElementById("previewButton").classList.remove("border-white");
    document.getElementById("codeButton").classList.remove("border-white");
    document.getElementById(button + "Button").classList.add("border-white");
  }
  
  document.getElementById("copy-text").addEventListener("click", function () {
    copy();
  });
  
  const previewItem = document.getElementById("preview-2");
  const showMoreLessBtn = document.getElementById("show-more-less-btn");
  
  showMoreLessBtn.addEventListener("click", function () {
    previewItem.classList.toggle("h-40");
    previewItem.classList.toggle("h-auto");
    if (previewItem.classList.contains("h-auto")) {
      showMoreLessBtn.textContent = "Show less";
      document.getElementById("show-more-less-btn").classList.remove("top-1/2");
      document.getElementById("show-more-less-btn").classList.add("bottom-1");
    } else {
      showMoreLessBtn.textContent = "Show more";
      document.getElementById("show-more-less-btn").classList.add("top-1/2");
      document.getElementById("show-more-less-btn").classList.remove("bottom-1");
    }
  });
  
  
  const previewDiv = document.getElementById("preview-2");
  
  previewDiv.addEventListener('mouseenter', () => {
    document.getElementById("icons").classList.remove("hidden");
  });
  
  previewDiv.addEventListener('mouseleave', () => {
    document.getElementById("icons").classList.add("hidden");
  });
  
  const iconsDiv = document.getElementById("icons");
  
  iconsDiv.addEventListener('mouseenter', () => {
    document.getElementById("icons").classList.remove("hidden");
  });
  
  iconsDiv.addEventListener('mouseleave', () => {
    document.getElementById("icons").classList.add("hidden");
  });
  
  
  function git() {
    window.open(
      "https://github.com/nextui-org/nextui/issues/new?assignees=&labels=bug&template=bug_report.yml&title=%5BBUG%5D+-+Spinner"
    );
  }
  function changeTab(tabName) {
    // Lista de todos los tabs
    const tabs = ['photos', 'music', 'videos'];
    
    // Ocultar todos los tabs
    tabs.forEach(tab => {
      document.getElementById(tab).style.display = 'none';
    });
    
    // Mostrar el tab seleccionado
    document.getElementById(tabName).style.display = 'block';
  }
  
  // Inicializar el primer tab visible
  window.onload = () => changeTab('photos');
  
  
  function copy2() {
  
    const codeToCopy = `import React from "react";
    import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
    
    export default function App() {
      return (
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options">
            <Tab key="photos" title="Photos">
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>  
            </Tab>
            <Tab key="music" title="Music">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>  
            </Tab>
            <Tab key="videos" title="Videos">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>  
            </Tab>
          </Tabs>
        </div>  
      );
    }`;
  
    try {
      navigator.clipboard.writeText(codeToCopy);
    } catch (err) {
      console.error("Error al copiar el código al portapapeles: ", err);
    }
  }
  
  function sandbox() {
    window.open(
      "https://codesandbox.io/p/sandbox/vf25zr?file=%2FApp.jsx"
    );
  }