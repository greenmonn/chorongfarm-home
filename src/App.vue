<template>
    <div id="app">
        <app-nav-bar></app-nav-bar>

        <router-view></router-view>

        <app-footer></app-footer>
    </div>
</template>

<script>
import NavBar from './components/layout/NavBar.vue';
import Footer from './components/layout/Footer.vue';


export default {
  components: {
    appNavBar: NavBar,
    appFooter: Footer,
  },
  created() {

  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Muli");
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR");

body, html {
  height: 100%;
}

#app {
    position: relative;
    min-height: 100%;

    font-family: Muli, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    word-break: keep-all;

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
}
</style>
