<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__left-div">
        <span>&copy;&nbsp;</span>
        <span>Сервис электронного документооборота МВД России, {{ year }}</span>
      </div>
      <div class="footer__right-div">
        <div>
          Круглосуточная служба поддержки ЕЦЭ ИСОД МВД России<br>
          8 (800) 2000-462 (звонок бесплатный), 8 (495) 667-67-17
        </div>
        <div class="footer__divider" />
        <div>
          <a
            href="https://it.mvd.ru/profile/requests/new"
            class="footer__link"
          >helpdesk@mvd.ru</a>
          <br>
          <a
            href="mailto:helpdesk@mvd.ru"
            class="footer__link"
          >Отправить обращение</a>
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
