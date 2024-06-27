import type { InjectionKey } from 'vue';
import type { CollapseContext } from './types.d.ts';

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey');
