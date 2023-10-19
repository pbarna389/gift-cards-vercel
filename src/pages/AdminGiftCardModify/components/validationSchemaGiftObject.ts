import * as Yup from 'yup'

const errorMessages = {
	name: 'Name is required',
	categoryID: 'Category is required',
	region: 'Region is required',
	price: 'Price is required',
	attentionMessage: 'Attention message is required',
	backgroundImg: 'Background image link is required',
	cardImg: 'Card image link is required',
	shortDesc: 'Short description is required',
	description: 'Full description is required',
}

export const validationSchemaGiftObject = Yup.object().shape({
	id: Yup.number().required(),
	name: Yup.string().required(errorMessages.name),
	categoryID: Yup.string().required(errorMessages.categoryID),
	region: Yup.string().required(errorMessages.region),
	price: Yup.number().required(errorMessages.price),
	attentionMessage: Yup.string(),
	backgroundImg: Yup.string(),
	cardImg: Yup.string(),
	regionFlag: Yup.string(),
	shortDesc: Yup.string().required(errorMessages.shortDesc),
	description: Yup.string().required(errorMessages.description),
})
