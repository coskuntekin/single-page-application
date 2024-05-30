import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { defineStore } from "pinia";
import { auth } from "../../firebase";

export const useAuthStore = defineStore("auth", {
  id: "auth",
  state: () => ({
    user: null,
    loading: false,
    error: null,
  }),
  actions: {
    async login(email, password) {
      this.loading = true;
      this.error = null;
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user;
      } catch (error) {
        this.error = error.message;
        console.error("Login error:", error);
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      this.loading = true;
      this.error = null;
      try {
        await signOut(auth);
        this.user = null;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    setUser(user) {
      this.user = user;
    },
  },
});
