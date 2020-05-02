<template>
  <article class="lbzui-utilities-aspect-ratio">
    <h2 class="lbz-typography--h5"># Aspect ratio</h2>

    <div class="lbzui-rectangle">
      <div class="lbz-aspect-ratio--16x9">.lbz-aspect-ratio--16x9</div>
    </div>
    <div class="lbzui-rectangle">
      <div class="lbz-aspect-ratio--3x2">.lbz-aspect-ratio--3x2</div>
    </div>
    <div class="lbzui-rectangle">
      <div class="lbz-aspect-ratio--4x3">.lbz-aspect-ratio--4x3</div>
    </div>
    <div class="lbzui-rectangle">
      <div class="lbz-aspect-ratio--1x1">.lbz-aspect-ratio--1x1</div>
    </div>
    <div class="lbzui-rectangle">
      <div class="lbz-aspect-ratio--3x4">.lbz-aspect-ratio--3x4</div>
    </div>
    <div class="lbzui-rectangle">
      <div class="lbz-aspect-ratio--2x3">.lbz-aspect-ratio--2x3</div>
    </div>
  </article>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class UtilitiesAspectRatio extends Vue {}
</script>
