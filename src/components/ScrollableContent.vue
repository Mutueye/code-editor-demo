<template>
  <div class="w-full flex flex-col flex-1 min-h-0">
    <el-scrollbar>
      <div class="flex-shrink-0" :class="hideTopPading ? 'px-spacing-xl pb-spacing-xl' : 'p-spacing-xl '">
        <slot />
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
  defineProps<{ hideTopPading?: boolean }>();
</script>
