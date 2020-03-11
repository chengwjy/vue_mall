// 菜单配置
export default [
    {
        name:'首页',
        icon:require('@/assets/img/tabbar/cart.svg'),
        on_icon:require('@/assets/img/tabbar/cart_active.svg'),
        url:'/home'
    },
    {
        name:'分类',
        icon:require('@/assets/img/tabbar/category.svg'),
        on_icon:require('@/assets/img/tabbar/category_active.svg'),
        url:'/category'
    },
    {
        name:'购物车',
        icon:require('@/assets/img/tabbar/profile.svg'),
        on_icon:require('@/assets/img/tabbar/profile_active.svg'),
        url:'/cart'
    },
    {
        name:'我的',
        icon:require('@/assets/img/tabbar/home.svg'),
        on_icon:require('@/assets/img/tabbar/home_active.svg'),
        url:'/profile'
    },
]