const routes = [
    {
        path: '/',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/passengers/new',
        component: () => import('@/views/PassengersForm.vue')
    }
]

export default routes