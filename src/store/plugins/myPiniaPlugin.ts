import { Functions } from '../../plugins/functions';
import { PiniaPluginContext } from 'pinia';
import { markRaw } from 'vue';

export function MyPiniaPlugin(context: PiniaPluginContext) {
  context.store.$functions = markRaw(Functions.getInstance());
}

declare module 'pinia' {
  export interface PiniaCustomProperties {
    $functions: Functions;
  }
}
