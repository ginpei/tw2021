import { z } from "zod";

export type LoginCert = z.infer<typeof loginCertSchema>;

export const loginCertSchema = z.object({
  screenName: z.string(),
});
