"use server";

// ! this set in current version are temporary until the backend is ready
// ! don't forget to update when auth is ready

/**
 * the handleGetAllCategoriesAction and handleGetSingleCategoryAction functions for now are doing nothing 
 * beside calling the data access functions.
 * 
 * in the future if the project needed some validation before getting the data they will be used
 */

import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getSingleCategory,
    updateCategory
} from "@/data-access/categoryAccess";

import { CategoryType } from "@/utils/types";
import { revalidatePath } from "next/cache";

export const handleGetAllCategoriesAction = async () => {
    try {
        const categories = await getAllCategories();
        return categories;
    } catch (error) {
        console.error("Failed to get categories:", error);
        throw new Error("Error getting the categories from server action - categoryAction -> handleGetAllCategoriesAction");
    }
}

export const handleGetSingleCategoryAction = async (categoryId: string) => {
    try {
        const category = await getSingleCategory(categoryId);
        return category;
    } catch (error) {
        console.error("Failed to get category:", error);
        throw new Error("Error getting the category from server action - categoryAction -> handleGetSingleCategoryAction");
    }
}

export const handleCreateCategoryAction = async (formData: FormData) => {
    if (!formData) return;

    const reqBody: CategoryType = {
        categoryName: formData.get("categoryName") as string,
        description: formData.get("description") as string,
    };

    if (!reqBody.categoryName || !reqBody.description) {
        // return client response
        const response = {
            error: "Missing required fields",
            status: 400,
            field: reqBody.categoryName ? "description" : "categoryName",
        };

        return response;
    }

    try {
        const createdCategory = await createCategory(reqBody);

        if (createdCategory.status === "success") {
            revalidatePath("/categories");
            return createdCategory;
        } else {
            const failResponse = {
                status: 'error',
                message: 'failed to create category',
                data: null
            };

            return failResponse;
        }
    } catch (error) {
        console.error("Failed to create category:", error);
        throw new Error("Error creating the category from server action - categoryAction -> handleCreateCategoryAction");
    }
};

export const handleDeleteCategoryAction = async (categoryId: string) => {
    try {
        const deletedCategory = await deleteCategory(categoryId);
        return deletedCategory;
    } catch (error) {
        console.error("Failed to delete category:", error);
        throw new Error("Error deleting the category from server action - categoryAction -> handleDeleteCategoryAction");
    }
}

export const handleUpdateCategoryAction = async (categoryId: string, formData: FormData) => {
    if (!formData) return;

    const reqBody: CategoryType = {
        categoryName: formData.get("categoryName") as string,
        description: formData.get("description") as string,
    };

    if (!reqBody.categoryName || !reqBody.description) {
        // return client response
        const response = {
            error: "Missing required fields",
            status: 400,
            field: reqBody.categoryName ? "description" : "categoryName",
        };

        return response;
    }

    try {
        const updatedCategory = await updateCategory(categoryId, reqBody);
        return updatedCategory;
    } catch (error) {
        console.error("Failed to update category:", error);
        throw new Error("Error updating the category from server action - categoryAction -> handleUpdateCategoryAction");
    }
}