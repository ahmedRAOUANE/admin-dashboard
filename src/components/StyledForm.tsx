'use client';

import { handleLoginAction, handleSignupAction } from "@/actions/authAction";
import { handleCreateCategoryAction, handleUpdateCategoryAction } from "@/actions/categoryAction";
import { handleCreateQuestionAction, handleUpdateQuestionAction } from "@/actions/questionActions";
import useError from "@/hooks/useError";
import useModal from "@/hooks/useModal";
import { setIsLoading } from "@/store/loadingSlice";
import { redirect } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

export type ProcessType = {
  function: "create" | "update" | "login",
  target: "category" | "question" | "user",
  targetId?: string,
}

/**
 * This form can handle the the create and the update of category and question based on the process argument
 * 
 * @args process: {
      function: "create" | "update",
      target: "category" | "question",
      targetId?: string,
  }
 */

const StyledForm = ({ process, children, className }: { process: ProcessType, children: React.ReactNode, className?: string }) => {
  const { openModal, closeModal } = useModal();
  const { newError } = useError();

  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!process.function || !process.target) {
      throw new Error("process.function and process.target are required");
    };

    // create and update category
    if (process.function === "create" && process.target === "category") {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const response = await handleCreateCategoryAction(formData);

      console.log("response: ", response);

      if (response.status === "success") {
        openModal("categoryCreated");
      } else {
        openModal("error");
      }
    }

    else if (process.function === "update" && process.target === "category") {
      if (!process.targetId) {
        throw new Error("process.targetId is required");
      };

      const formData = new FormData(e.currentTarget);
      const response = await handleUpdateCategoryAction(process.targetId, formData);

      console.log("response: ", response);

      if (response.status === "success") {
        openModal("categoryUpdated");
      } else {
        openModal("error");
      }
    }

    // create and update question
    else if (process.function === "create" && process.target === "question") {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const response = await handleCreateQuestionAction(formData);

      if (response.status === "success") {
        openModal("questionCreated");
      } else {
        openModal("error");
      }
    }

    else if (process.function === "update" && process.target === "question") {
      if (!process.targetId) return;
      const formData = new FormData(e.currentTarget);
      const response = await handleUpdateQuestionAction(process.targetId, formData);

      console.log("response: ", response);

      if (response.status === "success") {
        openModal("questionUpdated");
      } else {
        openModal("error");
      }
    }

    else if (process.function === "create" && process.target === "user") {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const response = await handleSignupAction(formData);

      if (response.status === "success") {
        openModal("userCreated");
      } else {
        const message = response.errors[0].msg || "Something went wrong";
        newError({ message, action: "ok" });
      }
    }

    else if (process.function === "login" && process.target === "user") {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      dispatch(setIsLoading(true));
      openModal("loading");
      const response = await handleLoginAction(formData);

      console.log("response: ", response);

      if (response.status === "success") {
        dispatch(setIsLoading(false));
        closeModal();
        redirect("/dashboard");
      } else {
        const message = response.message || "Something went wrong";
        newError({ message, action: "ok" });
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-5 text-lg ${className}`}>
      {children}
    </form>
  )
}

export default StyledForm

