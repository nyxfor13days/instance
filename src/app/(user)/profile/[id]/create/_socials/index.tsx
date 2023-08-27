"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { labelVariants } from "@/components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { RowSelectionState } from "@tanstack/react-table";

import { socialsSchema } from "../schema";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/Calendar";
import { Checkbox } from "@/components/ui/Checkbox";

interface Props {
  data: z.infer<typeof socialsSchema>[];
  setData: React.Dispatch<
    React.SetStateAction<z.infer<typeof socialsSchema>[]>
  >;
}

export default function Socials({ data, setData }: Props) {
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

  const form = useForm<z.infer<typeof socialsSchema>>({
    resolver: zodResolver(socialsSchema),
    defaultValues: {
      name: "",
      url: "",
    },
  });

  const onSubmit = (values: z.infer<typeof socialsSchema>) => {
    setData([...data, values]);
    toast({
      variant: "default",
      title: "Success",
      description: `${values.name} added to socials.}`,
    });
    form.reset();
  };

  const deleteRows = () => {
    const newData = data.filter((_, i) => !rowSelection[i]);
    setData(newData);
    setRowSelection({});
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className={cn(labelVariants(), "text-xl")}>Socials</span>

        <Dialog>
          <DialogTrigger>
            <Button variant="secondary" size="icon">
              <PlusIcon className="w-4 h-4" />
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogTitle>Add your socials</DialogTitle>
            <DialogDescription>
              Enter the name and link of your social media accounts.
            </DialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <DialogHeader className="flex flex-col gap-4">
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
                    name="url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Link</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </DialogHeader>

                <DialogFooter className="mt-4">
                  <Button type="submit">Submit</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        {Object.keys(rowSelection).length > 0 && (
          <Button variant="destructive" size="icon" onClick={deleteRows}>
            <TrashIcon />
          </Button>
        )}
      </div>

      <DataTable
        columns={columns}
        data={data}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </div>
  );
}
