import { TEAM } from "../../../data";
import TeamMemberDetailPage from "./client";

export function generateStaticParams() {
  return TEAM.map((m) => ({ id: String(m.id) }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <TeamMemberDetailPage id={id} />;
}
