"use client";

import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must contain at least 10 characters",
  }),
});
