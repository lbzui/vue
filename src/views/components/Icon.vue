<template>
  <main>
    <p class="lbz-typography--body1">Default</p>
    <lbz-icon>face</lbz-icon>

    <p class="lbz-typography--body1">Size</p>
    <lbz-icon :size="18">face</lbz-icon>
    <lbz-icon :size="24">face</lbz-icon>
    <lbz-icon :size="36">face</lbz-icon>
    <lbz-icon :size="48">face</lbz-icon>

    <p class="lbz-typography--body1">Color</p>
    <lbz-icon color="light">face</lbz-icon>
    <lbz-icon color="light" disabled>face</lbz-icon>
    <lbz-icon color="dark">face</lbz-icon>
    <lbz-icon color="dark" disabled>face</lbz-icon>

    <p class="lbz-typography--body1">SVG & Img</p>
    <lbz-icon>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
    </lbz-icon>
    <lbz-icon :size="36">
      <img src="../../assets/img/logo.png">
    </lbz-icon>
  </main>
</template>
