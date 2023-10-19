import * as yup from 'yup'

export const ValidationSchemaStatus = yup.object().shape({
	boughtBy: yup.string(),
	boughtTime: yup.string(),
	cost: yup.number(),
	deliveryStatus: yup.string(),
	idUser: yup.string(),
	status: yup.string(),
	id: yup.string(),
	gifts: yup.array().of(
		yup.object().shape({
			id: yup.number(),
			name: yup.string(),
			region: yup.string(),
			backgroundImg: yup.string(),
			categoryID: yup.string(),
			cardImg: yup.string(),
			price: yup.number(),
			attentionMessage: yup.string(),
			shortDesc: yup.string(),
			description: yup.string(),
			amount: yup.number(),
		})
	),
})
