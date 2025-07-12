
import { Helmet } from "react-helmet";
import ProjectOwnerSidebar from "@/components/dashboard/ProjectOwnerSidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProjectOwnerSettingsPage() {
  return (
    <>
      <Helmet>
        <title>Settings | GreenNova</title>
        <meta name="description" content="Manage your profile and notification settings." />
      </Helmet>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <ProjectOwnerSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4 px-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Settings
              </h1>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-xl mx-auto">
              <h2 className="text-xl font-bold mb-6">Company Profile</h2>
              <form className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-1">Company Name</label>
                  <Input defaultValue="EcoSolar Ltd" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Contact Email</label>
                  <Input defaultValue="info@ecosolar.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Address</label>
                  <Input defaultValue="123 Green Lane, Bengaluru" />
                </div>
                <Button className="bg-greennova-green">Save Changes</Button>
              </form>

              <h2 className="text-xl font-bold my-6">Security</h2>
              <form className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-1">Change Password</label>
                  <Input type="password" placeholder="New Password" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Confirm Password</label>
                  <Input type="password" placeholder="Confirm New Password" />
                </div>
                <Button className="bg-greennova-purple">Update Password</Button>
              </form>

              <h2 className="text-xl font-bold my-6">Notifications</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span>Email Updates</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-greennova-green" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Investment Alerts</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-greennova-purple" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Monthly Newsletters</span>
                  <input type="checkbox" className="w-5 h-5 accent-gray-400" />
                </div>
                <Button className="bg-greennova-green mt-2">Save Preferences</Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
