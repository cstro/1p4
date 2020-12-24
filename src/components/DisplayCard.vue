<template>
  <div class="border border-white border-opacity-40 rounded-md p-4 max-w-prose">
    <component
      v-for="(component, index) in components"
      :key="index"
      :is="component.type"
      :component="component"
    />
  </div>
</template>

<script lang="ts">
import { DisplayCardElement } from '@/types';
import { Component, Prop, Vue } from 'vue-property-decorator';
import DisplayCardHeader from '@/components/DisplayCardHeader.vue';
import DisplayCardEyebrow from '@/components/DisplayCardEyebrow.vue';
import DisplayCardSubheader from '@/components/DisplayCardSubheader.vue';
import DisplayCardCaption from '@/components/DisplayCardCaption.vue';
import DisplayCardBody from '@/components/DisplayCardBody.vue';

@Component({
  components: {
    DisplayCardHeader,
    DisplayCardEyebrow,
    DisplayCardSubheader,
    DisplayCardCaption,
    DisplayCardBody,
  },
})
export default class DisplayCard extends Vue {
  @Prop() private components!: Array<DisplayCardElement>
}
</script>
