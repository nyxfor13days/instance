"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import Skills from "./_skills";
import {
  arrayFormSchema,
  educationSchema,
  skillSchema,
  textFormSchema,
} from "./schema";
import Education from "./_education";

export default function Page() {
  const [textData, setTextData] =
    React.useState<z.infer<typeof textFormSchema>>();
  const [arrayData, setArrayData] =
    React.useState<z.infer<typeof arrayFormSchema>>();
  const [skills, setSkills] = React.useState<z.infer<typeof skillSchema>[]>([]);
  const [education, setEducation] = React.useState<
    z.infer<typeof educationSchema>[]
  >([]);

  const textForm = useForm<z.infer<typeof textFormSchema>>({
    resolver: zodResolver(textFormSchema),
    defaultValues: {
      profession: "",
      bio: "",
      location: "",
      website: "",
    },
  });

  function onSubmit(values: z.infer<typeof textFormSchema>) {
    setTextData(values);
  }

  React.useEffect(() => {
    setArrayData((prev) => ({
      ...prev,
      skills: skills,
      education: education,
      socials: [],
      experience: [],
      projects: [],
      achievements: [],
      hobbies: [],
      languages: [],
      interests: [],
      references: [],
      certifications: [],
    }));
  }, [skills, education]);

  return (
    <main className="py-24 min-h-screen flex items-center">
      <div className="container flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Create Profile</h1>

        <div className="w-full grid grid-cols-1 gap-12">
          <Form {...textForm}>
            <form
              onSubmit={textForm.handleSubmit(onSubmit)}
              className="flex flex-col gap-12"
            >
              <div className="max-w-xl flex flex-col gap-4">
                <FormField
                  control={textForm.control}
                  name="profession"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profession</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={textForm.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={textForm.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={textForm.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Skills data={skills} setData={setSkills} />
              <Education data={education} setData={setEducation} />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
