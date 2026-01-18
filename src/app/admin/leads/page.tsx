import { Mail, Phone, Calendar, Filter } from "lucide-react";

export default async function LeadsPage() {
  // TODO: Fetch leads from database
  const leads = [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-dark-amethyst">Leads</h1>
          <p className="mt-1 text-dark-amethyst/60">
            Manage all contact form submissions
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <select className="rounded-xl border border-dust-grey/30 bg-white px-4 py-3 text-sm focus:border-indigo-velvet focus:outline-none focus:ring-2 focus:ring-indigo-velvet/20">
          <option value="">All Types</option>
          <option value="sales">Sales</option>
          <option value="support">Support</option>
          <option value="partnership">Partnership</option>
        </select>
        <select className="rounded-xl border border-dust-grey/30 bg-white px-4 py-3 text-sm focus:border-indigo-velvet focus:outline-none focus:ring-2 focus:ring-indigo-velvet/20">
          <option value="">All Status</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>

      {/* Leads Table */}
      {leads.length === 0 ? (
        <div className="rounded-2xl bg-white p-12 text-center shadow-sm border border-dust-grey/20">
          <Mail className="mx-auto h-12 w-12 text-dust-grey" />
          <h3 className="mt-4 text-lg font-medium text-dark-amethyst">
            No leads yet
          </h3>
          <p className="mt-2 text-sm text-dark-amethyst/60">
            Leads from contact forms will appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-dust-grey/20">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-honeydew/30 border-b border-dust-grey/20">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-dark-amethyst">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-dark-amethyst">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-dark-amethyst">
                    Message
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-dark-amethyst">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-dark-amethyst">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dust-grey/20">
                {/* Leads will be mapped here */}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
