//schema types

export interface TextObject {
	h2: string
	text: string | string[]
}

export interface TextAreaSchema {
	suggestion: string
	suggestionName: string
}

export interface CoinGiftSchema {
	coins: number
}

export interface AdminSuggestionSchema {
	suggestions: SuggestionInter[]
}

export interface StatusOfDeliverySchema {
	boughtBy?: string
	boughtTime?: string
	cost?: number
	deliveryStatus?: string
	gifts?: CheckoutDataInter[]
	idUser?: string
	status?: string
	userName?: string
}

export interface GiftCardSchema {
	attentionMessage: string | undefined
	backgroundImg: string | undefined
	cardImg: string | undefined
	categoryID: string
	description: string
	id: number
	name: string
	price: number
	region: string
	regionFlag: string | undefined
	shortDesc: string
}

//formik-related types

export type SuggestionStatus = 'APPROVED' | 'REJECTED' | 'NEW_NOT_INVESTIGATED'

export interface SuggestionInter {
	creationTime: string
	id: string
	status: SuggestionStatus
	suggestion: string
	suggestionName: string
}

export interface GiftCardInter {
	attentionMessage: string
	backgroundImg: string
	cardImg: string
	categoryID: string
	description: string
	id: string
	name: string
	price: number
	region: string
	regionFlag: string
	shortDesc: string
}

export interface FavouriteGiftData {
	giftId: number
	giftName: string
}

export interface FavouritedItem {
	giftData: FavouriteGiftData[]
	id: string
}

export interface UserInter {
	birthDay: number
	coins: number
	division: string
	email: string
	id: string
	prevPurchase: PrevPurchase[]
	profilePic: string
	region: string
	role: UserRoleType
	startedWorking: number
	userName: string
}

export interface SuggestionFormInter {
	suggestion: string
	suggestionName: string
}

export interface GiftCoinEmailFormInter {
	coins: number
}

export interface AdminSuggestionFormInter {
	suggestionId: string
	suggestionStatus: SuggestionStatus
}

export type GiftCardFormValues = Partial<GiftCardInter>
export type UserFormValues = Partial<UserInter>
export type SuggestionFormValues = Partial<SuggestionFormInter>
export type GiftCoinEmailFormValues = Partial<GiftCoinEmailFormInter>
export type AdminSuggestionFormValues = Partial<AdminSuggestionSchema>
export type SuggestionStatusFormValues = Partial<SuggestionInter>
export type GiftBoughtValues = Partial<BoughtGiftsValidSchema>
export type BoughtGIftsSchemas = Partial<BoughtGifts>
export type CombinedFormValueInterfaces = SuggestionFormValues &
	GiftCardFormValues &
	UserFormValues &
	GiftCoinEmailFormValues &
	AdminSuggestionFormValues &
	GiftBoughtValues &
	BoughtGIftsSchemas

//reducer-related types

// delivery status

enum StatusOfDelivery {
	justBought = 'JUST_BOUGHT',
	inProgress = 'IN_PROGRESS',
	inStock = 'IN_STOCK',
	delivered = 'DELIVERED',
	rejected = 'REJECTED',
}

export type StatusOfDeliveryType = `${StatusOfDelivery}`
// role of user

enum UserRole {
	user = 'USER',
	notAuthUser = 'NOT_AUTH_USER',
	admin = 'ADMIN',
}

type UserRoleType = `${UserRole}`
//
// eslint-disable-next-line no-magic-numbers
type Status = '1' | '2' | '3' | '4' | '5'

// user interface

export interface PrevPurchase {
	boughtTime: string
	cost: number
	deliveryStatus: StatusOfDeliveryType
	gifts: CheckoutDataInter[]
	status: Status
	id?: string
}

export type NotificationTypes = 'GIFT_COINS'

export interface NotificationContentInter {
	type: NotificationTypes
	amount?: number
	giftName?: string
}

export interface NotificationMessagesInter {
	content: NotificationContentInter
	creationTime: string
	id: string
	isDelivered: boolean
	senderId?: string
	senderName?: string
}

export interface NotificationInteractions {
	id: string
	notificationMessages: NotificationMessagesInter[]
}

export interface BoughtGIftsSchema {
	boughtGifts: BoughtGifts
}

// bought Gift inter
export interface BoughtGiftsValidSchema {
	boughtGifts: BoughtGifts[]
}

export interface BoughtGifts {
	boughtBy: string
	boughtTime: string
	cost: number
	deliveryStatus: StatusOfDeliveryType
	gifts: CheckoutDataInter[]
	idUser: string
	status: Status
	id?: string
}
export type PayloadType = {
	categoryName?: string
	data?: GiftCardInter[]
	error?: string
	filterWord?: string
	loading?: boolean
	shownData?: GiftCardInter[]
}

export interface CheckoutDataInter extends GiftCardInter {
	amount: number
	deliveryStatus: StatusOfDelivery
}

export interface ActionTypes<T> {
	payload?: T | null
}

type ToasterTypes =
	| 'error'
	| 'success'
	| 'login'
	| 'purchase'
	| 'pending'
	| 'logout'
	| 'default'
	| 'add-item'
	| 'remove-item'
export interface ToasterCardsInter {
	id: string
	text: string
	type: ToasterTypes
}

export type HTTPMethods = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface NewSuggestionInter {
	id: string
	suggestions: SuggestionInter[]
	userName: string
}
// just of validation

export interface GiftBoughtValuesProps {
	boughtBy?: string
	boughtTime?: string
	cost?: number
	deliveryStatus?: string
	gifts?: GiftItemProps[]
	id?: string
	idUser?: string
	status?: string
}

export interface GiftItemProps {
	amount?: number
	attentionMessage?: string
	backgroundImg?: string
	cardImg?: string
	categoryID?: string
	description?: string
	id?: number
	name?: string
	price?: number
	region?: string
	shortDesc?: string
}
