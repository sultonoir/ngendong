"use client";
import * as z from "zod";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LuMail } from "react-icons/lu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/template/form/Form";

import { api } from "@/trpc/react";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import useDialog from "@/hooks/useDialog";
import { Input, Button } from "@nextui-org/react";
import { FaKey } from "react-icons/fa";
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "password required" }),
});

const FormSignup = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // mutate create user
  const router = useRouter();
  const { onOpen } = useDialog();
  const createUser = api.user.createUser.useMutation({
    onSuccess: async (e) => {
      await signIn("credentials", {
        email: e,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.ok) {
            toast.success("Account created");
            onOpen(false);
            router.refresh();
            form.reset();
          }
          if (callback?.error) {
            toast.error(callback.error);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    createUser.mutate({
      email: values.email,
      password: values.password,
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  startContent={<FaKey className="text-default-500" />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={createUser.isPending}
          type="submit"
          className="w-full"
          color="primary"
        >
          Sign up
        </Button>
      </form>
    </Form>
  );
};

export default FormSignup;
