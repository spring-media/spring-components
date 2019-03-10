<template>
  <div id="app">
    <h1>Vue Spring Components Demo</h1>

    <div class="wrapper">
      <spring-video source="https://www.sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4"></spring-video>
    </div>
    
    <div class="wrapper">
      <spring-marquee>
        <span class="item">Web Components</span>
        <span class="item">React</span>
        <span class="item">Vue</span>
      </spring-marquee>
    </div>

    <div class="wrapper">
      <spring-live-ticker subtitle="Hooray for StencilJS">
        Web Components are useful
      </spring-live-ticker>
    </div>

    <div class="wrapper">
      <spring-graphql country-code="DE" />
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
