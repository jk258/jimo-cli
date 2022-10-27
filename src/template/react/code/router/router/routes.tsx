import { lazy, ComponentType, Suspense } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

type RouterType = {
	name?: string
} & RouteObject
function getElement(factory: () => Promise<{ default: ComponentType<any> }>) {
	const LazyNode = lazy(factory)
	return (
		<Suspense fallback='...'>
			<LazyNode></LazyNode>
		</Suspense>
	)
}

const routes: RouterType[] = [
	{
		path: '/',
		name: '首页',
		element: getElement(() => import('@/views/Home')),
	},
	// 404
	{
		path: '/*',
		element: <Navigate to='/'></Navigate>,
	},
]
export default routes
