import { InlineSnippet } from "@/components/form/domain-configuration";
import { authOptions } from "@/lib/auth";
import { Link } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10 bg-black">
      <Image
        width={512}
        height={512}
        src="/logo.png"
        alt="Platforms on Vercel"
        className="w-48"
      />
      <h1 className="text-white">
        Edit this page on{" "}
        <InlineSnippet className="ml-2 bg-blue-900 text-blue-100">
          app/home/page.tsx
        </InlineSnippet>
      </h1>
    </div>
  );
}
