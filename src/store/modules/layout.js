export const layout = {
    namespaced: true,
    state: () => ({
        breadcrumbs: [
            {
                text: "Sozlamalar",
                route: "/settings",
                level: 1
            }
        ]
        // sample object for breadcrumbs
        /**
         * {
         * text: String
         * route: String
         * level: Number
         * }
         */
    }),
    getters: {
        geetBreadcrumbs(state) {
            return state.breadcrumbs;
        }
    },
    mutations: {
        pushBreadcrumbs(state, data) {
            state.breadcrumbs.push(data);
        }
    },
    actions: {
        // pushBreadcrumbs(ctx, data) {

        // }
    }
}