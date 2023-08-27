import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    const session = await getAuthSession();

    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (!id)
      return NextResponse.json({ message: "Invalid query" }, { status: 400 });

    const profile = await db.profile.findUnique({
      where: {
        id: id,
      },
    });

    if (!profile)
      return NextResponse.json(
        { message: "Profile not found" },
        { status: 404 },
      );

    return NextResponse.json({ data: profile }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Could not fetch profile of user" },
      { status: 500 },
    );
  }
}
