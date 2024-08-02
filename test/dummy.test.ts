import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createApp } from 'vue';
import { MyPiniaPlugin } from '../src/store/plugins/myPiniaPlugin';
import { useDummyStore } from '../src/store/dummy';
import { MyFunctions } from '../src/plugins/functions';

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

        // This line was provided by Vladimir (vova.dev) on Discord
        // https://discord.com/channels/917386801235247114/1268956227770126356/1268961100112855143
        MyFunctions.prototype.getMessage = vi.fn().mockReturnValue('This is a mock text.');
  
        expect(store.getMessage()).toBe('This is a mock text.');
      });
    });
  });

});
