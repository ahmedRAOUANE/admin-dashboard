"only server";

import { WorkflowType } from "@/utils/types";
import { revalidatePath } from "next/cache";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const getWorkflows = async () => {
    const response = await fetch(`${baseUrl}/workflows/get-workflows`);
    const data = await response.json();

    if (data.status !== "success") {
        throw new Error(data.message);
    }

    return data.data;
};

export const getSingleWorkflow = async (workflowId: string) => {
    const response = await fetch(`${baseUrl}/workflows/get-one-workflow/${workflowId}`);
    const data = await response.json();

    if (data.status !== "success") {
        throw new Error(data.message);
    }

    return data.data;
}

export const updateWorkflow = async (workflowId: string, data: WorkflowType) => {
    console.log("data: ", data);

    try {
        const response = await fetch(`${baseUrl}/workflows/update-workflow/${workflowId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.status !== 200) {
            throw new Error("Failed to edit workflow");
        }

        if (response.status === 200) {
            revalidatePath("/workflows");
        }

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to edit workflow");
    }
}