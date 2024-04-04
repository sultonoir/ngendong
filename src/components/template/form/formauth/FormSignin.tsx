"use client";
import * as z from "zod";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/template/form/Form";

import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { Button, Input } from "@nextui-org/react";
import { LuMail } from "react-icons/lu";
const formSchema = z.object({
  email: z.string().email(),
});

const FormSignin = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await signIn(
      "credentials",
      {
        email: values.email,
        redirect: false,
      },
      "/login",
    ).then((callback) => {
      if (callback?.ok) {
        window.location.href = "/";
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="name@example.com"
                  {...field}
                  startContent={<LuMail />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          isLoading={form.formState.isSubmitting}
          type="submit"
          className="w-full"
          color="primary"
        >
          Sign in with email
        </Button>
      </form>
    </Form>
  );
};

export default FormSignin;
