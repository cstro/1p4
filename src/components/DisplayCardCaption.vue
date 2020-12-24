<template>
  <div :style="style" class="mb-4 uppercase">{{ component.content }}</div>
</template>

<script lang="ts">
import { DisplayCardElement } from '@/types';
import ms from '@/utils/ms';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const Ratio = namespace('Ratio');

@Component
export default class DisplayCardCaption extends Vue {
  @Prop() private component!: DisplayCardElement

  @Ratio.State
  private baseSize!: number

  @Ratio.State
  private scale!: number

  @Ratio.State
  private lineHeight!: number

  get style(): object {
    // 5 is 6 - 1 (total headers - 1) as it's a 0 based index
    // TODO: Refactor header count into Vuex and make it configurable
    const fontSize = ms(-1, this.baseSize, this.scale);

    return {
      fontSize: `${fontSize}px`,
      lineHeight: `${this.lineHeight}em`,
    };
  }
}
</script>
