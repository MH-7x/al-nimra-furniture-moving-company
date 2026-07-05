"use server";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";
import { FormDataType } from "@/components/utils/QuoteSection";
export const SendMail = async ({
  data,
}: {
  data: FormDataType;
}): Promise<{ success: boolean; error?: string }> => {
  const hasEmptyField = [
    data.name,
    data.phone,
    data.movingFrom,
    data.movingTo,
  ].some((val) => val.trim() === "");

  if (hasEmptyField) {
    return { success: false, error: "All fields are required." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return { success: false, error: "Server configuration error." };
  }

  try {
    const resend = new Resend(apiKey);
    const emailResponse = await resend.emails.send({
      from: "New Quote From Website <onboarding@resend.dev>",
      to: "nimramovers@gmail.com",
      subject: "New Moving Quote Request",
      react: await EmailTemplate({ data: data }),
    });

    if (emailResponse.error) {
      console.error("Email error:", emailResponse.error);
      return { success: false, error: "Failed to send email." };
    }

    console.log("Email sent:", emailResponse.data.id);

    return { success: true };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { success: false, error: "An unexpected error occurred." };
  }
};
