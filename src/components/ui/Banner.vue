<template>
  <section class="hero">
    <figure class="image">
      <div>최상의 품종, 최상의 환경에서 길러낸 버섯으로
        <br>여러분의 건강을 생각합니다.
      </div>
      <img class="show-on-pc" src="../../assets/working_house.jpg">
      <img class="show-on-mobile" src="../../assets/working_house_small.jpg">
    </figure>
  </section>
</template>

<style lang="scss" scoped>
figure {
  height: 500px;
  overflow: hidden;
  position: relative;

  div {
    position: absolute;
    top: 200px;
    width: 100%;

    padding-left: 30px;
    padding-right: 30px;

    font-weight: 800;
    font-size: 1.8rem;
    color: white;
  }

  @media (max-width: 632px) {
    height: 200px;

    div {
      display: none;
    }

    img {

    }
  }

  @media (max-width: 768px) {
    height: 300px;

    div {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    height: 300px;
    div {
      position: absolute;
      top: 120px;
      font-size: 1.4rem;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
</style>
