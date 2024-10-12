import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const { profileId } = useParams<{ profileId: string }>();
  return <div>Profile {profileId}</div>;
}
