<template>
  <main>
    <lbz-top-app-bar
      type="extended"
      title="Page title"
      :media="require('@/assets/img/logo.png')"
    >
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary" class="is-short-action">search</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
  </main>
</template>
