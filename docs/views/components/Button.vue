<template>
  <article class="lbzui-components-button">
    <h2 class="lbz-typography--h5"># Text button</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'text' (default), 'outlined', 'contained'</h3>

    <lbz-button @click.stop="fclick">Text</lbz-button>
    <lbz-button icon="add">Text</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ router-link: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ router-link-props (router-link): { to: '' (default) || 'x' || { x: y }, replace: true || false (default), append: true || false (default), exact: true || false (default), event: 'click' (default) || 'x' || ['x'] }</h3>
    <h3 class="lbz-typography--subtitle1">$ tag: 'button' (default), 'a', 'x'</h3>

    <lbz-button
      router-link
      :router-link-props="{
        to: '/components/button',
        replace: true,
        exact: true,
        event: 'dblclick'
      }"
      tag="a"
    >Router-link</lbz-button>
    <lbz-button
      tag="a"
      href="#/components/button"
      icon="add"
    >Non-router-link</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ color: 'primary' (default), 'secondary', 'background', 'surface', 'error', 'light', 'dark'</h3>

    <lbz-button>Primary</lbz-button>
    <lbz-button icon="add">Primary</lbz-button>
    <br>
    <lbz-button color="secondary">Secondary</lbz-button>
    <lbz-button color="secondary" icon="add">Secondary</lbz-button>
    <br>
    <lbz-button color="background">Background</lbz-button>
    <lbz-button color="background" icon="add">Background</lbz-button>
    <br>
    <lbz-button color="surface">Surface</lbz-button>
    <lbz-button color="surface" icon="add">Surface</lbz-button>
    <br>
    <lbz-button color="error">Error</lbz-button>
    <lbz-button color="error" icon="add">Error</lbz-button>
    <br>
    <lbz-button color="light">Light</lbz-button>
    <lbz-button color="light" icon="add">Light</lbz-button>
    <br>
    <lbz-button color="dark">Dark</lbz-button>
    <lbz-button color="dark" icon="add">Dark</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ full-width: true, false (default)</h3>

    <lbz-button full-width>Full-width</lbz-button>
    <lbz-button full-width icon="add">Full-width</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ dense: undefined (default), true, false</h3>

    <lbz-button dense>Dense</lbz-button>
    <lbz-button :dense="false" icon="add">Non-dense</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>

    <lbz-button disabled>Primary</lbz-button>
    <lbz-button disabled icon="add">Primary</lbz-button>
    <br>
    <lbz-button color="secondary" disabled>Secondary</lbz-button>
    <lbz-button
      color="secondary"
      disabled
      icon="add"
    >Secondary</lbz-button>
    <br>
    <lbz-button color="background" disabled>Background</lbz-button>
    <lbz-button
      color="background"
      disabled
      icon="add"
    >Background</lbz-button>
    <br>
    <lbz-button color="surface" disabled>Surface</lbz-button>
    <lbz-button
      color="surface"
      disabled
      icon="add"
    >Surface</lbz-button>
    <br>
    <lbz-button color="error" disabled>Error</lbz-button>
    <lbz-button
      color="error"
      disabled
      icon="add"
    >Error</lbz-button>
    <br>
    <lbz-button color="light" disabled>Light</lbz-button>
    <lbz-button
      color="light"
      disabled
      icon="add"
    >Light</lbz-button>
    <br>
    <lbz-button color="dark" disabled>Dark</lbz-button>
    <lbz-button
      color="dark"
      disabled
      icon="add"
    >Dark</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ icon: '' (default), 'x'</h3>

    <lbz-button icon="add">Icon</lbz-button>
    <lbz-button>
      <template #icon>add</template>
      Icon
    </lbz-button>
    <lbz-button>
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z"/>
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      </template>
      SVG
    </lbz-button>
    <lbz-button>
      <template #icon>
        <img src="../../assets/img/logo.png">
      </template>
      Img
    </lbz-button>

    <h3 class="lbz-typography--subtitle1">$ ripple: undefined (default), true, false</h3>

    <lbz-button ripple>Ripple</lbz-button>
    <lbz-button :ripple="false" icon="add">Non-ripple</lbz-button>

    <h2 class="lbz-typography--h5"># Outlined button</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'text' (default), 'outlined', 'contained'</h3>

    <lbz-button type="outlined">Outlined</lbz-button>
    <lbz-button type="outlined" icon="add">Outlined</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ router-link: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ router-link-props (router-link): { to: '' (default) || 'x' || { x: y }, replace: true || false (default), append: true || false (default), exact: true || false (default), event: 'click' (default) || 'x' || ['x'] }</h3>
    <h3 class="lbz-typography--subtitle1">$ tag: 'button' (default), 'a', 'x'</h3>

    <lbz-button
      router-link
      :router-link-props="{
        to: '/components/button',
        replace: true,
        exact: true,
        event: 'dblclick'
      }"
      tag="a"
      type="outlined"
    >Router-link</lbz-button>
    <lbz-button
      tag="a"
      href="#/components/button"
      type="outlined"
      icon="add"
    >Non-router-link</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ color: 'primary' (default), 'secondary', 'background', 'surface', 'error', 'light', 'dark'</h3>

    <lbz-button type="outlined">Primary</lbz-button>
    <lbz-button type="outlined" icon="add">Primary</lbz-button>
    <br>
    <lbz-button type="outlined" color="secondary">Secondary</lbz-button>
    <lbz-button
      type="outlined"
      color="secondary"
      icon="add"
    >Secondary</lbz-button>
    <br>
    <lbz-button type="outlined" color="background">Background</lbz-button>
    <lbz-button
      type="outlined"
      color="background"
      icon="add"
    >Background</lbz-button>
    <br>
    <lbz-button type="outlined" color="surface">Surface</lbz-button>
    <lbz-button
      type="outlined"
      color="surface"
      icon="add"
    >Surface</lbz-button>
    <br>
    <lbz-button type="outlined" color="error">Error</lbz-button>
    <lbz-button
      type="outlined"
      color="error"
      icon="add"
    >Error</lbz-button>
    <br>
    <lbz-button type="outlined" color="light">Light</lbz-button>
    <lbz-button
      type="outlined"
      color="light"
      icon="add"
    >Light</lbz-button>
    <br>
    <lbz-button type="outlined" color="dark">Dark</lbz-button>
    <lbz-button
      type="outlined"
      color="dark"
      icon="add"
    >Dark</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ full-width: true, false (default)</h3>

    <lbz-button type="outlined" full-width>Full-width</lbz-button>
    <lbz-button
      type="outlined"
      full-width
      icon="add"
    >Full-width</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ dense: undefined (default), true, false</h3>

    <lbz-button type="outlined" dense>Dense</lbz-button>
    <lbz-button
      type="outlined"
      :dense="false"
      icon="add"
    >Non-dense</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>

    <lbz-button type="outlined" disabled>Primary</lbz-button>
    <lbz-button
      type="outlined"
      disabled
      icon="add"
    >Primary</lbz-button>
    <br>
    <lbz-button
      type="outlined"
      color="secondary"
      disabled
    >Secondary</lbz-button>
    <lbz-button
      type="outlined"
      color="secondary"
      disabled
      icon="add"
    >Secondary</lbz-button>
    <br>
    <lbz-button
      type="outlined"
      color="background"
      disabled
    >Background</lbz-button>
    <lbz-button
      type="outlined"
      color="background"
      disabled
      icon="add"
    >Background</lbz-button>
    <br>
    <lbz-button
      type="outlined"
      color="surface"
      disabled
    >Surface</lbz-button>
    <lbz-button
      type="outlined"
      color="surface"
      disabled
      icon="add"
    >Surface</lbz-button>
    <br>
    <lbz-button
      type="outlined"
      color="error"
      disabled
    >Error</lbz-button>
    <lbz-button
      type="outlined"
      color="error"
      disabled
      icon="add"
    >Error</lbz-button>
    <br>
    <lbz-button
      type="outlined"
      color="light"
      disabled
    >Light</lbz-button>
    <lbz-button
      type="outlined"
      color="light"
      disabled
      icon="add"
    >Light</lbz-button>
    <br>
    <lbz-button
      type="outlined"
      color="dark"
      disabled
    >Dark</lbz-button>
    <lbz-button
      type="outlined"
      color="dark"
      disabled
      icon="add"
    >Dark</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ icon: '' (default), 'x'</h3>

    <lbz-button type="outlined" icon="add">Icon</lbz-button>
    <lbz-button type="outlined">
      <template #icon>add</template>
      Icon
    </lbz-button>
    <lbz-button type="outlined">
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z"/>
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      </template>
      SVG
    </lbz-button>
    <lbz-button type="outlined">
      <template #icon>
        <img src="../../assets/img/logo.png">
      </template>
      Img
    </lbz-button>

    <h3 class="lbz-typography--subtitle1">$ ripple: undefined (default), true, false</h3>

    <lbz-button type="outlined" ripple>Ripple</lbz-button>
    <lbz-button type="outlined" :ripple="false" icon="add">Non-ripple</lbz-button>

    <h2 class="lbz-typography--h5"># Contained button</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'text' (default), 'outlined', 'contained'</h3>

    <lbz-button type="contained">Contained</lbz-button>
    <lbz-button type="contained" icon="add">Contained</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ router-link: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ router-link-props (router-link): { to: '' (default) || 'x' || { x: y }, replace: true || false (default), append: true || false (default), exact: true || false (default), event: 'click' (default) || 'x' || ['x'] }</h3>
    <h3 class="lbz-typography--subtitle1">$ tag: 'button' (default), 'a', 'x'</h3>

    <lbz-button
      router-link
      :router-link-props="{
        to: '/components/button',
        replace: true,
        exact: true,
        event: 'dblclick'
      }"
      tag="a"
      type="contained"
    >Router-link</lbz-button>
    <lbz-button
      tag="a"
      href="#/components/button"
      type="contained"
      icon="add"
    >Non-router-link</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ color: 'primary' (default), 'secondary', 'background', 'surface', 'error', 'light', 'dark'</h3>

    <lbz-button type="contained">Primary</lbz-button>
    <lbz-button type="contained" icon="add">Primary</lbz-button>
    <br>
    <lbz-button type="contained" color="secondary">Secondary</lbz-button>
    <lbz-button
      type="contained"
      color="secondary"
      icon="add"
    >Secondary</lbz-button>
    <br>
    <lbz-button type="contained" color="background">Background</lbz-button>
    <lbz-button
      type="contained"
      color="background"
      icon="add"
    >Background</lbz-button>
    <br>
    <lbz-button type="contained" color="surface">Surface</lbz-button>
    <lbz-button
      type="contained"
      color="surface"
      icon="add"
    >Surface</lbz-button>
    <br>
    <lbz-button type="contained" color="error">Error</lbz-button>
    <lbz-button
      type="contained"
      color="error"
      icon="add"
    >Error</lbz-button>
    <br>
    <lbz-button type="contained" color="light">Light</lbz-button>
    <lbz-button
      type="contained"
      color="light"
      icon="add"
    >Light</lbz-button>
    <br>
    <lbz-button type="contained" color="dark">Dark</lbz-button>
    <lbz-button
      type="contained"
      color="dark"
      icon="add"
    >Dark</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ full-width: true, false (default)</h3>

    <lbz-button type="contained" full-width>Full-width</lbz-button>
    <lbz-button
      type="contained"
      full-width
      icon="add"
    >Full-width</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ dense: undefined (default), true, false</h3>

    <lbz-button type="contained" dense>Dense</lbz-button>
    <lbz-button
      type="contained"
      :dense="false"
      icon="add"
    >Non-dense</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ unelevated (type === 'contained'): true, false (default)</h3>

    <lbz-button type="contained" unelevated>Unelevated</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>

    <lbz-button type="contained" disabled>Primary</lbz-button>
    <lbz-button
      type="contained"
      disabled
      icon="add"
    >Primary</lbz-button>
    <br>
    <lbz-button
      type="contained"
      color="secondary"
      disabled
    >Secondary</lbz-button>
    <lbz-button
      type="contained"
      color="secondary"
      disabled
      icon="add"
    >Secondary</lbz-button>
    <br>
    <lbz-button
      type="contained"
      color="background"
      disabled
    >Background</lbz-button>
    <lbz-button
      type="contained"
      color="background"
      disabled
      icon="add"
    >Background</lbz-button>
    <br>
    <lbz-button
      type="contained"
      color="surface"
      disabled
    >Surface</lbz-button>
    <lbz-button
      type="contained"
      color="surface"
      disabled
      icon="add"
    >Surface</lbz-button>
    <br>
    <lbz-button
      type="contained"
      color="error"
      disabled
    >Error</lbz-button>
    <lbz-button
      type="contained"
      color="error"
      disabled
      icon="add"
    >Error</lbz-button>
    <br>
    <lbz-button
      type="contained"
      color="light"
      disabled
    >Light</lbz-button>
    <lbz-button
      type="contained"
      color="light"
      disabled
      icon="add"
    >Light</lbz-button>
    <br>
    <lbz-button
      type="contained"
      color="dark"
      disabled
    >Dark</lbz-button>
    <lbz-button
      type="contained"
      color="dark"
      disabled
      icon="add"
    >Dark</lbz-button>

    <h3 class="lbz-typography--subtitle1">$ icon: '' (default), 'x'</h3>

    <lbz-button type="contained" icon="add">Icon</lbz-button>
    <lbz-button type="contained">
      <template #icon>add</template>
      Icon
    </lbz-button>
    <lbz-button type="contained">
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z"/>
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      </template>
      SVG
    </lbz-button>
    <lbz-button type="contained">
      <template #icon>
        <img src="../../assets/img/logo.png">
      </template>
      Img
    </lbz-button>

    <h3 class="lbz-typography--subtitle1">$ ripple: undefined (default), true, false</h3>

    <lbz-button type="contained" ripple>Ripple</lbz-button>
    <lbz-button type="contained" :ripple="false" icon="add">Non-ripple</lbz-button>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsButton extends Vue {
  private fclick(e: MouseEvent): void {
    alert(e);
  }
}
</script>
