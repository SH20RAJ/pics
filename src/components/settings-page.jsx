import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export function SettingsPage() {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    // Load mode from localStorage and set initial mode
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      const isDarkMode = JSON.parse(darkMode);
      setMode(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  useEffect(() => {
    // Update localStorage and document class when mode changes
    localStorage.setItem("darkMode", JSON.stringify(mode));
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
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
                <Input id="username" defaultValue="johndoe" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@example.com" />
              </div>
              <div>
                <Label>Profile Picture</Label>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder-user.jpg" />
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
                <Button variant="destructive">Delete Account</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
