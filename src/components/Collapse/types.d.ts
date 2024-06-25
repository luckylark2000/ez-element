import type { Ref } from 'vue';

export type NameType = string | number;

export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}

export interface CollapseProps {
  /**
   * 手风琴效果
   */
  accordion?: boolean;
  /**
   * 当前激活面板的 name
   */
  modelValue?: NameType[];
}

export interface CollapseItemState {
  active?: boolean;
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>;
  handleItemClick: (name: NameType) => void;
}
