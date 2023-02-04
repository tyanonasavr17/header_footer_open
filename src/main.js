import { createApp, h } from "vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

window.createHeader = ({ data = {}, element = null } = {}) => {
  if (data == null || element == null) {
    console.error("Failed to create header: data or element is not defined!");
    return;
  }

  createApp({
    data: () => data,
    render: () => h(Header),
  }).mount(element);
};

window.createFooter = ({ element = null } = {}) => {
  if (element == null) {
    console.error("Failed to create footer: element is not defined!");
    return;
  }

  createApp({ render: () => h(Footer) }).mount(element);
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
