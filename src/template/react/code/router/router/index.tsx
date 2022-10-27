import { ReactElement, Suspense } from 'react'
import { Route, RouteObject, Routes } from 'react-router-dom'
import routes from './routes'

function BeforeRouter({ route }: { route: RouteObject }) {
	return route.element
}

function RouteList(list: RouteObject[]) {
	return (
		<>
			{list.map((route) => {
				return (
					<Route path={route.path} element={BeforeRouter({ route })} key={route.path}>
						{route.children && RouteList(route.children)}
					</Route>
				)
			})}
		</>
	)
}

export default function Router() {
	return <Routes>{RouteList(routes)}</Routes>
}
