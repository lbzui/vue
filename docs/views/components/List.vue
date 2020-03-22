<template>
  <article class="lbzui-components-list">
    <h2 class="lbz-typography--h5"># List</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'one-line' (default), 'two-line', 'three-line'</h3>

    <lbz-list class="lbzui-rectangle" subtitle="One-line">
      <lbz-list-item @click.stop="fclick">
        <template #center>Single-line item</template>
        <template #end>
          <lbz-icon>info</lbz-icon>
        </template>
      </lbz-list-item>
      <lbz-list-item>Single-line item longer text</lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>Single-line item</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <img class="lbz-list-item__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #center>Single-line item</template>
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
        <template #center>Single-line item</template>
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
        <template #center>Single-line item</template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      subtitle="Two-line"
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
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
          <lbz-icon>bluetooth</lbz-icon>
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
    <lbz-list
      class="lbzui-rectangle"
      type="three-line"
      subtitle="Three-line"
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Secondary line text Lorem ipsum dolor sit amet</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <img class="lbz-list-item__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Secondary line text lorem ipsum dapibus, neque id cursus faucibus</span>
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
          <span class="lbz-list-item__supporting-text">Secondary line text lorem ipsum dapibus, neque id cursus faucibus</span>
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
          <span class="lbz-list-item__supporting-text">Secondary line text lorem ipsum dapibus, neque</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ tag: 'ul' (default), 'nav', 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ router-link: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ router-link-props (router-link): { replace: true || false (default), append: true || false (default), exact: true || false (default), event: 'click' (default) || 'x' || ['x'] }</h3>
    <h3 class="lbz-typography--subtitle1">$ item-tag: 'li' (default), 'a', 'x'</h3>

    <lbz-list
      class="lbzui-rectangle"
      tag="nav"
      router-link
      :router-link-props="{ exact: true }"
      item-tag="a"
      subtitle="Router-link"
    >
      <lbz-list-item to="/components/list">Router-link item</lbz-list-item>
      <lbz-list-item :to="{ path: '/404' }">Router-link item</lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      tag="nav"
      item-tag="a"
      subtitle="Non-router-link"
    >
      <lbz-list-item href="#/components/list">A item</lbz-list-item>
      <lbz-list-item href="#/404">A item</lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ on-background: 'primary', 'secondary', 'surface' (default), 'error', 'light', 'dark'</h3>

    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      on-background="primary"
      subtitle="Primary"
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Two-line item</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button on-background="primary">more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      on-background="secondary"
      subtitle="Secondary"
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Two-line item</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button on-background="secondary">more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      subtitle="Surface"
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Two-line item</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
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
    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      on-background="error"
      subtitle="Error"
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Two-line item</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button on-background="error">more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      on-background="light"
      subtitle="Light"
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Two-line item</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button on-background="light">more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      on-background="dark"
      subtitle="Dark"
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Two-line item</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button on-background="dark">more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ nav: true, false (default)</h3>

    <lbz-list
      class="lbzui-rectangle"
      tag="nav"
      router-link
      :router-link-props="{ exact: true }"
      item-tag="a"
      nav
      subtitle="Nav"
    >
      <lbz-list-item to="/components/list">
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>Nav item</template>
      </lbz-list-item>
      <lbz-list-item :to="{ path: '/404' }">
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>Nav item</template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ dense: undefined (default), true, false</h3>

    <lbz-list
      class="lbzui-rectangle"
      dense
      subtitle="Dense one-line"
    >
      <lbz-list-item>
        <template #center>Single-line item</template>
        <template #end>
          <lbz-icon>info</lbz-icon>
        </template>
      </lbz-list-item>
      <lbz-list-item>Single-line item longer text</lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>Single-line item</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <img class="lbz-list-item__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #center>Single-line item</template>
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
        <template #center>Single-line item</template>
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
        <template #center>Single-line item</template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      :dense="false"
      subtitle="Non-dense one-line"
    >
      <lbz-list-item>
        <template #center>Single-line item</template>
        <template #end>
          <lbz-icon>info</lbz-icon>
        </template>
      </lbz-list-item>
      <lbz-list-item>Single-line item longer text</lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>Single-line item</template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <img class="lbz-list-item__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #center>Single-line item</template>
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
        <template #center>Single-line item</template>
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
        <template #center>Single-line item</template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      dense
      subtitle="Dense two-line"
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
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
          <lbz-icon>bluetooth</lbz-icon>
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
    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      :dense="false"
      subtitle="Non-dense two-line"
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
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
          <lbz-icon>bluetooth</lbz-icon>
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
    <lbz-list
      class="lbzui-rectangle"
      type="three-line"
      dense
      subtitle="Dense three-line"
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Secondary line text Lorem ipsum dolor sit amet</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <img class="lbz-list-item__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Secondary line text lorem ipsum dapibus, neque id cursus faucibus</span>
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
          <span class="lbz-list-item__supporting-text">Secondary line text lorem ipsum dapibus, neque id cursus faucibus</span>
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
          <span class="lbz-list-item__supporting-text">Secondary line text lorem ipsum dapibus, neque</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      type="three-line"
      :dense="false"
      subtitle="Non-dense three-line"
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Secondary line text Lorem ipsum dolor sit amet</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <img class="lbz-list-item__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text">Secondary line text lorem ipsum dapibus, neque id cursus faucibus</span>
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
          <span class="lbz-list-item__supporting-text">Secondary line text lorem ipsum dapibus, neque id cursus faucibus</span>
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
          <span class="lbz-list-item__supporting-text">Secondary line text lorem ipsum dapibus, neque</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ align: 'start' (default), 'center'</h3>
    <h3 class="lbz-typography--subtitle1">$ subtitle: '' (default), 'x'</h3>

    <lbz-list class="lbzui-rectangle" subtitle="Subtitle">
      <lbz-list-item>Item</lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      align="center"
      subtitle="Subtitle"
    >
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>Item</template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>

    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      on-background="primary"
      subtitle="Primary"
      disabled
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Two-line item</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button on-background="primary" disabled>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      on-background="secondary"
      subtitle="Secondary"
      disabled
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Two-line item</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button on-background="secondary" disabled>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      subtitle="Surface"
      disabled
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Two-line item</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button disabled>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      on-background="error"
      subtitle="Error"
      disabled
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Two-line item</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button on-background="error" disabled>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      on-background="light"
      subtitle="Light"
      disabled
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Two-line item</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button on-background="light" disabled>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      on-background="dark"
      subtitle="Dark"
      disabled
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Two-line item</span>
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Two-line item</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button on-background="dark" disabled>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ ripple: undefined (default), true, false</h3>

    <lbz-list
      class="lbzui-rectangle"
      subtitle="Ripple"
      ripple
    >
      <lbz-list-item>Ripple item</lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      subtitle="Non-ripple"
      :ripple="false"
    >
      <lbz-list-item>Non-ripple item</lbz-list-item>
    </lbz-list>

    <h2 class="lbz-typography--h5"># List item</h2>

    <h3 class="lbz-typography--subtitle1">$ router-link: undefined (default), true, false</h3>
    <h3 class="lbz-typography--subtitle1">$ to (router-link): '' (default), 'x', { x: y }</h3>
    <h3 class="lbz-typography--subtitle1">$ tag: '' (default), 'li', 'a', 'x'</h3>

    <lbz-list
      class="lbzui-rectangle"
      tag="nav"
      :router-link-props="{ exact: true }"
      subtitle="Router-link"
    >
      <lbz-list-item
        router-link
        to="/components/list"
        tag="a"
      >Router-link item</lbz-list-item>
      <lbz-list-item
        router-link
        :to="{ path: '/404' }"
        tag="a"
      >Router-link item</lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      tag="nav"
      subtitle="Non-router-link"
    >
      <lbz-list-item tag="a" href="#/components/list">A item</lbz-list-item>
      <lbz-list-item tag="a" href="#/404">A item</lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ selected: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ activated: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ disabled: undefined (default), true, false</h3>

    <lbz-list class="lbzui-rectangle">
      <lbz-list-item selected>
        <template #start>
          <lbz-radio
            v-model="vradio"
            id="vradio-true"
            name="vradio"
            :value="true"
          />
        </template>
        <template #center>
          <span class="lbz-list-item__title">Selected</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-radio
            v-model="vradio"
            id="vradio-false"
            name="vradio"
            :value="false"
          />
        </template>
      </lbz-list-item>
      <lbz-list-item activated>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Activated</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item disabled>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Disabled</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-switch
            v-model="vswitch"
            id="vswitch"
            name="vswitch"
            disabled
          />
        </template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ ripple: undefined (default), true, false</h3>

    <lbz-list class="lbzui-rectangle">
      <lbz-list-item ripple>Ripple item</lbz-list-item>
      <lbz-list-item :ripple="false">Non-ripple item</lbz-list-item>
    </lbz-list>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsList extends Vue {
  private vradio: boolean = true;
  private vswitch: boolean = true;

  private fclick(e: MouseEvent): void {
    alert(e);
  }
}
</script>
