import { Settings as SettingsIcon, Bell, Shield, Database } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-dark-amethyst">Settings</h1>
        <p className="mt-1 text-dark-amethyst/60">
          Manage platform configuration and preferences
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* General Settings */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-dust-grey/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-lg bg-indigo-velvet/10 p-2">
              <SettingsIcon className="h-5 w-5 text-indigo-velvet" />
            </div>
            <h2 className="text-lg font-semibold text-dark-amethyst">
              General Settings
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-dark-amethyst mb-2">
                Platform Name
              </label>
              <input
                type="text"
                defaultValue="The Investor Labs"
                className="w-full h-12 px-4 rounded-xl border border-dust-grey/30 focus:border-indigo-velvet focus:outline-none focus:ring-2 focus:ring-indigo-velvet/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-amethyst mb-2">
                Contact Email
              </label>
              <input
                type="email"
                defaultValue="support@theinvestorslab.in"
                className="w-full h-12 px-4 rounded-xl border border-dust-grey/30 focus:border-indigo-velvet focus:outline-none focus:ring-2 focus:ring-indigo-velvet/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-amethyst mb-2">
                Contact Phone
              </label>
              <input
                type="tel"
                defaultValue="+91 8800843413"
                className="w-full h-12 px-4 rounded-xl border border-dust-grey/30 focus:border-indigo-velvet focus:outline-none focus:ring-2 focus:ring-indigo-velvet/20"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-dust-grey/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-lg bg-indigo-velvet/10 p-2">
              <Bell className="h-5 w-5 text-indigo-velvet" />
            </div>
            <h2 className="text-lg font-semibold text-dark-amethyst">
              Notifications
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-dark-amethyst">
                  Email Notifications
                </p>
                <p className="text-sm text-dark-amethyst/60">
                  Receive email alerts for new leads
                </p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 rounded border-dust-grey/30 text-indigo-velvet focus:ring-indigo-velvet"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-dark-amethyst">
                  Property Updates
                </p>
                <p className="text-sm text-dark-amethyst/60">
                  Get notified when properties are sold
                </p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 rounded border-dust-grey/30 text-indigo-velvet focus:ring-indigo-velvet"
              />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-dust-grey/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-lg bg-indigo-velvet/10 p-2">
              <Shield className="h-5 w-5 text-indigo-velvet" />
            </div>
            <h2 className="text-lg font-semibold text-dark-amethyst">
              Security
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-dark-amethyst mb-2">
                Admin Access
              </p>
              <p className="text-sm text-dark-amethyst/60 mb-4">
                Only users with admin role can access this dashboard
              </p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-dark-amethyst/60">
                  Role-based access control enabled
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Database */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-dust-grey/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-lg bg-indigo-velvet/10 p-2">
              <Database className="h-5 w-5 text-indigo-velvet" />
            </div>
            <h2 className="text-lg font-semibold text-dark-amethyst">
              Database
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-dark-amethyst mb-2">
                Connection Status
              </p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-dark-amethyst/60">
                  Connected to Neon PostgreSQL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="rounded-xl bg-indigo-velvet px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-dark-amethyst">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
