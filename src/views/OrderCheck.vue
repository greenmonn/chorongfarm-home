<template>
  <div class="content-wrapper">
    <h1 class="content-title">주문 조회하기</h1>
    <div class="ordercheck-form">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label" for="name">이름</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input v-model="name" type="text" name="name" class="input input-name">
            </p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label" for="phoneNumber">휴대폰번호</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="conrol">
              <input
                v-model="phoneNumber"
                type="text"
                name="phoneNumber"
                class="input input-phone"
                placeholder="'-'를 포함해서 입력해주세요"
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <button class="button" @click="checkOrder">조회하기</button>

    <div class="result" v-if="showResult">
      <p>총 {{ orderCounts }}개의 주문이 있습니다.</p>
      <hr>

      <div class="content" v-for="order in orders" :key="order.date.toString()">
        <h4>{{ formatDate(order.date) }} 주문</h4>
        <h5>
          총 결제금액 {{ formatPrice(order.totalPrice) }}원
          <strong>({{ order.status }})</strong>
        </h5>
        <p>
          <i class="fas fa-truck"></i>
          {{ order.address }}
        </p>

        <app-order-list :orderList="order.orderList"></app-order-list>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { orderCollection } from '../firebase/database';
import logics from '../data/logics';
import orderStatus from '../data/orderStatus';

import OrderList from '../components/ui/OrderList.vue';

export default {
  components: {
    appOrderList: OrderList,
  },
  data() {
    return {
      name: '',
      phoneNumber: '',
      orderCounts: 0,
      orders: [],
      showResult: false,
    };
  },
  computed: {},
  methods: {
    checkOrder() {
      orderCollection
        .where('name', '==', this.name)
        .where('phoneNumber', '==', logics.formatPhoneNumber(this.phoneNumber))
        .get()
        .then((querySnapshot) => {
          this.orders = [];
          this.orderCounts = 0;

          querySnapshot.forEach((doc) => {
            this.addOrder(doc);
            this.orderCounts += 1;
          });

          if (this.orderCounts === 0) {
            alert('정보가 없습니다.');
            return;
          }

          this.showResult = true;
        })
        .catch(() => {
          alert('오류가 발생했습니다.');
        });
    },
    addOrder(doc) {
      const data = doc.data();
      const order = {
        date: new Date(doc.id),
        totalPrice: data.totalPrice,
        status: data.status ? orderStatus[data.status] : orderStatus.beforePay,
        address: `${data.address} ${data.extraAddress}`,
        orderList: data.orderList,
      };

      this.orders.unshift(order);
    },
    formatDate: logics.formatDate,
    formatPrice: logics.formatPrice,
  },
};
</script>

<style lang="scss" scoped>
.ordercheck-form {
  width: 450px;
  text-align: left;
  margin: 50px auto;

  .input-name {
    width: 100px;
  }
  .input-phone {
    width: 200px;
  }
}

.button {
  margin: 0px auto 80px auto;
  background-color: $mainColor;
  color: white;
}

hr {
  margin: 50px auto;
}

.result {
  h5 {
    font-weight: 400;
    margin: 30px auto;

    strong {
      color: $mainColor;
    }
  }

  p {
    color: $mainColor;
    strong {
      color: $mainColor;
    }
  }
}
</style>
