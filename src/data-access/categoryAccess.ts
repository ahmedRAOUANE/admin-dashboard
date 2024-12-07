"only server";

import { CategoryType } from "@/utils/types";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllCategories = async () => {
    try {
        const response = await fetch(`${baseUrl}/categories/get-categories`);

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get categories");
    }
}

export const getSingleCategory = async (categoryId: string) => {
    try {
        const response = await fetch(`${baseUrl}/categories/get-one-category/${categoryId}`);

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get category");
    }
}

export const createCategory = async (data: CategoryType) => {
    // console.log("data from create category: ", data);
    
    try {
        const response = await fetch(`${baseUrl}/categories/create-category`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            throw new Error("Failed to create category");
        }

        return await response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create category");
    }
}

export const deleteCategory = async (categoryId: string) => {
    try {
        const response = await fetch(`${baseUrl}/categories/delete-one-category/${categoryId}`, {
            method: "DELETE",
        });

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete category");
    }
}

export const updateCategory = async (categoryId: string, data: CategoryType) => {
    try {
        const response = await fetch(`${baseUrl}/categories/update-category/${categoryId}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        });

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to update category");
    }
}