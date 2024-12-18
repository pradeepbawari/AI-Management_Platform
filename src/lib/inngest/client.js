import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "ai-management-platform", // Unique app ID
  name: "AI Management Platform",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
