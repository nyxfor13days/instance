"use client";

import { ColumnDef } from "@tanstack/react-table";
import * as z from "zod";
import { skillSchema } from "../schema";

export const columns: ColumnDef<z.infer<typeof skillSchema>>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "level", header: "Level" },
];
