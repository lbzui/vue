<template>
  <article class="lbzui-components-dialog">
    <h2 class="lbz-typography--h5"># Alert dialog</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]active.sync: true, false</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'alert' (default), 'simple', 'confirmation', 'full-screen (mobile only)'</h3>

    <lbz-button @click.stop="valert0 = true">Alert</lbz-button>
    <lbz-dialog
      ref="dialog"
      :active.sync="valert0"
      @open="fbeforeOpen"
      @close="fbeforeClose"
    >
      <template #center>Discard draft?</template>
      <template #end>
        <lbz-button @click.stop="fcancel">Cancel</lbz-button>
        <lbz-button @click.stop="valert0 = false">Discard</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ stacked (['', 'alert', 'confirmation'].includes(type)): true, false (default)</h3>

    <lbz-button @click.stop="valert1 = true">Stacked</lbz-button>
    <lbz-dialog :active.sync="valert1" stacked>
      <template #center>Discard draft?</template>
      <template #end>
        <lbz-button @click.stop="valert1 = false">Cancel</lbz-button>
        <lbz-button @click.stop="valert1 = false">Discard</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>

    <lbz-button @click.stop="valert2 = true">Title</lbz-button>
    <lbz-dialog :active.sync="valert2" title="Dialog header">
      <template #center>Discard draft?</template>
      <template #end>
        <lbz-button @click.stop="valert2 = false">Cancel</lbz-button>
        <lbz-button @click.stop="valert2 = false">Discard</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ height (type !== 'full-screen'): '' (default), 'x'</h3>

    <lbz-button @click.stop="valert3 = true">Height</lbz-button>
    <lbz-dialog :active.sync="valert3" height="180px">
      <template #center>Discard draft?</template>
      <template #end>
        <lbz-button @click.stop="valert3 = false">Cancel</lbz-button>
        <lbz-button @click.stop="valert3 = false">Discard</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ append-to-body: true, false (default)</h3>

    <lbz-button @click.stop="valert4 = true">Append to body</lbz-button>
    <lbz-dialog :active.sync="valert4" append-to-body>
      <template #center>Discard draft?</template>
      <template #end>
        <lbz-button @click.stop="valert4 = false">Cancel</lbz-button>
        <lbz-button @click.stop="valert4 = false">Discard</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ lock-body-scroll: true (default), false</h3>

    <lbz-button @click.stop="valert5 = true">Unlock body scroll</lbz-button>
    <lbz-dialog :active.sync="valert5" :lock-body-scroll="false">
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
      title="Dialog header"
    >
      <template #center>
        <lbz-list dense>
          <lbz-list-item
            v-for="(item, index) of SIMPLELIST"
            :key="index"
            @click.stop="vsimple0 = false"
          >
            <template #start>
              <lbz-icon class="lbz-list-item__avatar">{{ item.icon }}</lbz-icon>
            </template>
            <template #center>{{ item.label }}</template>
          </lbz-list-item>
        </lbz-list>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ height (type !== 'full-screen'): '' (default), 'x'</h3>

    <lbz-button @click.stop="vsimple1 = true">Height</lbz-button>
    <lbz-dialog
      :active.sync="vsimple1"
      type="simple"
      title="Dialog header"
      height="360px"
    >
      <template #center>
        <lbz-list dense>
          <lbz-list-item
            v-for="(item, index) of SIMPLELIST"
            :key="index"
            @click.stop="vsimple1 = false"
          >
            <template #start>
              <lbz-icon class="lbz-list-item__avatar">{{ item.icon }}</lbz-icon>
            </template>
            <template #center>{{ item.label }}</template>
          </lbz-list-item>
        </lbz-list>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ append-to-body: true, false (default)</h3>

    <lbz-button @click.stop="vsimple2 = true">Append to body</lbz-button>
    <lbz-dialog
      :active.sync="vsimple2"
      type="simple"
      title="Dialog header"
      append-to-body
    >
      <template #center>
        <lbz-list dense>
          <lbz-list-item
            v-for="(item, index) of SIMPLELIST"
            :key="index"
            @click.stop="vsimple2 = false"
          >
            <template #start>
              <lbz-icon class="lbz-list-item__avatar">{{ item.icon }}</lbz-icon>
            </template>
            <template #center>{{ item.label }}</template>
          </lbz-list-item>
        </lbz-list>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ lock-body-scroll: true (default), false</h3>

    <lbz-button @click.stop="vsimple3 = true">Unlock body scroll</lbz-button>
    <lbz-dialog
      :active.sync="vsimple3"
      type="simple"
      title="Dialog header"
      :lock-body-scroll="false"
    >
      <template #center>
        <lbz-list dense>
          <lbz-list-item
            v-for="(item, index) of SIMPLELIST"
            :key="index"
            @click.stop="vsimple3 = false"
          >
            <template #start>
              <lbz-icon class="lbz-list-item__avatar">{{ item.icon }}</lbz-icon>
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
      title="Two-line dialog header"
    >
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</template>
      <template #end>
        <lbz-button @click.stop="vconfirmation0 = false">Action 1</lbz-button>
        <lbz-button @click.stop="vconfirmation0 = false">Action 2</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ scrollable (type === 'confirmation'): true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ height (type !== 'full-screen'): '' (default), 'x'</h3>

    <lbz-button @click.stop="vconfirmation1 = true">Scrollable & Height</lbz-button>
    <lbz-dialog
      :active.sync="vconfirmation1"
      type="confirmation"
      scrollable
      title="Dialog header"
      height="180px"
    >
      <template #center>
        <lbz-list dense>
          <lbz-list-item
            v-for="(item, index) of 10"
            :key="index"
            @click.stop="vradio = index"
          >
            <template #start>
              <lbz-radio
                v-model="vradio"
                :value="index"
                color="primary"
              />
            </template>
            <template #center>Item {{ item }}</template>
          </lbz-list-item>
        </lbz-list>
      </template>
      <template #end>
        <lbz-button @click.stop="vconfirmation1 = false">Action 1</lbz-button>
        <lbz-button @click.stop="vconfirmation1 = false">Action 2</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ stacked (['', 'alert', 'confirmation'].includes(type)): true, false (default)</h3>

    <lbz-button @click.stop="vconfirmation2 = true">Stacked</lbz-button>
    <lbz-dialog
      :active.sync="vconfirmation2"
      type="confirmation"
      stacked
      title="Two-line dialog header"
    >
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</template>
      <template #end>
        <lbz-button @click.stop="vconfirmation2 = false">Turn on speed boost</lbz-button>
        <lbz-button @click.stop="vconfirmation2 = false">No thanks</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ append-to-body: true, false (default)</h3>

    <lbz-button @click.stop="vconfirmation3 = true">Append to body</lbz-button>
    <lbz-dialog
      :active.sync="vconfirmation3"
      type="confirmation"
      title="Two-line dialog header"
      append-to-body
    >
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</template>
      <template #end>
        <lbz-button @click.stop="vconfirmation3 = false">Action 1</lbz-button>
        <lbz-button @click.stop="vconfirmation3 = false">Action 2</lbz-button>
      </template>
    </lbz-dialog>

    <h3 class="lbz-typography--subtitle1">$ lock-body-scroll: true (default), false</h3>

    <lbz-button @click.stop="vconfirmation4 = true">Unlock body scroll</lbz-button>
    <lbz-dialog
      :active.sync="vconfirmation4"
      type="confirmation"
      title="Two-line dialog header"
      :lock-body-scroll="false"
    >
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</template>
      <template #end>
        <lbz-button @click.stop="vconfirmation4 = false">Action 1</lbz-button>
        <lbz-button @click.stop="vconfirmation4 = false">Action 2</lbz-button>
      </template>
    </lbz-dialog>

    <h2 class="lbz-typography--h5"># Full-screen dialog (mobile only)</h2>

    <h3 class="lbz-typography--subtitle1">$ [required]active.sync: true, false</h3>
    <h3 class="lbz-typography--subtitle1">$ type: 'alert' (default), 'simple', 'confirmation', 'full-screen (mobile only)'</h3>
    <h3 class="lbz-typography--subtitle1">$ title: '' (default), 'x'</h3>
    <h3 class="lbz-typography--subtitle1">$ append-to-body: true, false (default)</h3>
    <h3 class="lbz-typography--subtitle1">$ lock-body-scroll: true (default), false</h3>

    <lbz-button @click.stop="vfullScreen0 = true">Full-screen</lbz-button>
    <lbz-dialog
      :active.sync="vfullScreen0"
      type="full-screen"
      title="Page title"
      append-to-body
    >
      <template #start>
        <!-- Save, Send, Share, Update, or Create -->
        <lbz-button @click.stop="vfullScreen0 = false">Action</lbz-button>
      </template>
      <template #center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</template>
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
      icon: 'person',
      label: 'user1@gmail.com',
    },
    {
      icon: 'person',
      label: 'user2@gmail.com',
    },
    {
      icon: 'add',
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
  private vradio: number = 0;
  private vconfirmation2: boolean = false;
  private vconfirmation3: boolean = false;
  private vconfirmation4: boolean = false;

  private vfullScreen0: boolean = false;

  private fbeforeOpen(): void {
    console.log('Dialog will be opened');
  }

  private fbeforeClose(): void {
    console.log('Dialog will be closed');
  }

  private fcancel(): void {
    this.rdialog.fclose();
  }
}
</script>
