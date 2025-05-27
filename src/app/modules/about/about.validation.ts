import { z } from "zod";

const createAboutValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
  }),
});

const updateAboutValidation = createAboutValidation.partial();

export const AboutValidation = {
  createAboutValidation,
  updateAboutValidation,
};