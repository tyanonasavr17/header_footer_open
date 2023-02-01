import { createApp, h } from "vue";
import App from "./App.vue";

//createApp(App).mount('#app')

// export const HeaderFooter = Vue.extend({
//     render: h => h(App),
// })
// let HeaderFooter=require("vue");
if (import.meta.env.DEV) {
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

  // window.HeaderFooter = HeaderFooter;

  HeaderFooter.mount("#app");
}
