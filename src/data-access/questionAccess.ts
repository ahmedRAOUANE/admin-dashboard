"only server";

import { QuestionType } from "@/utils/types";

// ! this set in current version are temporary until the backend is ready

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllQuestions = async () => {
    try {
        const response = await fetch(`${baseUrl}/questions/get-questions`);
        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get questions");
    }
};

export const getSingleQuestion = async (questionId: string) => {
    try {
        const response = await fetch(`${baseUrl}/questions/get-question-quesID/${questionId}`);
        return response.json();
    } catch (error) {
        console.log(error);
        // maybe return error response
        throw new Error("Failed to get question");
    }
};

export const getQuestionsByCategory = async (categoryId: string) => {
    try {
        const response = await fetch(`${baseUrl}/questions/get-question-by-category/${categoryId}`);
        return response.json();
    } catch (error) {
        console.log(error);
        // maybe return error response
        throw new Error("Failed to get question");
    }
}

export const createQuestion = async (data: QuestionType) => {
    try {
        const response = await fetch(`${baseUrl}/questions/create-question`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status !== 200) {
            throw new Error("Failed to create question");
        }

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create question");
    }
};

export const updateQuestion = async (questionId: string, data: QuestionType) => {
    try {
        const response = await fetch(`${baseUrl}/questions/update-question/${questionId}`, {
            method: "PATCH", // or PUT
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status !== 200) {
            throw new Error("Failed to update question");
        }

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to update question");
    }
}

export const deleteQuestion = async (questionId: string) => {
    try {
        const response = await fetch(`${baseUrl}/questions/delete-question/${questionId}`, {
            method: "DELETE",
        });

        if (response.status !== 200) {
            throw new Error("Failed to delete question");
        }

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete question");
    }
}