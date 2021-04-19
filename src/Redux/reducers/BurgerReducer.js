const burgerState = {
    burger:{
        salad: 1,
        cheese: 1,
        beef: 1,
    },
    menu:{
        salad: 10,
        cheese: 15,
        beef: 55,
    },
    total: 80,
}

export const BurgerReducer = (state = burgerState, action) => {
    
    return {...state}
}