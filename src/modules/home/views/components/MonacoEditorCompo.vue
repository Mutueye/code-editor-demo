<template>
  <Editor
    ref="editorCompoRef"
    v-model:value="code"
    height="100%"
    :language="language"
    :default-value="defaultValue"
    :theme="theme"
    :options="finalOptions"
    @mount="handleMount"
    @change="handleChange" />
</template>

<script lang="ts" setup>
  import { ref, toRefs, watch, computed } from 'vue';
  import Editor from '@guolao/vue-monaco-editor';
  import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';
  import { useCopyPasteContextMenu } from '../composables/useCopyPasteContextMenu';

  const props = defineProps<{
    /** 主题皮肤，比如'light'或者'vs-dark'' */
    theme?: string;
    /** 是否禁用复制粘贴功能 */
    disableCopyPaste?: boolean;
    /** 代码编辑器语言，比如java ruby c++ typescripte等*/
    language?: string;
    /**  字体大小，传数字，默认16，即16px */
    fontSize?: number;
    /** 自动格式化，会同时设置formatOnType和formatOnPast两个monaco editor的选项 */
    autoFormat?: boolean;
    /** monaco-editor的选项，优先级低于单独传入的fontSize autoFormat等参数 */
    options?: monacoEditor.editor.IStandaloneEditorConstructionOptions;
    /** 默认(初始)值，可使用该值进行重置代码 */
    defaultValue?: string;
  }>();
  const { disableCopyPaste, defaultValue, fontSize, autoFormat } = toRefs(props);

  const emit = defineEmits(['save', 'change', 'reset', 'editor-mounted', 'copy-paste-disabled']);

  const { disableCopyPasteMenu, restoreCopyPasteMenu } = useCopyPasteContextMenu();

  const defaultOptions: monacoEditor.editor.IStandaloneEditorConstructionOptions = {
    automaticLayout: true,
    formatOnType: true,
    formatOnPaste: true,
    fontSize: 16,
  };

  const code = ref('');
  const editorCompoRef = ref<InstanceType<typeof Editor> | null>(null);
  const editorRef = ref<monacoEditor.editor.ICodeEditor | null>(null);

  const finalOptions = computed(() => {
    const extraOptions: Partial<monacoEditor.editor.IStandaloneEditorConstructionOptions> = {};
    if (fontSize?.value) {
      extraOptions.fontSize = fontSize.value;
    }
    if (autoFormat.value === false || autoFormat.value === true) {
      extraOptions.formatOnType = autoFormat.value;
      extraOptions.formatOnPaste = autoFormat.value;
    }
    return Object.assign({}, defaultOptions, extraOptions);
  });

  /** 控制 启用/禁用 右键菜单的复制粘贴功能 */
  watch(
    disableCopyPaste,
    (val) => {
      if (editorRef.value) {
        if (val) {
          disableCopyPasteMenu();
        } else {
          restoreCopyPasteMenu();
        }
      }
    },
    { immediate: true },
  );

  const handleMount = (editor: monacoEditor.editor.IStandaloneCodeEditor) => {
    emit('editor-mounted');
    editorRef.value = editor;

    if (defaultValue?.value) {
      code.value = defaultValue.value;
    }

    // 键盘事件处理
    editorRef.value.onKeyDown((e) => {
      const { keyCode, ctrlKey, metaKey } = e;
      // console.log('keyCode::::', keyCode, ctrlKey, metaKey);

      // ctrl + s 或 cmd + s 触发保存
      if (keyCode === 49 && (metaKey || ctrlKey)) {
        save();
        e.preventDefault();
      }
      // 复制或粘贴快捷键时，如果disableCopyPaste，触发'copy-paste-disabled事件
      if ((keyCode === 33 || keyCode === 52) && (metaKey || ctrlKey)) {
        if (disableCopyPaste.value) {
          e.preventDefault();
          emit('copy-paste-disabled');
        }
      }
    });
  };

  const handleChange = (val: string) => {
    emit('change', val);
  };

  /** 保存 */
  const save = () => {
    if (editorCompoRef.value) {
      emit('save', code.value);
    }
  };

  /** 重置代码 */
  const reset = () => {
    code.value = defaultValue?.value ? defaultValue.value : '';
    emit('reset');
  };

  defineExpose({ save, reset });
</script>
