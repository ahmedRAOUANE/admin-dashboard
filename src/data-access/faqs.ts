"only server";

import { FaqType } from "@/utils/types";
import { revalidatePath } from "next/cache";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getFaqs = async () => {
    const response = await fetch(`${baseUrl}/faqs/get-faqs`);
    const data = await response.json();

    if (data.status !== "success") {
        throw new Error(data.message);
    }

    return data.data;
};

export const getSingleFaq = async (faqId: string) => {
    const response = await fetch(`${baseUrl}/faqs/get-faq/${faqId}`);
    const data = await response.json();

    if (data.status !== "success") {
        throw new Error(data.message);
    }

    return data.data;
};

export const updateFaq = async (faqId: string, data: FaqType) => {
    try {
        const response = await fetch(`${baseUrl}/faqs/update-faq/${faqId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.status !== 200) {
            throw new Error("Failed to edit faq");
        }

        if (response.status === 200) {
            revalidatePath("/faqs");
        }

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to edit faq");
    }
}