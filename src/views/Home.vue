<template>
    <div>
        <app-banner></app-banner>
        <app-intro></app-intro>

        <hr>

        <app-products></app-products>

        <app-order-check-button></app-order-check-button>

        <hr>

        <app-map name="location"></app-map>

        <hr>

        <app-contact></app-contact>
    </div>
</template>

<script>
import Banner from '../components/ui/Banner.vue';
import Intro from '../components/ui/Intro.vue';
import Contact from '../components/ui/Contact.vue';
import Map from '../components/ui/Map.vue';
import Products from '../components/ui/Products.vue';
import OrderCheckButton from '../components/ui/OrderCheckButton.vue';

export default {
  components: {
    appBanner: Banner,
    appIntro: Intro,
    appContact: Contact,
    appMap: Map,
    appProducts: Products,
    appOrderCheckButton: OrderCheckButton,
  },
};
</script>

<style>
</style>
