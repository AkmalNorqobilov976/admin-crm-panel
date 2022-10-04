export const mails = {
    namespaced: true,
    state: () => ({
        selectedItems: []
    }),
    getters: {

    },
    mutations: {
        SetSelectedItems(state, data) {
            state.selectedItems.push(data);
        }
    },
    actions: {

    }
}