import { z } from "zod";

export type AppServerRecord = z.infer<typeof serverErrorSchema>;

export const serverErrorSchema = z.object({
  message: z.string(),
});

export class AppServerError extends Error {
  /**
   * @param error Expect `AppServerRecord` type.
   */
  constructor(error: unknown) {
    const result = serverErrorSchema.safeParse(error);
    const message = result.success ? result.data.message : String(error);
    super(message);
  }
}
