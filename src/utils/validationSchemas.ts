/* eslint-disable no-magic-numbers */
import * as yup from 'yup'

import type { CoinGiftSchema, TextAreaSchema } from '../@types/giftcards'

const minCharNum = 10
const maxCharNum = 50

export const textAreaValidationSchema: yup.ObjectSchema<TextAreaSchema> = yup.object().shape({
	suggestion: yup
		.string()
		.min(minCharNum, 'Minimum character length: 10')
		.max(maxCharNum, 'Maximum character length: 50')
		.required('Type in your gift ideas!'),
	suggestionName: yup.string().required(`Type in your gift's name`),
})

export const coinGiftValidationSchema: yup.ObjectSchema<CoinGiftSchema> = yup.object().shape({
	coins: yup
		.number()
		.positive(`You can only send a positive amount of coins!`)
		.required(`Set the number you want to gift!`),
})
