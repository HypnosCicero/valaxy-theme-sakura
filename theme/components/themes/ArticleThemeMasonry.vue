<script setup lang="ts">
import { formatDate } from 'valaxy'
import { isVideoUrl } from '../../utils'

const { link, src, date } = defineProps({
  title: {
    type: String,
  },
  link: {
    type: String,
    default: '',
  },
  src: {
    type: String,
  },
  excerpt: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  target: {
    type: String,
  },
})
</script>

<template>
  <div>
    <RouterLink
      border="~ base rounded-lg" block of-hidden duration-500 transition-all class="group" hover="scale-101 shadow-xl z-10"
      bg-base relative :to="link" :target="target"
    >
      <video v-if="src && isVideoUrl(src)" :src="src" w-full autoplay loop muted playsinline border="b base" />
      <SakuraImageCard v-else :src="src" :to="link" />

      <div class="prose prose-sm p4 m0 pb3 bg-$st-c-bg max-w-none">
        <slot>
          <template v-if="title">
            <h2 m-0>
              {{ title }}
            </h2>
          </template>
          <div v-html="excerpt" />
        </slot>
        <div op50 text-sm pt2>
          {{ formatDate(date) }}
        </div>
      </div>
    </RouterLink>
  </div>
</template>
