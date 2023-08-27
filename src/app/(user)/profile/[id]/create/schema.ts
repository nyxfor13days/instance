import * as z from "zod";

export const textFormSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email(),
  profession: z.string().min(1).max(50),
  bio: z.string().min(1).max(500),
  location: z.string().min(1).max(50),
  website: z.string().min(1).max(50),
});

export const skillSchema = z.object({
  name: z.string().min(1).max(50),
  level: z.string(),
});

export const educationSchema = z.object({
  school: z.string().min(1).max(50),
  degree: z.string().min(1).max(50),
  field: z.string().min(1).max(50),
  from: z.date(),
  to: z.date(),
  current: z.boolean(),
  description: z.string().min(1).max(500),
});

export const socialsSchema = z.object({
  name: z.string().min(1).max(50),
  url: z.string().min(1).max(50),
});

export const experienceSchema = z.object({
  title: z.string().min(1).max(50),
  company: z.string().min(1).max(50),
  location: z.string().min(1).max(50),
  from: z.string().min(1).max(50),
  to: z.string().min(1).max(50),
  current: z.boolean(),
  description: z.string().min(1).max(500),
});
export const projectsSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(500),
  url: z.string().min(1).max(50),
});
export const achievementsSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(500),
});
export const hobbiesSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(500),
});
export const languagesSchema = z.object({
  name: z.string().min(1).max(50),
  level: z.number().min(1).max(5),
});
export const interestsSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(500),
});
export const referencesSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(500),
});
export const certificationsSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(500),
});

export const arrayFormSchema = z.object({
  skills: z.array(skillSchema).optional(),
  education: z.array(educationSchema).optional(),
  socials: z.array(socialsSchema).optional(),
  experience: z.array(experienceSchema).optional(),
  projects: z.array(projectsSchema).optional(),
  achievements: z.array(achievementsSchema).optional(),
  hobbies: z.array(hobbiesSchema).optional(),
  languages: z.array(languagesSchema).optional(),
  interests: z.array(interestsSchema).optional(),
  references: z.array(referencesSchema).optional(),
  certifications: z.array(certificationsSchema).optional(),
});
