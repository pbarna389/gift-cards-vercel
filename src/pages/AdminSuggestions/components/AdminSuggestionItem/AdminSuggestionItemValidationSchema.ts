import * as yup from 'yup'

import type { AdminSuggestionSchema, SuggestionInter } from '$types/giftcards'

export const AdminSuggestionItemValidationSchema: yup.ObjectSchema<AdminSuggestionSchema> = yup
	.object()
	.shape({
		suggestions: yup.mixed<SuggestionInter[]>().required(),
	})
