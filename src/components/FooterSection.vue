<template>
  <footer
    class="footer absolute bottom-0 flex justify-evenly sm:footer-horizontal bg-gray-500 text-lg text-neutral-content items-center p-4"
  >
    <p>
      Copyright &#169; {{ new Date().getFullYear() }} by Dimitris Georgiadis, All Rights
      reserved.
    </p>
    <a
      href="https://github.com/geojimas"
      target="_blank"
    >
      <GithubSVG />
    </a>
  </footer>
</template>


<script setup>
  import GithubSVG from './GithubSVG.vue'
</script>
