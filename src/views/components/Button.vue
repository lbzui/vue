<template>
  <article class="lbzui-components-button">
    <h2 class="lbz-typography--h5"># Text button</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'text' (default), 'outlined', 'contained'</h3>
    <lbz-button>Text</lbz-button>
    <lbz-button icon="favorite">Text</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-button ripple>Ripple</lbz-button>
    <lbz-button :ripple="false" icon="favorite">Ripple off</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ full-width: true, false (default)</h3>
    <lbz-button full-width>Full-width</lbz-button>
    <lbz-button full-width icon="favorite">Full-width</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ dense: true, false (default)</h3>
    <lbz-button dense>Dense</lbz-button>
    <lbz-button dense icon="favorite">Dense</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>
    <lbz-button disabled>Disabled</lbz-button>
    <lbz-button disabled icon="favorite">Disabled</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ icon: '' (default), 'x'</h3>
    <lbz-button icon="favorite">Icon</lbz-button>
    <lbz-button>
      <template #icon>favorite</template>
      Icon
    </lbz-button>
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

    <h2 class="lbz-typography--h5"># Outlined button</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'text' (default), 'outlined', 'contained'</h3>
    <lbz-button type="outlined">Outlined</lbz-button>
    <lbz-button type="outlined" icon="favorite">Outlined</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-button type="outlined" ripple>Ripple</lbz-button>
    <lbz-button type="outlined" :ripple="false" icon="favorite">Ripple off</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ full-width: true, false (default)</h3>
    <lbz-button type="outlined" full-width>Full-width</lbz-button>
    <lbz-button type="outlined" full-width icon="favorite">Full-width</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ dense: true, false (default)</h3>
    <lbz-button type="outlined" dense>Dense</lbz-button>
    <lbz-button type="outlined" dense icon="favorite">Dense</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>
    <lbz-button type="outlined" disabled>Disabled</lbz-button>
    <lbz-button type="outlined" disabled icon="favorite">Disabled</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ icon: '' (default), 'x'</h3>
    <lbz-button type="outlined" icon="favorite">Icon</lbz-button>
    <lbz-button type="outlined">
      <template #icon>favorite</template>
      Icon
    </lbz-button>
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

    <h2 class="lbz-typography--h5"># Contained button</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'text' (default), 'outlined', 'contained'</h3>
    <lbz-button type="contained">Contained</lbz-button>
    <lbz-button type="contained" icon="favorite">Contained</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-button type="contained" ripple>Ripple</lbz-button>
    <lbz-button type="contained" :ripple="false" icon="favorite">Ripple off</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ full-width: true, false (default)</h3>
    <lbz-button type="contained" full-width>Full-width</lbz-button>
    <lbz-button type="contained" full-width icon="favorite">Full-width</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ dense: true, false (default)</h3>
    <lbz-button type="contained" dense>Dense</lbz-button>
    <lbz-button type="contained" dense icon="favorite">Dense</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ unelevated (type === 'contained'): true, false (default)</h3>
    <lbz-button type="contained" unelevated>Unelevated</lbz-button>
    <lbz-button type="contained" unelevated icon="favorite">Unelevated</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>
    <lbz-button type="contained" disabled>Disabled</lbz-button>
    <lbz-button type="contained" disabled icon="favorite">Disabled</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ icon: '' (default), 'x'</h3>
    <lbz-button type="contained" icon="favorite">Icon</lbz-button>
    <lbz-button type="contained">
      <template #icon>favorite</template>
      Icon
    </lbz-button>
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
  </article>
</template>
