"use server";

import { revalidatePath } from "next/cache";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * Requermnts
 *  - the data must be in json format
 *  {
    "name": "workflow 6",
    "answer": "testing",
    "status": "Created",
    "faqs": ["674c6ca4d84b7c72da85436f"],
    "categoryName": "category 2"
    }
 */

export const createWorkflow = async (formData: FormData) => {
    if (!formData) return;

    const reqBody = {
        name: formData.get("name"),
        answer: formData.get("answer"),
        status: formData.get("status"),
        categoryName: formData.get("categoryName"),
        faqs: ["674c6ca4d84b7c72da85436f"]
    };

    try {
        const response = await fetch(`${baseUrl}/workflows/create-workflow`, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": "application/json",
            }
        });

        revalidatePath("/workflows");

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create workflow");
    }
}

export const deleteWorkflow = async (workflowId: string) => {
    try {
        const response = await fetch(`${baseUrl}/workflows/delete-workflow/${workflowId}`, {
            method: "DELETE",
        })

        if (response.status === 200) {
            revalidatePath("/workflows");
        } else {
            throw new Error("Failed to delete workflow");
        }

    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete workflow");
    }
}