<template>
  <article class="lbzui-404">
    <lbz-empty-state title="Oops!">
      <template #start>
        <img src="../assets/img/placeholder@1x1.png">
      </template>
      <template #center>
        <p class="lbz-empty-state__subtitle">"@lbzui/vue" can't seem to find the page you're looking for.</p>
      </template>
      <template #end>
        <lbz-button type="contained" tag="a" href="#/">Go Home</lbz-button>
      </template>
    </lbz-empty-state>
  </article>
</template>
