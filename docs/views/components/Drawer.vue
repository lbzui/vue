<template>
  <article class="lbzui-components-drawer">
    <h2 class="lbz-typography--h5"># Standard drawer</h2>

    <h3 class="lbz-typography--subtitle1">$ active.sync: true (default), false</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'modal', 'bottom (mobile only)'</h3>
    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ subtitle: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ lock-body-scroll: true (default), false</h3>

    <lbz-button type="contained" @click.stop="ftoggleActive">{{ vactive0 ? 'Inactive' : 'Active' }}</lbz-button>
    <div class="lbzui-app">
      <lbz-drawer
        ref="drawer"
        :active.sync="vactive0"
        :lock-body-scroll="false"
        @open="fbeforeOpen"
        @close="fbeforeClose"
      >
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >{{ item.label }}</lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">{{ item.label }}</lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">{{ item.label }}</lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive0"
        title="Title"
        :lock-body-scroll="false"
      >
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive0"
        title="Title"
        subtitle="subtext"
        :lock-body-scroll="false"
      >
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>

    <h3 class="lbz-typography--subtitle1">$ background (auto-darkened): 'primary', 'secondary', 'surface' (default), 'light', 'dark'</h3>

    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive0"
        background="primary"
        title="Title"
        subtitle="subtext"
        :lock-body-scroll="false"
      >
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            on-background="primary"
            darkened
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="primary" darkened/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="primary" darkened/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive0"
        background="secondary"
        title="Title"
        subtitle="subtext"
        :lock-body-scroll="false"
      >
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            on-background="secondary"
            darkened
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="secondary" darkened/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="secondary" darkened/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive0"
        title="Title"
        subtitle="subtext"
        :lock-body-scroll="false"
      >
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive0"
        background="light"
        title="Title"
        subtitle="subtext"
        :lock-body-scroll="false"
      >
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            on-background="light"
            darkened
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="light" darkened/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="light" darkened/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive0"
        background="dark"
        title="Title"
        subtitle="subtext"
        :lock-body-scroll="false"
      >
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            on-background="dark"
            darkened
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="dark" darkened/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="dark" darkened/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>

    <h2 class="lbz-typography--h5"># Modal drawer</h2>

    <h3 class="lbz-typography--subtitle1">$ active.sync: true (default), false</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'modal', 'bottom (mobile only)'</h3>
    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ subtitle: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ lock-body-scroll: true (default), false</h3>

    <lbz-button type="contained" @click.stop="vactive1 = !vactive1">{{ vactive1 ? 'Inactive' : 'Active' }}</lbz-button>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive1"
        type="modal"
        :lock-body-scroll="false"
      >
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive1"
        type="modal"
        title="Title"
        :lock-body-scroll="false"
      >
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive1"
        type="modal"
        title="Title"
        subtitle="subtext"
        :lock-body-scroll="false"
      >
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive1"
        type="modal"
        title="Title"
        subtitle="subtext"
        :lock-body-scroll="false"
      >
        <template #start>
          <img class="lbz-drawer__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #append>
          <lbz-divider/>
        </template>
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>

    <h3 class="lbz-typography--subtitle1">$ background (auto-darkened): 'primary', 'secondary', 'surface' (default), 'light', 'dark'</h3>

    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive1"
        type="modal"
        background="primary"
        title="Title"
        subtitle="subtext"
        :lock-body-scroll="false"
      >
        <template #start>
          <img class="lbz-drawer__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #append>
          <lbz-divider on-background="primary" darkened/>
        </template>
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            on-background="primary"
            darkened
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="primary" darkened/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="primary" darkened/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive1"
        type="modal"
        background="secondary"
        title="Title"
        subtitle="subtext"
        :lock-body-scroll="false"
      >
        <template #start>
          <img class="lbz-drawer__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #append>
          <lbz-divider on-background="secondary" darkened/>
        </template>
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            on-background="secondary"
            darkened
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="secondary" darkened/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="secondary" darkened/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive1"
        type="modal"
        title="Title"
        subtitle="subtext"
        :lock-body-scroll="false"
      >
        <template #start>
          <img class="lbz-drawer__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #append>
          <lbz-divider/>
        </template>
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive1"
        type="modal"
        background="light"
        title="Title"
        subtitle="subtext"
        :lock-body-scroll="false"
      >
        <template #start>
          <img class="lbz-drawer__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #append>
          <lbz-divider on-background="light" darkened/>
        </template>
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            on-background="light"
            darkened
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="light" darkened/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="light" darkened/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive1"
        type="modal"
        background="dark"
        title="Title"
        subtitle="subtext"
        :lock-body-scroll="false"
      >
        <template #start>
          <img class="lbz-drawer__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #append>
          <lbz-divider on-background="dark" darkened/>
        </template>
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            on-background="dark"
            darkened
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="dark" darkened/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="dark" darkened/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>

    <h2 class="lbz-typography--h5"># Bottom drawer (mobile only)</h2>

    <h3 class="lbz-typography--subtitle1">$ active.sync: true (default), false</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'modal', 'bottom (mobile only)'</h3>
    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ subtitle: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ lock-body-scroll: true (default), false</h3>

    <lbz-button type="contained" @click.stop="vactive2 = !vactive2">{{ vactive2 ? 'Inactive' : 'Active' }}</lbz-button>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive2"
        type="bottom"
        :lock-body-scroll="false"
      >
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive2"
        type="bottom"
        title="Title"
        :lock-body-scroll="false"
      >
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive2"
        type="bottom"
        title="Title"
        subtitle="subtext"
        :lock-body-scroll="false"
      >
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive2"
        type="bottom"
        title="Title"
        subtitle="subtext"
        :lock-body-scroll="false"
      >
        <template #start>
          <img class="lbz-drawer__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #append>
          <lbz-divider/>
        </template>
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>

    <h3 class="lbz-typography--subtitle1">$ background (auto-darkened): 'primary', 'secondary', 'surface' (default), 'light', 'dark'</h3>
    <h3 class="lbz-typography--subtitle1">$ full-screen (type === 'bottom'): true, false (default)</h3>

    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive2"
        background="primary"
        type="bottom"
        full-screen
        title="Title"
        :lock-body-scroll="false"
      >
        <template #start>
          <lbz-icon-button on-background="primary" darkened>search</lbz-icon-button>
        </template>
        <template #append>
          <lbz-divider on-background="primary" darkened/>
        </template>
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            on-background="primary"
            darkened
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="primary" darkened/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="primary" darkened/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive2"
        background="secondary"
        type="bottom"
        full-screen
        title="Title"
        :lock-body-scroll="false"
      >
        <template #start>
          <lbz-icon-button on-background="secondary" darkened>search</lbz-icon-button>
        </template>
        <template #append>
          <lbz-divider on-background="secondary" darkened/>
        </template>
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            on-background="secondary"
            darkened
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="secondary" darkened/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="secondary" darkened/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive2"
        type="bottom"
        full-screen
        title="Title"
        :lock-body-scroll="false"
      >
        <template #start>
          <lbz-icon-button>search</lbz-icon-button>
        </template>
        <template #append>
          <lbz-divider/>
        </template>
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive2"
        background="light"
        type="bottom"
        full-screen
        title="Title"
        :lock-body-scroll="false"
      >
        <template #start>
          <lbz-icon-button on-background="light" darkened>search</lbz-icon-button>
        </template>
        <template #append>
          <lbz-divider on-background="light" darkened/>
        </template>
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            on-background="light"
            darkened
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="light" darkened/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="light" darkened/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-app">
      <lbz-drawer
        :active.sync="vactive2"
        background="dark"
        type="bottom"
        full-screen
        title="Title"
        :lock-body-scroll="false"
      >
        <template #start>
          <lbz-icon-button on-background="dark" darkened>search</lbz-icon-button>
        </template>
        <template #append>
          <lbz-divider on-background="dark" darkened/>
        </template>
        <template #center>
          <lbz-list
            tag="nav"
            item-tag="a"
            on-background="dark"
            darkened
            nav
          >
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :activated="vlabel === item.label"
              @click.stop="vlabel = item.label"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="dark" darkened/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of DESTINATIONS.secondary" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider on-background="dark" darkened/>
            <lbz-list-item v-for="item of DESTINATIONS.unrelated" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsDrawer extends Vue {
  @Ref('drawer') private rdrawer!: HTMLFormElement;

  private DESTINATIONS: object = {
    primary: [
      {
        icon: 'mail',
        label: 'Inbox',
      },
      {
        icon: 'send',
        label: 'Outbox',
      },
      {
        icon: 'favorite',
        label: 'Favorites',
      },
      {
        icon: 'archive',
        label: 'Archive',
      },
      {
        icon: 'delete',
        label: 'Trash',
      },
      {
        icon: 'report',
        label: 'Spam',
      },
    ],
    secondary: [
      {
        icon: 'bookmark',
        label: 'Family',
      },
      {
        icon: 'bookmark',
        label: 'Friends',
      },
      {
        icon: 'bookmark',
        label: 'Work',
      },
    ],
    unrelated: [
      {
        icon: 'settings',
        label: 'Settings & account',
      },
      {
        icon: 'feedback',
        label: 'Help & feedback',
      },
    ],
  };

  private vlabel: string = 'Inbox';
  private vactive0: boolean = true;
  private vactive1: boolean = true;
  private vactive2: boolean = true;

  private ftoggleActive(): void {
    this.rdrawer.ftoggle();
  }

  private fbeforeOpen(): void {
    console.log('Drawer will be opened');
  }

  private fbeforeClose(): void {
    console.log('Drawer will be closed');
  }
}
</script>
