<template>
  <main>
    <lbz-top-app-bar type="extended" title="Page title" :img="require('@/assets/img/logo.png')">
      <template #start>
        <lbz-icon-button surface="primary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button surface="primary" class="is-short-action">search</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
  </main>
</template>
