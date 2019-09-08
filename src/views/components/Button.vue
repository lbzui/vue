<template>
  <main>
    <p class="lbz-typography--body1">Text Button</p>
    <lbz-button>Default</lbz-button>
    <lbz-button dense>Dense</lbz-button>
    <lbz-button :ripple="false">No ripple</lbz-button>
    <lbz-button disabled>Disabled</lbz-button>
    <lbz-button icon="favorite">Icon</lbz-button>
    <lbz-button disabled icon="favorite">Disabled</lbz-button>
    <lbz-button>
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
      </template>
      SVG
    </lbz-button>
    <lbz-button>
      <template #icon>
        <img src="../../assets/img/logo.png">
      </template>
      Img
    </lbz-button>

    <p class="lbz-typography--body1">Outlined Button</p>
    <lbz-button type="outlined">Default</lbz-button>
    <lbz-button type="outlined" dense>Dense</lbz-button>
    <lbz-button type="outlined" :ripple="false">No ripple</lbz-button>
    <lbz-button type="outlined" disabled>Disabled</lbz-button>
    <lbz-button type="outlined" icon="favorite">Icon</lbz-button>
    <lbz-button type="outlined" disabled icon="favorite">Disabled</lbz-button>
    <lbz-button type="outlined">
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
      </template>
      SVG
    </lbz-button>
    <lbz-button type="outlined">
      <template #icon>
        <img src="../../assets/img/logo.png">
      </template>
      Img
    </lbz-button>

    <p class="lbz-typography--body1">Contained Button</p>
    <lbz-button type="contained">Default</lbz-button>
    <lbz-button type="contained" dense>Dense</lbz-button>
    <lbz-button type="contained" unelevated>Unelevated</lbz-button>
    <lbz-button type="contained" :ripple="false">No ripple</lbz-button>
    <lbz-button type="contained" disabled>Disabled</lbz-button>
    <lbz-button type="contained" icon="favorite">Icon</lbz-button>
    <lbz-button type="contained" disabled icon="favorite">Disabled</lbz-button>
    <lbz-button type="contained">
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
      </template>
      SVG
    </lbz-button>
    <lbz-button type="contained">
      <template #icon>
        <img src="../../assets/img/logo.png">
      </template>
      Img
    </lbz-button>
  </main>
</template>
