<template>
  <article class="lbzui-404">
    <lbz-empty-state title="Oops!" subtitle="We can't seem to find the page you're looking for.">
      <template #start>
        <img src="../assets/img/logo.png">
      </template>
      <template #end>
        <lbz-button type="contained" tag="a" href="#/">Go Home</lbz-button>
      </template>
    </lbz-empty-state>
  </article>
</template>
