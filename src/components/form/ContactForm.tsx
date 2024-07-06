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
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
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

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);

    form.reset();
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

        <Button type="submit" className="my-3 h-[40px] w-full">
          Submit
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
