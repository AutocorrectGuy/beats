import { Head } from '@inertiajs/react'
import heroImage from '../../../images/hero-girl-1.png'
import NavMain from '@/Components/NavQuest/NavMain'
import { WindowUtilsProvider } from '@/Contexts/WindowUtilsContext'
import HeroBanner from './HeroBanner'
import TrendingTracks from './TrendingTracks'

export default function Welcome() {
  return (
    <WindowUtilsProvider>
      <Head title="Welcome" />
      <NavMain />
      {/* Page content */}
      <HeroBanner />
      <TrendingTracks />
    </WindowUtilsProvider>
  )
}
