import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/config";

const service = services.find((s) => s.slug === "new-build")!;

export const metadata: Metadata = {
  title: service.name,
  description: service.short,
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
