"use client";
import * as z from "zod";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import useDialog from "@/hooks/useDialog";
const formSchema = z.object({
  email: z.string().email(),
});

const FormSignup = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
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
              <FormLabel className="sr-only text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email
              </FormLabel>
              <FormControl>
                <Input placeholder="name@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={createUser.isLoading}
          type="submit"
          className="w-full"
        >
          Sign up with email
        </Button>
      </form>
    </Form>
  );
};

export default FormSignup;
