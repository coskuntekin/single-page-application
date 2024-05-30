import { defineStore } from "pinia";
import { db, doc, setDoc, getDoc } from "../../firebase";

const docId = "122JczuRxMAdubOXLTvV";
export const useTemplateStore = defineStore({
  id: "template",
  state: () => ({
    template: {
      userOption: "",
    },
    loading: true,
    submitting: false,
    error: null,
  }),
  actions: {
    async saveTemplate(formData) {
      try {
        this.submitting = true;
        const docRef = doc(db, "template", docId);
        await setDoc(docRef, formData);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.submitting = false;
      }
    },
    async getChoosenTemplate() {
      try {
        this.loading = true;
        const docRef = doc(db, "template", docId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          this.template.userOption = docSnap.data().userOption;
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
