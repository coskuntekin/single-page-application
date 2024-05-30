import { createRouter, createWebHistory } from "vue-router";
import { checkAccessMiddleware, setPageTitleMiddleware } from "./middleware";
import { routes } from "./routes";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(checkAccessMiddleware);
router.beforeEach(setPageTitleMiddleware);
router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
