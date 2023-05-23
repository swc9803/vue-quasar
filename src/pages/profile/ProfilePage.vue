<template>
  <q-page padding>
    <section class="row q-col-gutter-x-xl q-py-lg">
      <div class="col-12 col-sm-auto q-py-md flex flex-center">
        <q-avatar size="150px">
          <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" />
        </q-avatar>
      </div>
      <div class="col-12 col-sm-grow column justify-between">
        <div class="row items-center">
          <span class="text-h6 text-weight-bold"> 인스타 </span>
          <q-space />
          <div class="q-gutter-x-sm">
            <q-btn outline color="secondary" label="프로필 편집1" />
            <q-btn outline color="secondary" label="프로필 편집2" />
            <q-btn outline color="secondary" label="프로필 편집3" />
            <q-btn flat color="secondary" icon="more_horiz" />
          </div>
        </div>
        <div class="q-gutter-x-lg">
          <span>게시물 236</span>
          <span>팔로워 2360</span>
          <span>팔로우 36</span>
        </div>
        <div>
          <span>헬린이</span>
          <span>쉬어요</span>
          <span>url</span>
        </div>
      </div>
    </section>
    <section>
      <div class="row no-wrap scroll q-col-gutter-x-xl">
        <div class="col-auto" v-for="n in 15" :key="n">
          <article>
            <q-avatar size="70px">
              <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" />
            </q-avatar>
            <div class="text-center q-mt-sm">제목</div>
          </article>
        </div>
      </div>
    </section>
    <section class="q-mt-xl">
      <q-tabs
        class="q-mb-lg"
        v-model="tab"
        inline-label
        switch-indicator
        indicator-color="primary"
      >
        <q-route-tab
          :ripple="false"
          icon="edit"
          to="/flexgrid"
          label="게시글"
          exact
        />
        <q-route-tab
          :ripple="false"
          icon="bookmark_border"
          to="/flexgrid/saved"
          label="저장됨"
          exact
        />
        <q-route-tab
          :ripple="false"
          icon="local_offer"
          to="/flexgrid/tagged"
          label="태그됨"
          exact
        />
      </q-tabs>
      <router-view />
    </section>
  </q-page>
</template>

<script setup>
import { ref, watch } from 'vue';

const tab = ref('mails');
watch(tab, () => {
  console.log(tab.value);
  console.log(tab);
});
</script>

<style lang="scss" scoped>
.q-page {
  background: #fafafa;
}
</style>
