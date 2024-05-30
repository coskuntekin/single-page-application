import { defineStore } from "pinia";
import { ref, get } from "firebase/database";
import { rtdb } from "../../firebase";

export const useDataStore = defineStore("dataStore", {
  id: "data",
  state: () => ({
    data: null,
    loading: true,
    error: null,
  }),
  actions: {
    async fetchData() {
      this.loading = true;
      this.error = null;
      try {
        const dbRef = ref(rtdb, "/");
        const snapshot = await get(dbRef);
        this.data = snapshot.val();
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
