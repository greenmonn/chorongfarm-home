<template>
  <div class="content-wrapper content">
    <div class="order-message">감사합니다. 주문이 등록되었습니다.</div>

    <div class="box">
      <strong>농협 745048-56-009118</strong>
      <br>(예금주: 윤태웅)
    </div>

    <p class="price-message">
      위의 계좌번호로
      <strong>{{ formatPrice(totalPrice) }}</strong>원을 입금해 주시면 배송이 시작됩니다.
      <br>
      입금자명은 {{ orderName }}으로 기재 부탁드립니다.
    </p>
    <p class="inquiry-message">
      배송이 시작되면 입력해주신 {{ orderPhoneNumber }}로 안내드리겠습니다. <br> 문의 사항이 있으시다면 010-8593-2959로 연락 부탁드립니다.
    </p>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import store from '../store';
import logics from '../data/logics';

export default {
  beforeRouteEnter(to, from, next) {
    if (store.getters.getPriceResult === 0) {
      next('/');
    } else {
      next();
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      totalPrice: 'getPriceResult',
      orderName: 'getOrderName',
      orderPhoneNumber: 'getOrderPhoneNumber',
    }),
  },
  methods: {
    formatPrice: logics.formatPrice,
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('resetOrderResult');
    next();
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 10%;

  .order-message {
    font-size: larger;
  }

  .box {
    margin: 40px auto;
    max-width: 500px;
    font-size: larger;
  }
  .price-message {
    font-size: large;
  }
  .inquiry-message {
    font-size: medium;
  }
}
</style>
