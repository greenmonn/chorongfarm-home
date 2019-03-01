<template>
  <div>
    <section id="intro" class="section">
      <div class="container has-text-centered">
        <h2 class="title">금초롱버섯농원이
          <wbr>20년 동안 걸어온 길
        </h2>
        <p class="title-message">바른 먹거리를 길러내고자 하는 일념으로
          <wbr>올곧게 걸어왔습니다.
        </p>

        <div class="columns is-centered">
          <div class="column">
            <app-timeline></app-timeline>
          </div>
        </div>
        <p class="intro-message">금초롱버섯농원은 소비자들의 건강과 행복을 최우선으로 생각합니다.
          <br>미생물학을 전공하고 버섯종균기능사 자격을 보유한 농원주는 전문성을 바탕으로 기술혁신을 위해 끊임없이 노력하고 있습니다.
        </p>
        <h2 class="quote">
          <sup>
            <i class="fas fa-quote-left"></i>
          </sup> 안전하고 믿을 수 있는 먹거리로써
          <wbr>여러분 곁에 함께하고자 합니다.
          <sup>
            <i class="fas fa-quote-right"></i>
          </sup>
        </h2>
      </div>
    </section>
  </div>
</template>

<script>
import Timeline from './Timeline.vue';

export default {
  components: {
    appTimeline: Timeline,
  },
};
</script>

<style lang="scss" scoped>
h2,
.title-message {
  white-space: nowrap;
}

img {
  width: 40%;
  margin-bottom: 3%;
}

.intro-message {
  word-break: keep-all;
}

.quote {
  font-size: 1.4em;
  font-weight: 800;
  margin-top: 1em;
}
</style>
