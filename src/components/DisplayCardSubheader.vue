<template>
  <div>
    <h1 :style="style" class="mb-4">{{ component.content }}</h1>
  </div>
</template>

<script lang="ts">
import { DisplayCardElement } from '@/types';
import ms from '@/utils/ms';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const Ratio = namespace('Ratio');

@Component
export default class DisplayCardSubheader extends Vue {
  @Prop() private component!: DisplayCardElement

  @Ratio.State
  private baseSize!: number

  @Ratio.State
  private scale!: number

  get style(): object {
    const fontSize = ms(5 - this.component.config.headerLevel, this.baseSize, this.scale);

    return {
      fontSize: `${fontSize}px`,
      lineHeight: '1.1em',
    };
  }
}
</script>
