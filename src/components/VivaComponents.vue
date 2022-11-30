<template>
  <q-dialog v-model="show_modal" persistent transition-show="scale" transition-hide="scale" >
    <q-card style="width: 500px; max-width: 80vw;" >
      <q-card-section class="row items-center q-pb-none q-pa-md">
        <q-space />
        <q-btn icon="ion-close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="q-pa-md">
         <h5 class="text-weight-bold no-margin">{{title}}</h5>
         <div class="q-ma-sm">
         <p class="font12">{{label.notes}}</p>
         </div>
      </q-card-section>

      <q-separator spaced  />
      <q-card-actions>
         <q-btn
          unelevated
          roundedx
          color="warning"
          text-color="black" no-caps
          class="full-width q-mb-md"
          :label="label.submit"
          size="17px"
          :loading="loading"
          @click="onSubmit()"
          />
      </q-card-actions>

    </q-card>
</q-dialog>
</template>

<script>
import APIinterface from 'src/api/APIinterface'

export default {
  name: 'VivaComponents',
  props: ['title', 'label', 'payment_code', 'payment_credentials'],
  data () {
    return {
      show_modal: false,
      data: [],
      loading: false,
      merchant_id: '',
      merchant_type: '',
      absoluteURL: ''
    }
  },
  mounted () {
    const route = this.$router.resolve({
      path: '/'
    })
    this.absoluteURL = new URL(route.href, window.location.origin).href
  },
  methods: {
    showPaymentForm () {
      this.show_modal = true
    },
    close () {
      this.show_modal = false
    },
    onSubmit () {
      if ((typeof this.payment_credentials[this.payment_code] !== 'undefined') && (this.payment_credentials[this.payment_code] !== null)) {
        this.merchant_id = this.payment_credentials[this.payment_code].merchant_id
        this.merchant_type = this.payment_credentials[this.payment_code].merchant_type
      }
      const $data = {
        merchant_id: this.merchant_id,
        payment_code: this.payment_code
      }
      this.loading = true
      APIinterface.SavedPaymentProvider($data)
        .then(data => {
          this.close()
          this.$emit('afterAddpayment')
        })
        .catch(error => {
          APIinterface.notify('negative', error, 'error_outline', this.$q)
        })
        .then(data => {
          this.loading = false
        })
    },
    PaymentRender (data) {
      if ((typeof this.payment_credentials[this.payment_code] !== 'undefined') && (this.payment_credentials[this.payment_code] !== null)) {
        this.merchant_id = this.payment_credentials[this.payment_code].merchant_id
        this.merchant_type = this.payment_credentials[this.payment_code].merchant_type
      }
      const $params = {
        merchant_id: this.merchant_id,
        merchant_type: this.merchant_type,
        order_uuid: data.order_uuid,
        cart_uuid: data.cart_uuid,
        payment_code: this.payment_code,
        absoluteURL: this.absoluteURL,
        local_id: APIinterface.getStorage('local_id')
      }
      APIinterface.showLoadingBox("Processing payment..<br/>don't close this window", this.$q)
      APIinterface.VivaCheckout($params)
        .then(data => {
          console.debug(data)
          window.location.href = data.details.redirect
        })
        .catch(error => {
          APIinterface.notify('negative', error, 'error_outline', this.$q)
        })
        .then(data => {
          APIinterface.hideLoadingBox(this.$q)
        })
    },

  }
}
</script>
