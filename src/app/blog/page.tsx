import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  // title: {
  //   absolute: "Blog", // Ignores template
  // },
};

export default function Blog() {
  return <h1 className="text-2xl">Blog</h1>;
}
