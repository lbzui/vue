<template>
  <article class="lbzui-404">
    <lbz-empty-state title="Oops!" subtitle="We can't seem to find the page you're looking for.">
      <template #start>
        <img src="../assets/img/placeholder@1x1.png">
      </template>
      <template #end>
        <lbz-button
          router-link
          :router-link-props="{
            to: '/',
            replace: true,
            exact: true
          }"
          tag="a"
          type="contained"
        >Back Home</lbz-button>
      </template>
    </lbz-empty-state>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {}
</script>
