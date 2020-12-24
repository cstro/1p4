<template>
  <div class="flex py-8 border-t border-opacity-40 border-white">
    <div class="flex-none">
      Lv. {{ data.level }}
    </div>
    <component :is="`h${data.level}`" :style="style" class="flex-1 mx-4 leading-none">
      {{ data.text }}
    </component>
    <div class="flex-none w-52">
      <div class="grid grid-cols-2">
        <div class="pr-4 pb-2 border-white border-opacity-40 border-r border-b">
          <div class="text-sm">font</div>
          <span class="text-xl">{{ data.fontSize }}</span>px
        </div>
        <div class="pl-4 pb-2 border-white border-opacity-40 border-b">
          <div class="text-sm" >font (scale)</div>
          <span class="text-xl">???</span>
        </div>
        <div class="pr-4 pt-2 border-white border-opacity-40 border-r">
          <div class="text-sm" >line height</div>
          <span class="text-xl">{{ data.lineHeight }}</span>em
        </div>
        <div class="pl-4 pt-2">
          <div class="text-sm" >line height</div>
          <span class="text-xl">{{ pixelLineHeight }}</span>px
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { HeadingData } from '@/types';
import round from '@/utils/round';

interface HeadingStyle {
  fontSize: string;
  lineHeight: string;
}

@Component
export default class HelloWorld extends Vue {
  @Prop() private data!: HeadingData;

  get style(): HeadingStyle {
    const { fontSize, lineHeight } = this.data;

    return {
      fontSize: `${fontSize}px`,
      lineHeight: `${lineHeight}em`,
    };
  }

  get pixelLineHeight(): number {
    const { fontSize, lineHeight } = this.data;
    return round(fontSize * lineHeight, 3);
  }
}
</script>
