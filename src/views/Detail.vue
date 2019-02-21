<template>
  <div>
    <div class="product-summary columns">
      <div class="thumbnail column is-5">
        <div>
          <img src="../assets/sanghwang.jpg" alt="상황버섯">
        </div>
        <div class="preview-group columns is-mobile">
          <div class="preview column is-4">
            <img src="../assets/sanghwang.jpg" alt="1">
          </div>
          <div class="preview column is-4">
            <img src="../assets/sanghwang2.jpg" alt="1">
          </div>
          <div class="preview column is-4">
            <img src="../assets/mushroom_box.png" alt="1">
          </div>
        </div>
      </div>

      <div class="product-description column">
        <div>
          <p class="content-title">유기농 상황버섯</p>
          <hr>
          <div class="content">
            <dl>
              <dt>판매가</dt>
              <dd>
                <strong>{{ priceString }}원</strong>
              </dd>
            </dl>
            <dl>
              <dt>할인판매가</dt>
              <dd>
                <strong>39,900원 [53%]</strong>
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
              <button @click="addSelectedOptions" class="filled-button">
                <i class="fas fa-shopping-basket"></i> 담기
              </button>
            </div>
          </div>

          <div class="selected-options-list">
            <div
              v-for="selectedOptions in selectedOptionsList"
              :key="selectedOptions.timestamp"
              class="box selected-options"
            >
              {{ selectedOptions.type }}
              <i class="splitter"></i>
              <select>
                <option value="100g">{{ selectedOptions.unit }}</option>
              </select>
              <i class="splitter"></i>
              <input type="number" :value="selectedOptions.quantity"> 개
              <strong>{{ formatPrice(selectedOptions.price) }}원</strong>
              <span @click="removeSelectedOptions(selectedOptions.timestamp)">
                <i class="fa fa-window-close" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <hr>

          <div class="shop-buttons">
            <button class="filled-button">주문하기</button>
          </div>
        </div>
      </div>
    </div>

    <div class="product-description column"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 85000,
      priceForSale: 39900,
      from: "한국 (경상북도 문경시)",
      types: {
        생버섯: 0,
        건조버섯: 5000
      },
      selectedType: "",
      units: {
        "100g": 1,
        "500g": 5,
        "1kg": 10
      },
      selectedUnit: "",
      quantity: 1,
      selectedOptionsList: []
    };
  },
  computed: {
    priceString: function() {
      return this.formatPrice(this.price);
    },
    priceForSaleString: function() {
      return this.formatPrice(this.priceForSale);
    }
  },
  methods: {
    selectType: function(event) {
      this.selectedType = event.target.innerText;
    },
    selectUnit: function(event) {
      this.selectedUnit = event.target.innerText;
    },
    addSelectedOptions: function() {
      if (this.selectedType == "" || this.selectedUnit == "") {
        alert("옵션을 선택해주세요");
        return;
      }
      const selectedOptions = {
        type: this.selectedType,
        unit: this.selectedUnit,
        quantity: this.quantity,
        price:
          (this.priceForSale + this.types[this.selectedType]) *
          this.units[this.selectedUnit] *
          this.quantity,
        timestamp: Date.now()
      };

      this.selectedOptionsList.unshift(selectedOptions);
      this.resetSelectedOptions();
    },
    removeSelectedOptions: function(timestamp) {
      for (var i=0; i<this.selectedOptionsList.length; i++) {
        if (this.selectedOptionsList[i].timestamp = timestamp) {
          this.selectedOptionsList.splice(i, 1)
          return
        }
      }
    },
    resetSelectedOptions: function() {
      this.selectedUnit = '',
      this.selectedType = '',
      this.quantity = 1;
    },
    formatPrice: function(priceNumber) {
      const converted = Array.from(priceNumber.toString());
      var i = 1;
      while (true) {
        if (converted.length - 4 * i < 0) {
          break;
        }
        converted.splice(converted.length - 4 * i + 1, 0, ",");
        i++;
      }

      return converted.join("");
    }
  }
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
