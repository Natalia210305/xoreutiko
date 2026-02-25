import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: "n7k7q7j9", 
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, 
})