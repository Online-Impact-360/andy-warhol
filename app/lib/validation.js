import { z } from "zod";
 
 
export const SubmissionSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  role: z.enum(["Collector", "Dealer", "Representative"], {
    invalid_type_error: "Please select one",
  }),
  city: z.string().trim().optional(),
  country: z.string().trim().optional(),
  message: z.string().trim().min(10, "Please add a short message (min 10 chars)"),
});
 
export const SubmissionInput = SubmissionSchema.shape;
