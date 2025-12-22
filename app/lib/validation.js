// app/lib/validation.js
import { z } from "zod";

const nameRegex = /^[a-zA-Z\s'-]+$/;
const locationRegex = /^[a-zA-Z\s-]*$/;

export const SubmissionSchema = z.object({
  fullName: z.string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters")
    .regex(nameRegex, "Name can only contain letters, spaces, hyphens, and apostrophes"),

  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(100, "Email cannot exceed 100 characters")
    .toLowerCase(),

  role: z.enum(["Collector", "Dealer", "Representative"], {
    required_error: "Please select a role",
    invalid_type_error: "Please select a valid role"
  }),

  city: z.string()
    .trim()
    .max(100, "City name cannot exceed 100 characters")
    .regex(locationRegex, "City can only contain letters, spaces, and hyphens")
    .optional()
    .or(z.literal('')),

  country: z.string()
    .trim()
    .max(100, "Country name cannot exceed 100 characters")
    .regex(locationRegex, "Country can only contain letters, spaces, and hyphens")
    .optional()
    .or(z.literal('')),

  message: z.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters")
    .refine(
      (val) => (val.match(/(http[s]?:\/\/[^\s]+)/g) || []).length <= 2,
      { message: "Message can contain maximum 2 links" }
    )
});

export const SubmissionInput = SubmissionSchema.shape;