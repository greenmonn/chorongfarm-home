<template>
  <div>
    <div class="box" v-for="(item, id) in orderList" :key="id">
      <p>
        <strong>{{ item.name }}</strong>
        ({{ item.type }})
      </p>
      단위: {{ item.unit }}
      <i class="splitter"></i>
      수량: {{ item.quantity }}개
      <i class="splitter"></i>
      가격:
      <strong>{{ formatPrice(item.price) }}</strong>원
    </div>
  </div>
</template>

<script>
import logics from '../../data/logics';

export default {
  props: ['orderList'],
  methods: {
    formatPrice: logics.formatPrice,
  },
};
</script>
