import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import routes from '@/router/routes'

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	},
})
router.beforeEach((to, from, next) => {
	next()
})
router.afterEach((to, from) => {})
export default router
