<template>
  <header class="header">
    <span class="eagles-logo"></span>
    <span class="cifropol-logo"></span>

    <hgroup>
      <h1>МВД России</h1>
      <h2>Сервис электронного документооборота</h2>
    </hgroup>

  </header>
</template>

<script>
export default {}
</script>

<style>

@font-face {
  font-family: PT Sans;
  src: url('./public/fonts/PTSans-Regular.ttf');
}

.header {
  background-color: #1d6da8;
  font-family: PT Sans;
  height: 60px;
  margin-bottom: 15px;
  max-width: 100%;
  top: 0;
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

svg {
  width: 100%;
}

.eagles-logo {
  background: url('src/assets/main/eagles.png') no-repeat center;
  display: block;
  height: 60px;
  left: 63.5px;
  position: absolute;
  width: 286px;
}

.cifropol-logo {
  background: url('src/assets/main/cifropol.svg') no-repeat center;
  display: block;
  height: 26px;
  left: 48px;
  position: absolute;
  top: 17px;
  width: 122px;
}

.brand-logo {
  background: url('src/assets/main/logo.png') no-repeat center;
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
  right: 61px;
  top: 0;
  width: 180px;
}

span {
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
  width: 111px;
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

.btn-folder {
  background: url('src/assets/main/folder.svg') no-repeat center;
  right: 364px;
}

.btn-home {
  background: url('src/assets/main/home.svg') no-repeat center;
  right: 303px;
}

.btn-message {
  background: url('src/assets/main/message.svg') no-repeat center;
  right: 242px;
}

.message-new {
  background-color: rgba(190, 38, 39, 1);
  border-radius: 50%;
  height: 8px;
  left: 39px;
  position: relative;
  top: 15px;
  width: 8px;
}

.btn-logout {
  background: url('src/assets/main/exit-door.svg') no-repeat center;
  right: 0;
}

.btn-with-border {
  border-left: 1px solid rgba(245, 245, 245, .5);
}

hgroup {
  margin-left: 252px;
  padding-top: 13px;
}

@media screen and (max-width: 915px) {
  .header .btn-with-border {
    display: none;
  }
}

</style>