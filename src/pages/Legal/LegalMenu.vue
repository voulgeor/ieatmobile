<template>
  <q-header
    reveal
    reveal-offset="50"
    :class="{
      'bg-mydark text-white': $q.dark.mode,
      'bg-white text-dark': !$q.dark.mode,
    }"
  >
    <q-toolbar>
      <q-btn
        @click="$router.back()"
        flat
        round
        dense
        icon="las la-angle-left"
        class="q-mr-sm"
        :color="$q.dark.mode ? 'white' : 'dark'"
      />
      <q-toolbar-title class="text-weight-bold">{{ $t('Legal') }}</q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page padding>
    <q-list separator>
      <template v-for="(items, index) in this.pages_data" :key="items">
      <!-- <template v-for="(items2, index2) in DataStore.pages_data[index]" :key="items2"> -->
        <q-item
          clickable
          :to="{
            name: 'page',
            params: {
              page_id: index,
            },
          }"
        >
          <q-item-section>
            <q-item-label>{{ items }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <!-- </template> -->
    </q-list>
  </q-page>
</template>

<script>
import { useDataStore } from "stores/DataStore";
export default {
  name: "LegalMenu",
  data() {
    return {
      pages_data:[],
    }
  },
  setup() {
    const DataStore = useDataStore();
    return { DataStore };
  },
  created() {
    this.DataStore.loading_page = true;
    this.DataStore.getPages();
    this.pages_data = this.DataStore.pages_data
    console.log(this.pages_data)
  },
};
</script>
