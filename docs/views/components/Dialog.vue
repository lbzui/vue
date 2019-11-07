<template>
  <article class="lbzui-components-dialog">
    <h2 class="lbz-typography--h5"># Alert dialog</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]active.sync: true, false</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'alert' (default), 'simple', 'confirmation', 'full-screen (mobile only)'</h3>
    <lbz-button @click.stop="valertOne = true">Alert</lbz-button>
    <lbz-dialog :active.sync="valertOne" ref="dialog" @open="fopen" @close="fclose">
      <template #center>Discard draft?</template>
      <template #end>
        <lbz-button @click.stop="fcancel()">Cancel</lbz-button>
        <lbz-button @click.stop="valertOne = false">Discard</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ append-to-body: true, false (default)</h3>
    <lbz-button @click.stop="valertTwo = true">Alert</lbz-button>
    <lbz-dialog :active.sync="valertTwo" append-to-body>
      <template #center>Discard draft?</template>
      <template #end>
        <lbz-button @click.stop="valertTwo = false">Cancel</lbz-button>
        <lbz-button @click.stop="valertTwo = false">Discard</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ stacked (['', 'alert', 'confirmation'].includes(type)): true, false (default)</h3>
    <lbz-button @click.stop="valertThree = true">Alert</lbz-button>
    <lbz-dialog :active.sync="valertThree" stacked>
      <template #center>Discard draft?</template>
      <template #end>
        <lbz-button @click.stop="valertThree = false">Cancel</lbz-button>
        <lbz-button @click.stop="valertThree = false">Discard</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <lbz-button @click.stop="valertFour = true">Alert</lbz-button>
    <lbz-dialog :active.sync="valertFour" title="Title goes here">
      <template #center>Discard draft?</template>
      <template #end>
        <lbz-button @click.stop="valertFour = false">Cancel</lbz-button>
        <lbz-button @click.stop="valertFour = false">Discard</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ content-height (type !== 'full-screen'): '' (default), 'x'</h3>
    <lbz-button @click.stop="valertFive = true">Alert</lbz-button>
    <lbz-dialog :active.sync="valertFive" content-height="180px">
      <template #center>Discard draft?</template>
      <template #end>
        <lbz-button @click.stop="valertFive = false">Cancel</lbz-button>
        <lbz-button @click.stop="valertFive = false">Discard</lbz-button>
      </template>
    </lbz-dialog>

    <h2 class="lbz-typography--h5"># Simple dialog</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]active.sync: true, false</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'alert' (default), 'simple', 'confirmation', 'full-screen (mobile only)'</h3>
    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <lbz-button @click.stop="vsimpleOne = true">Simple</lbz-button>
    <lbz-dialog :active.sync="vsimpleOne" type="simple" title="Set backup account">
      <template #center>
        <lbz-list dense>
          <lbz-list-item
            v-for="(item, index) of vsimpleList"
            :key="index"
            @click.stop="vsimpleOne = false"
          >
            <template #start>
              <lbz-icon>{{ item.icon }}</lbz-icon>
            </template>
            <template #center>{{ item.label }}</template>
          </lbz-list-item>
        </lbz-list>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ append-to-body: true, false (default)</h3>
    <lbz-button @click.stop="vsimpleTwo = true">Simple</lbz-button>
    <lbz-dialog :active.sync="vsimpleTwo" type="simple" append-to-body title="Set backup account">
      <template #center>
        <lbz-list dense>
          <lbz-list-item
            v-for="(item, index) of vsimpleList"
            :key="index"
            @click.stop="vsimpleTwo = false"
          >
            <template #start>
              <lbz-icon>{{ item.icon }}</lbz-icon>
            </template>
            <template #center>{{ item.label }}</template>
          </lbz-list-item>
        </lbz-list>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ content-height (type !== 'full-screen'): '' (default), 'x'</h3>
    <lbz-button @click.stop="vsimpleThree = true">Simple</lbz-button>
    <lbz-dialog :active.sync="vsimpleThree" type="simple" title="Set backup account" content-height="360px">
      <template #center>
        <lbz-list dense>
          <lbz-list-item
            v-for="(item, index) of vsimpleList"
            :key="index"
            @click.stop="vsimpleThree = false"
          >
            <template #start>
              <lbz-icon>{{ item.icon }}</lbz-icon>
            </template>
            <template #center>{{ item.label }}</template>
          </lbz-list-item>
        </lbz-list>
      </template>
    </lbz-dialog>

    <h2 class="lbz-typography--h5"># Confirmation dialog</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]active.sync: true, false</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'alert' (default), 'simple', 'confirmation', 'full-screen (mobile only)'</h3>
    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <lbz-button @click.stop="vconfirmationOne = true">Confirmation</lbz-button>
    <lbz-dialog :active.sync="vconfirmationOne" type="confirmation" title="Title goes here">
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</template>
      <template #end>
        <lbz-button @click.stop="vconfirmationOne = false">Cancel</lbz-button>
        <lbz-button @click.stop="vconfirmationOne = false">OK</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ append-to-body: true, false (default)</h3>
    <lbz-button @click.stop="vconfirmationTwo = true">Confirmation</lbz-button>
    <lbz-dialog :active.sync="vconfirmationTwo" type="confirmation" append-to-body title="Title goes here">
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</template>
      <template #end>
        <lbz-button @click.stop="vconfirmationTwo = false">Cancel</lbz-button>
        <lbz-button @click.stop="vconfirmationTwo = false">OK</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ scrollable (type === 'confirmation'): true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ content-height (type !== 'full-screen'): '' (default), 'x'</h3>
    <lbz-button @click.stop="vconfirmationThree = true">Confirmation</lbz-button>
    <lbz-dialog :active.sync="vconfirmationThree" type="confirmation" scrollable title="Title goes here" content-height="180px">
      <template #center>
        <lbz-list dense>
          <lbz-list-item
            v-for="item in 10"
            :key="item"
            @click.stop="vradio = item"
          >
            <template #start>
              <lbz-radio v-model="vradio" :value="item"></lbz-radio>
            </template>
            <template #center>Item {{ item }}</template>
          </lbz-list-item>
        </lbz-list>
      </template>
      <template #end>
        <lbz-button @click.stop="vconfirmationThree = false">Cancel</lbz-button>
        <lbz-button @click.stop="vconfirmationThree = false">OK</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ stacked (['', 'alert', 'confirmation'].includes(type)): true, false (default)</h3>
    <lbz-button @click.stop="vconfirmationFour = true">Confirmation</lbz-button>
    <lbz-dialog :active.sync="vconfirmationFour" type="confirmation" stacked title="Title goes here">
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</template>
      <template #end>
        <lbz-button @click.stop="vconfirmationFour = false">Turn on speed boost</lbz-button>
        <lbz-button @click.stop="vconfirmationFour = false">No thanks</lbz-button>
      </template>
    </lbz-dialog>

    <h2 class="lbz-typography--h5"># Full-screen dialog</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]active.sync: true, false</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'alert' (default), 'simple', 'confirmation', 'full-screen (mobile only)'</h3>
    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <lbz-button @click.stop="vfullScreenOne = true">Full-screen</lbz-button>
    <lbz-dialog :active.sync="vfullScreenOne" type="full-screen" title="Title goes here">
      <template #start>
        <!-- Save, Send, Share, Update, or Create -->
        <lbz-button @click.stop="vfullScreenOne = false">Action</lbz-button>
      </template>
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ append-to-body: true, false (default)</h3>
    <lbz-button @click.stop="vfullScreenTwo = true">Full-screen</lbz-button>
    <lbz-dialog :active.sync="vfullScreenTwo" type="full-screen" append-to-body title="Title goes here">
      <template #start>
        <!-- Save, Send, Share, Update, or Create -->
        <lbz-button @click.stop="vfullScreenTwo = false">Action</lbz-button>
      </template>
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</template>
    </lbz-dialog>
  </article>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator';

@Component
export default class Dialog extends Vue {
  @Ref('dialog') private rdialog!: HTMLFormElement;

  private valertOne: boolean = false;
  private valertTwo: boolean = false;
  private valertThree: boolean = false;
  private valertFour: boolean = false;
  private valertFive: boolean = false;

  private vsimpleOne: boolean = false;
  private vsimpleTwo: boolean = false;
  private vsimpleThree: boolean = false;
  private vsimpleList: any[] = [
    {
      icon: 'account_circle',
      label: 'user1@example.com',
    },
    {
      icon: 'account_circle',
      label: 'user2@example.com',
    },
    {
      icon: 'add_circle',
      label: 'Add account',
    },
  ];

  private vconfirmationOne: boolean = false;
  private vconfirmationTwo: boolean = false;
  private vconfirmationThree: boolean = false;
  private vradio: number = 0;
  private vconfirmationFour: boolean = false;

  private vfullScreenOne: boolean = false;
  private vfullScreenTwo: boolean = false;

  private fopen(): void {
    alert('Open');
  }

  private fclose(): void {
    alert('Close');
  }

  private fcancel(): void {
    this.rdialog.fclose();
  }
}
</script>
