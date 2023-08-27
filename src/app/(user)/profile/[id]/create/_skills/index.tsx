"use client";

import React from "react";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { labelVariants } from "@/components/ui/Label";
import { PlusIcon } from "@radix-ui/react-icons";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { skillSchema } from "../schema";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { toast } from "@/hooks/use-toast";

interface Props {
  data: z.infer<typeof skillSchema>[];
  setData: React.Dispatch<React.SetStateAction<z.infer<typeof skillSchema>[]>>;
}

export default function Skills({ data, setData }: Props) {
  const form = useForm<z.infer<typeof skillSchema>>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      name: "",
      level: "",
    },
  });

  const onSubmit = (values: z.infer<typeof skillSchema>) => {
    setData([...data, values]);
    toast({
      variant: "default",
      title: "Success",
      description: `${values.name} Skill added as ${values.level} level.`,
    });
    form.reset();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className={cn(labelVariants(), "text-xl")}>Skills</span>

        <Dialog>
          <DialogTrigger>
            <Button variant="secondary" size="icon">
              <PlusIcon className="w-4 h-4" />
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogTitle>Add a skill</DialogTitle>
            <DialogDescription>
              Enter the name of your skill and level.
            </DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <DialogHeader>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Level</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">
                              Intermediate
                            </SelectItem>
                            <SelectItem value="Expert">Expert</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </DialogHeader>

                <DialogFooter>
                  <Button type="submit">Submit</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
}
