<template>
  <div>
    <div class="footer-edge"></div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p class="info">금초롱버섯농원
            <i class="splitter"></i> 대표 윤태웅
            <i class="splitter"></i> 경상북도 문경시 산양면 추암1길 65-2 소재
            <br>계좌번호 농협 745048-56-009118
            <wbr>
            <i class="splitter"></i> 전화번호 054-552-6958
            <br>
            <span class="tag">©
              <a href="https://github.com/greenmonn">Greenmonster</a>. All Rights Reserved.
            </span>
          </p>
          <p class="techstack">
            <a href>
              <i class="fab fa-vuejs"></i>
            </a>
            <a href>
              <i class="fab fa-sass"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.footer-edge {
  height: calc(10vw + 10vh);
}

footer {
  padding: 3%;
  position: absolute;
  bottom: 0;
  width: 100%;

  a {
    color: gray;
    &:hover {
      color: $mainColor;
    }
  }

  p {
  }

  .info {
    font-size: 0.85rem;
    margin: 0 auto 2%;

    .tag {
      margin-top: 2%;
    }
  }
}
</style>
