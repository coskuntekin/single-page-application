import { defineStore } from "pinia";
import { db, doc, setDoc, getDoc } from "../../firebase";

const docId = "iBQUH9UxUHluAAYObuAr";
export const useChartStore = defineStore({
  id: "chart",
  state: () => ({
    operations: [],
    loading: false,
    submitting: false,
    error: null,
  }),
  actions: {
    setOperations(operations) {
      this.operations = operations;
    },
    async saveOperations(operations) {
      try {
        this.submitting = true;
        const docRef = doc(db, "operations", docId);
        await setDoc(docRef, { operations: operations });
      } catch (error) {
        this.error = error.message;
        console.log("Error adding document: ", error);
      } finally {
        this.submitting = false;
      }
    },
    async fetchOperations() {
      try {
        this.loading = true;
        const docRef = doc(db, "operations", docId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          this.operations = docSnap.data().operations;
        } else {
          this.error = "No such document!";
        }
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
