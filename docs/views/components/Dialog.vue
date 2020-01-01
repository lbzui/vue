<template>
  <article class="lbzui-components-dialog">
    <h2 class="lbz-typography--h5"># Alert dialog</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]active.sync: true, false</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'alert' (default), 'simple', 'confirmation', 'full-screen (mobile only)'</h3>
    <lbz-button @click.stop="valert0 = true">Alert</lbz-button>
    <lbz-dialog
      ref="dialog"
      :active.sync="valert0"
      @open="fopen"
      @close="fclose"
    >
      <template #center>Discard draft?</template>
      <template #end>
        <lbz-button @click.stop="fcancel()">Cancel</lbz-button>
        <lbz-button @click.stop="valert0 = false">Discard</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ append-to-body: true, false (default)</h3>
    <lbz-button @click.stop="valert1 = true">Alert</lbz-button>
    <lbz-dialog :active.sync="valert1" append-to-body>
      <template #center>Discard draft?</template>
      <template #end>
        <lbz-button @click.stop="valert1 = false">Cancel</lbz-button>
        <lbz-button @click.stop="valert1 = false">Discard</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ lock-scroll: true (default), false</h3>
    <lbz-button @click.stop="valert2 = true">Alert</lbz-button>
    <lbz-dialog :active.sync="valert2" :lock-scroll="false">
      <template #center>Discard draft?</template>
      <template #end>
        <lbz-button @click.stop="valert2 = false">Cancel</lbz-button>
        <lbz-button @click.stop="valert2 = false">Discard</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ stacked (['', 'alert', 'confirmation'].includes(type)): true, false (default)</h3>
    <lbz-button @click.stop="valert3 = true">Alert</lbz-button>
    <lbz-dialog :active.sync="valert3" stacked>
      <template #center>Discard draft?</template>
      <template #end>
        <lbz-button @click.stop="valert3 = false">Cancel</lbz-button>
        <lbz-button @click.stop="valert3 = false">Discard</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <lbz-button @click.stop="valert4 = true">Alert</lbz-button>
    <lbz-dialog :active.sync="valert4" title="Title goes here">
      <template #center>Discard draft?</template>
      <template #end>
        <lbz-button @click.stop="valert4 = false">Cancel</lbz-button>
        <lbz-button @click.stop="valert4 = false">Discard</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ content-height (type !== 'full-screen'): '' (default), 'x'</h3>
    <lbz-button @click.stop="valert5 = true">Alert</lbz-button>
    <lbz-dialog :active.sync="valert5" content-height="180px">
      <template #center>Discard draft?</template>
      <template #end>
        <lbz-button @click.stop="valert5 = false">Cancel</lbz-button>
        <lbz-button @click.stop="valert5 = false">Discard</lbz-button>
      </template>
    </lbz-dialog>

    <h2 class="lbz-typography--h5"># Simple dialog</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]active.sync: true, false</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'alert' (default), 'simple', 'confirmation', 'full-screen (mobile only)'</h3>
    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <lbz-button @click.stop="vsimple0 = true">Simple</lbz-button>
    <lbz-dialog
      :active.sync="vsimple0"
      type="simple"
      title="Set backup account"
    >
      <template #center>
        <lbz-list dense>
          <lbz-list-item
            v-for="(item, index) of SIMPLELIST"
            :key="index"
            @click.stop="vsimple0 = false"
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
    <lbz-button @click.stop="vsimple1 = true">Simple</lbz-button>
    <lbz-dialog
      :active.sync="vsimple1"
      type="simple"
      append-to-body
      title="Set backup account"
    >
      <template #center>
        <lbz-list dense>
          <lbz-list-item
            v-for="(item, index) of SIMPLELIST"
            :key="index"
            @click.stop="vsimple1 = false"
          >
            <template #start>
              <lbz-icon>{{ item.icon }}</lbz-icon>
            </template>
            <template #center>{{ item.label }}</template>
          </lbz-list-item>
        </lbz-list>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ lock-scroll: true (default), false</h3>
    <lbz-button @click.stop="vsimple2 = true">Simple</lbz-button>
    <lbz-dialog
      :active.sync="vsimple2"
      type="simple"
      :lock-scroll="false"
      title="Set backup account"
    >
      <template #center>
        <lbz-list dense>
          <lbz-list-item
            v-for="(item, index) of SIMPLELIST"
            :key="index"
            @click.stop="vsimple2 = false"
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
    <lbz-button @click.stop="vsimple3 = true">Simple</lbz-button>
    <lbz-dialog
      :active.sync="vsimple3"
      type="simple"
      title="Set backup account"
      content-height="360px"
    >
      <template #center>
        <lbz-list dense>
          <lbz-list-item
            v-for="(item, index) of SIMPLELIST"
            :key="index"
            @click.stop="vsimple3 = false"
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
    <lbz-button @click.stop="vconfirmation0 = true">Confirmation</lbz-button>
    <lbz-dialog
      :active.sync="vconfirmation0"
      type="confirmation"
      title="Title goes here"
    >
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</template>
      <template #end>
        <lbz-button @click.stop="vconfirmation0 = false">Cancel</lbz-button>
        <lbz-button @click.stop="vconfirmation0 = false">OK</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ append-to-body: true, false (default)</h3>
    <lbz-button @click.stop="vconfirmation1 = true">Confirmation</lbz-button>
    <lbz-dialog
      :active.sync="vconfirmation1"
      type="confirmation"
      append-to-body
      title="Title goes here"
    >
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</template>
      <template #end>
        <lbz-button @click.stop="vconfirmation1 = false">Cancel</lbz-button>
        <lbz-button @click.stop="vconfirmation1 = false">OK</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ lock-scroll: true (default), false</h3>
    <lbz-button @click.stop="vconfirmation2 = true">Confirmation</lbz-button>
    <lbz-dialog
      :active.sync="vconfirmation2"
      type="confirmation"
      :lock-scroll="false"
      title="Title goes here"
    >
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</template>
      <template #end>
        <lbz-button @click.stop="vconfirmation2 = false">Cancel</lbz-button>
        <lbz-button @click.stop="vconfirmation2 = false">OK</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ scrollable (type === 'confirmation'): true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ content-height (type !== 'full-screen'): '' (default), 'x'</h3>
    <lbz-button @click.stop="vconfirmation3 = true">Confirmation</lbz-button>
    <lbz-dialog
      :active.sync="vconfirmation3"
      type="confirmation"
      scrollable
      title="Title goes here"
      content-height="180px"
    >
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
        <lbz-button @click.stop="vconfirmation3 = false">Cancel</lbz-button>
        <lbz-button @click.stop="vconfirmation3 = false">OK</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ stacked (['', 'alert', 'confirmation'].includes(type)): true, false (default)</h3>
    <lbz-button @click.stop="vconfirmation4 = true">Confirmation</lbz-button>
    <lbz-dialog
      :active.sync="vconfirmation4"
      type="confirmation"
      stacked
      title="Title goes here"
    >
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</template>
      <template #end>
        <lbz-button @click.stop="vconfirmation4 = false">Turn on speed boost</lbz-button>
        <lbz-button @click.stop="vconfirmation4 = false">No thanks</lbz-button>
      </template>
    </lbz-dialog>

    <h2 class="lbz-typography--h5"># Full-screen dialog</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]active.sync: true, false</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'alert' (default), 'simple', 'confirmation', 'full-screen (mobile only)'</h3>
    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <lbz-button @click.stop="vfullScreen0 = true">Full-screen</lbz-button>
    <lbz-dialog
      :active.sync="vfullScreen0"
      type="full-screen"
      title="Title goes here"
    >
      <template #start>
        <!-- Save, Send, Share, Update, or Create -->
        <lbz-button @click.stop="vfullScreen0 = false">Action</lbz-button>
      </template>
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ append-to-body: true, false (default)</h3>
    <lbz-button @click.stop="vfullScreen1 = true">Full-screen</lbz-button>
    <lbz-dialog
      :active.sync="vfullScreen1"
      type="full-screen"
      append-to-body
      title="Title goes here"
    >
      <template #start>
        <!-- Save, Send, Share, Update, or Create -->
        <lbz-button @click.stop="vfullScreen1 = false">Action</lbz-button>
      </template>
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ lock-scroll: true (default), false</h3>
    <lbz-button @click.stop="vfullScreen2 = true">Full-screen</lbz-button>
    <lbz-dialog
      :active.sync="vfullScreen2"
      type="full-screen"
      :lock-scroll="false"
      title="Title goes here"
    >
      <template #start>
        <!-- Save, Send, Share, Update, or Create -->
        <lbz-button @click.stop="vfullScreen2 = false">Action</lbz-button>
      </template>
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</template>
    </lbz-dialog>
  </article>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsDialog extends Vue {
  @Ref('dialog') private rdialog!: HTMLFormElement;

  private SIMPLELIST: object[] = [
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

  private valert0: boolean = false;
  private valert1: boolean = false;
  private valert2: boolean = false;
  private valert3: boolean = false;
  private valert4: boolean = false;
  private valert5: boolean = false;

  private vsimple0: boolean = false;
  private vsimple1: boolean = false;
  private vsimple2: boolean = false;
  private vsimple3: boolean = false;

  private vconfirmation0: boolean = false;
  private vconfirmation1: boolean = false;
  private vconfirmation2: boolean = false;
  private vconfirmation3: boolean = false;
  private vradio: number = 0;
  private vconfirmation4: boolean = false;

  private vfullScreen0: boolean = false;
  private vfullScreen1: boolean = false;
  private vfullScreen2: boolean = false;

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
