import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { handleGetUserAction } from "./actions/authAction";

/**
 * this middleware is used to redirect the user to the login page if he is not authenticated
 * and to the dashboard page if he is authenticated
 * 
 * expected auth data: {
 *     name: string,
 *     email: string,
 *     isAuthenticated: boolean
 * }
 */

const middleware = async (request: NextRequest) => {
    const user = await handleGetUserAction();

    const isAuthenticated = user !== null;

    const authenticatedPaths = /^\/(dashboard|categories|questions|workflows|reports|settings)(\/.*)?$/;
    const unauthenticatedPaths = /^\/(login|signup)(\/.*)?$/;

    // current page oath
    const path = request.nextUrl.pathname;

    if (isAuthenticated && (unauthenticatedPaths.test(path) || path === "/")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (!isAuthenticated && (authenticatedPaths.test(path) || path === "/")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export default middleware
