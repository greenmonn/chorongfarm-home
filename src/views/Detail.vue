<template>
  <div>
    <div class="product-summary columns">
      <div class="thumbnail column is-5">
        <div>
          <img :src="require(`@/assets/${images[0]}`)">
        </div>
        <div class="preview-group columns is-mobile">
          <div class="preview column is-4">
            <img :src="require(`@/assets/${images[0]}`)">
          </div>
          <div class="preview column is-4">
            <img :src="require(`@/assets/${images[1]}`)">
          </div>
          <div class="preview column is-4">
            <img :src="require(`@/assets/${images[2]}`)">
          </div>
        </div>
      </div>

      <div class="product-description column">
        <div>
          <p class="content-title">{{ name }}</p>
          <hr>
          <div class="content">
            <dl>
              <dt>판매가</dt>
              <dd>
                {{ priceString }}원
              </dd>
            </dl>
            <dl>
              <dt>할인판매가</dt>
              <dd>
                <strong>{{ priceForSaleString }}원 [{{ priceSaleRate }}%]</strong>
              </dd>
            </dl>
            <dl>
              <dt>원산지</dt>
              <dd>한국 (경상북도 문경시)</dd>
            </dl>
            <dl class="option">
              <dt>종류 선택</dt>
              <dd>
                <button
                  @click="selectType"
                  v-for="(priceValue, type) in types"
                  :key="type"
                  class="button is-light"
                  :class="{'is-selected': type == selectedType}"
                >{{ type }}</button>
              </dd>
            </dl>
            <dl class="option">
              <dt>단위 선택</dt>
              <dd>
                <button
                  @click="selectUnit"
                  v-for="(priceValue, unit) in units"
                  :key="unit"
                  :class="{'is-selected': unit == selectedUnit}"
                  class="button is-light"
                >{{ unit }}</button>
              </dd>
            </dl>
            <div class="quantity-wrapper">
              <div class="quantity">
                <input type="number" v-model="quantity">
                <span @click="quantity++">
                  <i class="fa fa-plus"></i>
                </span>
                <span @click="quantity > 0 ? quantity-- : false">
                  <i class="fa fa-minus"></i>
                </span>
              </div>
              <button @click="addSelection" class="filled-button">
                <i class="fas fa-shopping-basket"></i> 담기
              </button>
            </div>
          </div>

          <div class="selections">
            <div v-for="(s, id) in selections" :key="id" class="box selected-options">
              {{ s.type }}
              <i class="splitter"></i>
              <select :value="s.unit" @change="changeUnit($event, id)">
                <option v-for="(value, unit) in units" :key="value">{{ unit }}</option>
              </select>
              <i class="splitter"></i>
              <input type="number" :value="s.quantity" @input="changeQuantity($event, id)"> 개
              <strong>{{ formatPrice(s.price) }}원</strong>
              <span @click="removeSelection(id)">
                <i class="fa fa-window-close" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <hr>

          <div class="shop-buttons">
            <router-link tag="button"
            :to="{ name: 'order' }"
            class="filled-button">주문하기</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="product-description column"></div>
  </div>
</template>

<script>
import detail from '../data/detail';
import logics from '../data/logics';

export default {
  beforeRouteEnter(to, from, next) {
    if (!detail[to.params.key]) {
      next('/');
    } else {
      next();
    }
  },
  data() {
    const { key } = this.$route.params;
    return {
      key,
      ...detail[key],
      selectedType: '',
      selectedUnit: '',
      quantity: 1,
    };
  },
  computed: {
    priceString() {
      return logics.formatPrice(this.price);
    },
    priceForSaleString() {
      return logics.formatPrice(this.priceForSale);
    },
    priceSaleRate() {
      return (this.priceForSale / this.price).toFixed(2) * 100;
    },
    selections() {
      return this.$store.state.selections;
    },
  },
  methods: {
    formatPrice: logics.formatPrice,
    calculatePrice: logics.calculatePrice,
    selectType(event) {
      this.selectedType = event.target.innerText;
    },
    selectUnit(event) {
      this.selectedUnit = event.target.innerText;
    },
    addSelection() {
      if (this.selectedType === '' || this.selectedUnit === '') {
        alert('옵션을 선택해주세요');
        return;
      }

      this.$store.commit('addSelection', {
        name: this.name,
        unitPrice: this.priceForSale,
        type: this.selectedType,
        unit: this.selectedUnit,
        quantity: this.quantity,
        price: logics.calculatePrice(
          this.priceForSale,
          this.types[this.selectedType],
          this.units[this.selectedUnit],
          this.quantity,
        ),
        timestamp: Date.now(),
      });
      this.resetSelection();
    },
    removeSelection(timestamp) {
      this.$store.commit('removeSelection', timestamp);
    },
    resetSelection() {
      this.selectedUnit = '';
      this.selectedType = '';
      this.quantity = 1;
    },
    changeQuantity(event, id) {
      const s = this.selections[id];
      const quantity = event.target.value;
      const price = this.calculatePrice(
        s.unitPrice,
        this.types[s.type],
        this.units[s.unit],
        quantity,
      );
      this.$store.commit('changeQuantity', { id, quantity, price });
    },
    changeUnit(event, id) {
      const s = this.selections[id];
      const unit = event.target.value;
      const price = this.calculatePrice(
        s.unitPrice,
        this.types[s.type],
        this.units[unit],
        s.quantity,
      );
      this.$store.commit('changeUnit', { id, unit, price });
    },
  },
};
</script>


<style lang="scss" scoped>
.product-summary {
  @media only screen and (min-width: 1420px) {
    margin: 5% 20% auto 20%;
  }
  margin: 7% 3% auto 3%;

  .thumbnail {
    padding: 30px;
  }

  .preview-group {
    .preview {
      margin-top: 14px;
    }
  }
}

.product-description {
  div.content {
    .quantity-wrapper {
      margin: 7% auto;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: center;

      .quantity {
        display: inline-block;
        position: relative;
        width: 133px;
        height: 55px;
        border: 1px solid #ddd;

        input {
          width: 100%;
          height: 100%;
          text-align: center;
          font-size: 18px;
          border: 0;
          margin: 0;
        }

        svg {
          color: #444;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }

        .fa-plus {
          right: 0;
          margin-right: 6px;
        }

        .fa-minus {
          left: 0;
          margin-left: 6px;
        }
      }

      button {
        width: 120px;
        height: 100%;
        margin-left: 10px;

        .fa-shopping-basket {
          margin-right: 4px;
        }
      }
    }

    .option {
      margin-top: 3%;
      margin-bottom: 3%;

      button {
        &.is-selected {
          background-color: $mainColor;
          color: white;
        }
        margin-right: 5px;
      }
    }
  }

  .selected-options {
    border: 0;
    background-color: #eee;
    box-shadow: none;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    .splitter {
      margin: auto 3px;
    }

    input {
      width: 30px;
      text-align: center;
    }

    strong {
      margin-left: auto;
      margin-right: 12px;
    }

    svg {
      cursor: pointer;
    }
  }

  .shop-buttons {
    button {
      width: 150px;
      font-weight: 600;
      background: $mainColor;
      border-color: $mainColor;
    }
  }
}
</style>
