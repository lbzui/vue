<template>
  <article class="lbzui-components-drawer">
    <h2 class="lbz-typography--h5"># Standard drawer</h2>

    <h3 class="lbz-typography--subtitle1">$ active.sync: true (default), false</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'standard' (default), 'modal', 'bottom (mobile only)'</h3>
    <lbz-button type="contained" @click.stop="ftoggle">{{ vactiveOne ? 'Inactive' : 'Active' }}</lbz-button>
    <div class="lbzui-rectangle">
      <lbz-drawer :active.sync="vactiveOne" ref="drawer" @open="fopen" @close="fclose">
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of vprimaryDestinations"
              :key="item.path"
              router-link
              :to="item.path"
            >{{ item.label }}</lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of vsecondaryDestinations" :key="item.label">{{ item.label }}</lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of vunrelatedDestinations" :key="item.label">{{ item.label }}</lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-rectangle">
      <lbz-drawer :active.sync="vactiveOne">
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of vprimaryDestinations"
              :key="item.path"
              router-link
              :to="item.path"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of vsecondaryDestinations" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of vunrelatedDestinations" :key="item.label">
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
    <div class="lbzui-rectangle">
      <lbz-drawer :active.sync="vactiveOne" title="Title">
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of vprimaryDestinations"
              :key="item.path"
              router-link
              :to="item.path"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of vsecondaryDestinations" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of vunrelatedDestinations" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-rectangle">
      <lbz-drawer :active.sync="vactiveOne" title="Title" subtitle="Subtitle">
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of vprimaryDestinations"
              :key="item.path"
              router-link
              :to="item.path"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of vsecondaryDestinations" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of vunrelatedDestinations" :key="item.label">
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
    <lbz-button type="contained" @click.stop="vactiveTwo = !vactiveTwo">{{ vactiveTwo ? 'Inactive' : 'Active' }}</lbz-button>
    <div class="lbzui-rectangle">
      <lbz-drawer :active.sync="vactiveTwo" type="modal">
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of vprimaryDestinations"
              :key="item.path"
              router-link
              :to="item.path"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of vsecondaryDestinations" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of vunrelatedDestinations" :key="item.label">
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
    <div class="lbzui-rectangle">
      <lbz-drawer :active.sync="vactiveTwo" type="modal" title="Title">
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of vprimaryDestinations"
              :key="item.path"
              router-link
              :to="item.path"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of vsecondaryDestinations" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of vunrelatedDestinations" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-rectangle">
      <lbz-drawer :active.sync="vactiveTwo" type="modal" title="Title" subtitle="Subtitle">
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of vprimaryDestinations"
              :key="item.path"
              router-link
              :to="item.path"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of vsecondaryDestinations" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of vunrelatedDestinations" :key="item.label">
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
    <lbz-button type="contained" @click.stop="vactiveThree = !vactiveThree">{{ vactiveThree ? 'Inactive' : 'Active' }}</lbz-button>
    <div class="lbzui-rectangle">
      <lbz-drawer :active.sync="vactiveThree" type="bottom">
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of vprimaryDestinations"
              :key="item.path"
              router-link
              :to="item.path"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of vsecondaryDestinations" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of vunrelatedDestinations" :key="item.label">
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
    <div class="lbzui-rectangle">
      <lbz-drawer :active.sync="vactiveThree" type="bottom" full-screen title="Title">
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of vprimaryDestinations"
              :key="item.path"
              router-link
              :to="item.path"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of vsecondaryDestinations" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of vunrelatedDestinations" :key="item.label">
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
    <div class="lbzui-rectangle">
      <lbz-drawer :active.sync="vactiveThree" type="bottom" title="Title">
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of vprimaryDestinations"
              :key="item.path"
              router-link
              :to="item.path"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of vsecondaryDestinations" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of vunrelatedDestinations" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
          </lbz-list>
        </template>
      </lbz-drawer>
    </div>
    <div class="lbzui-rectangle">
      <lbz-drawer :active.sync="vactiveThree" type="bottom" title="Title" subtitle="Subtitle">
        <template #center>
          <lbz-list tag="nav" item-tag="a">
            <lbz-list-item
              v-for="item of vprimaryDestinations"
              :key="item.path"
              router-link
              :to="item.path"
            >
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <span class="lbz-list__subtitle">Labels</span>
            <lbz-list-item v-for="item of vsecondaryDestinations" :key="item.label">
              <template #start>
                <lbz-icon>{{ item.icon }}</lbz-icon>
              </template>
              <template #center>{{ item.label }}</template>
            </lbz-list-item>
            <lbz-divider/>
            <lbz-list-item v-for="item of vunrelatedDestinations" :key="item.label">
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
export default class Drawer extends Vue {
  @Ref('drawer') private drawer!: HTMLFormElement;

  private vprimaryDestinations: any[] = [
    {
      path: '/components/backdrop',
      icon: 'inbox',
      label: 'Inbox',
    },
    {
      path: '/components/button',
      icon: 'send',
      label: 'Outbox',
    },
    {
      path: '/components/card',
      icon: 'favorite',
      label: 'Favorites',
    },
    {
      path: '/components/dialog',
      icon: 'archive',
      label: 'Archive',
    },
    {
      path: '/components/divider',
      icon: 'delete',
      label: 'Trash',
    },
    {
      path: '/components/drawer',
      icon: 'report',
      label: 'Spam',
    },
  ];
  private vsecondaryDestinations: any[] = [
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
  ];
  private vunrelatedDestinations: any[] = [
    {
      icon: 'settings',
      label: 'Settings & account',
    },
    {
      icon: 'feedback',
      label: 'Help & feedback',
    },
  ];
  private vactiveOne: boolean = true;
  private vactiveTwo: boolean = true;
  private vactiveThree: boolean = true;

  private ftoggle() {
    this.drawer.ftoggle();
  }

  private fopen() {
    alert('Open');
  }

  private fclose() {
    alert('Close');
  }
}
</script>
