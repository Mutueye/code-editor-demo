<template>
  <el-drawer v-model="show" title="I am the title" :with-header="false" size="280px">
    <div class="text-size-large color-text-primary">代码编辑器设置</div>
    <div class="flex flex-col">
      <div class="flex flex-row items-center justify-between pt-spacing-md">
        <div class="color-text-regular">暗黑模式</div>
        <el-switch v-model="config.isDark" />
      </div>
      <div class="flex flex-row items-center justify-between pt-spacing-sm">
        <div class="color-text-regular">自动格式化</div>
        <el-switch v-model="config.autoFormat" />
      </div>
      <div class="flex flex-row items-center justify-between pt-spacing-sm">
        <div class="color-text-regular">字体大小</div>
        <el-select v-model="config.fontSize" size="small" class="w-80px">
          <el-option v-for="size in fontSizeList" :key="size" :value="size" :label="size + 'px'" />
        </el-select>
      </div>
      <div class="flex flex-row items-center justify-between pt-spacing-sm">
        <div class="color-text-regular">Tab转换</div>
        <el-switch v-model="config.insertSpaces" />
      </div>
      <div class="flex flex-row items-center justify-between pt-spacing-sm">
        <div class="color-text-regular">禁用复制粘贴</div>
        <el-switch v-model="config.disableCopyPaste" />
      </div>
      <div class="flex flex-row items-center justify-between pt-spacing-sm">
        <div class="color-text-regular">只读模式</div>
        <el-switch v-model="config.readOnly" />
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
  import { ref, toRefs } from 'vue';
  import type { EditorConfig } from '../../types';
  const show = ref(false);

  const props = defineProps<{ config: EditorConfig }>();
  const { config } = toRefs(props);

  const fontSizeList = [12, 14, 16, 18, 20, 22, 24, 26];

  const open = () => {
    show.value = true;
  };

  defineExpose({ open });
</script>
