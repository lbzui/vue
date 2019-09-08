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
  </main>
</template>
