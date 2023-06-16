import { MenuRegistry, LinkedList, MenuElement } from 'monaco-editor/esm/vs/platform/actions/common/actions';
import { ref } from 'vue';

/**
 * 启用/禁用 monaco editor 的右键菜单中的复制粘贴
 */
export const useCopyPasteContextMenu = () => {
  const menus = MenuRegistry._menuItems;
  const contextMenuEntry = [...menus].find((entry) => entry[0].id == 'EditorContext');
  const contextMenuLinks = contextMenuEntry ? contextMenuEntry[1] : null;
  const removableIds = [
    'editor.action.clipboardCutAction',
    'editor.action.clipboardCopyAction',
    'editor.action.clipboardPasteAction',
  ];

  const elementArray = ref<MenuElement[]>([]);

  const removeById = (list: LinkedList<MenuElement>, ids: string[]) => {
    let node = list._first;
    const elList: MenuElement[] = [];
    do {
      const shouldRemove = ids.includes(node.element?.command?.id);
      if (shouldRemove) {
        elList.push(node.element);
        list._remove(node);
      }
    } while ((node = node.next));
    elementArray.value = elList;
  };

  const disableCopyPasteMenu = () => {
    if (contextMenuLinks) {
      removeById(contextMenuLinks, removableIds);
    }
  };

  const restoreCopyPasteMenu = () => {
    if (contextMenuLinks) {
      if (elementArray.value.length > 0) {
        elementArray.value.forEach((element) => {
          contextMenuLinks.unshift(element);
        });
        elementArray.value = [];
      }
    }
  };

  return { disableCopyPasteMenu, restoreCopyPasteMenu };
};
