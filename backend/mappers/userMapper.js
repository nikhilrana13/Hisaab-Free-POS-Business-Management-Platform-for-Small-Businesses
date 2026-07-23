export const UserMapper = (user)=>({
    _id:user._id,
    fullname:user.fullname,
    isOnboarded:user.isOnboarded,
    isActive:user.isActive,
    role:user.role
})

