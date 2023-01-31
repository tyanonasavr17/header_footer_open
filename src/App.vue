<template>
  <header class="header clearfix">
    <LeftPart 
      :header-logo="example_header_data.logo" 
      :header-service-name="example_header_data.service_name" 
    />
    <div v-if="example_header_data.right_part.some(item => item.title === 'График приёма')">
      <RightPart 
        :header-buttons="example_header_data.right_part" 
        :is-ws="true" 
      />
    </div>
    <div v-else-if="example_header_data.right_part.length > 0">
      <RightPart 
        :header-buttons="example_header_data.right_part" 
        :is-ws="false" 
      />
    </div>
    <div v-else />
  </header>
  <div class="wrapper" />
  <div v-if="example_header_data.has_footer">
    <Footer />
  </div>
</template>

<script>
import RightPart from "./components/RightPart.vue";
import LeftPart from "./components/LeftPart.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    RightPart,
    LeftPart,
    Footer
  },
  data: () => ({
    //header_data: null,
    example_header_data: {
      logo: { url: "http://localhost:8080", title: "Главная страница" },
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
        { type: "button", icon: "btn-folder", url: "http://localhost:8080", title: "Архив долгосрочного хранения" },
        { type: "button", icon: "btn-home", url: "http://localhost:8080", title: "Рабочее место исполнителя" },
        { type: "messages", icon: "btn-message", url: "http://localhost:8080", title: "Беседы", message_new: true },
        { type: "profile", text: "Иванов И. И.", url: "http://localhost:8080", title: "Профиль" },
        {
          type: "logout",
          icon: "btn-logout",
          url: "http://localhost:8080",
          title: "Выход",
          method: 'delete',
          name: 'Выйти из системы'
        }
      ],
      has_footer: true
    }
  }),
}
</script>

<style>
.header {
  background-color: #1d6da8;
  font-family: PT Sans;
  height: 60px;
  margin-bottom: 15px;
  max-width: 100%;
  top: 0;
  z-index: 150;
}

.clearfix::after {
  content: '';
  display: table;
  clear: both;
}

.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

body {
  margin: auto;
  font-size: 14px;
  line-height: 20px;
}

br {
  line-height: 20px;
}
</style>
