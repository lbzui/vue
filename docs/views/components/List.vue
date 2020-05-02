<template>
  <article class="lbzui-components-list">
    <h2 class="lbz-typography--h5"># List</h2>

    <h3 class="lbz-typography--subtitle1">
      $ type: 'one-line' (default), 'two-line', 'three-line'
    </h3>

    <lbz-list class="lbzui-rectangle" subheader="One-line">
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
          <img
            class="lbz-list-item__thumbnail"
            src="../../assets/img/placeholder@1x1.png"
          />
        </template>
        <template #center>Single-line item</template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--square">
            <img src="../../assets/img/placeholder@1x1.png" />
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
            <img src="../../assets/img/placeholder@16x9.png" />
          </div>
        </template>
        <template #center>Single-line item</template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <br />
    <lbz-list class="lbzui-rectangle" type="two-line" subheader="Two-line">
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
          <img
            class="lbz-list-item__thumbnail"
            src="../../assets/img/placeholder@1x1.png"
          />
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
            <img src="../../assets/img/placeholder@1x1.png" />
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
            <img src="../../assets/img/placeholder@16x9.png" />
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
    <br />
    <lbz-list class="lbzui-rectangle" type="three-line" subheader="Three-line">
      <lbz-list-item>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.</span
          >
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text Lorem ipsum dolor sit amet</span
          >
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.</span
          >
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <img
            class="lbz-list-item__thumbnail"
            src="../../assets/img/placeholder@1x1.png"
          />
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text lorem ipsum dapibus, neque id cursus
            faucibus</span
          >
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--square">
            <img src="../../assets/img/placeholder@1x1.png" />
          </div>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text lorem ipsum dapibus, neque id cursus
            faucibus</span
          >
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item style="padding-left: 0;">
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--rectangle">
            <img src="../../assets/img/placeholder@16x9.png" />
          </div>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text lorem ipsum dapibus, neque</span
          >
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ tag: 'ul' (default), 'nav', 'x'</h3>
    <h3 class="lbz-typography--subtitle1">
      $ router-link: true, false (default)
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ router-link-props (router-link): { replace: true || false (default),
      append: true || false (default), exact: true || false (default), event:
      'click' (default) || 'x' || ['x'] }
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ item-tag: 'li' (default), 'a', 'x'
    </h3>

    <lbz-list
      class="lbzui-rectangle"
      tag="nav"
      router-link
      :router-link-props="{ exact: true }"
      item-tag="a"
      subheader="Router-link"
    >
      <lbz-list-item to="/components/list">Router-link item</lbz-list-item>
      <lbz-list-item :to="{ path: '/404' }">Router-link item</lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      tag="nav"
      item-tag="a"
      subheader="Non-router-link"
    >
      <lbz-list-item href="#/components/list">A item</lbz-list-item>
      <lbz-list-item href="#/404">A item</lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">
      $ on-background: 'primary', 'secondary', 'surface' (default), 'error',
      'light', 'dark'
    </h3>

    <lbz-list
      class="lbzui-rectangle lbzui-background--primary"
      type="two-line"
      on-background="primary"
      subheader="Primary"
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
      class="lbzui-rectangle lbzui-background--secondary"
      type="two-line"
      on-background="secondary"
      subheader="Secondary"
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
    <lbz-list class="lbzui-rectangle" type="two-line" subheader="Surface">
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
      class="lbzui-rectangle lbzui-background--error"
      type="two-line"
      on-background="error"
      subheader="Error"
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
      class="lbzui-rectangle lbzui-background--light"
      type="two-line"
      on-background="light"
      subheader="Light"
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
      class="lbzui-rectangle lbzui-background--dark"
      type="two-line"
      on-background="dark"
      subheader="Dark"
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

    <h3 class="lbz-typography--subtitle1">$ darkened: true, false (default)</h3>

    <lbz-list
      class="lbzui-rectangle lbzui-background--primary lbzui-is-darkened"
      type="two-line"
      on-background="primary"
      darkened
      subheader="Primary"
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
          <lbz-icon-button on-background="primary" darkened
            >more_vert</lbz-icon-button
          >
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle lbzui-background--secondary lbzui-is-darkened"
      type="two-line"
      on-background="secondary"
      darkened
      subheader="Secondary"
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
          <lbz-icon-button on-background="secondary" darkened
            >more_vert</lbz-icon-button
          >
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle lbzui-background--error lbzui-is-darkened"
      type="two-line"
      on-background="error"
      darkened
      subheader="Error"
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
          <lbz-icon-button on-background="error" darkened
            >more_vert</lbz-icon-button
          >
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle lbzui-background--light lbzui-is-darkened"
      type="two-line"
      on-background="light"
      darkened
      subheader="Light"
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
          <lbz-icon-button on-background="light" darkened
            >more_vert</lbz-icon-button
          >
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
      subheader="Nav"
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

    <h3 class="lbz-typography--subtitle1">
      $ dense: undefined (default), true, false
    </h3>

    <lbz-list class="lbzui-rectangle" dense subheader="Dense one-line">
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
          <img
            class="lbz-list-item__thumbnail"
            src="../../assets/img/placeholder@1x1.png"
          />
        </template>
        <template #center>Single-line item</template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--square">
            <img src="../../assets/img/placeholder@1x1.png" />
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
            <img src="../../assets/img/placeholder@16x9.png" />
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
      subheader="Non-dense one-line"
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
          <img
            class="lbz-list-item__thumbnail"
            src="../../assets/img/placeholder@1x1.png"
          />
        </template>
        <template #center>Single-line item</template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--square">
            <img src="../../assets/img/placeholder@1x1.png" />
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
            <img src="../../assets/img/placeholder@16x9.png" />
          </div>
        </template>
        <template #center>Single-line item</template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>
    <br />
    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      dense
      subheader="Dense two-line"
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
          <img
            class="lbz-list-item__thumbnail"
            src="../../assets/img/placeholder@1x1.png"
          />
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
            <img src="../../assets/img/placeholder@1x1.png" />
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
            <img src="../../assets/img/placeholder@16x9.png" />
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
      subheader="Non-dense two-line"
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
          <img
            class="lbz-list-item__thumbnail"
            src="../../assets/img/placeholder@1x1.png"
          />
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
            <img src="../../assets/img/placeholder@1x1.png" />
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
            <img src="../../assets/img/placeholder@16x9.png" />
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
    <br />
    <lbz-list
      class="lbzui-rectangle"
      type="three-line"
      dense
      subheader="Dense three-line"
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.</span
          >
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text Lorem ipsum dolor sit amet</span
          >
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.</span
          >
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <img
            class="lbz-list-item__thumbnail"
            src="../../assets/img/placeholder@1x1.png"
          />
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text lorem ipsum dapibus, neque id cursus
            faucibus</span
          >
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--square">
            <img src="../../assets/img/placeholder@1x1.png" />
          </div>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text lorem ipsum dapibus, neque id cursus
            faucibus</span
          >
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item style="padding-left: 0;">
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--rectangle">
            <img src="../../assets/img/placeholder@16x9.png" />
          </div>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text lorem ipsum dapibus, neque</span
          >
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
      subheader="Non-dense three-line"
    >
      <lbz-list-item>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.</span
          >
        </template>
        <template #end>
          <span class="lbz-typography--caption">meta</span>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #center>
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text Lorem ipsum dolor sit amet</span
          >
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.</span
          >
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <img
            class="lbz-list-item__thumbnail"
            src="../../assets/img/placeholder@1x1.png"
          />
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text lorem ipsum dapibus, neque id cursus
            faucibus</span
          >
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item>
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--square">
            <img src="../../assets/img/placeholder@1x1.png" />
          </div>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text lorem ipsum dapibus, neque id cursus
            faucibus</span
          >
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
      <lbz-list-item style="padding-left: 0;">
        <template #start>
          <div class="lbz-list-item__media lbz-list-item__media--rectangle">
            <img src="../../assets/img/placeholder@16x9.png" />
          </div>
        </template>
        <template #center>
          <span class="lbz-list-item__title">Three-line item</span>
          <span class="lbz-list-item__supporting-text"
            >Secondary line text lorem ipsum dapibus, neque</span
          >
        </template>
        <template #end>
          <lbz-icon-button>more_vert</lbz-icon-button>
        </template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">
      $ align: 'start' (default), 'center'
    </h3>
    <h3 class="lbz-typography--subtitle1">$ subheader: '' (default), 'x'</h3>

    <lbz-list class="lbzui-rectangle" subheader="Subheader">
      <lbz-list-item>Item</lbz-list-item>
    </lbz-list>
    <lbz-list class="lbzui-rectangle" align="center" subheader="Subheader">
      <lbz-list-item>
        <template #start>
          <lbz-icon>bluetooth</lbz-icon>
        </template>
        <template #center>Item</template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>

    <lbz-list
      class="lbzui-rectangle lbzui-background--primary"
      type="two-line"
      on-background="primary"
      subheader="Primary"
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
          <lbz-icon-button on-background="primary" disabled
            >more_vert</lbz-icon-button
          >
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle lbzui-background--secondary"
      type="two-line"
      on-background="secondary"
      subheader="Secondary"
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
          <lbz-icon-button on-background="secondary" disabled
            >more_vert</lbz-icon-button
          >
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle"
      type="two-line"
      subheader="Surface"
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
      class="lbzui-rectangle lbzui-background--error"
      type="two-line"
      on-background="error"
      subheader="Error"
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
          <lbz-icon-button on-background="error" disabled
            >more_vert</lbz-icon-button
          >
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle lbzui-background--light"
      type="two-line"
      on-background="light"
      subheader="Light"
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
          <lbz-icon-button on-background="light" disabled
            >more_vert</lbz-icon-button
          >
        </template>
      </lbz-list-item>
    </lbz-list>
    <lbz-list
      class="lbzui-rectangle lbzui-background--dark"
      type="two-line"
      on-background="dark"
      subheader="Dark"
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
          <lbz-icon-button on-background="dark" disabled
            >more_vert</lbz-icon-button
          >
        </template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">
      $ ripple: undefined (default), true, false
    </h3>

    <lbz-list class="lbzui-rectangle" subheader="Ripple" ripple>
      <lbz-list-item>Ripple item</lbz-list-item>
    </lbz-list>
    <lbz-list class="lbzui-rectangle" subheader="Non-ripple" :ripple="false">
      <lbz-list-item>Non-ripple item</lbz-list-item>
    </lbz-list>

    <h2 class="lbz-typography--h5"># List item</h2>

    <h3 class="lbz-typography--subtitle1">
      $ router-link: undefined (default), true, false
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ to (router-link): '' (default), 'x', { x: y }
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ tag: '' (default), 'li', 'a', 'x'
    </h3>

    <lbz-list
      class="lbzui-rectangle"
      tag="nav"
      :router-link-props="{ exact: true }"
      subheader="Router-link"
    >
      <lbz-list-item router-link to="/components/list" tag="a"
        >Router-link item</lbz-list-item
      >
      <lbz-list-item router-link :to="{ path: '/404' }" tag="a"
        >Router-link item</lbz-list-item
      >
    </lbz-list>
    <lbz-list class="lbzui-rectangle" tag="nav" subheader="Non-router-link">
      <lbz-list-item tag="a" href="#/components/list">A item</lbz-list-item>
      <lbz-list-item tag="a" href="#/404">A item</lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">$ selected: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">
      $ activated: true, false (default)
    </h3>
    <h3 class="lbz-typography--subtitle1">
      $ disabled: undefined (default), true, false
    </h3>

    <lbz-list class="lbzui-rectangle">
      <lbz-list-item :selected="vcheckbox">
        <template #start>
          <lbz-checkbox v-model="vcheckbox" color="primary" />
        </template>
        <template #center>
          <span class="lbz-list-item__title">Selected</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-checkbox v-model="vcheckbox" />
        </template>
      </lbz-list-item>
      <lbz-list-item activated>
        <template #start>
          <lbz-radio v-model="vradio" :value="true" color="primary" />
        </template>
        <template #center>
          <span class="lbz-list-item__title">Activated</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-radio v-model="vradio" :value="false" />
        </template>
      </lbz-list-item>
      <lbz-list-item disabled>
        <template #start>
          <lbz-switch v-model="vswitch" color="primary" disabled />
        </template>
        <template #center>
          <span class="lbz-list-item__title">Disabled</span>
          <span class="lbz-list-item__subtitle">Secondary text</span>
        </template>
        <template #end>
          <lbz-switch v-model="vswitch" disabled />
        </template>
      </lbz-list-item>
    </lbz-list>

    <h3 class="lbz-typography--subtitle1">
      $ ripple: undefined (default), true, false
    </h3>

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
    private vcheckbox = true;
    private vradio = true;
    private vswitch = true;

    private fclick(e: MouseEvent): void {
      alert(e);
    }
  }
</script>
