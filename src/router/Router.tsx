import { Outlet, type RouteObject } from 'react-router-dom'

import { PrivateRoutes } from '@utils/PrivateRoutes'

import App from '../App'
import {
	Admin,
	AdminGiftCardModify,
	AdminStatusDeliveBought,
	AdminSuggestions,
	AdminUserDetails,
	AdminUserDetailsAddCoins,
	AdminUserDetailsHistPrevMod,
	AdminUserDetailsInfo,
	AdminUserDetailsListPurpose,
	AdminUserDetailsSuggestions,
	AdminUsers,
	Category,
	Checkout,
	Coins,
	ErrorPage,
	Favourites,
	GiftCoins,
	Home,
	Item,
	NotFound,
	Profile,
	Suggestions,
} from '../pages'

const catRoute = {
	path: '/:category',
	children: [
		{
			index: true,
			element: <Category />,
		},
		{
			path: '/:category/:item',
			children: [
				{
					index: true,
					element: <Item />,
				},
			],
		},
	],
}

const adminSuggestionList = {
	path: '/admin/suggestions-list',
	children: [
		{
			index: true,
			element: <AdminSuggestions />,
		},
	],
}

const adminBoughtAndDeliveryStatus = {
	path: '/admin/status-list',
	children: [
		{
			index: true,
			element: <AdminStatusDeliveBought />,
		},
	],
}

const adminRoute = {
	path: '/admin',
	element: <PrivateRoutes />,
	children: [
		{
			index: true,
			element: <Admin />,
		},
		{
			path: '/admin/:giftCardModify',
			children: [
				{
					index: true,
					element: <AdminGiftCardModify />,
				},
			],
		},
		{
			path: '/admin/users',
			children: [
				{
					index: true,
					element: <AdminUsers />,
				},
				{
					path: '/admin/users/:userName',
					element: <AdminUserDetails />,
					children: [
						{
							element: <Outlet />,
							children: [
								{
									path: 'add-coins',
									element: <AdminUserDetailsAddCoins />,
								},
								{
									path: 'info-of-user',
									element: <AdminUserDetailsInfo />,
								},
								{
									path: 'history-of-purpose',
									element: <AdminUserDetailsListPurpose />,
								},
								{
									path: 'history-of-previous-trans',
									element: <AdminUserDetailsHistPrevMod />,
								},
								{
									path: 'history-of-suggestions',
									element: <AdminUserDetailsSuggestions />,
								},
							],
						},
					],
				},
			],
		},
		{
			...adminSuggestionList,
		},
		{
			...adminBoughtAndDeliveryStatus,
		},
	],
}

export const Routes: RouteObject[] = [
	{
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				children: [
					{
						index: true,
						element: <Home />,
					},
					{ ...catRoute },
					{
						path: '/favourites',
						element: <Favourites />,
					},
					{
						path: '/checkout',
						element: <Checkout />,
					},
					{
						path: '/profile',
						element: <Profile />,
					},
					{
						path: '/coins',
						element: <Coins />,
					},
					{
						path: '/gift-coins',
						element: <GiftCoins />,
					},
					{
						path: '/suggestions',
						element: <Suggestions />,
					},
					{ ...adminRoute },
				],
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]
