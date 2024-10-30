import SideNav from "@/app/ui/dashboard/sidenav";

// Enable experimental ppr for this layout
export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          <h1>Dashboard Layout</h1>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
