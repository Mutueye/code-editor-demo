<template>
  <div class="flex flex-1 flex-col px-spacing-xl pb-spacing-xl min-h-0">
    <div class="flex flex-row pb-spacing items-center justify-between">
      <el-select v-model="currentCode" value-key="language">
        <el-option v-for="file in fileList" :key="file.language" :value="file" :label="file.language" />
      </el-select>
      <div class="flex flex-row items-center">
        <el-button type="primary" @click="goSave">保存</el-button>
        <el-button type="primary" @click="goReset">重置</el-button>
        <el-button type="primary" @click="showConfig">设置</el-button>
      </div>
    </div>
    <div class="flex flex-col flex-1 min-h-0 border border-border overflow-hidden rounded-base">
      <MonacoEditorCompo
        ref="editorRef"
        :key="currentCode.language"
        :theme="editorConfig.isDark ? 'vs-dark' : 'light'"
        :disable-copy-paste="editorConfig.disableCopyPaste"
        :font-size="editorConfig.fontSize"
        :auto-format="editorConfig.autoFormat"
        :default-value="currentCode.source"
        :language="currentCode.language"
        @editor-mounted="onEditorMounted"
        @save="onSave"
        @change="onChange"
        @copy-paste-disabled="onCopyPasteDisabled"
        @reset="onReset" />
    </div>
  </div>
  <ConfigDrawer ref="configDrawerRef" :config="editorConfig" />
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import MonacoEditorCompo from './components/MonacoEditorCompo.vue';
  import ConfigDrawer from './components/ConfigDrawer.vue';
  import { CodeFileData, fileList } from '@/utils/editorFiles';
  import { ElMessage, ElMessageBox } from 'element-plus';
  import { EditorConfig } from '../types';
  import { useToggleDayNight } from '@/componsables/useToggleDayNight';

  const { isDark } = useToggleDayNight();

  const currentCode = ref<CodeFileData>(fileList[0]);
  const editorRef = ref<InstanceType<typeof MonacoEditorCompo>>();
  const configDrawerRef = ref<InstanceType<typeof ConfigDrawer>>();
  const editorConfig = ref<EditorConfig>({
    /** 是否使用暗色模式 */
    isDark: true,
    /** 是否自动格式化 */
    autoFormat: true,
    /** 字体大小 */
    fontSize: 16,
    /** tab转换 */
    insertSpaces: true,
    /** 是否禁用复制粘贴 */
    disableCopyPaste: false,
  });

  /** 切换日夜模式触发编辑器主题切换 */
  watch(
    isDark,
    (val) => {
      if (editorConfig.value.isDark !== val) {
        editorConfig.value = Object.assign(editorConfig.value, { isDark: val });
      }
    },
    { immediate: true },
  );

  const showConfig = () => {
    if (configDrawerRef.value) {
      configDrawerRef.value.open();
    }
  };

  const onEditorMounted = () => {
    console.log('editor mounted');
    // if (editorRef.value) {
    //   editorRef.value.save();
    // }
  };

  const goReset = () => {
    if (editorRef.value) {
      ElMessageBox.confirm('确定要重置代码吗', '重置代码', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: '',
      })
        .then(() => {
          if (editorRef.value) editorRef.value.reset();
          ElMessage({
            type: 'success',
            message: '代码已重置',
          });
        })
        .catch(() => null);
    }
  };

  const goSave = () => {
    if (editorRef.value) editorRef.value.save();
  };

  const onSave = (val: string) => {
    ElMessage.success('已保存');
    console.log('save:', val);
  };

  const onChange = (val: string) => {
    console.log('onChange:', val);
  };

  const onCopyPasteDisabled = () => {
    ElMessage.warning('已禁用代码编辑器的复制粘贴功能');
  };

  const onReset = () => {
    console.log('onReset');
  };
</script>
