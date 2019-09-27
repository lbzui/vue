<template>
  <article>
    <h2 class="lbz-typography--h5"># Standard top app bar</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'extended', 'short'</h3>
    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <lbz-top-app-bar title="Page title"></lbz-top-app-bar>
    <lbz-top-app-bar title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary">share</lbz-icon-button>
        <lbz-icon-button on-background="primary">search</lbz-icon-button>
        <lbz-icon-button on-background="primary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ background: 'primary' (default), 'secondary', 'surface', 'transparent'</h3>
    <lbz-top-app-bar background="primary" title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary">share</lbz-icon-button>
        <lbz-icon-button on-background="primary">search</lbz-icon-button>
        <lbz-icon-button on-background="primary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar background="secondary" title="Page title">
      <template #start>
        <lbz-icon-button on-background="secondary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="secondary">share</lbz-icon-button>
        <lbz-icon-button on-background="secondary">search</lbz-icon-button>
        <lbz-icon-button on-background="secondary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar background="surface" title="Page title">
      <template #start>
        <lbz-icon-button on-background="surface">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="surface">share</lbz-icon-button>
        <lbz-icon-button on-background="surface">search</lbz-icon-button>
        <lbz-icon-button on-background="surface" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar background="transparent" title="Page title">
      <template #start>
        <lbz-icon-button>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button>share</lbz-icon-button>
        <lbz-icon-button>search</lbz-icon-button>
        <lbz-icon-button class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ inactive (type === 'standard'): '' (default), 'scroll-off', 'tab-fixed'</h3>
    <lbz-top-app-bar inactive="scroll-off" title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary">share</lbz-icon-button>
        <lbz-icon-button on-background="primary">search</lbz-icon-button>
        <lbz-icon-button on-background="primary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <div style="overflow: hidden;">
      <lbz-top-app-bar inactive="tab-fixed" title="Page title">
        <template #start>
          <lbz-icon-button on-background="primary">menu</lbz-icon-button>
        </template>
        <template #end>
          <lbz-icon-button on-background="primary">share</lbz-icon-button>
          <lbz-icon-button on-background="primary">search</lbz-icon-button>
          <lbz-icon-button on-background="primary" class="is-short-action">more_vert</lbz-icon-button>
        </template>
        <template #tab>Tab</template>
      </lbz-top-app-bar>
    </div>

    <h3 class="lbz-typography--subtitle1">$ dense (desktop only): true, false (default)</h3>
    <lbz-top-app-bar dense title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary">share</lbz-icon-button>
        <lbz-icon-button on-background="primary">search</lbz-icon-button>
        <lbz-icon-button on-background="primary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ elevated: true, false (default)</h3>
    <lbz-top-app-bar elevated title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary">share</lbz-icon-button>
        <lbz-icon-button on-background="primary">search</lbz-icon-button>
        <lbz-icon-button on-background="primary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h2 class="lbz-typography--h5"># Extended top app bar</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'extended', 'short'</h3>
    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <lbz-top-app-bar type="extended" title="Page title"></lbz-top-app-bar>
    <lbz-top-app-bar type="extended" title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar type="extended" title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary">share</lbz-icon-button>
        <lbz-icon-button on-background="primary">search</lbz-icon-button>
        <lbz-icon-button on-background="primary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ background: 'primary' (default), 'secondary', 'surface', 'transparent'</h3>
    <lbz-top-app-bar type="extended" background="primary" title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary">share</lbz-icon-button>
        <lbz-icon-button on-background="primary">search</lbz-icon-button>
        <lbz-icon-button on-background="primary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar type="extended" background="secondary" title="Page title">
      <template #start>
        <lbz-icon-button on-background="secondary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="secondary">share</lbz-icon-button>
        <lbz-icon-button on-background="secondary">search</lbz-icon-button>
        <lbz-icon-button on-background="secondary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar type="extended" background="surface" title="Page title">
      <template #start>
        <lbz-icon-button on-background="surface">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="surface">share</lbz-icon-button>
        <lbz-icon-button on-background="surface">search</lbz-icon-button>
        <lbz-icon-button on-background="surface" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar type="extended" background="transparent" title="Page title">
      <template #start>
        <lbz-icon-button>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button>share</lbz-icon-button>
        <lbz-icon-button>search</lbz-icon-button>
        <lbz-icon-button class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ dense (desktop only): true, false (default)</h3>
    <lbz-top-app-bar type="extended" dense title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary">share</lbz-icon-button>
        <lbz-icon-button on-background="primary">search</lbz-icon-button>
        <lbz-icon-button on-background="primary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ elevated: true, false (default)</h3>
    <lbz-top-app-bar type="extended" elevated title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary">share</lbz-icon-button>
        <lbz-icon-button on-background="primary">search</lbz-icon-button>
        <lbz-icon-button on-background="primary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ media (type === 'extended'): '' (default), 'x'</h3>
    <lbz-top-app-bar
      type="extended"
      title="Page title"
      :media="require('@/assets/img/logo.png')"
    >
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary">share</lbz-icon-button>
        <lbz-icon-button on-background="primary">search</lbz-icon-button>
        <lbz-icon-button on-background="primary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h2 class="lbz-typography--h5"># Short top app bar</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'extended', 'short'</h3>
    <lbz-top-app-bar type="short" title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary">share</lbz-icon-button>
        <lbz-icon-button on-background="primary">search</lbz-icon-button>
        <lbz-icon-button on-background="primary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ background: 'primary' (default), 'secondary', 'surface', 'transparent'</h3>
    <lbz-top-app-bar type="short" background="primary" title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary">share</lbz-icon-button>
        <lbz-icon-button on-background="primary">search</lbz-icon-button>
        <lbz-icon-button on-background="primary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar type="short" background="secondary" title="Page title">
      <template #start>
        <lbz-icon-button on-background="secondary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="secondary">share</lbz-icon-button>
        <lbz-icon-button on-background="secondary">search</lbz-icon-button>
        <lbz-icon-button on-background="secondary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar type="short" background="surface" title="Page title">
      <template #start>
        <lbz-icon-button on-background="surface">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="surface">share</lbz-icon-button>
        <lbz-icon-button on-background="surface">search</lbz-icon-button>
        <lbz-icon-button on-background="surface" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
    <lbz-top-app-bar type="short" background="transparent" title="Page title">
      <template #start>
        <lbz-icon-button>menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button>share</lbz-icon-button>
        <lbz-icon-button>search</lbz-icon-button>
        <lbz-icon-button class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ dense (desktop only): true, false (default)</h3>
    <lbz-top-app-bar type="short" dense title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary">share</lbz-icon-button>
        <lbz-icon-button on-background="primary">search</lbz-icon-button>
        <lbz-icon-button on-background="primary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>

    <h3 class="lbz-typography--subtitle1">$ elevated: true, false (default)</h3>
    <lbz-top-app-bar type="short" elevated title="Page title">
      <template #start>
        <lbz-icon-button on-background="primary">menu</lbz-icon-button>
      </template>
      <template #end>
        <lbz-icon-button on-background="primary">share</lbz-icon-button>
        <lbz-icon-button on-background="primary">search</lbz-icon-button>
        <lbz-icon-button on-background="primary" class="is-short-action">more_vert</lbz-icon-button>
      </template>
    </lbz-top-app-bar>
  </article>
</template>
