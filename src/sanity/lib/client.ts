import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "5q85l2o6",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});