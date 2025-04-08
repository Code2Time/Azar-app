export const state = () => ({
	filters: {
		sortBy: '',
		searchQuery: '',
	},
})

export const mutations = {
	SET_SORT_BY(state, value) {
		state.filters.sortBy = value
	},
	SET_SEARCH_QUERY(state, value) {
		state.filters.searchQuery = value
	},
}

export const actions = {
	updateSortBy({ commit }, value) {
		commit('SET_SORT_BY', value)
	},
	updateSearchQuery({ commit }, value) {
		commit('SET_SEARCH_QUERY', value)
	},
}

export const getters = {
	activeFilters: (state) => state.filters,
	sortedItems: (state) => (items) => {
		if (!items) return []

		let filtered = [...items]

		if (state.filters.searchQuery) {
			const query = state.filters.searchQuery.toLowerCase()
			filtered = filtered.filter(
				(item) =>
					item.name.toLowerCase().includes(query) ||
					item.price.toLowerCase().includes(query)
			)
		}

		if (state.filters.sortBy === 'newest') {
			filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
		} else if (state.filters.sortBy === 'oldest') {
			filtered.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
		}

		return filtered
	},
}
