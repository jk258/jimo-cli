import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: '首页',
		component: () => import('@/views/Home.vue'),
		meta: {
			KeepAlive: true,
		},
	},
	// 404
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: () => import('@/views/Home.vue'),
	},
]
export default routes
