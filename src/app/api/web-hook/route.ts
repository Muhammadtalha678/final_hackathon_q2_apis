import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        return NextResponse.json({ data: body })
    } catch (error) {

        return NextResponse.json({ data: "Error" + error })
    }
}