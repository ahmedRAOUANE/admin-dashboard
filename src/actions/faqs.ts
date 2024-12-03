"use server";

import { revalidatePath } from "next/cache";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const createFaq = async (formData: FormData) => {
    if (!formData) return;

    const reqBody = {
        question: formData.get("question"),
        answer: formData.get("answer"),
        type: formData.get("type"),
        category: formData.get("category"),
        picklist: ["test 1", "test 2"], // string[],
        isRequired: true,
        isActive: false,
    };

    try {
        const response = await fetch(`${baseUrl}/faqs/create-faq`, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": "application/json",
            }
        });

        console.log("response: ", response);

        revalidatePath("/faqs");

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create workflow");
    }
}

export const deleteFaq = async (faqId: string) => {
    try {
        const response = await fetch(`${baseUrl}/faqs/delete-faq/${faqId}`, {
            method: "DELETE",
        });

        if (response.status === 200) {
            revalidatePath("/faqs");
        }

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete faq");
    }
}