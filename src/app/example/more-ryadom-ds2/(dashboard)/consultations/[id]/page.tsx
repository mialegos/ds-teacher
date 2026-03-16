import { CONSULTATIONS } from "../../../data";
import ConsultationDetailPage from "./client";

export function generateStaticParams() {
  return CONSULTATIONS.map((c) => ({ id: c.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ConsultationDetailPage id={id} />;
}
