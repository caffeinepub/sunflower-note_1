import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

function App() {
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  const handleOpenNote = () => {
    setIsNoteOpen(true);
  };

  const handleCloseNote = () => {
    setIsNoteOpen(false);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-4 py-8">
      {/* Hero Section with Sunflower Bouquet */}
      <div className="relative flex flex-col items-center justify-center gap-8">
        {/* Sunflower Image */}
        <div
          className={`relative transition-all duration-400 ${
            isNoteOpen ? 'blur-background' : ''
          }`}
        >
          <img
            src="/assets/generated/sunflower-bouquet-hero.dim_1600x1600.png"
            alt="Sunflower Bouquet"
            className="breathe w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain cursor-pointer select-none"
            onClick={handleOpenNote}
            draggable={false}
          />
        </div>

        {/* Open Note Button */}
        {!isNoteOpen && (
          <Button
            onClick={handleOpenNote}
            variant="outline"
            className="glassmorphism hover:bg-white/90 transition-all duration-300 text-sm font-medium tracking-wide px-6 py-5 rounded-full shadow-lg"
          >
            Open Note
          </Button>
        )}
      </div>

      {/* Glassmorphism Note Card Overlay */}
      {isNoteOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/10"
          onClick={handleCloseNote}
        >
          <div
            className={`glassmorphism rounded-3xl p-8 sm:p-10 md:p-12 max-w-[90%] sm:max-w-md md:max-w-lg relative ${
              isNoteOpen ? 'fade-in' : 'fade-out'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseNote}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/50 transition-colors duration-200"
              aria-label="Close note"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Note Content */}
            <div className="text-center space-y-6">
              <p className="text-xl sm:text-2xl font-light text-gray-800 leading-relaxed">
                Amrutaaa 🤍
              </p>
              
              <p className="text-base sm:text-lg font-light text-gray-700 leading-loose">
                HBD brooo… you deserve the absolute best always ......
              </p>
              
              <p className="text-base sm:text-lg font-light text-gray-700 leading-loose">
                Stay hot and unhinged 🍻✨
              </p>
              
              <div className="pt-4 border-t border-gray-300/50">
                <p className="text-sm sm:text-base font-normal text-gray-600 leading-relaxed">
                  Cheers, your favorite person,
                </p>
                <p className="text-base sm:text-lg font-medium text-gray-800 mt-2">
                  Rֶָ֢achel
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-xs text-gray-500 font-light">
          © {new Date().getFullYear()} · Built with ❤️ using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'sunflower-note'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors duration-200"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
