<template>
  <div class="max-w-6xl m-auto p-10 font-serif">

    <button
      @click="cardMode = !cardMode"
      class="bg-gray-100 text-gray-700 px-4 py-2 mb-4"
    >
      {{ cardMode ? 'Show headings' : 'Show cards' }}
    </button>

    <div class="flex flex-col sm:flex-row mb-10">
      <RatioPanelInput
        label="base font size"
        name="baseSize"
        :value="baseSize"
        @change="updateBaseSize"
      />

      <RatioPanelInput
        label="modular scale"
        :value="scale"
        :step="0.1"
        @change="updateScale"
      />

      <RatioPanelInput
        label="line height"
        name="lineHeight"
        :value="lineHeight"
        :step="0.1"
        @change="updateLineHeight"
      />
    </div>
    <div v-if="cardMode">
      <DisplayCard :components="components" />
    </div>
    <HeadingExample
      v-else
      v-for="heading in headings"
      :key="heading.level"
      :data="heading"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DisplayCardElement, DisplayCardElementType, HeadingData } from '@/types';
import HeadingExample from '@/components/HeadingExample.vue';
import DisplayCard from '@/components/DisplayCard.vue';
import RatioPanelInput from '@/components/RatioPanelInput.vue';
import ms from '@/utils/ms';
import { namespace } from 'vuex-class';

const Ratio = namespace('Ratio');

@Component({
  components: {
    DisplayCard,
    HeadingExample,
    RatioPanelInput,
  },
})
export default class App extends Vue {
  @Ratio.State
  private baseSize!: number

  @Ratio.State
  private scale!: number

  @Ratio.State
  private lineHeight!: number

  private cardMode = false

  private components: Array<DisplayCardElement> = [
    {
      type: DisplayCardElementType.Eyebrow,
      content: 'Space',
      config: {
        headerLevel: 1,
      },
    },
    {
      type: DisplayCardElementType.Header,
      content: 'Radiation-Eating Fungus From Chernobyl Could Protect Future Astronauts',
      config: {
        headerLevel: 2,
      },
    },
    {
      type: DisplayCardElementType.Subheader,
      content: 'Outer layer of living quarters might be stuffed with fungus',
      config: {
        headerLevel: 4,
      },
    },
    {
      type: DisplayCardElementType.Caption,
      content: 'By Dr Alfredo Carpineti on 24 December, 2020',
      config: {
        headerLevel: 4,
      },
    },
    {
      type: DisplayCardElementType.Body,
      content: 'The magnetic field of our planet doesn’t just allow us to find North, it is also an invaluable shield against cosmic radiation. This protection cannot be taken for granted, and there are many concerns about how can we provide the same protection to astronauts on future deep-space missions. A potential answer comes from a peculiar source: fungi.',
      config: {
        headerLevel: 4,
      },
    },
  ]

  get headings(): Array<HeadingData> {
    const numberOfHeadings = 6;
    const headings = [];

    for (let i = 1; i <= numberOfHeadings; i += 1) {
      const heading = {
        level: i,
        fontSize: ms(numberOfHeadings - i, this.baseSize, this.scale),
        lineHeight: this.lineHeight,
        text: 'Some example text',
      };

      headings.push(heading);
    }

    return headings;
  }

  @Ratio.Action
  public updateBaseSize!: (newBaseSize: number) => void

  @Ratio.Action
  public updateScale!: (newScale: number) => void

  @Ratio.Action
  public updateLineHeight!: (newLineHeight: number) => void
}
</script>

<style lang="scss">
:root {
  --main-bg-color: #3867d6;
  --main-text-color: #FFF;
}

html {
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
}
</style>
