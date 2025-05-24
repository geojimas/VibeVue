
<script setup>
  import { useTemplateRef } from 'vue'

  const modalRef = useTemplateRef('base_modal')

  function HandleModalClick() {
    modalRef.value.showModal()
  }
</script>



<template>
  <button
    class="btn"
    @click="HandleModalClick"
  >
    open modal
  </button>

  <dialog
    ref="base_modal"
    class="modal"
  >
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 class="text-lg font-bold">
        Hello!
      </h3>
      <p class="py-4">
        Press ESC key or click on ✕ button to close
      </p>
    </div>
  </dialog>
</template>

