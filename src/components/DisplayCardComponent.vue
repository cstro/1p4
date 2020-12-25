<template>
  <div class="relative" v-click-outside="hideModal">
    <div
      ref="wrapper"
      :style="style"
      class="mb-4"
      :class="isEditing && 'underline-dotted'"
      :contenteditable="isEditing"
      @click="showModal"
      tabIndex="0"
    >
      {{ component.content }}
    </div>
    <div
      v-if="isEditing"
      class="
        absolute left-0 right-0 bg-gray-500 text-white px-6 py-8 rounded-md
        max-w-sm mx-auto z-10
      "
    >
      <div class="mb-4">
        <span class="text-xl">{{ type }}</span>
      </div>
      <div>
        font size level
        <div class="border border-white flex justify-between my-2 rounded-md text-lg">
          <button @click="updateSize(1)" :class="buttonStyle(1)">
            1
          </button>
          <button @click="updateSize(2)" :class="buttonStyle(2)">
            2
          </button>
          <button @click="updateSize(3)" :class="buttonStyle(3)">
            3
          </button>
          <button @click="updateSize(4)" :class="buttonStyle(4)">
            4
          </button>
          <button @click="updateSize(5)" :class="buttonStyle(5)">
            5
          </button>
          <button @click="updateSize(6)" :class="buttonStyle(6)">
            6
          </button>
          <button @click="updateSize(7)" :class="buttonStyle(7)">
            7
          </button>
          <button @click="updateSize(8)" :class="buttonStyle(8)">
            8
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { DisplayCardElement, FontSizeLevel, FontSizeLevels } from '@/types';
import ms from '@/utils/ms';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const Ratio = namespace('Ratio');

@Component
export default class DisplayCardComponent extends Vue {
  @Prop() private component!: DisplayCardElement

  @Prop() private type!: FontSizeLevel

  @Ratio.State
  private baseSize!: number

  @Ratio.State
  private scale!: number

  @Ratio.State
  private lineHeight!: number

  @Ratio.State
  private fontSizeLevels!: FontSizeLevels

  private isEditing = false

  get style(): object {
    // 5 is 6 - 1 (total headers - 1) as it's a 0 based index
    // TODO: Refactor header count into Vuex and make it configurable
    const fontSize = ms(this.fontSizeLevel - 2, this.baseSize, this.scale);

    return {
      fontSize: `${fontSize}px`,
      lineHeight: `${this.lineHeight}em`,
    };
  }

  private buttonStyle(level: number): string {
    const base = 'flex-1 text-center py-1 px-2 rounded-sm hover:bg-white hover:text-gray-900';
    const active = level === this.fontSizeLevel;

    return active ? `${base} bg-white text-gray-900` : base;
  }

  get fontSizeLevel(): number {
    return this.fontSizeLevels[this.type];
  }

  private showModal() {
    this.isEditing = true;
  }

  private hideModal() {
    this.isEditing = false;
  }

  @Ratio.Action
  private updateFontSizeLevel!:
    ({ type, newLevel }: { type: FontSizeLevel; newLevel: number }) => void

  private updateSize(newLevel: number) {
    console.log(newLevel);
    return this.updateFontSizeLevel({ type: this.type, newLevel });
  }
}
</script>

<style lang="scss" scoped>
.underline-dotted {
  text-decoration: underline;
  text-decoration-style: dotted;
  text-decoration-color: #7CFFFF;
  text-decoration-thickness: 2px;
  background-color: rgba(255, 255, 255, 0.2);

  &:focus {
    outline: none;
  }
}
</style>
