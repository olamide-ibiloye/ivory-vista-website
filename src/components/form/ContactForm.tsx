"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/validation/formSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const showToast = () => {
    toast({
      title: "Success",
      description: "Enquiry has been sent successfully!",
    });
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Optionally, handle response data here if needed
      const responseData = await response.json();
      console.log("Form submission successful:", responseData);

      // Notify user
      showToast();

      // Reset form fields
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="z-10 w-full items-center max-md:px-5 md:w-[600px]"
      >
        <div className="flex grid-cols-2 flex-col gap-4 md:grid">
          <IvoryField
            control={form.control}
            name="firstName"
            label="First Name"
            placeholder="First Name"
          />

          <IvoryField
            control={form.control}
            name="lastName"
            label="Last Name"
            placeholder="Last Name"
          />

          <IvoryField
            control={form.control}
            name="email"
            label="Email"
            placeholder="Email address"
          />

          <IvoryField
            control={form.control}
            name="phoneNumber"
            label="Phone Number"
            placeholder="Phone Number"
          />
        </div>

        <div className="my-3">
          <IvoryField
            control={form.control}
            name="message"
            label="Message"
            placeholder="Enter your message"
            textarea
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="my-3 flex h-[40px] w-full items-center justify-center gap-4"
        >
          {isSubmitting && (
            <CircularProgress size={20} className="text-white" />
          )}
          {isSubmitting ? "Submitting" : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;

export const IvoryField = ({
  control,
  name,
  label,
  placeholder,
  textarea = false,
}: {
  control: any;
  name: any;
  label: string;
  placeholder: string;
  textarea?: boolean;
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-background">{label}</FormLabel>
          <FormControl>
            {textarea ? (
              <Textarea
                className="placeholder:text-muted-background text-background"
                placeholder="Enter your message"
                rows={5}
                {...field}
              />
            ) : (
              <Input
                className="placeholder:text-muted-background text-background"
                placeholder={placeholder}
                {...field}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
