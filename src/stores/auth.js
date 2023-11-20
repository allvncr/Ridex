import { defineStore } from "pinia";

export const useAuthStore = defineStore("Auth", {
  state: () => {
    return {
      user: sessionStorage.getItem("userRidex")
        ? JSON.parse(sessionStorage.getItem("userRidex"))
        : null,
    };
  },
  persist: true,
  getters: {},
  actions: {
    login(payload) {
      this.user = payload;
      sessionStorage.setItem("userRidex", JSON.stringify(this.user));
    },
    logout() {
      sessionStorage.removeItem("userRidex");
      this.user = null;
    },
  },
});
