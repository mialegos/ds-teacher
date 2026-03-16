import { CONSULTATIONS } from "../../../data";
import ConsultationDetailPage from "./client";

export function generateStaticParams() {
  return CONSULTATIONS.map((c) => ({ id: c.id }));
}

export default function Page() {
  return <ConsultationDetailPage />;
}
