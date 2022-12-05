export const WishlistReducer = (state, action) => {
    var { wishlist } = state
    var product
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            product = action.product
            if (wishlist.find((item) => item._id === product._id) != undefined) {
                return state
            }
            else {
                return {
                    wishlist: [ product,...wishlist],

                }
            }


        case "REMOVE_FROM_WISHLIST":
            product = action.product
            wishlist = wishlist.filter((item) => item._id !== product._id)
            return {
                wishlist: [...wishlist],
            }
        default:
            return state

    }
}