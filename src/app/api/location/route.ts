import { getLocation } from "@/lib/getLocation";
import { NextRequest, NextResponse } from "next/server";

//create thi api to fetch location in frontend securly 

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url)
        const ip = searchParams.get('ip')
        if (!ip) {
            return NextResponse.json({ error: "No IP provided" }, { status: 400 });
        }
        const { country, region, city, postal } = await getLocation(ip)
        return NextResponse.json({
            error: false, message: "LocationFetch Successfully", data: { country, region, city, postal }
        })
    } catch (error) {
        const err = error as Error
        return NextResponse.json({
            error: true, message: err.message, data: null
        })

    }
}