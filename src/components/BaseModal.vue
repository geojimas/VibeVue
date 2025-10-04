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
          <CloseButtonSVG />
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
  const CloseButtonSVG = defineAsyncComponent(() => import('../assets/CloseButtonSVG.vue'))

  const modalRef = useTemplateRef('base_modal')

  function HandleModalClick() {
    modalRef.value.showModal()
  }
</script>
