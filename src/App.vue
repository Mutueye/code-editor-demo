<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import zhCn from 'element-plus/es/locale/lang/zh-cn';
  import { useToggleDayNight } from './componsables/useToggleDayNight';

  const locale = ref(zhCn);

  const { isDark, toggleDayNight } = useToggleDayNight();

  onMounted(() => {
    if (!isDark.value) toggleDayNight();
  });
</script>
