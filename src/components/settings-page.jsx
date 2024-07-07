import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export function SettingsPage() {
  const session = useSession();
  let user = session?.data?.user;

  const [mode, setMode] = useState(localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    console.log("modesssss",localStorage.getItem("darkMode"));

    console.log("mode",mode);
    localStorage.setItem("darkMode",mode);
    console.log("mode",localStorage.getItem("darkMode"));


    if (mode) {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }

  }, [mode]);

  

  return (
    <div className="container max-w-3xl mx-auto py-12 px-4 md:px-0">
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Profile</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input value={user?.username} id="username" placeholder="johndoe" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input value={user?.email} id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <Label>Profile Picture</Label>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={user?.image || "/placeholder-user.jpg"} />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Upload new image</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Security</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div>
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 md:col-span-2">
          <div>
            <h2 className="text-xl font-semibold mb-2">Other Settings</h2>
            <div className="space-y-4">
              <div>
                <Label>Notification Preferences</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="email-notifications" defaultChecked />
                    <Label htmlFor="email-notifications">
                      Email Notifications
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="push-notifications" />
                    <Label htmlFor="push-notifications">
                      Push Notifications
                    </Label>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>Dark Mode</span>
                  <Switch
                    checked={mode}
                    onCheckedChange={() => setMode(!mode)}
                    id="dark-mode"
                  />
                </div>
                <Button disabled={1} variant="destructive">Delete Account</Button>
                <Button disabled={1} variant="">Update</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
