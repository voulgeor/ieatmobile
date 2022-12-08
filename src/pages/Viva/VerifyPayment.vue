<template>
  <q-pull-to-refresh @refresh="refresh">
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
          flat
          round
          dense
          icon="las la-angle-left"
          class="q-mr-sm"
          :color="$q.dark.mode ? 'white' : 'dark'"
          to="/home"
          replace="true"
        />
        <q-toolbar-title class="text-weight-bold"
          >Your Order Successfully!</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page
      padding
      class="q-pl-md q-pr-md"
      :class="{ 'flex flex-center': !hasData && !loading }"
    >
      <template v-if="loading">
        <q-inner-loading
          :showing="true"
          color="primary"
          size="md"
          label-class="dark"
          class="transparent"
        />
      </template>
    </q-page>
  </q-pull-to-refresh>
</template>

<script>
import APIinterface from "src/api/APIinterface";

export default {
  name: "VerifyPayment",
  data() {
    return {
      t: "",
      s: "",
      eci: "",
      eventId: "",
      loading: true,
      data: [],
    };
  },
  created() {
    this.t = this.$route.query.t;
    this.s = this.$route.query.s;
    this.eci = this.$route.query.eci;
    this.eventId = this.$route.query.eventId;
    this.verifypayment();
  },
  computed: {
    hasData() {
      if (Object.keys(this.data).length > 0) {
        return true;
      }
      return false;
    },
  },
  methods: {
    refresh(done) {
      this.verifypayment(done);
    },
    verifypayment(done) {
      this.loading = true;
      this.data = {
        t : this.t,
        s : this.s,
        eci : this.eci,
        eventId : this.eventId,
      }

      APIinterface.VivaVerifyPayment(this.data)
        .then((data) => {
          this.$router.push({
          path: "/order/successful",
          query: { order_uuid: data.details.order_uuid },
          });
        })
        .catch((error) => {
          this.t = "";
          this.s = "";
          this.eci = "";
          this.eventId = "";
        })
        .then((data) => {
          this.loading = false;
          if (!APIinterface.empty(done)) {
            done();
          }
        });
    },
    estimatedLabel(service_code) {
      if (service_code == "pickup") {
        return "Estimated Pickup Time";
      } else if (service_code == "dinein") {
        return "Estimated Dinein Time";
      }
      return "Estimated Delivery Time";
    },
  },
};
</script>
