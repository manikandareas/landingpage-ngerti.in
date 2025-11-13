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
                Hey, <span className="relative mx-0.5 animate-pulse cursor-pointer rounded-sm px-1 text-base-content underline decoration-primary/80 decoration-wavy decoration-2 underline-offset-[3px] duration-150 ease-in-out hover:animate-none hover:bg-primary/20 hover:decoration-primary font-semibold">Teman-teman</span> dari <span className="font-semibold text-foreground">Indonesia</span> 🇮🇩
              </span>
            </div>

            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              Pernah nggak sih dapat soal ujian tapi materinya{" "}
              <span className="font-semibold text-foreground">nggak nyambung sama yang dipelajari?</span>{" "}
              Kami sebagai pelajar sering banget ngalamin ini.
            </p>

            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              Makanya kami bikin <span className="font-semibold text-foreground">Ngerti.in</span> — platform yang{" "}
              <span className="font-semibold text-foreground">generate soal yang bener-bener relevan</span> dengan materi yang lagi dipelajari.
            </p>

            <div className="space-y-2 pt-2">
              <p className="text-foreground/80 text-sm md:text-base font-medium">
                Yang bikin Ngerti.in beda:
              </p>
              <div className="space-y-2 pl-1">
                <p className="text-foreground/80 text-sm md:text-base">
                  ✨ <span className="font-semibold text-foreground">Soal yang relevan</span> — disesuaikan dengan materi yang lagi dipelajari
                </p>
                <p className="text-foreground/80 text-sm md:text-base">
                  ⚡ <span className="font-semibold text-foreground">Cepet banget</span> — generate soal dalam hitungan menit
                </p>
                <p className="text-foreground/80 text-sm md:text-base">
                  📊 <span className="font-semibold text-foreground">Feedback real-time</span> — siswa langsung tahu jawaban yang bener & kenapa
                </p>
              </div>
            </div>

            <p className="text-foreground/80 text-sm md:text-base leading-relaxed pt-2">
              Sekarang udah dipake sama{" "}
              <span className="font-semibold text-foreground">500+ pendidik di Indonesia</span>.{" "}
              Yuk, bikin belajar jadi lebih seru & efektif! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
