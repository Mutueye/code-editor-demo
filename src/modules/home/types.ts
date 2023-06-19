export type EditorState = 'saved' | 'saving' | 'edited';

export interface EditorConfig {
  /** 是否使用暗色模式 */
  isDark: boolean;
  /** 是否自动格式化 */
  autoFormat: boolean;
  /** 字体大小 */
  fontSize: number;
  /** tab转换 */
  insertSpaces: boolean;
  /** 是否禁用复制粘贴 */
  disableCopyPaste: boolean;
  /** 是否只读 */
  readOnly: boolean;
}
