import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHero } from '../components/layout/PageHero.tsx';
import { CTABand } from '../components/sections/CTABand.tsx';
import { galleryData, GalleryItem } from '../data/gallery.ts';
import { MapPin, X, ZoomIn } from 'lucide-react';
import airportImg from '../assets/images/hero_students_airport_1790920592244.jpg';
import { easings, StaggerContainer, StaggerItem } from '../utils/motion.tsx';

interface GalleryPageProps {
  onOpenCounselling: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenCounselling }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Seminars', 'Visa Success', 'Send-Off', 'Campus Visits'];

  const filtered = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(g => g.category === selectedCategory);

  return (
    <div>
      <PageHero
        title="Events & Campus Gallery"
        subtitle="Memorable moments from student pre-departure send-offs, visa felicitation ceremonies, education expos, and global campus tours."
        badge="Life at Flygrad"
        breadcrumbs={[{ label: 'Gallery' }]}
        bgImage={airportImg}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs with Sliding Pill */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    isSelected ? 'text-white' : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="galleryFilterPill"
                      className="absolute inset-0 bg-[#0B2F85] rounded-xl shadow-xs -z-0"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Photo Grid with Stagger & Crossfade */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: easings.expoOut }}
            >
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((item) => (
                  <StaggerItem key={item.id}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActivePhoto(item)}
                      className="group relative bg-slate-100 rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-slate-200 relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                          <ZoomIn className="w-4 h-4" />
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#33C9FF] bg-black/40 px-2 py-0.5 rounded">
                            {item.category}
                          </span>
                          <h3 className="text-base font-bold text-white mt-1.5 leading-snug drop-shadow-sm">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
                            <MapPin className="w-3.5 h-3.5 text-[#33C9FF]" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePhoto(null)}
                aria-label="Close photo"
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] bg-black">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-7 text-white space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#33C9FF]">
                    {activePhoto.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#33C9FF]" />
                    {activePhoto.location}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{activePhoto.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{activePhoto.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABand onOpenCounselling={onOpenCounselling} />
    </div>
  );
};
