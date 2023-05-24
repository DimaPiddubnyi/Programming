const tabs = document.querySelectorAll(".tabs-title");
const tabs_content = document.getElementsByClassName("tabs-content");
const text_content = document.querySelectorAll(".tabs-content > li");

function removeActive(skipIndex) {
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].className == "tabs-title active" && i != skipIndex) {
      tabs[i].className = "tabs-title";
      return;
    }
  }
}

function setContent() {
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].className == "tabs-title active") {
      console.log(true);
      tabs_content[0].innerHTML = text_content[i].innerHTML;
    }
  }
}

function addEvents() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () => {
      removeActive(i);
      tabs[i].classList.add("active");
      setContent();
    });
  }
}

addEvents();
setContent();
