/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selections: {},
    priceResult: 0,
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
    setPriceResult(state, price) {
      state.priceResult = price;
    },
    resetPriceResult(state) {
      state.priceResult = 0;
    }
  },
  actions: {

  },
});
