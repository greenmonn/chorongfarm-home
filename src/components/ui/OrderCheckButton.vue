<template>
  <div>
    <p>
      주문 내역을 확인하고 싶으신가요?
    </p>
    <router-link tag="button" :to="{ name: 'orderCheck'}" 
    class="button is-medium is-dark">주문 조회하기</router-link>
  </div>
</template>

<style lang="scss" scoped>
p {
  font-size: 1.2em;
  margin: 30px auto;
}

button {
  margin-bottom: 30px;
}
</style>
