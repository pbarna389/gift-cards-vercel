import * as Yup from 'yup'

export const errorMessage = {
	coins: {
		required: 'Coins is required',
		positive: 'Coins must be a positive number',
		integer: 'Coins must be an integer',
	},
}

export const validationSchemaUser = Yup.object().shape({
	coins: Yup.number()
		.required(errorMessage.coins.required)
		.positive(errorMessage.coins.positive)
		.integer(errorMessage.coins.integer),
	birthDay: Yup.number().required(),
	division: Yup.string().required(),
	email: Yup.string().required(),
	id: Yup.string().required(),
	prevPurchase: Yup.array().required(),
	profilePic: Yup.string().required(),
	region: Yup.string().required(),
	role: Yup.string().required(),
	startedWorking: Yup.number().required(),
	userName: Yup.string().required(),
})
