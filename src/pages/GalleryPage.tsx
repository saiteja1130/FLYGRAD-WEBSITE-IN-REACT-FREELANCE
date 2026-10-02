import React, { useState } from 'react';
import { PageHero } from '../components/layout/PageHero.tsx';
import { CTABand } from '../components/sections/CTABand.tsx';
import { galleryData, GalleryItem } from '../data/gallery.ts';
import { MapPin, X, ZoomIn, Calendar } from 'lucide-react';
import airportImg from '../assets/images/hero_students_airport_1790920592244.jpg';

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
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0B2F85] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="group relative bg-slate-100 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-200 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              aria-label="Close photo"
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
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

            <div className="p-6 text-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#33C9FF]">
                  {activePhoto.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#33C9FF]" />
                  {activePhoto.location}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{activePhoto.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}

      <CTABand onOpenCounselling={onOpenCounselling} />
    </div>
  );
};
