<template>
  <article>
    <h2 class="lbz-typography--h5"># Elevated card</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'elevated' (default), 'outlined'</h3>
    <lbz-card>
      <template #start>
        <div class="lbz-card__header__center">
          <h3 class="lbz-card__title">Title goes here</h3>
          <h4 class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</h4>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-card__media lbz-u-aspect-ratio--1x1">
            <img src="../../assets/img/logo.png">
          </div>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </div>
        <div class="lbz-card__actions__icons">
          <lbz-icon-button>favorite</lbz-icon-button>
          <lbz-icon-button>share</lbz-icon-button>
        </div>
      </template>
    </lbz-card>
    <lbz-card>
      <template #start>
        <div class="lbz-card__header__start">
          <img class="lbz-card__avatar" src="../../assets/img/logo.png">
        </div>
        <div class="lbz-card__header__center">
          <h3 class="lbz-card__title">Title goes here</h3>
          <h4 class="lbz-card__subtitle">Secondary text</h4>
        </div>
        <div class="lbz-card__header__end">
          <lbz-icon-button>more_vert</lbz-icon-button>
        </div>
      </template>
      <template #center>
        <div class="lbz-card__media lbz-u-aspect-ratio--16x9">
          <img src="../../assets/img/logo.png">
        </div>
        <p class="lbz-card__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </div>
        <div class="lbz-card__actions__icons">
          <lbz-icon-button>favorite</lbz-icon-button>
          <lbz-icon-button>share</lbz-icon-button>
        </div>
      </template>
    </lbz-card>
    <lbz-card>
      <template #center>
        <div class="lbz-card__media lbz-u-aspect-ratio--16x9">
          <img src="../../assets/img/logo.png">
        </div>
        <div class="lbz-card__supporting-text">
          <h3 class="lbz-card__title">Title goes here</h3>
          <h4 class="lbz-card__subtitle">Secondary text</h4>
          <lbz-divider/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </div>
        <div class="lbz-card__actions__icons">
          <lbz-icon-button>favorite</lbz-icon-button>
          <lbz-icon-button>share</lbz-icon-button>
        </div>
      </template>
    </lbz-card>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-card ripple>
      <template #start>
        <div class="lbz-card__header__center">
          <h3 class="lbz-card__title">Title goes here</h3>
          <h4 class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</h4>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-card__media lbz-u-aspect-ratio--1x1">
            <img src="../../assets/img/logo.png">
          </div>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </div>
        <div class="lbz-card__actions__icons">
          <lbz-icon-button>favorite</lbz-icon-button>
          <lbz-icon-button>share</lbz-icon-button>
        </div>
      </template>
    </lbz-card>
    <lbz-card :ripple="false">
      <template #start>
        <div class="lbz-card__header__center">
          <h3 class="lbz-card__title">Title goes here</h3>
          <h4 class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</h4>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-card__media lbz-u-aspect-ratio--1x1">
            <img src="../../assets/img/logo.png">
          </div>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </div>
        <div class="lbz-card__actions__icons">
          <lbz-icon-button>favorite</lbz-icon-button>
          <lbz-icon-button>share</lbz-icon-button>
        </div>
      </template>
    </lbz-card>

    <h2 class="lbz-typography--h5"># Outlined card</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'elevated' (default), 'outlined'</h3>
    <lbz-card type="outlined">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <h3 class="lbz-card__title">Title goes here</h3>
          <h4 class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</h4>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-card__media lbz-u-aspect-ratio--1x1">
            <img src="../../assets/img/logo.png">
          </div>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </div>
        <div class="lbz-card__actions__icons">
          <lbz-icon-button>favorite</lbz-icon-button>
          <lbz-icon-button>share</lbz-icon-button>
        </div>
      </template>
    </lbz-card>

    <h3 class="lbz-typography--subtitle1">$ ripple: true (default), false</h3>
    <lbz-card type="outlined" ripple>
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <h3 class="lbz-card__title">Title goes here</h3>
          <h4 class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</h4>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-card__media lbz-u-aspect-ratio--1x1">
            <img src="../../assets/img/logo.png">
          </div>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </div>
        <div class="lbz-card__actions__icons">
          <lbz-icon-button>favorite</lbz-icon-button>
          <lbz-icon-button>share</lbz-icon-button>
        </div>
      </template>
    </lbz-card>
    <lbz-card type="outlined" :ripple="false">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <h3 class="lbz-card__title">Title goes here</h3>
          <h4 class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</h4>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-card__media lbz-u-aspect-ratio--1x1">
            <img src="../../assets/img/logo.png">
          </div>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </div>
        <div class="lbz-card__actions__icons">
          <lbz-icon-button>favorite</lbz-icon-button>
          <lbz-icon-button>share</lbz-icon-button>
        </div>
      </template>
    </lbz-card>
  </article>
</template>
