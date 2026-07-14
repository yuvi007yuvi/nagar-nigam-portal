import HeroSection from '@/components/sections/HeroSection';
import QuickServices from '@/components/sections/QuickServices';
import NewsTicker from '@/components/sections/NewsTicker';
import InformationWidgets from '@/components/sections/InformationWidgets';
import HelplineMarquee from '@/components/sections/HelplineMarquee';
import NewsSection from '@/components/sections/NewsSection';
import NoticeBoard from '@/components/sections/NoticeBoard';
import MayorCommissioner from '@/components/sections/MayorCommissioner';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TendersAndCirculars from '@/components/sections/TendersAndCirculars';
import SocialMediaFeed from '@/components/sections/SocialMediaFeed';
import GallerySlider from '@/components/sections/GallerySlider';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <>
      <NewsTicker />
      <HeroSection />
      <InformationWidgets />
      <HelplineMarquee />
      <QuickServices />
      
      <div className={styles.fullWidthContainer}>
        <MayorCommissioner />
      </div>

      <div className={styles.gridContainer}>
        <NewsSection />
        <NoticeBoard />
        <TendersAndCirculars />
        <SocialMediaFeed />
      </div>

      <GallerySlider />
    </>
  );
}
