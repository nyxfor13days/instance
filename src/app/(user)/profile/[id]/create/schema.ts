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
  skills: z.array(skillSchema).optional(),
  socials: z.array(
    z
      .object({
        name: z.string().min(1).max(50),
        url: z.string().min(1).max(50),
      })
      .optional()
  ),
  education: z.array(
    z
      .object({
        school: z.string().min(1).max(50),
        degree: z.string().min(1).max(50),
        field: z.string().min(1).max(50),
        from: z.string().min(1).max(50),
        to: z.string().min(1).max(50),
        current: z.boolean(),
        description: z.string().min(1).max(500),
      })
      .optional()
  ),
  experience: z.array(
    z
      .object({
        title: z.string().min(1).max(50),
        company: z.string().min(1).max(50),
        location: z.string().min(1).max(50),
        from: z.string().min(1).max(50),
        to: z.string().min(1).max(50),
        current: z.boolean(),
        description: z.string().min(1).max(500),
      })
      .optional()
  ),
  projects: z.array(
    z
      .object({
        name: z.string().min(1).max(50),
        description: z.string().min(1).max(500),
        url: z.string().min(1).max(50),
      })
      .optional()
  ),
  achievements: z.array(
    z
      .object({
        name: z.string().min(1).max(50),
        description: z.string().min(1).max(500),
      })
      .optional()
  ),
  hobbies: z.array(
    z
      .object({
        name: z.string().min(1).max(50),
        description: z.string().min(1).max(500),
      })
      .optional()
  ),
  languages: z.array(
    z
      .object({
        name: z.string().min(1).max(50),
        level: z.number().min(1).max(5),
      })
      .optional()
  ),
  interests: z.array(
    z
      .object({
        name: z.string().min(1).max(50),
        description: z.string().min(1).max(500),
      })
      .optional()
  ),
  references: z.array(
    z
      .object({
        name: z.string().min(1).max(50),
        description: z.string().min(1).max(500),
      })
      .optional()
  ),
  certifications: z.array(
    z
      .object({
        name: z.string().min(1).max(50),
        description: z.string().min(1).max(500),
      })
      .optional()
  ),
});
