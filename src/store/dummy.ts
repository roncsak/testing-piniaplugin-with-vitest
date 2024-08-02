import { defineStore } from 'pinia';

export const useDummyStore = defineStore('dummy', {
  state: () => ({
   
  }),
  actions: {
    getMessage(): string {
      return this.$functions.getMessage();
    }
  },
});
