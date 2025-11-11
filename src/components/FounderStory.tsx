import { Card } from "@/components/ui/card";

export const FounderStory = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Image Card */}
          <div className="w-full max-w-sm mx-auto lg:mx-0 animate-fade-in">
            <Card className="bg-card border-border overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale">
              <div className="aspect-square relative">
                <img
                  src="/assets/founder.jpeg"
                  alt="Tim Ngerti.in"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </Card>
          </div>

          {/* Right Side - Story Text */}
          <div className="space-y-4 md:space-y-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 text-foreground/80">
              <span className="text-lg md:text-xl">👋</span>
              <span className="text-sm md:text-base">
                Hey, <span className="font-semibold text-foreground">Pendidik</span> dari <span className="font-semibold text-foreground">Indonesia</span> 🇮🇩
              </span>
            </div>

            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              Saya founder Ngerti.in. Sebagai mantan pendidik, saya tahu betapa{" "}
              <span className="font-semibold text-foreground">melelahkannya membuat soal setiap minggu</span>.
            </p>

            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              Saya belajar bahwa <span className="font-semibold text-foreground">teknologi AI bisa jadi game-changer untuk pendidikan</span>.
              Tapi kebanyakan tools hanya fokus pada <span className="italic text-foreground/60">automation tanpa personalisasi</span>...
            </p>

            <p className="text-foreground/60 italic text-sm md:text-base leading-relaxed pl-4 border-l-2 border-border">
              Generate soal otomatis, tapi apakah soal-soal itu benar-benar relevan dengan materi
              yang kamu ajarkan? Apakah feedback-nya membantu siswa belajar lebih baik?
            </p>

            <div className="space-y-2 pt-2">
              <p className="text-foreground/80 text-sm md:text-base font-medium">
                Makanya saya buat Ngerti.in dengan 3 prinsip:
              </p>
              <div className="space-y-2 pl-1">
                <p className="text-foreground/80 text-sm md:text-base">
                  1. <span className="font-semibold text-foreground">Hemat waktu pendidik</span> tanpa mengorbankan kualitas soal.
                </p>
                <p className="text-foreground/80 text-sm md:text-base">
                  2. <span className="font-semibold text-foreground">Bantu siswa belajar lebih efektif</span> lewat feedback real-time yang personal.
                </p>
                <p className="text-foreground/80 text-sm md:text-base">
                  3. <span className="font-semibold text-foreground">Data-driven insights</span> untuk keputusan pembelajaran yang lebih baik.
                </p>
              </div>
            </div>

            <p className="text-foreground/80 text-sm md:text-base leading-relaxed pt-2">
              Saya build Ngerti.in untuk{" "}
              <span className="font-semibold text-foreground">500+ pendidik Indonesia</span>{" "}
              yang percaya teknologi bisa bikin pembelajaran lebih bermakna. Mari kita ciptakan masa depan pendidikan bersama! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
