import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {
	AdminChooseIdContextProvider,
	AdminContextProvider,
	AdminUserContextProvider,
	CheckoutContextProvider,
	FavouriteContextProvider,
	GiftCardCategoryContextProvider,
	GiftCardContextProvider,
	ItemContextProvider,
	LoginContextProvider,
	ModalContextProvider,
	StatusContextProvider,
	ToasterContextProvider,
} from '@context/index'
import { GoogleOAuthProvider } from '@react-oauth/google'

import { Routes } from './router/Router'
import App from './App'
import { CLIENT_ID } from './constants'

import './index.css'

const router = createBrowserRouter(Routes)

createRoot(document.getElementById('root')!).render(
	<StrictMode>
	<GoogleOAuthProvider clientId={CLIENT_ID}>
		<StatusContextProvider>
			<ToasterContextProvider>
				<LoginContextProvider>
					<AdminContextProvider>
						<AdminChooseIdContextProvider>
							<AdminUserContextProvider>
								<GiftCardContextProvider>
									<GiftCardCategoryContextProvider>
										<FavouriteContextProvider>
											<ItemContextProvider>
												<ModalContextProvider>
													<CheckoutContextProvider>
														<RouterProvider fallbackElement={<App />} router={router} />
													</CheckoutContextProvider>
												</ModalContextProvider>
											</ItemContextProvider>
										</FavouriteContextProvider>
									</GiftCardCategoryContextProvider>
								</GiftCardContextProvider>
							</AdminUserContextProvider>
						</AdminChooseIdContextProvider>
					</AdminContextProvider>
				</LoginContextProvider>
			</ToasterContextProvider>
		</StatusContextProvider>
	</GoogleOAuthProvider>
	</StrictMode>
)
