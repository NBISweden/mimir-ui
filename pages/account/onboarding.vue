<script setup>
definePageMeta({
  layout: 'vuetify-app',
  middleware: ['auth']
})
const route = useRoute()
const sending = ref(false)
const resent = ref(false)
const errorMsg = ref(null)
const user = useUser()
const resendEmail = async () => {
  errorMsg.value = null
  sending.value = true
  const { data, error } = await useFetch('/api/account/resend-email/', {
    method: 'POST',
    Headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: user.value.email
    })
  })
  if (error.value) {
    errorMsg.value = 'Something went wrong. Please try again later.'
  } else {
    resent.value = true
  }
  sending.value = false
}

onNuxtReady(() => {
  if (route.query.resend) {
    resendEmail()
  }
})
</script>

<template>
  <v-card
      class="h-100vh"
  >
    <v-container>
      <v-row>
        <v-col
            sm="9"
            offset-sm="1"
            md="8"
            offset-md="2"
        >
          <v-card
              class="mt-20vh"
              elevation="0"
          >
            <div class="text-center">
              <div v-if="route.query.email_verification_required && route.query.email_verification_required === 'none'">
                <h2 class="text-h4">{{$t('Your registration is successful')}}</h2>
                <p class="mt-5">
                  {{$t('You can now')}} <NuxtLink to="/account/signin">{{$t('signIn')}}</NuxtLink> {{$t('to your account.')}}
                </p>
              </div>
              <div v-else>
                <h2 class="text-h4">Verify your email</h2>
                <p class="mt-5">
                  We've sent you a verification email. Please check your inbox to verify your account.
                </p>
                <p v-if="errorMsg"
                   class="text-red"
                >{{ errorMsg }}</p>
                <h3 class="text-h5 mt-5">Resend verification email</h3>
                <p class="mt-5">
                  Please type your email address so we can send you a new verification email:
                </p>
                <v-text-field
                    v-model="user.email"
                    label="Email"
                    type="email"
                    class="mt-5"
                ></v-text-field>
                <v-btn
                    variant="text"
                    class="mt-3"
                    color="primary"
                    :loading="sending"
                    @click="resendEmail"
                    :disabled="resent"
                >
                  {{ resent ? 'Resent' : 'Resend email'}}
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>
.h-100vh {
  height: 100vh;
}
.mt-20vh {
  margin-top: 20vh;
}
</style>
