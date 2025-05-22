import { test, expect } from "@playwright/test";

test("API Login Test", async ({ request }) => {
  const response = await request.post("/auth/login", {
    data: { username: "Admin", password: "admin123" },
  });
  expect(response.status()).toBe(200);
});
