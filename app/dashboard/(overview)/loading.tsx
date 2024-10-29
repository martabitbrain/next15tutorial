import DashboardSkeleton from "@/app/ui/skeletons";

/**
 * loading.tsx is a special Next.js file built on top of Suspense, 
 * it allows you to create fallback UI to show as a replacement 
 * while page content loads.
 * By placing this file below (overview) route group folder, it only
 * applies to the neighbor file page.tsx
 */
export default function Loading() {
  return <DashboardSkeleton />;
}
