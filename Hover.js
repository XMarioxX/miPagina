function text(button) {
    const selectedText = document.getElementById("text");
  
    if (button === "main") {
      selectedText.innerHTML =
        '<span class="text-purple-500">import</span> {Tooltip} <span class="text-purple-500">from</span> <span class="text-green-400">"@nextui-org/react"</span>;';
      document.getElementById("mainButton").classList.add("active");
      document.getElementById("individualButton").classList.remove("active");
    } else if (button === "individual") {
      selectedText.innerHTML =
        '<span class="text-purple-500">import</span> {Tooltip} <span class="text-purple-500">from</span> <span class="text-green-400">"@nextui-org/tooltip"</span>;';
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
      "https://github.com/nextui-org/nextui/issues/new?assignees=&labels=bug&template=bug_report.yml&title=%5BBUG%5D+-+Tooltip"
    );
  }
  
  function copy2() {
  
    const codeToCopy = `import React from "react";
      import {Tooltip, Button} from "@nextui-org/react";
      
      export default function App() {
        return (
          <Tooltip content="I am a tooltip">
            <Button>Hover me</Button>
          </Tooltip>
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
      "https://codesandbox.io/p/devbox/small-fog-x7llxc?file=%2FApp.jsx&utm_medium=sandpack"
    );
  }