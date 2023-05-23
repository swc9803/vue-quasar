<template>
  <!-- class="flex flex-center" -->
  <q-page>
    <div class="row window-height">
      <div class="col" :class="leftColStyle">
        <q-img height="100vh" src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </div>
      <div class="col flex flex-center">
        <q-card flat :style="{ minWidth: '400px' }">
          <q-card-section>
            <div class="text-h6">로그인하기</div>
            <div class="text-subtitle2 text-grey">감사합니다</div>
          </q-card-section>
          <q-card-section>
            <q-form>
              <div class="q-gutter-y-lg">
                <q-input
                  filled
                  label="이메일"
                  hint="Email을 입력해주세요"
                ></q-input>
                <q-input
                  filled
                  type="password"
                  label="비밀번호"
                  hint="영문 대/소문자 포함 8자 이상"
                ></q-input>
              </div>
              <q-btn
                class="full-width q-mt-lg"
                unelevated
                color="primary"
                size="lg"
                label="로그인 하기"
              />
              <q-btn
                class="full-width q-mt-md"
                flat
                label="회원가입"
                to="/auth/sign-up"
              />
              <q-btn
                class="full-width q-mt-xs"
                flat
                label="대쉬보드로 이동"
                to="/"
              />
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const leftColStyle = computed(() => ({
  hidden: $q.screen.lt.md,
}));
</script>

<style lang="scss" scoped></style>
