import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO description",
  keywords: ['About page', 'Lucas']
};

export default function page() {
  return <div>about page</div>;
}
