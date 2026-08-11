"use client";
import AuthMiddleware from "../../middlewares/AuthMiddleware.jsx";

const Layout = ({ children }) => {
    return (
        <AuthMiddleware>
            {children}
        </AuthMiddleware>
    );
};

export default Layout;