"use client";

import * as z from "zod";

import { Checkbox } from "@/components/ui/Checkbox";
import { ColumnDef } from "@tanstack/react-table";

import { educationSchema } from "../schema";
import { CheckedState } from "@radix-ui/react-checkbox";
import { format } from "date-fns";

export const columns: ColumnDef<z.infer<typeof educationSchema>>[] = [
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
  { accessorKey: "school", header: "School" },
  { accessorKey: "degree", header: "Degree" },
  { accessorKey: "field", header: "Field" },
  { accessorKey: "description", header: "Description" },
  {
    accessorKey: "from",
    header: "From",
    cell: (props) => {
      return format(new Date(props.getValue() as string), "PPP");
    },
  },
  {
    accessorKey: "to",
    header: "To",
    cell: (props) => {
      return format(new Date(props.getValue() as string), "PPP");
    },
  },
  {
    accessorKey: "current",
    header: "Current",
    cell: (props) => {
      const checked = props.getValue() as CheckedState;
      return <Checkbox checked={checked} disabled />;
    },
  },
];
