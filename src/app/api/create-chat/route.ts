import { NextResponse } from "next/server";
import { Request, Response } from "express";

export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json();
        const { file_key, file_name } = body;
        console.log(file_key, file_name);
        if (!file_key || !file_name) {
            throw new Error("Missing fields");
        }

        // Your logic for processing the request and creating a chat

        // Send a successful response
        return NextResponse.json(
            { success: true, message: "Chat created successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        // Send an error response
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
