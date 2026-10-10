import { createFileRoute, Link } from "@tanstack/react-router";
import { DayView } from "@/components/day-view";
import { Shell } from "@/components/shell";
import { getDay } from "@/content/curriculum";

export const Route = createFileRoute("/dia/$n")({
  component: DayPage,
});

function DayPage() {
  const { n } = Route.useParams();
  const day = getDay(Number(n));
  if (!day) {
    return (
      <Shell>
        <h1 className="text-2xl font-semibold">Ese día no está en la pista</h1>
        <p className="mt-3">
          <Link to="/" className="underline decoration-brass underline-offset-4">
            Volver a los diez días
          </Link>
        </p>
      </Shell>
    );
  }
  return <DayView day={day} />;
}
