export type ThemeType = "light" | "dark";

// !category and question properties are required
export type CategoryType = {
    _id?: string,
    categoryName: string,
    description: string,
}

export type QuestionType = {
    question: string,
    answer: string,
    _id?: string,
    category?: string,
    categoryObject: CategoryType,
    createdAt?: string,
    updatedAt?: string
}

export type WorkflowType = {
    _id?: string,
    name?: string,
    answer?: string,
    description: string,
    status?: string,
    category?: string,
    faqs?: FaqType[],
    lastRun?: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: string,
    displayId?: string
}

export type FaqType = {
    _id?: string,
    question?: string,
    type?: string,
    category?: string,
    picklist?: string[],
    isRequired?: boolean,
    isActive?: boolean,
    answer?: string
}

export interface TableRowType extends WorkflowType, FaqType {
    [key: string]: string | number | boolean | string[] | FaqType | FaqType[] | undefined;
};

export type TableHeaderType = {
    [key: string]: string; // Key-value pairs where key is the column name and value is the header title
}

export type SellsStyleType = {
    [key: string]: string; // Key-value pairs where key matches the data key and value is a CSS class
}

export type TableOptionsType = {
    title?: string,
    checkbox?: boolean,
    pagination?: boolean,
    optionsBtn?: boolean,
    filter?: boolean,
    search?: boolean,
    newBtn?: boolean
    // add more if necessary
}