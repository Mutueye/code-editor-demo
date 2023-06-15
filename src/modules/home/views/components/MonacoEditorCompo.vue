<template>
  <div ref="monacoEl" class="w-full h-80vh"></div>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

  const monacoEl = ref<HTMLElement | null>(null);
  const editor = ref<monaco.editor.IStandaloneCodeEditor | null>(null);

  watch(
    monacoEl,
    (val) => {
      if (val && !editor.value) {
        editor.value = monaco.editor.create(val, {
          value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
          language: 'typescript',
        });
      }
    },
    { immediate: true },
  );
</script>
