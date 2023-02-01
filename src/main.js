import { createApp, h } from "vue";
import App from "./App.vue";

const HeaderFooter = createApp({
  data: () => ({
    //   onSave: () => console.log("onSave callback"),
    fields: {
      logo: { url: "http://localhost:8080", title: "Главная страница" },
      service_name: "Сервис электронного документооборота",
      right_part: [],
      has_footer: true,
    },
  }),
  render: () => h(App),
});

if (!import.meta.env.DEV) {
  window.HeaderFooter = HeaderFooter;
}

HeaderFooter.mount("#app");
