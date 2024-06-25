import type { Ref } from 'vue';

export type NameType = string | number;

export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}

export interface CollapseProps {
  accordion?: boolean;
  modelValue?: string[];
}

export interface CollapseItemState {
  active?: boolean;
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>;
  handleItemClick: (name: NameType) => void;
}
