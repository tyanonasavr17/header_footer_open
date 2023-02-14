import { createApp, h } from "vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

function createComponent(component, data, element) {
  createApp({ data: () => data, render: () => h(component) }).mount(element);
}

window.createHeader = ({ data = {}, element = null } = {}) => {
  if (data == null || element == null) {
    console.error("Failed to create header: data or element is not defined!");
    return;
  }

  createComponent(Header, data, element);
};

window.createFooter = ({ element = null } = {}) => {
  if (element == null) {
    console.error("Failed to create footer: element is not defined!");
    return;
  }

  createComponent(Footer, null, element);
};

window.setNewMessageIndicator = (id) => {
  var icon = document.getElementById(id);
  if (icon.style.visibility != "visible") {
    icon.style.visibility = "visible";
  }
};
window.unsetNewMessageIndicator = (id) => {
  var icon = document.getElementById(id);
  if (icon.style.visibility != "hidden") {
    icon.style.visibility = "hidden";
  }
};

if (import.meta.env.DEV) {
  window.development = true;
}
