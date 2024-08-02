import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { createApp } from 'vue';
import { MyPiniaPlugin } from '../src/store/plugins/myPiniaPlugin';
import { useDummyStore } from '../src/store/dummy';

describe('Test Dummy Store', () => {
  const app = createApp({});
  beforeEach(() => {
    const pinia = createPinia().use(MyPiniaPlugin);
    app.use(pinia);
    setActivePinia(pinia);
  });
  
  describe('actions', () => {
    describe('getMessage()', () => {
      it("should return 'This is a mock string'", () => {
      
        const store = useDummyStore();
  
        expect(store.getMessage()).toBe('This is a mock text.');
      });
    });
  });

});
