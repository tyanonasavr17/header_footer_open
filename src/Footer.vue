<template>
  <footer
    id="footer"
    class="footer"
  >
    <div class="container">
      <div class="footer-left-div">
        <span>&copy;&nbsp;</span>
        <span>Сервис электронного документооборота МВД России, {{ year }}</span>
      </div>
      <div class="footer-right-div">
        <div>
          Круглосуточная служба поддержки ЕЦЭ ИСОД МВД России<br>
          8 (800) 2000-462 (звонок бесплатный), 8 (495) 667-67-17
        </div>
        <div class="divider" />
        <div>
          <a href="https://it.mvd.ru/profile/requests/new">helpdesk@mvd.ru</a>
          <br>
          <a href="mailto:helpdesk@mvd.ru">Отправить обращение</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    year: null
  }),
  created () {
    this.year = new Date().getFullYear();
  }
}
</script>

<style scoped lang="scss">
@import "/src/styles/footer.scss";
</style>
