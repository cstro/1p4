<template>
  <p :style="style" class="mb-4">{{ component.content }}</p>
</template>

<script lang="ts">
import { DisplayCardElement } from '@/types';
import ms from '@/utils/ms';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const Ratio = namespace('Ratio');

@Component
export default class DisplayCardBody extends Vue {
  @Prop() private component!: DisplayCardElement

  @Ratio.State
  private baseSize!: number

  @Ratio.State
  private lineHeight!: number

  get style(): object {
    return {
      fontSize: `${this.baseSize}px`,
      lineHeight: `${this.lineHeight}em`,
    };
  }
}
</script>
