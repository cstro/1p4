<template>
  <div>
    <h2 class="uppercase mb-4" :style="style">{{ component.content }}</h2>
  </div>
</template>

<script lang="ts">
import { DisplayCardElement } from '@/types';
import ms from '@/utils/ms';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const Ratio = namespace('Ratio');

@Component
export default class DisplayCardEyebrow extends Vue {
  @Prop() private component!: DisplayCardElement

  @Ratio.State
  private baseSize!: number

  @Ratio.State
  private scale!: number

  get style(): object {
    const fontSize = ms(-1, this.baseSize, this.scale);

    return {
      fontSize: `${fontSize}px`,
      lineHeight: '1em',
    };
  }
}
</script>
