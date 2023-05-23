<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Brand Colors</div>
      <q-separator class="q-my-md" />
      <div class="q-gutter-sm">
        <div class="q-pa-xs rounded-borders bg-primary">primary</div>
        <div class="q-pa-xs rounded-borders bg-secondary">secondary</div>
        <div class="q-pa-xs rounded-borders bg-accent">accent</div>
        <div class="q-pa-xs rounded-borders bg-dark">dark</div>
        <div class="q-pa-xs rounded-borders bg-positive">positive</div>
        <div class="q-pa-xs rounded-borders bg-negative">negative</div>
        <div class="q-pa-xs rounded-borders bg-info">info</div>
        <div class="q-pa-xs rounded-borders bg-warning">warning</div>
        <p>Variables</p>
      </div>
    </section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
p {
  color: $red;
  background: $grey-5;
}
</style>
