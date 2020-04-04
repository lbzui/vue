<template>
  <article class="lbzui-components-snackbar">
    <h2 class="lbz-typography--h5"># Snackbar</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]label: 'x'</h3>

    <lbz-button @click.stop="fclick('label')">Snackbar</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ duration (Number): 4000-10000 (ms), 5000 (default)</h3>

    <lbz-button @click.stop="fclick('duration')">Duration (8000ms)</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ duration (Object): { duration: 4000-10000 (ms) || 5000 (default), class: '' (default) || 'x', align (desktop and tablet only): 'start' || 'center' (default), stacked (action): true || false (default), actionLabel (action): '' (default) || 'x', actionClick (action): undefined (default) || () => void }</h3>

    <lbz-button @click.stop="fclick('align')">Align (start)</lbz-button>
    <lbz-button @click.stop="fclick('action')">actionLabel & actionClick</lbz-button>
    <lbz-button @click.stop="fclick('stacked')">Stacked</lbz-button>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsSnackbar extends Vue {
  private fclick(type: string): void {
    switch (type) {
      case 'label':
        this.$lbzSnackbar('Single-line message.');
        break;
      case 'duration':
        this.$lbzSnackbar('Single-line message.', 8000);
        break;
      case 'align':
        this.$lbzSnackbar('Single-line message.', { align: 'start' });
        break;
      case 'action':
        this.$lbzSnackbar('Single-line message.', {
          actionLabel: 'Action',
          actionClick: (): void => {
            console.log('Clicked action');
          },
        });
        break;
      case 'stacked':
        this.$lbzSnackbar('Two-line message with action.', {
          stacked: true,
          actionLabel: 'Longer action text',
          actionClick: (): void => {
            console.log('Clicked stacked');
          },
        });
        break;

      default:
        this.$lbzSnackbar('Single-line message.');
        break;
    }
  }
}
</script>
