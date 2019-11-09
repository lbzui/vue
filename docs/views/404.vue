<template>
  <article class="lbzui-404">
    <lbz-empty-state title="Oops!" subtitle="We can't seem to find the page you're looking for.">
      <template #start>
        <img src="../assets/img/placeholder@1x1.png">
      </template>
      <template #end>
        <lbz-button type="contained" tag="a" href="#/">Back Home</lbz-button>
      </template>
    </lbz-empty-state>
  </article>
</template>
