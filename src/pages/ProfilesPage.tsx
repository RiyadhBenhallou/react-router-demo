import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavLink, Outlet } from "react-router-dom";

export default function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-2 w-[600px]">
      <div className="flex flex-col gap-2 w-1/4">
        {profiles.map((profile) => (
          <Button asChild>
            <NavLink key={profile} to={`/profiles/${profile}`}>
              Profile {profile}
            </NavLink>
          </Button>
        ))}
      </div>
      <div className="w-3/4 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}
