<template>
  <div>
    <component :is="`h${data.level}`" :style="style" class="heading-reset">
      {{ data.text }}
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { HeadingData } from '@/types';

interface HeadingStyle {
  fontSize: string;
  lineHeight: number;
  margin: string;
}

@Component
export default class HelloWorld extends Vue {
  @Prop() private data!: HeadingData;

  get style(): HeadingStyle {
    const { fontSize, lineHeight, verticalPadding } = this.data;

    return {
      fontSize: `${fontSize}px`,
      lineHeight,
      margin: `${verticalPadding}px 0`,
    };
  }
}
</script>
