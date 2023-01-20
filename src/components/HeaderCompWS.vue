<template>
  <header class="header">
    <span class="eagles-logo"></span>
    <span class="cifropol-logo"></span>

    <span class="brand-logo"></span>

    <hgroup>
      <h1>МВД России</h1>
      <h2>Сервис электронного документооборота</h2>
    </hgroup>

    <span class="header-btn btn-user btn-with-border" title="График приёма"></span>
    <span class="header-btn btn-back-arrow btn-with-border" title="Рабочее место делопроизводителя"></span>
    <span class="header-btn btn-home btn-with-border" title="Домой"></span>
    <span class="header-btn btn-stack btn-with-border" title="Зарегистрированные"></span>
    <span class="header-btn btn-star btn-with-border" title="Избранное"></span>
    <span class="header-btn btn-wrench btn-with-border" title="Обработанные"></span>
    <span class="header-btn btn-sort btn-with-border" title="Отправленные по маршруту"></span>
    <span class="header-btn btn-time btn-with-border" title="Активность профиля"></span>
    <span class="header-btn btn-calendar btn-with-border" title="Календарь событий"></span>
    <span class="header-btn btn-cog btn-with-border" title="Настройки"></span>

    <div class="avatar-section btn-with-border">
      <img src="@/assets/ws/avatar.svg"/>
      <span class="span">Имя пользователя</span>
    </div>

    <span class="header-btn btn-logout btn-with-border" title="Выход"></span>

  </header>
</template>

<script>
export default {}
</script>

<style>

@font-face {
  font-family: PT Sans;
  src: url('@/fonts/PTSans-Regular.ttf');
}

.header {
  background-color: #1d6da8;
  font-family: PT Sans;
  height: 60px;
  position: fixed;
  margin-bottom: 15px;
  max-width: 100%;
  top: 0;
  width: 100%;
  z-index: 150;
}

h1 {
  color: #fafbfc;
  font-size: 14px;
  font-weight: bold;
  line-height: normal;
  margin: 0;
  padding: 0;
}

h2 {
  color: #fafbfc;
  font-size: 11px;
  font-weight: normal;
  line-height: normal;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
}

h3 {
  color: #fafbfc;
  font-size: 9px;
  font-weight: normal;
  line-height: normal;
  margin: 0;
  padding: 0;
}

svg {
  width: 100%;
}

.eagles-logo {
  background: url('@/assets/ws/eagles.png') no-repeat center;
  display: block;
  height: 60px;
  left: 63.5px;
  position: absolute;
  width: 286px;
}

.cifropol-logo {
  background: url('@/assets/ws/cifropol.svg') no-repeat center;
  display: block;
  height: 26px;
  left: 48px;
  position: absolute;
  top: 17px;
  width: 122px;
}

.brand-logo {
  background: url('@/assets/ws/logo.png') no-repeat center;
  display: block;
  height: 38.33px;
  left: 180px;
  position: absolute;
  top: 11px;
  width: 62px;
}

.avatar-section {
  display: inline-block;
  height: 60px;
  position: absolute;
  right: 123px;
  top: 0;
  width: 180px;
}

.span {
  color: #fafbfc;
  display: inline-block;
  font-size: 12px;
  line-height: 16px;
  max-height: 30px;
  overflow: hidden;
  padding-left: 2px;
  position: absolute;
  text-overflow: ellipsis;
  top: 21px;
  white-space: nowrap;
  width: 113px;
}

ul {
  direction: inherit;
  width: 300px;
}

li {
  color: #fafbfc;
  display: inline-block;
  font-family: PT Sans;
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
  width: 300px;
}

a {
  height: 30px;
  width: fit-content;
}

img {
  margin-bottom: 25px;
  margin-left: 11px;
  margin-top: 6px;
}

a {
  display: inline-block;
  height: 60px;
  margin-top: 0;
  width: 180px;
}

.header-btn {
  height: 60px;
  overflow: hidden;
  position: absolute;
  text-indent: -9999px;
  top: 0;
  width: 60px;
}

.btn-user {
  background: url('@/assets/ws/user.svg') no-repeat center;
  right: 792px;
}

.btn-back-arrow {
  background: url('@/assets/ws/back-arrow.svg') no-repeat center;
  right: 731px;
}

.btn-home {
  background: url('@/assets/ws/home.svg') no-repeat center;
  right: 670px;
}

.btn-stack {
  background: url('@/assets/ws/stack.svg') no-repeat center;
  right: 609px;
}

.btn-star {
  background: url('@/assets/ws/star.svg') no-repeat center;
  right: 548px;
}

.btn-wrench {
  background: url('@/assets/ws/wrench.svg') no-repeat center;
  right: 487px;
}

.btn-sort {
  background: url('@/assets/ws/sort.svg') no-repeat center;
  right: 426px;
}

.btn-time {
  background: url('@/assets/ws/time.svg') no-repeat center;
  right: 365px;
}

.btn-calendar {
  background: url('@/assets/ws/calendar.svg') no-repeat center;
  right: 304px;
}

.btn-cog {
  background: url('@/assets/ws/cog.svg') no-repeat center;
  right: 62px;
}

.btn-logout {
  background: url('@/assets/ws/exit-door.svg') no-repeat center;
  right: 1px;
}

.btn-with-border {
  border-left: 1px solid rgba(245, 245, 245, .5);
}

hgroup {
  margin-left: 252px;
  padding-top: 13px;
}

@media screen and (max-width: 985px) {
  .header .btn-with-border {
    display: none;
  }
}

@media screen and (max-width: 1215px) {
  .header hgroup {
    display: none;
  }
}


</style>