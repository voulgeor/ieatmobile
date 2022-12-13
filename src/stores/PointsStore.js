import { defineStore } from "pinia";
import APIinterface from "src/api/APIinterface";

export const usePointsStore = defineStore("pointsstore", {
  state: () => ({
    is_loading : false,
    loading : false,
    redeem_points : {},
    remove_loading : false,
    redeem_disabled : true,
    total_points : {},
    data : {},
    count : 0,
    points_id : {},
  }),
  persist: true,
  getters: {
    hasData() {
      if (APIinterface.empty(this.data)) {
        return false;
      } else {
        if (Object.keys(this.data).length > 0) {
          return true;
        }
      }
      return false;
    },
  },
  actions: {
    loadPoints(merchantID) {
      this.loading = true;
      const $params = {
        cart_uuid: APIinterface.getStorage("cart_uuid"),
        merchant_id: merchantID,
      };
      APIinterface.loadPoints($params)
        .then((data) => {
          console.log(data)
					this.data = data.details.data;
          this.count = data.details.count;
          this.points_id = data.details.points_selected;
          if(this.data.points.amount>0){
            this.redeem_points = this.data.points.amount;
          }
        })
        .catch((error) => {
          this.data = [];
          this.points_id = [];
          this.count = [];
          this.redeem_points = [];
        })
        .then((data) => {
          this.loading = false;
        });
    },
    hadData() {
      if (APIinterface.empty(this.data)) {
        return false;
      } else {
        if (Object.keys(this.data).length > 0) {
          return true;
        }
      }
      return false;
    },
  },
});
