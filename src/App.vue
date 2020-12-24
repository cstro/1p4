<template>
  <div class="max-w-6xl m-auto p-10 font-serif">

    <div class="flex mb-10">
      <RatioPanelInput
        label="base font size"
        name="baseSize"
        :initial="16"
        @change="value => baseSize = value"
      />

      <RatioPanelInput
        label="modular scale"
        name="baseSize"
        :initial="1.4"
        :step="0.1"
        @change="value => scale = value"
      />

      <RatioPanelInput
        label="line height"
        name="lineHeight"
        :initial="1.1"
        :step="0.1"
        @change="value => minLineHeight = value"
      />
    </div>

    <HeadingExample v-for="heading in headings" :key="heading.level" :data="heading"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { HeadingData } from '@/types';
import HeadingExample from '@/components/HeadingExample.vue';
import RatioPanelInput from '@/components/RatioPanelInput.vue';
import ms from '@/utils/ms';

@Component({
  components: {
    HeadingExample,
    RatioPanelInput,
  },
})
export default class App extends Vue {
  private baseSize = 16

  private scale = 1.4

  private minLineHeight = 1.1

  private maxLineHeight = 1.618

  get headings(): Array<HeadingData> {
    const numberOfHeadings = 6;
    const headings = [];

    for (let i = 1; i <= numberOfHeadings; i += 1) {
      const heading = {
        level: i,
        fontSize: ms(numberOfHeadings - i, this.baseSize, this.scale),
        lineHeight: this.minLineHeight,
        text: 'Some example text',
      };

      headings.push(heading);
    }

    return headings;
  }
}
</script>

<style lang="scss">
:root {
  --main-bg-color: #fc5c65;
  --main-text-color: #FFF;
}

html {
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
}
</style>
