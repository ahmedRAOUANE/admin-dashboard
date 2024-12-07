// !this set in current version are temporary until the backend is ready
// !update when the authentication is ready

import { cookies } from "next/headers";

export const signup = async ({ name, email, password }: { name: string, email: string, password: string }) => {
    if (!name || !email || !password) {
        console.log("Name, email and password are required");
        throw new Error("Name, email and password are required");
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password })
        })

        console.log("response: ", JSON.stringify(response));
        if (!response.ok) {
            console.log("response: ", JSON.stringify(response));
            return response.json();
        }

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to signup");
    }
}

export const login = async ({ email, password }: { email: string, password: string }) => {
    if (!email || !password) {
        console.log("Email and password are required");
        throw new Error("Email and password are required");
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        });

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to login");
    }
}

export const logout = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        });

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to logout");
    }
}

export const getUser = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/isAuthenticated`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${(await cookies()).get("jwt")?.value}`,
            }
        });

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get user");
    }
}

