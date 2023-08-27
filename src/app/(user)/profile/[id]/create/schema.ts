import * as z from "zod";

export const textFormSchema = z.object({
  profession: z.string().min(1).max(50),
  bio: z.string().min(1).max(500),
  location: z.string().min(1).max(50),
  website: z.string().min(1).max(50),
});

export const skillSchema = z.object({
  name: z.string().min(1).max(50),
  level: z.string(),
});

export const arrayFormSchema = z.object({
  skills: z.array(skillSchema),
  socials: z.array(
    z.object({
      name: z.string().min(1).max(50),
      url: z.string().min(1).max(50),
    })
  ),
  education: z.array(
    z.object({
      school: z.string().min(1).max(50),
      degree: z.string().min(1).max(50),
      field: z.string().min(1).max(50),
      from: z.string().min(1).max(50),
      to: z.string().min(1).max(50),
      current: z.boolean(),
      description: z.string().min(1).max(500),
    })
  ),
  experience: z.array(
    z.object({
      title: z.string().min(1).max(50),
      company: z.string().min(1).max(50),
      location: z.string().min(1).max(50),
      from: z.string().min(1).max(50),
      to: z.string().min(1).max(50),
      current: z.boolean(),
      description: z.string().min(1).max(500),
    })
  ),
  projects: z.array(
    z.object({
      name: z.string().min(1).max(50),
      description: z.string().min(1).max(500),
      url: z.string().min(1).max(50),
    })
  ),
  achievements: z.array(
    z.object({
      name: z.string().min(1).max(50),
      description: z.string().min(1).max(500),
    })
  ),
  hobbies: z.array(
    z.object({
      name: z.string().min(1).max(50),
      description: z.string().min(1).max(500),
    })
  ),
  languages: z.array(
    z.object({
      name: z.string().min(1).max(50),
      level: z.number().min(1).max(5),
    })
  ),
  interests: z.array(
    z.object({
      name: z.string().min(1).max(50),
      description: z.string().min(1).max(500),
    })
  ),
  references: z.array(
    z.object({
      name: z.string().min(1).max(50),
      description: z.string().min(1).max(500),
    })
  ),
  certifications: z.array(
    z.object({
      name: z.string().min(1).max(50),
      description: z.string().min(1).max(500),
    })
  ),
});
