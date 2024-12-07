"use server";

import { getUser, login, logout, signup } from "@/data-access/authAcess";
import { cookies } from "next/headers";

export const handleSignupAction = async (data: FormData) => {
    if (!data) {
        throw new Error("Data is required for signup - handleSignupAction");
    };

    const userCredentials = {
        name: data.get("name") as string,
        email: data.get("email") as string,
        password: data.get("password") as string,
    }

    try {
        const user = await signup(userCredentials);
        console.log("user: ", user);
        return user;
    } catch (error) {
        console.error("Failed to signup:", error);
        throw new Error("Error signing up from server action - authActions -> handleSignupAction");
    }
};

export const handleLoginAction = async (data: FormData) => {
    if (!data) {
        throw new Error("Data is required for login - handleLoginAction");
    };

    const userCredentials = {
        email: data.get("email") as string,
        password: data.get("password") as string,
    }

    try {
        const response = await login(userCredentials);

        if (response?.token) {
            (await cookies()).set({
                name: "jwt",
                value: response.token,
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                path: "/",
            });
        }

        return response;

    } catch (error) {
        console.error("Failed to login:", error);
        throw new Error("Error logging in from server action - authActions -> handleLoginAction");
    }
};

export const handleLogoutAction = async () => {
    try {
        const res = await logout();

        if (res.status === "success") {
            (await cookies()).delete("jwt");
            
            return res;
        }
    } catch (error) {
        console.error("Failed to logout:", error);
        throw new Error("Error logging out from server action - authActions -> handleLogoutAction");
    }
};

export const handleGetUserAction = async () => {
    try {
        /**
         * the response will be object with the user data, or null of the user is not authenticated
        */
        const response = await getUser();

        if (!response || response?.error || response?.status === "error") {
            return null;
        }

        return response;
    } catch (error) {
        console.error("Failed to get user:", error);
        throw new Error("Error getting user from server action - authActions -> handleGetUserAction");
    }
}

