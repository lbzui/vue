<template>
  <article>
    <h2 class="lbz-typography--h5"># Icon</h2>
    <lbz-icon>favorite</lbz-icon>
    <lbz-icon>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
    </lbz-icon>
    <lbz-icon>
      <img src="../../assets/img/logo.png">
    </lbz-icon>

    <h3 class="lbz-typography--subtitle1">$ size: 18, 24 (default), 36, 48</h3>
    <lbz-icon :size="18">favorite</lbz-icon>
    <lbz-icon :size="24">favorite</lbz-icon>
    <lbz-icon :size="36">favorite</lbz-icon>
    <lbz-icon :size="48">favorite</lbz-icon>

    <h3 class="lbz-typography--subtitle1">$ color: '' (default), 'light', 'dark'</h3>
    <lbz-icon color="light">favorite</lbz-icon>
    <lbz-icon color="dark">favorite</lbz-icon>

    <h3 class="lbz-typography--subtitle1">$ disabled (color): true, false (default)</h3>
    <lbz-icon color="light" disabled>favorite</lbz-icon>
    <lbz-icon color="dark" disabled>favorite</lbz-icon>
  </article>
</template>
