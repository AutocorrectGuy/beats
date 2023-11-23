import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import catCoding from '../../images/catCoding.png'
import NavQuest from '@/Components/NavQuest';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
  return (
    <>
      <Head title="Welcome" />
      <NavQuest />
      <div className='w-full bg-neutral-900 min-h-screen bg-opacity-80 mt-9'>
        <div className="max-w-7xl w-full mx-auto">
          <div className="max-w-7xl mx-auto p-6">
            <div className="flex flex-col gap-3 lg:flex-row items-center justify-center text-4xl sm:text-6xl mt-4 text-slate-200 py-14 overflow-hidden">
              <p>We're under</p>
              <p className='bg-yellow-400 rounded-lg px-4 py-2 text-neutral-900'>construction</p>
            </div>

            <img src={catCoding} alt='hero-img-1' className='w-full mx-auto' />
            <h3 className='text-2xl text-center mt-8 text-slate-200'>
              Updates coming soon
            </h3>
          </div>
        </div>
      </div>

    </>
  );
}
