<template>
  <main>
    <p class="lbz-typography--body1">Regular fab</p>
    <lbz-fab>add</lbz-fab>
    <lbz-fab background="primary">add</lbz-fab>
    <lbz-fab>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
    </lbz-fab>
    <lbz-fab>
      <img src="../../assets/img/logo.png">
    </lbz-fab>

    <p class="lbz-typography--body1">Mini fab</p>
    <lbz-fab type="mini">add</lbz-fab>
    <lbz-fab type="mini" background="primary">add</lbz-fab>
    <lbz-fab type="mini">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
    </lbz-fab>
    <lbz-fab type="mini">
      <img src="../../assets/img/logo.png">
    </lbz-fab>

    <p class="lbz-typography--body1">Extended fab</p>
    <lbz-fab type="extended" label="Create">add</lbz-fab>
    <lbz-fab type="extended" label="Create"/>
    <lbz-fab type="extended" background="primary" label="Create">add</lbz-fab>
    <lbz-fab type="extended" label="Create">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
    </lbz-fab>
    <lbz-fab type="extended" label="Create">
      <img src="../../assets/img/logo.png">
    </lbz-fab>
  </main>
</template>

<style lang="less">
.lbz-fab {
  position: relative;
  right: 0;
  bottom: 0;

  & + & {
    margin-left: 8px;
  }
}
</style>
