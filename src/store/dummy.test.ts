import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { createApp } from 'vue';
import { MyPiniaPlugin } from './plugins/myPiniaPlugin';
import { useDummyStore } from './dummy';

describe('Test Store', () => {
  
  describe('actions', () => {
    // beforeEach(() => {
    //   createApp({});
    //   setActivePinia(createPinia().use(MyPiniaPlugin));
    // });
    it("should return a 'This is a mock string'", () => {
      createApp({});
      setActivePinia(createPinia().use(MyPiniaPlugin));
      
      const store = useDummyStore();

      expect(store.getMessage()).toBe('This is a mock string');
    });
  });
});
