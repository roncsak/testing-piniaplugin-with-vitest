import { MyFunctions } from '../../plugins/functions';
import { PiniaPluginContext } from 'pinia';
import { markRaw } from 'vue';

export function MyPiniaPlugin(context: PiniaPluginContext) {
  context.store.$functions = markRaw(MyFunctions.getInstance());
}

declare module 'pinia' {
  export interface PiniaCustomProperties {
    $functions: MyFunctions;
  }
}
