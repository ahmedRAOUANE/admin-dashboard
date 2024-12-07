"use server";

import {
    createQuestion,
    deleteQuestion,
    getAllQuestions,
    getQuestionsByCategory,
    getSingleQuestion,
    updateQuestion
} from "@/data-access/questionAccess";
import { CategoryType, QuestionType } from "@/utils/types";

export const handleGetAllQuestionsAction = async () => {
    try {
        const questions = await getAllQuestions();
        return questions;
    } catch (error) {
        console.error("Failed to get questions:", error);
        throw new Error("Error getting the questions from server action - questionActions -> handleGetAllQuestionsAction");
    }
}

export const handlegetSingleQuestionAction = async (questionId: string) => {
    try {
        const question = await getSingleQuestion(questionId);
        return question;
    } catch (error) {
        console.error("Failed to get question:", error);
        throw new Error("Error getting the question from server action - questionActions -> handlegetSingleQuestionAction");
    }
}

export const handleGetQuestionsByCategoryAction = async (categoryId: string) => {
    try {
        const question = await getQuestionsByCategory(categoryId);
        return question;
    } catch (error) {
        console.error("Failed to get question:", error);
        throw new Error("Error getting the question from server action - questionActions -> handleGetQuestionByCategoryAction");
    }
}

export const handleDeleteQuestionAction = async (questionId: string) => {
    try {
        const question = await deleteQuestion(questionId);
        return question;
    } catch (error) {
        console.error("Failed to delete question:", error);
        throw new Error("Error deleting the question from server action - questionActions -> handleDeleteQuestionAction");
    }
}

/**
 * in the bellow function the expected input format is:
 * the options data are not passed
 *
    inputData = {
        question: string;
        answer: string;
        questionId?: string;
        categoryId?: string;
        categoryObject: {
            categoryId?: string;
            categoryName: string;
            description: string;
        };
        createdAt?: string;
        updatedAt?: string;
    }
 */

export const handleCreateQuestionAction = async (formData: FormData) => {
    if (!formData) return;

    const categoryAsString = formData.get("category") as string;

    if (!categoryAsString) {
        throw new Error("Category is required");
    };

    const categoryObject: CategoryType = JSON.parse(categoryAsString);

    const reqBody: QuestionType = {
        question: formData.get("question") as string,
        answer: formData.get("answer") as string,
        categoryObject
    };

    console.log("reqBody: ", reqBody);

    try {
        const question = await createQuestion(reqBody);
        return question;
    } catch (error) {
        console.error("Failed to create question:", error);
        throw new Error("Error creating the question from server action - questionActions -> handleCreateQuestionAction");
    }
}

export const handleUpdateQuestionAction = async (questionId: string, formData: FormData) => {
    if (!formData) return;

    const categoryAsString = formData.get("category") as string;

    if (!categoryAsString) {
        throw new Error("Category is required");
    };

    const categoryObject: CategoryType = JSON.parse(categoryAsString);

    const updatedData: QuestionType = {
        question: formData.get("question") as string,
        answer: formData.get("answer") as string,
        categoryObject
    }

    try {
        const question = await updateQuestion(questionId, updatedData);
        return question;
    } catch (error) {
        console.error("Failed to update question:", error);
        throw new Error("Error updating the question from server action - questionActions -> handleUpdateQuestionAction");
    }
}