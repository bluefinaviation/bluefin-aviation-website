import Link from 'next/link';
import { Balancer } from 'react-wrap-balancer';

import { Button } from '@/components/ui/button';

export default async function NotFound() {
  return (
    <main className="mx-auto grid h-screen max-w-5xl place-content-center place-items-center text-center">
      <p className="text-3xl">404 Not Found</p>
      <h1 className="mt-5 text-7xl font-black uppercase text-blue-950">
        <Balancer>Oops! That page doesn’t exist</Balancer>
      </h1>

      <Button className="mt-10">
        <Link href="/">Back Home</Link>
      </Button>
    </main>
  );
}
