/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selections: {},
    priceResult: 0,
    orderName: '',
    orderPhoneNumber: '',
  },
  getters: {
    getPriceSum(state) {
      let sum = 0;
      const selections = state.selections;

      for (let key in selections) {
        sum += selections[key].price;
      }
      return sum;
    },
    getPriceResult(state) {
      return state.priceResult;
    },
    getOrderName(state) {
      return state.orderName;
    },
    getOrderPhoneNumber(state) {
      return state.orderPhoneNumber;
    },
  },
  mutations: {
    addSelection(state, selection) {
      const id = selection.timestamp;
      state.selections = { ...state.selections, [id]: selection }
    },
    removeSelection(state, id) {
      delete state.selections[id];
      state.selections = { ...state.selections };
    },
    changeQuantity(state, to) {
      const selection = { ...state.selections[to.id], quantity: to.quantity, price: to.price };

      state.selections = { ...state.selections, [to.id]: selection }
    },
    changeUnit(state, to) {
      const selection = { ...state.selections[to.id], unit: to.unit, price: to.price };

      state.selections = { ...state.selections, [to.id]: selection }
    },
    resetSelections(state) {
      state.selections = {};
    },
    setOrderResult(state, result) {
      state.priceResult = result.price;
      state.orderName = result.name;
      state.orderPhoneNumber = result.phoneNumber;
    },
    resetOrderResult(state) {
      state.priceResult = 0;
      state.orderName = '';
      state.orderPhoneNumber = '';
    }
  },
  actions: {

  },
});
