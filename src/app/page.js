import Image from "next/image";
import { SignIn } from "@/components/SignIn";
export default function Home() {
  return (
    <>
    <div>
      <h1>Home</h1>
      <p>Sign in to access the dashboard</p>
      <form action="/api/auth/signin" method="post">
        <button type="submit">Sign in</button>
      </form>
      <SignIn />
    </div>
    </>
  );
}
