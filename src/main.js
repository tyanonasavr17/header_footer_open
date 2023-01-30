//import {createApp} from 'vue'
import App from './App.vue'

//createApp(App).mount('#app')

export const HeaderFooter = Vue.extend({
    render: h => h(App),
})
let HeaderFooter=require("vue");
new HeaderFooter({
    data: () => ({
        rights: 'global',
        apiUrl: 'http://localhost:8080',
        documentId: '0182c475199edb11e6ef959e7bb8cf84186262400132c7080558458a5194caa2e4',
        token: '52607606be8d68c88b4021844724ebc7',
        onSave: () => console.log('onSave callback'),
        fields: {
            logo: {url: "http://localhost:8080", title: "Главная страница"},
            service_name: "Сервис электронного документооборота",
            right_part: [
                /**{type: "button", icon: "btn-user", url: "http://localhost:8080", title: "График приёма"},
                 {
            type: "button",
            icon: "btn-back-arrow",
            url: "http://localhost:8080",
            title: "Рабочее место делопроизводителя"
          },
                 {type: "button", icon: "btn-home", url: "http://localhost:8080", title: "Домой"},
                 {type: "button", icon: "btn-stack", url: "http://localhost:8080", title: "Зарегистрированные"},
                 {type: "button", icon: "btn-star", url: "http://localhost:8080", title: "Избранное"},
                 {type: "button", icon: "btn-wrench", url: "http://localhost:8080", title: "Обработанные"},
                 {type: "button", icon: "btn-sort", url: "http://localhost:8080", title: "Отправленные по маршруту"},
                 {type: "button", icon: "btn-time", url: "http://localhost:8080", title: "Активность профиля"},
                 {type: "button", icon: "btn-calendar", url: "http://localhost:8080", title: "Календарь событий"},
                 {type: "button", icon: "btn-cog", url: "http://localhost:8080", title: "Настройки"},
                 {type: "profile", text: "Иванов И. И.", url: "http://localhost:8080", title: ""},
                 {type: "logout", icon: "btn-logout", url: "http://localhost:8080", title: "Выход", method: 'delete', name: 'Выйти из системы'}*/
                //{type: "extra_div", code: "Подать обращение в ЕЦЭ"},
                /**{type: "button", icon: "btn-folder", url: "http://localhost:8080", title: "Архив долгосрочного хранения"},
                 {type: "button", icon: "btn-home", url: "http://localhost:8080", title: "Рабочее место исполнителя"},
                 {type: "messages", icon: "btn-message", url: "http://localhost:8080", title: "Беседы", message_new: true},
                 {type: "profile", text: "Иванов И. И.", url: "http://localhost:8080", title: "Профиль"},
                 {
          type: "logout",
          icon: "btn-logout",
          url: "http://localhost:8080",
          title: "Выход",
          method: 'delete',
          name: 'Выйти из системы'
        }*/
            ],
            has_footer: true
        },
    }),
}).$mount('#app')