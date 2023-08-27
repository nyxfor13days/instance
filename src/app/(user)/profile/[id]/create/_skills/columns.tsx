"use client";

import * as z from "zod";

import { Checkbox } from "@/components/ui/Checkbox";
import { ColumnDef } from "@tanstack/react-table";

import { skillSchema } from "../schema";

export const columns: ColumnDef<z.infer<typeof skillSchema>>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "level", header: "Level" },
];
