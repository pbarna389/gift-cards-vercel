export const filterData = <T extends { name?: string; region?: string; userName?: string }>(
	data: T[] | undefined,
	value: string | undefined,
	property: string
) => {
	if (data && value !== undefined) {
		const newShownValues = data.filter((item: T) => {
			if (property === 'categoryID') {
				return item[property as keyof T] === value
			}
			if (property === 'name' && item.name) {
				return item.name.toLowerCase().includes(value.toLowerCase())
			}

			if (property === 'userName' && item.userName) {
				return item.userName.toLowerCase().includes(value.toLowerCase())
			}
			if (property === 'region' && item.region) {
				return item.region.toLowerCase() === value.toLowerCase()
			}

			return false
		})

		return newShownValues
	}
	return []
}
