<template>
  <div class="flex flex-col px-8">
    <label class="text-sm mb-2">{{ label }}</label>
    <input
      :step="step"
      class="w-20 text-2xl text-white bg-transparent border-b border-gray-100 text-center"
      v-model="value"
      type="number"
    />
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';

@Component
export default class RatioPanelInput extends Vue {
  @Prop() private initial!: number

  @Prop() private label!: string

  @Prop({ default: 1 }) private step!: number

  private value = 0

  created() {
    this.value = this.initial;
  }

  @Watch('value')
  onValueChanged(value: number) {
    this.$emit('change', value);
  }
}
</script>
