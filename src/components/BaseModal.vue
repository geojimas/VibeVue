<template>
  <BaseButton
    :label="$t('home.modal.label')"
    theme="info"
    @click="HandleModalClick"
  />
  <dialog
    ref="base_modal"
    class="modal"
  >
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </form>
      <h3 class="text-lg font-bold">
        {{ $t('home.modal.header') }}
      </h3>
      <p class="py-4">
        {{ $t('home.modal.content') }}
      </p>
    </div>
  </dialog>
</template>

<script setup>
  import { defineAsyncComponent, useTemplateRef } from 'vue'

  const BaseButton = defineAsyncComponent(() => import('./BaseButton.vue'))
  const modalRef = useTemplateRef('base_modal')

  function HandleModalClick() {
    modalRef.value.showModal()
  }
</script>
