import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { PersonasSection } from './components/PersonasSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CoreIPShowcase } from './components/CoreIPShowcase';
import { NewswireSection } from './components/NewswireSection';
import { StoreMerchSection } from './components/StoreMerchSection';
import { CtaBanner } from './components/CtaBanner';
import { SchedulingSection } from './components/SchedulingSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { ChatBotWidget } from './components/ChatBotWidget';

// Modals
import { TrailerModal } from './components/TrailerModal';
import { EditionsModal } from './components/EditionsModal';
import { LicensePlateModal } from './components/LicensePlateModal';
import { CareerTrackerModal } from './components/CareerTrackerModal';
import { SearchModal } from './components/SearchModal';
import { LauncherModal } from './components/LauncherModal';
import { ArticleModal } from './components/ArticleModal';
import { MerchModal } from './components/MerchModal';

import { NewswirePost, MerchItem } from './types';

export default function App() {
  // Modal states
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);
  const [trailerTitle, setTrailerTitle] = useState('GRAND THEFT AUTO VI — EXTENDED LOOK');
  const [trailerDuration, setTrailerDuration] = useState('4:28');

  const [editionsModalOpen, setEditionsModalOpen] = useState(false);
  const [plateModalOpen, setPlateModalOpen] = useState(false);
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [launcherModalOpen, setLauncherModalOpen] = useState(false);

  const [selectedArticle, setSelectedArticle] = useState<NewswirePost | null>(null);
  const [selectedMerch, setSelectedMerch] = useState<MerchItem | null>(null);

  const handleOpenTrailer = (title?: string, duration?: string) => {
    if (title) setTrailerTitle(title);
    if (duration) setTrailerDuration(duration);
    setTrailerModalOpen(true);
  };

  const handleJumpIntoOnline = () => {
    setEditionsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f3f4f6] font-body selection:bg-amber-400 selection:text-black">
      {/* 1. Header & Utility Navigation */}
      <HeaderNav
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenLauncher={() => setLauncherModalOpen(true)}
        onOpenEditions={() => setEditionsModalOpen(true)}
        onOpenCareer={() => setCareerModalOpen(true)}
        onOpenPlateModal={() => setPlateModalOpen(true)}
      />

      <main>
        {/* 2. Hero Section with Problem Statement, Headline & Carousel */}
        <HeroSection
          onOpenTrailer={handleOpenTrailer}
          onOpenEditions={() => setEditionsModalOpen(true)}
          onJumpIntoOnline={handleJumpIntoOnline}
        />

        {/* 3. Target Audience Section (3 Personas with Role, Frustration, Outcome) */}
        <PersonasSection
          onSelectEdition={() => setEditionsModalOpen(true)}
          onJumpIntoOnline={handleJumpIntoOnline}
        />

        {/* 4. Core Solutions / Services (5 Core Features with Outcome-Focused Benefits & Icons) */}
        <FeaturesSection
          onOpenPlateModal={() => setPlateModalOpen(true)}
          onOpenCareerModal={() => setCareerModalOpen(true)}
          onOpenEditions={() => setEditionsModalOpen(true)}
        />

        {/* 5. Core IP Hubs (GTA Online, Red Dead Online, GTA VI Vault) */}
        <CoreIPShowcase
          onOpenTrailer={handleOpenTrailer}
          onOpenPlateModal={() => setPlateModalOpen(true)}
          onOpenCareerModal={() => setCareerModalOpen(true)}
          onOpenEditions={() => setEditionsModalOpen(true)}
        />

        {/* 6. Rockstar Newswire (Live Pulse & Social Proof Ticker) */}
        <NewswireSection
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* 7. D2C Store & Merchandising Grid */}
        <StoreMerchSection
          onQuickView={(item) => setSelectedMerch(item)}
        />

        {/* 8. Conversion CTA Section (Action-Oriented Buttons & Newsletter) */}
        <CtaBanner
          onOpenEditions={() => setEditionsModalOpen(true)}
          onOpenTrailer={() => handleOpenTrailer('Grand Theft Auto VI Extended World Reveal', '4:28')}
        />

        {/* 9. Dedicated Scheduling Section (Cal.com 30-min Technical Support) */}
        <SchedulingSection />

        {/* 10. Complete Accordion FAQ Section (Account Linking, Launcher Support, Meetings & Entitlements) */}
        <FaqSection
          onOpenSupport={() => {
            const el = document.getElementById('scheduling');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </main>

      {/* 11. Footer & Legal Authority */}
      <FooterSection />

      {/* 12. Floating Interactive Support ChatBot Widget */}
      <ChatBotWidget />

      {/* Modals & Interactive Overlays */}
      <TrailerModal
        isOpen={trailerModalOpen}
        onClose={() => setTrailerModalOpen(false)}
        title={trailerTitle}
        duration={trailerDuration}
        onPreOrder={() => setEditionsModalOpen(true)}
      />

      <EditionsModal
        isOpen={editionsModalOpen}
        onClose={() => setEditionsModalOpen(false)}
      />

      <LicensePlateModal
        isOpen={plateModalOpen}
        onClose={() => setPlateModalOpen(false)}
      />

      <CareerTrackerModal
        isOpen={careerModalOpen}
        onClose={() => setCareerModalOpen(false)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectGame={() => setEditionsModalOpen(true)}
      />

      <LauncherModal
        isOpen={launcherModalOpen}
        onClose={() => setLauncherModalOpen(false)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onAction={() => setEditionsModalOpen(true)}
      />

      <MerchModal
        item={selectedMerch}
        onClose={() => setSelectedMerch(null)}
      />
    </div>
  );
}
