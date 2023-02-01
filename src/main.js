import { createApp, h } from "vue";
import App from "./App.vue";

const HeaderFooter = createApp({
  data: () => ({
    //   onSave: () => console.log("onSave callback"),
    fields: {
      logo: { url: "http://localhost:8080", title: "Главная страница" },
      service_name: "Сервис электронного документооборота",
      right_part: [
        {
          type: "folder",
          url: "http://localhost:8080",
          title: "Архив долгосрочного хранения",
        },
        {
          type: "home",
          url: "http://localhost:8080",
          title: "Рабочее место исполнителя",
        },
        {
          type: "message",
          url: "http://localhost:8080",
          title: "Беседы",
          message_new: true,
        },
        {
          type: "profile",
          text: "Иванов И. И.",
          url: "http://localhost:8080",
          title: "Профиль",
        },
        {
          type: "logout",
          url: "http://localhost:8080",
          title: "Выход",
          method: "delete",
          name: "Выйти из системы",
        },
      ],
      has_footer: true,
    },
  }),
  render: () => h(App),
});

if (!import.meta.env.DEV) {
  window.HeaderFooter = HeaderFooter;
}

HeaderFooter.mount("#app");
