import { useAuthStore } from "../stores/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export function checkAccessMiddleware(to, _from, next) {
  const authStore = useAuthStore();
  let isNextCalled = false;

  onAuthStateChanged(auth, (user) => {
    authStore.setUser(user ? user : null);
    authStore.loading = false;

    if (!isNextCalled) {
      if (to.meta.requiresAuth && !authStore.user) {
        next("/login");
      } else {
        next();
      }
      isNextCalled = true;
    }
  });
}

export function setPageTitleMiddleware(to, _from, next) {
  const pageTitle = " « Simularge Simple UI Generator";
  if (to.meta.title !== "") {
    document.title = to.meta.title + pageTitle;
  } else {
    document.title = pageTitle;
  }
  window.scrollTo(0, 0);
  next();
}
