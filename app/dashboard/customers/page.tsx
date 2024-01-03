import Table from '@/app/ui/customers/table';
// import { CustomersTableSkeleton } from '@/app/ui/skeletons';
// import { Suspense } from 'react';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};
 
export default async function Page({
  searchParams, 
}: {
  searchParams?: {
    query?: string;
    page?: string;
  }
}) {
  const query = searchParams?.query || '';

  return (
    <div className="w-full">
      <Table query={query} />
    </div>
  );
}
