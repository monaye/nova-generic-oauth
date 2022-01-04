<template>
  <div>
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1 flex justify-between">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium text-gray-900">
            {{ __("FreeeとAPI連携設定") }}
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            "Freeeとの連携を設定"をクリックしてFreeeへのAPI許可を行うことで、顧客情報をFreeeへ連携することが出来ます。行政侍からFreeeへの連携のみですので、Freeeで作られた取引先は行政侍には作られませんのでご注意ください。
          </p>
        </div>
        <div class="px-4 sm:px-0"></div>
      </div>
      <loading-card :loading="loading" class="md:col-span-2">
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div
            class="
              px-4
              py-5
              bg-white
              sm:p-6
              shadow
              sm:rounded-tl-md sm:rounded-tr-md
            "
          >
            <div class="grid grid-cols-6 gap-6">
              <!-- currentPassword -->
              <div class="col-span-6 sm:col-span-4">
                <p v-if="!oathResults">
                  {{ __("Freeeとの連携は未設定です。") }}
                </p>
                <p v-if="oathResults">
                  {{
                    __(
                      "Freeeとの連携設定済みです。顧客情報がFreeeへ連携されてない様でしたら、もう一度連携設定を行い、問題が解決しない様であればサポートまでお問い合わせください。"
                    )
                  }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="
              flex
              items-center
              justify-end
              px-4
              py-3
              bg-gray-50
              text-right
              sm:px-6
              shadow
              sm:rounded-bl-md sm:rounded-br-md
            "
          >
            <a
              :href="webOathUrl"
              class="
                inline-flex
                items-center
                px-4
                py-2
                bg-gray-800
                border border-transparent
                rounded-md
                font-semibold
                text-xs text-white
                uppercase
                tracking-widest
                hover:bg-gray-700
                active:bg-gray-900
                focus:outline-none
                focus:border-gray-900
                focus:ring
                focus:ring-gray-300
                transition
              "
            >
              {{ __("Freeeとの連携を設定") }}
            </a>
          </div>
        </div>
      </loading-card>
    </div>
    <div class="hidden sm:block">
      <div class="py-8"><div class="border-t border-gray-200"></div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["resourceName", "resourceId", "panel"],

  mounted() {
    //
  },

  data() {
    return {
      loading: false,
    };
  },
  computed: {
    webOathUrl() {
      return this.panel.fields[0].web_oath_url;
    },
    oathResults() {
      return this.panel.fields[0].oath_results;
    },
  },
  methods: {
    onSubmitForm() {
      alert("on submit form");
    },
  },
};
</script>
