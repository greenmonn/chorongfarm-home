<template>
  <section class="hero">
    <figure class="image">
      <div>최상의 품종, 최상의 환경에서 길러낸 버섯으로 <br> 여러분의 건강을 생각합니다.</div>
      <img src="../../assets/mushroom_basket.jpg">
    </figure>
  </section>
</template>

<style lang="scss" scoped>
figure {
    @media (max-width: 632px) {
        height: 200px;
        div {
            display: none;
        }
    }
  height: 400px;
  overflow: hidden;
  position: relative;

  div {
      position: absolute;
      top: 200px;
      width: 100%;

      padding-left: 30px;
      padding-right: 30px;

      font-weight: 800;
      font-size: 1.5rem;
      color: white;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
</style>
