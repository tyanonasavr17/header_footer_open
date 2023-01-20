<template>
  <header class="header">
    <span class="eagles-logo"></span>
    <span class="cifropol-logo"></span>

    <span class="brand-logo" title="Главная страница"></span>
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
  src: url('@/fonts/PTSans-Regular.ttf');
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
  background: url('@/assets/main/eagles.png') no-repeat center;
  display: block;
  height: 60px;
  left: 63.5px;
  position: absolute;
  width: 286px;
}

.cifropol-logo {
  background: url('@/assets/main/cifropol.svg') no-repeat center;
  display: block;
  height: 26px;
  left: 48px;
  position: absolute;
  top: 17px;
  width: 122px;
}

.brand-logo {
  background: url('@/assets/main/logo.png') no-repeat center;
  display: block;
  height: 38.33px;
  left: 180px;
  position: absolute;
  top: 11px;
  width: 62px;
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
  width: 111px;
}

img {
  margin-bottom: 25px;
  margin-left: 11px;
  margin-top: 6px;
}

hgroup {
  margin-left: 252px;
  padding-top: 13px;
}

@media screen and (max-width: 915px) {
  .header {
    display: none;
  }
}
</style>