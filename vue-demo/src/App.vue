<template>
  <div id="app">
    <div class="wrapper">
      <spring-marquee>
        <span class="item">Stencil Marquee in a Vue project</span>
        <span class="item">Dah dah dah daaaaaah</span>
        <span class="item">Wooop wooop 💀</span>
      </spring-marquee>
    </div>
    <div class="wrapper">
      <spring-live-ticker subtitle="Yes indeed">
        Foo Bar Headline and all that!
      </spring-live-ticker>
    </div>
    <div class="wrapper">
      <spring-graphql token="" organisation="vuejs"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  padding: 3rem;
}

.wrapper {
  margin: 3rem 0;
}
</style>
