import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1>404 Not Found</h1>
      <Button asChild className="self-center">
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  );
}
