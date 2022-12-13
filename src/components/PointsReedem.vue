<template>
  <q-dialog v-model="show_modal" position="bottom">
    <q-card>
      <q-card-section>
        <q-form @submit="onApplyPoints">
          <div class="row items-center q-col-gutter-sm">
            <div class="col b">
              <q-input
                v-model="redeem_points"
                type="number"
                step=100
                mask="#########"
                label="Enter points to reedem"
                outlined
                lazy-rules
                :bg-color="$q.dark.mode ? 'grey600' : 'input'"
                :label-color="$q.dark.mode ? 'grey300' : 'grey'"
                borderless
                class="input-borderless"
              />
            </div>
            <div class="col-4">
              <q-btn
                :loading="loading_apply"
                type="submit"
                unelevated
                color="primary"
                text-color="white"
                no-caps
                class="full-width"
                size="lg"
              >
              {{PointsStore.data.button_remove}}
              </q-btn>
            </div>
          </div>
        </q-form>

        <!-- <h6 class="text-weight-bold q-ma-none q-pt-md">Available points {{data.count}}</h6> -->
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import APIinterface from "src/api/APIinterface";
import { usePointsStore } from "stores/PointsStore";

export default {
  name: "PointsReedem",
  props: ["merchant_id", "cart_uuid"],
  data() {
    return {
      redeem_points: [],
      show_modal: false,
      loading_apply: false,
      loading: false,
      data :[]
    };
  },
  setup() {
    const PointsStore = usePointsStore();
    return { PointsStore };
  },
  updated() {
    this.redeem_points = "";
  },
  created() {
    if (Object.keys(this.PointsStore.data).length <= 0) {
      this.PointsStore.loadPoints(this.merchant_id);
    } else {
      if (!this.PointsStore.data[this.merchant_id]) {
        this.PointsStore.loadPoints(this.merchant_id);
      }
    }
  },
  methods: {
    showModal(data) {
      this.show_modal = data;
    },
    removePoints(data) {
      this.loading = true;
      const $params = {
        cart_uuid: APIinterface.getStorage("cart_uuid"),
        points_id: data.points_id,
        points_type: data.points_type,
      };
      APIinterface.removePoints($params)
        .then((data) => {
          this.show_modal = false;
          this.points_selected = [];
          this.PointsStore.loadPoints(this.merchant_id);
          this.$emit("afterRemovepoints");
        })
        .catch((error) => {
          APIinterface.notify("dark", error, "error", this.$q);
        })
        .then((data) => {
          this.loading = false;
        });
    },
    onApplyPoints() {
      this.loading_apply = true;
      const $params = {
        cart_uuid: APIinterface.getStorage("cart_uuid"),
        redeem_points: this.redeem_points,
        merchant_id: this.merchant_id,
        choosen_delivery: APIinterface.getStorage("choosen_delivery"),
      };
      APIinterface.applyRedeemPoints($params)
        .then((data) => {
          this.show_modal = false;
          this.data = data.details.data;
          this.redeem_points = "";
          this.PointsStore.loadPoints(this.merchant_id);
          this.$emit("afterApplypoints");
        })
        .catch((error) => {
          APIinterface.notify("dark", error, "error", this.$q);
        })
        .then((data) => {
          this.loading_apply = false;
        });
    },
  },
};
</script>
