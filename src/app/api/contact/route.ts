import { NextResponse } from "next/server";
import { sendEmail } from "./sendEmail";

export const POST = async (req: Request) => {
  if (req.method !== "POST") {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }

  const { firstName, lastName, email, phoneNumber, message } = await req.json();

  try {
    // Send email notification to info@ivoryvista.com
    await sendEmail({ firstName, lastName, email, phoneNumber, message });

    return new NextResponse(JSON.stringify("Message sent successfully"), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Failed to send message", { status: 500 });
  }
};
