<template>
  <article class="lbzui-components-fab">
    <h2 class="lbz-typography--h5"># Standard FAB (floating action button)</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'mini', 'extended'</h3>
    <lbz-fab @click.stop="fclick">add</lbz-fab>
    <lbz-fab>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
    </lbz-fab>
    <lbz-fab>
      <img src="../../assets/img/logo.png">
    </lbz-fab>

    <h3 class="lbz-typography--subtitle1">$ tag: 'button' (default), 'a', 'x'</h3>
    <lbz-fab>add</lbz-fab>
    <lbz-fab tag="a" href="#/components/fab">add</lbz-fab>

    <h3 class="lbz-typography--subtitle1">$ background: 'primary', 'primary-variant', 'secondary' (default), 'surface', 'light', 'dark'</h3>
    <lbz-fab background="primary">add</lbz-fab>
    <lbz-fab background="primary-variant">add</lbz-fab>
    <lbz-fab>add</lbz-fab>
    <lbz-fab background="surface">add</lbz-fab>
    <lbz-fab background="light">add</lbz-fab>
    <lbz-fab background="dark">add</lbz-fab>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-fab>add</lbz-fab>
    <lbz-fab :ripple="false">add</lbz-fab>

    <h3 class="lbz-typography--subtitle1">$ inactive: true, false (default)</h3>
    <lbz-button @click.stop="ftoggleInactive()">{{ vinactive ? 'Active' : 'Inactive' }}</lbz-button>
    <lbz-fab :inactive="vinactive">add</lbz-fab>

    <h2 class="lbz-typography--h5"># Mini FAB</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'mini', 'extended'</h3>
    <lbz-fab type="mini">add</lbz-fab>
    <lbz-fab type="mini">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
    </lbz-fab>
    <lbz-fab type="mini">
      <img src="../../assets/img/logo.png">
    </lbz-fab>

    <h3 class="lbz-typography--subtitle1">$ tag: 'button' (default), 'a', 'x'</h3>
    <lbz-fab type="mini">add</lbz-fab>
    <lbz-fab type="mini" tag="a" href="#/components/fab">add</lbz-fab>

    <h3 class="lbz-typography--subtitle1">$ background: 'primary', 'primary-variant', 'secondary' (default), 'surface', 'light', 'dark'</h3>
    <lbz-fab type="mini" background="primary">add</lbz-fab>
    <lbz-fab type="mini" background="primary-variant">add</lbz-fab>
    <lbz-fab type="mini">add</lbz-fab>
    <lbz-fab type="mini" background="surface">add</lbz-fab>
    <lbz-fab type="mini" background="light">add</lbz-fab>
    <lbz-fab type="mini" background="dark">add</lbz-fab>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-fab type="mini">add</lbz-fab>
    <lbz-fab type="mini" :ripple="false">add</lbz-fab>

    <h3 class="lbz-typography--subtitle1">$ inactive: true, false (default)</h3>
    <lbz-button @click.stop="ftoggleInactive()">{{ vinactive ? 'Active' : 'Inactive' }}</lbz-button>
    <lbz-fab type="mini" :inactive="vinactive">add</lbz-fab>

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

    <h3 class="lbz-typography--subtitle1">$ tag: 'button' (default), 'a', 'x'</h3>
    <lbz-fab type="extended" label="Create"/>
    <lbz-fab type="extended" tag="a" href="#/components/fab" label="Create"/>

    <h3 class="lbz-typography--subtitle1">$ background: 'primary', 'primary-variant', 'secondary' (default), 'surface', 'light', 'dark'</h3>
    <lbz-fab type="extended" background="primary" label="Create"/>
    <lbz-fab type="extended" background="primary-variant" label="Create"/>
    <lbz-fab type="extended" label="Create"/>
    <lbz-fab type="extended" background="surface" label="Create"/>
    <lbz-fab type="extended" background="light" label="Create"/>
    <lbz-fab type="extended" background="dark" label="Create"/>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-fab type="extended" label="Create"/>
    <lbz-fab type="extended" :ripple="false" label="Create"/>

    <h3 class="lbz-typography--subtitle1">$ inactive: true, false (default)</h3>
    <lbz-button @click.stop="ftoggleInactive()">{{ vinactive ? 'Active' : 'Inactive' }}</lbz-button>
    <lbz-fab type="extended" :inactive="vinactive" label="Create"/>
    <lbz-fab type="extended" :inactive="vinactive" label="Create">add</lbz-fab>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FAB extends Vue {
  private vinactive: boolean = false;

  private fclick(e: MouseEvent) {
    alert(e);
  }

  private ftoggleInactive() {
    this.vinactive = !this.vinactive;
  }
}
</script>

<style lang="less">
.lbzui-components-fab {
  .lbz-fab {
    position: relative;
    right: 0;
    bottom: 0;
    margin-right: 16px;
  }
}
</style>
