<template>
  <div class="flex flex-1 flex-col px-spacing-xl pb-spacing-xl min-h-0">
    <div class="flex flex-row pb-spacing items-center justify-between">
      <el-select
        ref="languageSelectRef"
        v-model="currentCode"
        :disabled="editorState === 'saving'"
        value-key="language">
        <el-option v-for="file in fileList" :key="file.language" :value="file" :label="file.language">
          <div @click.stop="onSelectLanguage(file)">{{ file.language }}</div>
        </el-option>
      </el-select>
      <div class="flex flex-row items-center">
        <div v-if="editorState !== 'saved'" class="w-8px h-8px bg-theme rounded-full mr-spacing-sm" />
        <el-button
          :loading="editorState === 'saving'"
          :disabled="editorState === 'saved'"
          type="primary"
          @click="goSave()">
          {{ editorState === 'saving' ? '保存中...' : '保存' }}
        </el-button>
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
  import { ElMessage, ElMessageBox, ElSelect } from 'element-plus';
  import { EditorConfig, EditorState } from '../types';
  import { useToggleDayNight } from '@/componsables/useToggleDayNight';

  const { isDark } = useToggleDayNight();

  const editorState = ref<EditorState>('saved');
  const currentCode = ref<CodeFileData>(fileList[0]);
  const languageSelectRef = ref<InstanceType<typeof ElSelect>>();
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

  const onSelectLanguage = (val: CodeFileData) => {
    if (editorState.value === 'edited') {
      ElMessageBox.confirm('您的代码尚未保存', '提示', {
        confirmButtonText: '保存并切换',
        cancelButtonText: '取消切换',
        type: '',
      })
        .then(() => {
          if (languageSelectRef.value) languageSelectRef.value.blur();
          goSave(() => {
            currentCode.value = val;
          });
        })
        .catch(() => {
          if (languageSelectRef.value) languageSelectRef.value.blur();
        });
    } else {
      currentCode.value = val;
      if (languageSelectRef.value) languageSelectRef.value.blur();
    }
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

  const goSave = (callback?: () => void) => {
    editorState.value = 'saving';
    setTimeout(() => {
      if (editorRef.value) editorRef.value.save();
      editorState.value = 'saved';
      if (typeof callback === 'function') callback();
    }, 2000);
  };

  const onSave = (val: string) => {
    ElMessage.success('已保存');
    console.log('save:', val);
  };

  const onChange = (val: string) => {
    editorState.value = 'edited';
    console.log('onChange:', val);
  };

  const onCopyPasteDisabled = () => {
    ElMessage.warning('已禁用代码编辑器的复制粘贴功能');
  };

  const onReset = () => {
    console.log('onReset');
  };
</script>
