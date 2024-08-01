import { pinia } from '../store';
import type { App } from 'vue';

export function registerPlugins(app: App) {
  app.use(pinia);
}
