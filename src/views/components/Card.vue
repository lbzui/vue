<template>
  <main>
    <p class="lbz-typography--body1">Elevated card</p>
    <lbz-card>
      <template #center>
        <div class="lbz-card__primary">
          <section class="lbz-card__primary__center">
            <h3 class="lbz-card__title">Title goes here</h3>
            <p class="lbz-card__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </section>
          <section class="lbz-card__primary__end">
            <div class="lbz-card__media">
              <img src="../../assets/img/logo.png">
            </div>
          </section>
        </div>
      </template>
      <template #end>
        <section class="lbz-card__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </section>
        <section class="lbz-card__icons">
          <lbz-icon-button>favorite</lbz-icon-button>
          <lbz-icon-button>share</lbz-icon-button>
        </section>
      </template>
    </lbz-card>
    <lbz-card elevated>
      <template #start>
        <section class="lbz-card__primary__start">
          <img class="lbz-card__thumbnail" src="../../assets/img/logo.png">
        </section>
        <section class="lbz-card__primary__center">
          <h3 class="lbz-card__title">Title goes here</h3>
          <h4 class="lbz-card__subtitle">Secondary text</h4>
        </section>
        <section class="lbz-card__primary__end">
          <lbz-icon-button>more_vert</lbz-icon-button>
        </section>
      </template>
      <template #center>
        <div class="lbz-card__media lbz-card__media--16x9">
          <img src="../../assets/img/logo.png">
        </div>
        <p class="lbz-card__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </template>
      <template #end>
        <section class="lbz-card__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </section>
        <section class="lbz-card__icons">
          <lbz-icon-button>favorite</lbz-icon-button>
          <lbz-icon-button>share</lbz-icon-button>
        </section>
      </template>
    </lbz-card>
    <lbz-card elevated>
      <template #center>
        <div class="lbz-card__primary">
          <section class="lbz-card__primary__start">
            <img class="lbz-card__thumbnail" src="../../assets/img/logo.png">
          </section>
          <section class="lbz-card__primary__center">
            <h3 class="lbz-card__title">Title goes here</h3>
            <h4 class="lbz-card__subtitle">Secondary text</h4>
          </section>
          <section class="lbz-card__primary__end">
            <lbz-icon-button>more_vert</lbz-icon-button>
          </section>
        </div>
        <div class="lbz-card__media lbz-card__media--16x9">
          <img src="../../assets/img/logo.png">
        </div>
        <p class="lbz-card__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </template>
      <template #end>
        <section class="lbz-card__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </section>
        <section class="lbz-card__icons">
          <lbz-icon-button>favorite</lbz-icon-button>
          <lbz-icon-button>share</lbz-icon-button>
        </section>
      </template>
    </lbz-card>
    <lbz-card>
      <template #center>
        <div class="lbz-card__media lbz-card__media--16x9">
          <img src="../../assets/img/logo.png">
        </div>
        <div class="lbz-card__primary">
          <section class="lbz-card__primary__center">
            <h3 class="lbz-card__title">Title goes here</h3>
            <h4 class="lbz-card__subtitle">Secondary text</h4>
          </section>
        </div>
        <p class="lbz-card__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </template>
      <template #end>
        <section class="lbz-card__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </section>
        <section class="lbz-card__icons">
          <lbz-icon-button>favorite</lbz-icon-button>
          <lbz-icon-button>share</lbz-icon-button>
        </section>
      </template>
    </lbz-card>
    <lbz-card>
      <template #center>
        <div class="lbz-card__media lbz-card__media--16x9">
          <img src="../../assets/img/logo.png">
        </div>
        <div class="lbz-card__primary">
          <section class="lbz-card__primary__center">
            <h3 class="lbz-card__title">Title goes here</h3>
            <h4 class="lbz-card__subtitle">Secondary text</h4>
          </section>
        </div>
        <lbz-divider/>
        <p class="lbz-card__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </template>
      <template #end>
        <section class="lbz-card__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </section>
        <section class="lbz-card__icons">
          <lbz-icon-button>favorite</lbz-icon-button>
          <lbz-icon-button>share</lbz-icon-button>
        </section>
      </template>
    </lbz-card>

    <p class="lbz-typography--body1">Outlined card</p>
    <lbz-card type="outlined">
      <template #center>
        <div class="lbz-card__primary">
          <section class="lbz-card__primary__center">
            <span class="lbz-typography--overline">Overline</span>
            <h3 class="lbz-card__title">Title goes here</h3>
            <p class="lbz-card__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </section>
          <section class="lbz-card__primary__end">
            <div class="lbz-card__media">
              <img src="../../assets/img/logo.png">
            </div>
          </section>
        </div>
      </template>
      <template #end>
        <section class="lbz-card__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </section>
        <section class="lbz-card__icons">
          <lbz-icon-button>favorite</lbz-icon-button>
          <lbz-icon-button>share</lbz-icon-button>
        </section>
      </template>
    </lbz-card>
    <lbz-card type="outlined" elevated>
      <template #center>
        <div class="lbz-card__primary">
          <section class="lbz-card__primary__center">
            <span class="lbz-typography--overline">Overline</span>
            <h3 class="lbz-card__title">Title goes here</h3>
            <p class="lbz-card__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </section>
          <section class="lbz-card__primary__end">
            <div class="lbz-card__media">
              <img src="../../assets/img/logo.png">
            </div>
          </section>
        </div>
      </template>
      <template #end>
        <section class="lbz-card__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </section>
        <section class="lbz-card__icons">
          <lbz-icon-button>favorite</lbz-icon-button>
          <lbz-icon-button>share</lbz-icon-button>
        </section>
      </template>
    </lbz-card>
  </main>
</template>

<style lang="less">
.lbz-card {
  width: 360px;
  margin-bottom: 16px;
}
</style>
