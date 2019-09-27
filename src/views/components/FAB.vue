<template>
  <article>
    <h2 class="lbz-typography--h5"># Standard FAB (floating action button)</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'mini', 'extended'</h3>
    <lbz-fab>add</lbz-fab>
    <lbz-fab>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
    </lbz-fab>
    <lbz-fab>
      <img src="../../assets/img/logo.png">
    </lbz-fab>

    <h3 class="lbz-typography--subtitle1">$ background: 'primary', 'primary-variant', 'secondary' (default)</h3>
    <lbz-fab background="primary">add</lbz-fab>
    <lbz-fab background="primary-variant">add</lbz-fab>
    <lbz-fab background="secondary">add</lbz-fab>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-fab ripple>add</lbz-fab>
    <lbz-fab :ripple="false">add</lbz-fab>

    <h3 class="lbz-typography--subtitle1">$ exited: true, false (default)</h3>
    <lbz-button @click.stop="ftoggleExited()">Exited</lbz-button>
    <lbz-fab :exited="isExited">add</lbz-fab>

    <h2 class="lbz-typography--h5"># Mini FAB</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'mini', 'extended'</h3>
    <lbz-fab type="mini">add</lbz-fab>
    <lbz-fab type="mini">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
    </lbz-fab>
    <lbz-fab type="mini">
      <img src="../../assets/img/logo.png">
    </lbz-fab>

    <h3 class="lbz-typography--subtitle1">$ background: 'primary', 'primary-variant', 'secondary' (default)</h3>
    <lbz-fab type="mini" background="primary">add</lbz-fab>
    <lbz-fab type="mini" background="primary-variant">add</lbz-fab>
    <lbz-fab type="mini" background="secondary">add</lbz-fab>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-fab type="mini" ripple>add</lbz-fab>
    <lbz-fab type="mini" :ripple="false">add</lbz-fab>

    <h3 class="lbz-typography--subtitle1">$ exited: true, false (default)</h3>
    <lbz-button @click.stop="ftoggleExited()">Exited</lbz-button>
    <lbz-fab type="mini" :exited="isExited">add</lbz-fab>

    <h2 class="lbz-typography--h5"># Extended FAB</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'mini', 'extended'</h3>
    <h3 class="lbz-typography--subtitle1">$ label (type === 'extended'): '' (default), 'x'</h3>
    <lbz-fab type="extended" label="Create"/>
    <lbz-fab type="extended" label="Create">add</lbz-fab>
    <lbz-fab type="extended" label="Create">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
    </lbz-fab>
    <lbz-fab type="extended" label="Create">
      <img src="../../assets/img/logo.png">
    </lbz-fab>

    <h3 class="lbz-typography--subtitle1">$ background: 'primary', 'primary-variant', 'secondary' (default)</h3>
    <lbz-fab type="extended" background="primary" label="Create"/>
    <lbz-fab type="extended" background="primary-variant" label="Create"/>
    <lbz-fab type="extended" background="secondary" label="Create"/>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-fab type="extended" ripple label="Create"/>
    <lbz-fab type="extended" :ripple="false" label="Create"/>

    <h3 class="lbz-typography--subtitle1">$ exited: true, false (default)</h3>
    <lbz-button @click.stop="ftoggleExited()">Exited</lbz-button>
    <lbz-fab type="extended" :exited="isExited" label="Create"/>
    <lbz-fab type="extended" :exited="isExited" label="Create">add</lbz-fab>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Fab extends Vue {
  private isExited: boolean = false;

  private ftoggleExited() {
    this.isExited = !this.isExited;
  }
}
</script>
