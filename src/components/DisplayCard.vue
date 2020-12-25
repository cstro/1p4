<template>
  <div class="border border-white border-opacity-40 rounded-md p-8 max-w-prose">
    <display-card-component
      v-for="(component, index) in components"
      :key="index"
      :component="component"
      :type="component.type"
    />
  </div>
</template>

<script lang="ts">
import { DisplayCardElement } from '@/types';
import { Component, Prop, Vue } from 'vue-property-decorator';
import DisplayCardComponent from '@/components/DisplayCardComponent.vue';

@Component({
  components: {
    DisplayCardComponent,
  },
})
export default class DisplayCard extends Vue {
  @Prop() private components!: Array<DisplayCardElement>
}
</script>
