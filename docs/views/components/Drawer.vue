<template>
  <article class="lbzui-components-drawer">
    <h2 class="lbz-typography--h5"># Standard drawer</h2>

    <h3 class="lbz-typography--subtitle1">$ active.sync: true (default), false</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'modal', 'bottom (mobile only)'</h3>
    <lbz-button type="contained" @click.stop="ftoggle">{{ vactive0 ? 'Inactive' : 'Active' }}</lbz-button>
    <div class="lbzui-u-app">
      <lbz-drawer
        ref="drawer"
        :active.sync="vactive0"
        @open="fopen"
        @close="fclose"
      >
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :active="vlabel === item.label"
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
    <div class="lbzui-u-app">
      <lbz-drawer :active.sync="vactive0">
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :active="vlabel === item.label"
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

    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ subtitle: '' (default), 'x'</h3>
    <div class="lbzui-u-app">
      <lbz-drawer :active.sync="vactive0" title="Title">
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :active="vlabel === item.label"
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
    <div class="lbzui-u-app">
      <lbz-drawer
        :active.sync="vactive0"
        title="Title"
        subtitle="subtext"
      >
        <template #start>
          <img class="lbz-drawer__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :active="vlabel === item.label"
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

    <h2 class="lbz-typography--h5"># Modal drawer</h2>

    <h3 class="lbz-typography--subtitle1">$ active.sync: true (default), false</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'modal', 'bottom (mobile only)'</h3>
    <lbz-button type="contained" @click.stop="vactive1 = !vactive1">{{ vactive1 ? 'Inactive' : 'Active' }}</lbz-button>
    <div class="lbzui-u-app">
      <lbz-drawer :active.sync="vactive1" type="modal">
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :active="vlabel === item.label"
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

    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ subtitle: '' (default), 'x'</h3>
    <div class="lbzui-u-app">
      <lbz-drawer
        :active.sync="vactive1"
        type="modal"
        title="Title"
      >
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :active="vlabel === item.label"
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
    <div class="lbzui-u-app">
      <lbz-drawer
        :active.sync="vactive1"
        type="modal"
        title="Title"
        subtitle="subtext"
      >
        <template #start>
          <img class="lbz-drawer__avatar" src="../../assets/img/placeholder@1x1.png">
        </template>
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :active="vlabel === item.label"
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

    <h2 class="lbz-typography--h5"># Bottom drawer (mobile only)</h2>

    <h3 class="lbz-typography--subtitle1">$ active.sync: true (default), false</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'modal', 'bottom (mobile only)'</h3>
    <lbz-button type="contained" @click.stop="vactive2 = !vactive2">{{ vactive2 ? 'Inactive' : 'Active' }}</lbz-button>
    <div class="lbzui-u-app">
      <lbz-drawer :active.sync="vactive2" type="bottom">
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :active="vlabel === item.label"
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

    <h3 class="lbz-typography--subtitle1">$ full-screen (type === 'bottom'): true, false (default)</h3>
    <div class="lbzui-u-app">
      <lbz-drawer
        :active.sync="vactive2"
        type="bottom"
        full-screen
        title="Title"
      >
        <template #start>
          <lbz-icon-button>search</lbz-icon-button>
        </template>
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :active="vlabel === item.label"
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

    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ subtitle: '' (default), 'x'</h3>
    <div class="lbzui-u-app">
      <lbz-drawer
        :active.sync="vactive2"
        type="bottom"
        title="Title"
      >
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :active="vlabel === item.label"
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
    <div class="lbzui-u-app">
      <lbz-drawer
        :active.sync="vactive2"
        type="bottom"
        title="Title"
        subtitle="subtext"
      >
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of DESTINATIONS.primary"
              :key="item.label"
              :active="vlabel === item.label"
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

  private ftoggle(): void {
    this.rdrawer.ftoggle();
  }

  private fopen(): void {
    alert('Open');
  }

  private fclose(): void {
    alert('Close');
  }
}
</script>
