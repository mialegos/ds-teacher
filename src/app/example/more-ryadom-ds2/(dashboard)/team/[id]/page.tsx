import { TEAM } from "../../../data";
import TeamMemberDetailPage from "./client";

export function generateStaticParams() {
  return TEAM.map((m) => ({ id: String(m.id) }));
}

export default function Page() {
  return <TeamMemberDetailPage />;
}
