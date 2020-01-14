<template>
  <article class="lbzui-styles-utility">
    <h2 class="lbz-typography--h5"># Utility</h2>

    <h3 class="lbz-typography--subtitle1">$ Aspect Ratio</h3>
    <div class="lbzui-aspect-ratio">
      <div class="lbz-u-aspect-ratio--16x9">.lbz-u-aspect-ratio--16x9</div>
    </div>
    <div class="lbzui-aspect-ratio">
      <div class="lbz-u-aspect-ratio--3x2">.lbz-u-aspect-ratio--3x2</div>
    </div>
    <div class="lbzui-aspect-ratio">
      <div class="lbz-u-aspect-ratio--4x3">.lbz-u-aspect-ratio--4x3</div>
    </div>
    <div class="lbzui-aspect-ratio">
      <div class="lbz-u-aspect-ratio--1x1">.lbz-u-aspect-ratio--1x1</div>
    </div>
    <div class="lbzui-aspect-ratio">
      <div class="lbz-u-aspect-ratio--3x4">.lbz-u-aspect-ratio--3x4</div>
    </div>
    <div class="lbzui-aspect-ratio">
      <div class="lbz-u-aspect-ratio--2x3">.lbz-u-aspect-ratio--2x3</div>
    </div>

    <h3 class="lbz-typography--subtitle1">$ Clearfix</h3>
    <div class="lbz-u-clearfix">
      <div class="lbzui-u-square" style="float: left;">.lbz-u-clearfix</div>
    </div>

    <h3 class="lbz-typography--subtitle1">$ Truncate</h3>
    <div class="lbzui-u-square">
      <p class="lbz-u-truncate--1">.lbz-u-truncate--1.lbz-u-truncate--1</p>
    </div>
    <div class="lbzui-u-square">
      <p class="lbz-u-truncate--2">.lbz-u-truncate--2.lbz-u-truncate--2.lbz-u-truncate--2</p>
    </div>
    <div class="lbzui-u-square">
      <p class="lbz-u-truncate--3">.lbz-u-truncate--3.lbz-u-truncate--3.lbz-u-truncate--3.lbz-u-truncate--3</p>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class StylesUtility extends Vue {}
</script>
