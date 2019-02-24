<template>
  <div>
    <div class="content-title">간단한 정보 입력으로 쉽게 주문하실 수 있습니다.</div>
    <div class="content-wrapper content">
      <div class="order-info">
        <div class="box" v-for="(s, id) in selections" :key="id">
          <p>
            <strong>{{ s.name }}</strong>
            ({{ s.type }})
          </p>
          단위: {{ s.unit }}
          <i class="splitter"></i>
          수량: {{ s.quantity }}개
          <i class="splitter"></i>
          가격:
          <strong>{{ formatPrice(s.price) }}</strong>원
        </div>

        <hr>

        <div class="result">
          <div class="delivery">
            배송비: {{ formatPrice(deliveryPrice) }}원
            <small>(50,000원 이상 주문 시 무료배송)</small>
          </div>
          <div class="total-price">
            총 가격:
            <strong>{{ formatPrice(totalPrice) }}원</strong>
          </div>
        </div>
      </div>
      <div class="order-form">
        <dl>
          <dt>이름</dt>
          <dd>
            <input v-model="name" class="input" type="text">
          </dd>
        </dl>
        <dl>
          <dt>연락처</dt>
          <dd>
            <input v-model="phoneNumber" class="input" type="tel" placeholder="'-'를 포함해서 입력">
          </dd>
        </dl>
        <div
          ref="searchWindow"
          :style="searchWindow"
          style="border:1px solid;width:500px;margin:5px 0;position:relative"
        >
          <img
            src="//t1.daumcdn.net/postcode/resource/images/close.png"
            id="btnFoldWrap"
            style="cursor:pointer;position:absolute;right:0px;top:-1px;z-index:1"
            @click="searchWindow.display = 'none'"
            alt="접기 버튼"
          >
        </div>
        <dl>
          <dt>주소</dt>
          <dd class="address">
            <input class="input post-code" type="text" placeholder="우편번호" v-model="postcode">
            <input class="button" type="button" value="우편번호 찾기" @click="execDaumPostcode">
            <br>
            <input class="input" type="text" v-model="address" placeholder="주소">
            <br>
            <input
              class="input"
              type="text"
              v-model="extraAddress"
              ref="extraAddress"
              placeholder="상세주소"
            >
          </dd>
        </dl>
        
        <dl>
          <dt>요청사항</dt>
          <dd>
            <textarea v-bind="message" class="textarea" cols="33" rows="3"></textarea>
          </dd>
        </dl>
      </div>
      <button @click="order" class="filled-button">주문 완료</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import store from '../store';
import logics from '../data/logics';

import { orderCollection } from '../firebase/database';

export default {
  beforeRouteEnter(to, from, next) {
    const selectionsCount = Object.keys(store.state.selections).length;
    if (selectionsCount === 0) {
      next(from.path);
    } else {
      next();
    }
  },
  data() {
    return {
      name: '',
      phoneNumber: '',
      searchWindow: {
        display: 'none',
        height: '300px',
      },
      postcode: '',
      address: '',
      extraAddress: '',
      message: '',
    };
  },
  methods: {
    formatPrice: logics.formatPrice,
    execDaumPostcode() {
      const currentScroll = Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop,
      );

      // eslint-disable-next-line
      // TODO: not using new?
      new daum.Postcode({
        onComplete: (data) => {
          if (data.userSelectedType === 'R') {
            this.address = data.roadAddress;
          } else {
            this.address = data.jibunAddress;
          }

          if (data.userSelectedType === 'R') {
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
              this.extraAddress += data.bname;
            }

            if (data.buildingName !== '' && data.apartment === 'Y') {
              this.extraAddress +=
                this.extraAddress !== ''
                  ? `, ${data.buildingName}`
                  : data.buildingName;
            }

            if (this.extraAddress !== '') {
              this.extraAddress = ` (${this.extraAddress})`;
            }
          } else {
            this.extraAddress = '';
          }

          this.postcode = data.zonecode;

          this.$refs.extraAddress.focus();

          this.searchWindow.display = 'none';
          document.body.scrollTop = currentScroll;
        },
        onResize: (size) => {
          this.searchWindow.height = `${size.height}px`;
        },
        width: '100%',
        height: '100%',
      }).embed(this.$refs.searchWindow);

      this.searchWindow.display = 'block';
    },
    order() {
      const id = new Date(Date.now()).toISOString();

      orderCollection
        .doc(id)
        .set({
          name: this.name,
          phoneNumber: this.phoneNumber,
          postcode: this.postcode,
          address: this.address,
          extraAddress: this.extraAddress,
          message: this.message,
          orderList: this.selections,
          totalPrice: this.totalPrice,
        })
        .then(() => {
          this.$store.commit('setOrderResult', {
            price: this.totalPrice,
            name: this.name,
            phoneNumber: this.phoneNumber,
          });
          this.$store.commit('resetSelections');
          this.$router.push({ name: 'orderComplete' });
        })
        .catch(() => {
          alert('죄송합니다. 오류가 발생해서 전송하지 못했습니다.');
        });
    },
  },
  computed: {
    ...mapState(['selections']),
    totalPrice() {
      return this.$store.getters.getPriceSum;
    },
    deliveryPrice() {
      if (this.totalPrice >= 50000) {
        return 0;
      }
      return 2500;
    },
  },
};
</script>

<style lang="scss" scoped>
break{
  flex-basis: 100%;
  width: 0px;
  height: 0px;
  overflow: hidden;
}

.content-title {
  margin-top: 30px;
}
.content {
  .order-info {
    .box {
      margin: 30px auto 20px;
    }
    hr {
      margin: 40px auto 20px;
    }
    .result {
      margin: auto auto auto;
      text-align: right;

      .delivery {
        color: gray;
      }
      .total-price {
        font-size: larger;
      }
    }
  }

  .order-form {
    margin: 5% 0 5% -20px;
    dt {
      font-size: large;
      font-weight: 600;
    }
    dd.address {
      display: inline-block;
    }
    input {
      margin-bottom: 3%;
    }
    .post-code {
      width: 59%;
      margin-right: 3%;
    }
  }
  .filled-button {
    margin: 5% auto;
    width: 200px;
  }
}
</style>
