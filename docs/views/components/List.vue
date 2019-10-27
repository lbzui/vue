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
          <img class="lbz-list-item__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #center>One-line item</template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--square">
            <img src="../../assets/img/placeholder@1x1.png">
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
            <img src="../../assets/img/placeholder@16x9.png">
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
          <img class="lbz-list-item__avatar" src="../../assets/img/placeholder@1x1.png">
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
            <img src="../../assets/img/placeholder@1x1.png">
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
            <img src="../../assets/img/placeholder@16x9.png">
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
          <img class="lbz-list-item__avatar" src="../../assets/img/placeholder@1x1.png">
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
            <img src="../../assets/img/placeholder@1x1.png">
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
            <img src="../../assets/img/placeholder@16x9.png">
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
          <img class="lbz-list-item__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #center>One-line item</template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--square">
            <img src="../../assets/img/placeholder@1x1.png">
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
            <img src="../../assets/img/placeholder@16x9.png">
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
          <img class="lbz-list-item__avatar" src="../../assets/img/placeholder@1x1.png">
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
            <img src="../../assets/img/placeholder@1x1.png">
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
            <img src="../../assets/img/placeholder@16x9.png">
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
          <img class="lbz-list-item__avatar" src="../../assets/img/placeholder@1x1.png">
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
            <img src="../../assets/img/placeholder@1x1.png">
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
            <img src="../../assets/img/placeholder@16x9.png">
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
    <h3 class="lbz-typography--subtitle1">$ placement: 'start' (default), 'center'</h3>
    <lbz-list>
      <lbz-list-item>Item</lbz-list-item>
    </lbz-list>
    <lbz-list subtitle="Subtitle">
      <lbz-list-item>Item</lbz-list-item>
    </lbz-list>
    <lbz-list subtitle="Subtitle" placement="center">
      <lbz-list-item>
        <template #start>
          <lbz-icon>favorite</lbz-icon>
        </template>
        <template #center>Item</template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ tag: 'ul' (default), 'nav', 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ router-link: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ item-tag: 'li' (default), 'a', 'x'</h3>
    <lbz-list subtitle="Default">
      <lbz-list-item>Item</lbz-list-item>
    </lbz-list>
    <lbz-list tag="nav" subtitle="Router-link" router-link item-tag="a">
      <lbz-list-item to="/components/icon-button">Router-link</lbz-list-item>
      <lbz-list-item :to="{ name: 'list' }">Router-link</lbz-list-item>
    </lbz-list>
    <lbz-list tag="nav" subtitle="Non router-link" item-tag="a">
      <lbz-list-item href="#/components/icon-button">A</lbz-list-item>
      <lbz-list-item href="#/components/list">A</lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-list subtitle="Ripple off" :ripple="false">
      <lbz-list-item>Item</lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>
    <lbz-list subtitle="Disabled" disabled>
      <lbz-list-item>Item</lbz-list-item>
    </lbz-list>

    <h2 class="lbz-typography--h5"># List item</h2>

    <h3 class="lbz-typography--subtitle1">$ router-link: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ tag: '' (default), li', 'a', 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ to (router-link): '' (default), 'x', { x: x }</h3>
    <lbz-list tag="nav" subtitle="Router-link">
      <lbz-list-item router-link tag="a" to="/components/icon-button">Router-link</lbz-list-item>
      <lbz-list-item router-link tag="a" :to="{ name: 'list' }">Router-link</lbz-list-item>
    </lbz-list>
    <lbz-list tag="nav" subtitle="Non router-link">
      <lbz-list-item tag="a" href="#/components/icon-button">A</lbz-list-item>
      <lbz-list-item tag="a" href="#/components/list">A</lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ active: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ selected: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>
    <lbz-list>
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
