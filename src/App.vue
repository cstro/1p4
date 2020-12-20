<template>
  <div id="app">

    <div>
      <label>Base font size</label>
      <input v-model="baseSize" type="number" />
    </div>

    <div>
      <label>Modular scale</label>
      <input v-model="scale" />
    </div>

    <div>
      <label>Vertical padding</label>
      <input v-model="verticalPadding" type="number" />
    </div>

    <HeadingExample v-for="heading in headings" :key="heading.level" :data="heading"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { HeadingData } from '@/types';
import HeadingExample from '@/components/HeadingExample.vue';
import ms from '@/utils/ms';

@Component({
  components: {
    HeadingExample,
  },
})
export default class App extends Vue {
  private baseSize = 16

  private scale = 1.4

  private minLineHeight = 1.1

  private maxLineHeight = 1.618

  private verticalPadding = 40

  get headings(): Array<HeadingData> {
    const numberOfHeadings = 6;
    const headings = [];

    for (let i = 1; i <= numberOfHeadings; i += 1) {
      const heading = {
        level: i,
        fontSize: ms(numberOfHeadings - i, this.baseSize, this.scale),
        lineHeight: this.minLineHeight,
        text: 'Some example text',
        verticalPadding: this.verticalPadding,
      };

      headings.push(heading);
    }

    return headings;
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
