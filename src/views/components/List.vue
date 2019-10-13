<template>
  <article class="lbzui-components-list">
    <h2 class="lbz-typography--h5"># List</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'one-line' (default), 'two-line', 'three-line'</h3>
    <lbz-list subtitle="One line">
      <lbz-list-item @click.stop="fclick">One-line item</lbz-list-item>
      <lbz-list-item>
        <template #center>One-line item</template>
        <template #end>
          <lbz-icon>info</lbz-icon>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>favorite</lbz-icon>
        </template>
        <template #center>One-line item</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>favorite</lbz-icon>
        </template>
        <template #center>One-line item</template>
        <template #end>
          <lbz-icon>info</lbz-icon>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <img class="lbz-list-item__avatar" src="../../assets/img/logo.png">
        </template>
        <template #center>One-line item</template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--square">
            <img src="../../assets/img/logo.png">
          </div>
        </template>
        <template #center>One-line item</template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item style="padding-left: 0;">
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--rectangle">
            <img src="../../assets/img/logo.png">
          </div>
        </template>
        <template #center>One-line item</template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list type="two-line" subtitle="Two line">
      <lbz-list-item>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">caption</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Two-line item</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>favorite</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <img class="lbz-list-item__avatar" src="../../assets/img/logo.png">
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--square">
            <img src="../../assets/img/logo.png">
          </div>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item style="padding-left: 0;">
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--rectangle">
            <img src="../../assets/img/logo.png">
          </div>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list type="three-line" subtitle="Three line">
      <lbz-list-item>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">caption</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>favorite</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <img class="lbz-list-item__avatar" src="../../assets/img/logo.png">
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--square">
            <img src="../../assets/img/logo.png">
          </div>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item style="padding-left: 0;">
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--rectangle">
            <img src="../../assets/img/logo.png">
          </div>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ dense: true, false (default)</h3>
    <lbz-list dense subtitle="One line">
      <lbz-list-item>One-line item</lbz-list-item>
      <lbz-list-item>
        <template #center>One-line item</template>
        <template #end>
          <lbz-icon>info</lbz-icon>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>favorite</lbz-icon>
        </template>
        <template #center>One-line item</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>favorite</lbz-icon>
        </template>
        <template #center>One-line item</template>
        <template #end>
          <lbz-icon>info</lbz-icon>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <img class="lbz-list-item__avatar" src="../../assets/img/logo.png">
        </template>
        <template #center>One-line item</template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--square">
            <img src="../../assets/img/logo.png">
          </div>
        </template>
        <template #center>One-line item</template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item style="padding-left: 0;">
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--rectangle">
            <img src="../../assets/img/logo.png">
          </div>
        </template>
        <template #center>One-line item</template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list type="two-line" dense subtitle="Two line">
      <lbz-list-item>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">caption</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Two-line item</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>favorite</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <img class="lbz-list-item__avatar" src="../../assets/img/logo.png">
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--square">
            <img src="../../assets/img/logo.png">
          </div>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item style="padding-left: 0;">
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--rectangle">
            <img src="../../assets/img/logo.png">
          </div>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list type="three-line" dense subtitle="Three line">
      <lbz-list-item>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">caption</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>favorite</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <img class="lbz-list-item__avatar" src="../../assets/img/logo.png">
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--square">
            <img src="../../assets/img/logo.png">
          </div>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item style="padding-left: 0;">
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--rectangle">
            <img src="../../assets/img/logo.png">
          </div>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ subtitle: '' (default), 'x'</h3>
    <lbz-list>
      <lbz-list-item>One-line item</lbz-list-item>
    </lbz-list>
    <lbz-list subtitle="Subtitle">
      <lbz-list-item>One-line item</lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ placement: 'start' (default), 'center'</h3>
    <lbz-list subtitle="Subtitle">
      <lbz-list-item>One-line item</lbz-list-item>
    </lbz-list>
    <lbz-list subtitle="Subtitle" placement="center">
      <lbz-list-item>
        <template #start>
          <lbz-icon>favorite</lbz-icon>
        </template>
        <template #center>One-line item</template>
      </lbz-list-item>
    </lbz-list>

    <h2 class="lbz-typography--h5"># List item</h2>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <h3 class="lbz-typography--subtitle1">$ active: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ selected: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>
    <lbz-list>
      <lbz-list-item :ripple="false">
        <template #start>
          <lbz-icon>favorite</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Ripple off</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item active>
        <template #start>
          <lbz-icon>favorite</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Active</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item selected>
        <template #start>
          <lbz-icon>favorite</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Selected</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item disabled>
        <template #start>
          <lbz-icon>favorite</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Disabled</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class List extends Vue {
  private fclick(e: MouseEvent) {
    alert(e);
  }
}
</script>

<style lang="less">
.lbzui-components-list {
  .lbz-list {
    border: 1px solid var(--lbz-theme-outline-on-surface);
    max-width: 600px;

    + .lbz-list {
      margin-top: 16px;
    }
  }
}
</style>
