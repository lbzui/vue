<template>
  <main>
    <p class="lbz-typography--body1">Icon button</p>

    <p class="lbz-typography--body2">Default</p>
    <lbz-icon-button>favorite_border</lbz-icon-button>

    <p class="lbz-typography--body2">On background</p>
    <lbz-icon-button on-background="primary">favorite_border</lbz-icon-button>
    <lbz-icon-button on-background="secondary">favorite_border</lbz-icon-button>
    <lbz-icon-button on-background="surface">favorite_border</lbz-icon-button>

    <p class="lbz-typography--body2">Ripple</p>
    <lbz-icon-button>favorite_border</lbz-icon-button>
    <lbz-icon-button :ripple="false">favorite_border</lbz-icon-button>

    <p class="lbz-typography--body2">Disabled</p>
    <lbz-icon-button disabled>favorite_border</lbz-icon-button>

    <p class="lbz-typography--body2">SVG & Img</p>
    <lbz-icon-button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
    </lbz-icon-button>
    <lbz-icon-button>
      <img src="../../assets/img/logo.png">
    </lbz-icon-button>

    <p class="lbz-typography--body1">Toggle button</p>
    <lbz-icon-button
      :active.sync="isActive"
      toggle
      on-icon="favorite"
      off-icon="favorite_border"
    />
    <lbz-icon-button :active.sync="isActive" toggle>
      <template #on-icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      </template>
      <template #off-icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      </template>
    </lbz-icon-button>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class IconButton extends Vue {
  private isActive: boolean = false;
}
</script>
