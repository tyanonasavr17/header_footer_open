import { createApp, h } from "vue";
import App from "./App.vue";

window.createHeader = ({ data = {}, element = null } = {}) => {
  if (data == null || element == null) {
    console.error("Failed to create widget: data or element is not defined!");
    return;
  }

  createApp({
    data: () => (data),
    render: () => h(App)}
  ).mount(element);
}

if (import.meta.env.DEV) {
  createApp({
    data: () => ({
      fields: {
        logo: { url: "http://localhost:8080", title: "Главная страница" },
        service_name: "Сервис электронного документооборота",
        right_part: [
          {
            type: "button",
            icon: "btn-folder",
            url: "http://localhost:8080",
            title: "Архив долгосрочного хранения",
          },
          {
            type: "button",
            icon: "btn-home",
            url: "http://localhost:8080",
            title: "Рабочее место исполнителя",
          },
          {
            type: "messages",
            icon: "btn-message",
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
            icon: "btn-logout",
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
  }).mount("#app");
}
