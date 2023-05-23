<template>
  <q-header class="bg-white text-gray-8" height-hint="56">
    <q-toolbar>
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-avatar>
        <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </q-avatar>

      <q-toolbar-title shrink class="text-subtitle1 text-weight-bolder">
        Youtube
      </q-toolbar-title>

      <q-space></q-space>
      <div class="search row items-center">
        <q-input
          class="col-grow"
          outlined
          square
          dense
          placeholder="검색"
          @focus="isSearchFocus = true"
          @blue="isSearchFocus = false"
        >
          <template #prepend>
            <q-icon name="search " />
          </template>
          <template #append>
            <q-icon name="keyboard " />
          </template>
        </q-input>
        <q-btn
          class="search-btn"
          icon="search"
          unelevated
          color="grey-3"
          text-color="black"
          square
        />
        <q-btn
          class="q-ml-sm"
          icon="mic"
          round
          color="grey-2"
          text-color="black"
          unelevated
        />
      </div>
      <q-space></q-space>
      <q-btn flat round icon="more_vert" class="q-mr-sm" />

      <q-btn
        outline
        rounded
        color="primary"
        icon="account_circle"
        label="로그인"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from 'vue';

const isSearchFocus = ref(false);
</script>

<style lang="scss" scoped>
.q-btn {
  color: black;
}
.q-toolbar {
  color: gray;
  height: 56px;
  border-style: solid;
  border-width: 1px 1px 1px 0;
  border-color: #c9c9c9;
}
.search {
  min-width: 100px;
  max-width: 600px;
  width: 55%;
  &-btn {
    border-style: solid;
    border-width: 1px 1px 1px 0;
    border-color: #c9c9c9;
    max-width: 60px;
    width: 100%;
    height: 40px;
  }
}
</style>
