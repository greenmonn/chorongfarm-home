<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item logo" href="/">
          <img src="../../assets/logo.png"> 금초롱버섯농원
        </a>
        <div :class="{'is-active': showMenu}" class="navbar-burger burger" @click="showMenu = !showMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div :class="{'is-active': showMenu}" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="/#intro">걸어온 길</a>
          <a class="navbar-item" href="/#products">구입하기</a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">더보기</a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="/#contact">문의하기</a>
              <a class="navbar-item" href="/#map">찾아오시는길</a>
            </div>
          </div>
          <div class="navbar-item">
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="검색 기능 준비중이에요 :)">
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="scss" scoped>

a.navbar-item.logo {
  margin-left: 2px;

  img {
    margin-right: 5px;
  }
  font-weight: 900;
  font-size: 1.2rem;
}

a.navbar-item, a.navbar-link{
  &:hover {
    color: $mainColor;
  }

  &:after {
    border-color: $mainColor;
  }
  margin-left: 10px;
  font-weight: 500;
  text-align: left;
}

</style>
