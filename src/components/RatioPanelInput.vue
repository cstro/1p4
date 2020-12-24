<template>
  <div class="flex flex-col px-8">
    <label class="text-sm mb-2">{{ label }}</label>
    <input
      :step="step"
      type="number"
      class="w-20 text-2xl text-white bg-transparent border-b border-gray-100 text-center"
      :value="value"
      @input="(event) => $emit('change', Number(event.target.value))"
    />
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';

@Component
export default class RatioPanelInput extends Vue {
  @Prop() private value!: number

  @Prop() private label!: string

  @Prop({ default: 1 }) private step!: number
}
</script>
