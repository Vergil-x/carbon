<template>
  <n-card>
    <div class="text-lg">
      <div class="text-green-600 font-bold">
        Greenhouse Gas Equivalencies Calculator
      </div>
      <div class="font-bold">
        Convert emissions or energy data into concrete terms you can understand — such as the
        annual CO2 emissions of cars, households, and power plants
      </div>
    </div>
    <!-- step1 -->
    <div>
      <div class="font-bold underline text-lg mt-10">
        Step1: Enter and convert data
      </div>
      <n-form ref="formRef" :model="model" label-placement="left" label-width="auto"
        require-mark-placement="right-hanging" size="medium" >
        <n-form-item v-for="(item, index) in model.activities" :key="index" label="Select activity:"
          :label-style="labelStyle" class="my-5" :style="{
          maxWidth: '640px',
          fontWeight: 'bold',
        }">
          <n-input-group>
            <n-input v-model:value="item.activity" placeholder="Please enter your activity name.." />
            <n-button color="#43B443" class="bg-bing">
              <n-icon size="20">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512">
                  <path
                    d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8z"
                    fill="currentColor">
                  </path>
                </svg>
              </n-icon>
            </n-button>
          </n-input-group>
        </n-form-item>
    
        <n-form-item label="Select geography:" :label-style="labelStyle" class="my-5" :style="{
          maxWidth: '640px',
          fontWeight: 'bold',
        }">
          <n-input-group>
            <n-input v-model:value="model.geography" placeholder="Please enter your geography.." />
            <n-button color="#43B443" class="bg-bing">
              <n-icon size="20">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512">
                  <path
                    d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8z"
                    fill="currentColor">
                  </path>
                </svg>
              </n-icon>
            </n-button>
          </n-input-group>
        </n-form-item>
        <n-form-item label="Enter data:" :label-style="labelStyle" class="my-5">
          <n-space>
            <n-input-group>
              <n-input v-model:value="model.data" placeholder="enter amount" />
              <n-button>
                unit
              </n-button>
            </n-input-group>
            <div class="ml-80">
            <n-space vertical >
              <div class="font-bold">
             Are there any other activties?
            </div>
            <n-button class="bg-bing text-white"  @click="addItem" round>
               + Add activity
              </n-button>
            </n-space>
          </div>
          </n-space>
        </n-form-item>
        <n-row :gutter="[0, 24]">
      <n-col :span="12">
        <div style="display: flex; justify-content: flex-end">
          <n-button size="large"
          class="bg-bing text-white">
          <div class="font-bold">
            Convert
          </div>
          
          </n-button>
        </div>
      </n-col>
    </n-row>
      </n-form>
    </div>
  </n-card>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInst } from 'naive-ui'

const formRef = ref<FormInst | null>(null)
const model = reactive({
  activities: [{ activity: "" }],
  geography: '',
  data: '',
})
const addItem = () => {
  model.activities.push({ activity: '' })
}
const labelStyle = reactive({
  fontSize: '1rem',
  fontWeight: '700'
})
</script>

<style lang="scss">

</style>