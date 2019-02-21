<template>
  <section id="map" class="section">
    <div class="container has-text-centered">
      <h2 class="title">찾아오시는 길</h2>
      <p>경상북도 문경시 산양면 추암1길 65-2
        <wbr>(존도리 507번지)
      </p>
      <div class="map" :id="mapName"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['name'],
  data() {
    return {
      mapName: `${this.name}-map`,
    };
  },
  mounted() {
    const container = document.getElementById(this.mapName);
    const options = {
      zoom: 8,
      center: new daum.maps.LatLng(36.617087, 128.242805),
    };

    const map = new daum.maps.Map(container, options);

    const marker = new daum.maps.Marker({
      map,
      position: new daum.maps.LatLng(36.617087, 128.242805),
    });
  },
};
</script>

<style scoped>
p {
  margin-bottom: 2%;
  white-space: nowrap;
}
.map {
  width: 60vw;
  height: 48vw;
  margin: 40px auto;
  background: gray;
}
</style>
