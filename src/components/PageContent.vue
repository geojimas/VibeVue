<template>
  <div class="grid w-full max-w-3xl gap-4 text-left sm:grid-cols-2">
    <article
      v-for="(section, index) in sections"
      :key="index"
      class="card bg-base-100 shadow-sm"
    >
      <div class="card-body gap-3">
        <h2 class="card-title text-lg">
          {{ rt(section.title) }}
        </h2>
        <p>{{ rt(section.body) }}</p>
        <ul
          v-if="section.items"
          class="list-disc space-y-1 pl-5"
        >
          <li
            v-for="(item, itemIndex) in section.items"
            :key="itemIndex"
          >
            {{ rt(item) }}
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

  defineProps({
    sections: {
      type: Array,
      required: true,
    },
  })

  const { rt } = useI18n()
</script>