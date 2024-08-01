import { createPinia } from 'pinia';
import { MyPiniaPlugin } from './plugins/myPiniaPlugin';

export const pinia = createPinia();

pinia.use(MyPiniaPlugin);
