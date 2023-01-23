<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div class="row-fluid">
        <div class="span6">
          <div>&copy; Сервис электронного документооборота МВД России, дата</div>
        </div>
        <div class="span6 text-right">
          <div class="footer-right-div">
            <div>
              Круглосуточная служба поддержки ЕЦЭ ИСОД МВД России<br>
              8 (800) 2000-462 (звонок бесплатный), 8 (495) 667-67-17
            </div>
            <div class="divider"></div>
            <div>
              <a href="https://it.mvd.ru/profile/requests/new">helpdesk@mvd.ru</a>
              <br>
              <a href="mailto:helpdesk@mvd.ru">Отправить обращение</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
@font-face {
  font-family: PT Sans;
  src: url('@/fonts/PTSans-Regular.ttf');
}

.footer {
  background-color: #1d6da8;
  clear: both;
  color: #fafbfc;
  font-family: PT Sans;
  height: 55px;
  margin-top: -75px;
  padding: 20px 0 0;
  position: relative;
  text-align: center;
}

.footer a {
  text-decoration: none;
}

.divider {
  border-left: 1px solid #f5f5f5;
  bottom: 1%;
  position: absolute;
  top: 19%;
}

.footer-right-div {
  position: relative;
  width: 580px;
  height: 36px;
  float: right;
}

.footer-right-div > div:nth-child(1){
  margin-right: 30px;
}

.footer-right-div > div:nth-child(3){
  margin-left: 30px;
}

.row-fluid {
  width: 100%;
}

.row-fluid::before, .row-fluid::after {
  display: table;
  line-height: 0;
  content: "";
}

.row-fluid .span6 {
  width: 48.717948717948715%;
}

.text-right {
  text-align: right;
}

.container {
  width: 1250px !important;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
}

a {
  display: inline;
  color: #fafbfc;
}

div {
  display: inline-block;
}

div .span6 {
  display: inline;
}
</style>