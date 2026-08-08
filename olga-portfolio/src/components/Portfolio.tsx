"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { cn } from "@/lib/utils";

type Category = "Все" | "Коммерческий макияж" | "Грим для кино & Театра" | "Спецгрим / SFX";

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  beforeImage?: string;
  role: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Vogue Editorial",
    category: "Коммерческий макияж",
    image: "https://images.unsplash.com/photo-1512496015851-a1cbfc38ca30?q=80&w=1200&auto=format&fit=crop",
    role: "Key Makeup Artist",
    description: "Создание креативных образов для модной съемки. Использование графичных линий и ярких акцентов."
  },
  {
    id: 2,
    title: "Zombie Bite SFX",
    category: "Спецгрим / SFX",
    image: "https://images.unsplash.com/photo-1604179374026-62045cc94747?q=80&w=1200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    role: "SFX Artist",
    description: "Создание реалистичного укуса с использованием силиконовых накладок и театральной крови для короткометражного фильма."
  },
  {
    id: 3,
    title: "Period Drama",
    category: "Грим для кино & Театра",
    image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1200&auto=format&fit=crop",
    role: "Makeup Designer",
    description: "Исторический макияж и прически для эпохи 1920-х годов. Работа с париками и винтажными текстурами."
  },
  {
    id: 4,
    title: "Beauty Campaign",
    category: "Коммерческий макияж",
    image: "https://images.unsplash.com/photo-1526413232644-8a407dd56113?q=80&w=1200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop",
    role: "Makeup Artist",
    description: "Чистый сияющий макияж (glow skin) для рекламной кампании уходовой косметики."
  },
  {
    id: 5,
    title: "Age Progression",
    category: "Спецгрим / SFX",
    image: "https://images.unsplash.com/photo-1505503693641-1926193e8d57?q=80&w=1200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    role: "Prosthetics Artist",
    description: "Возрастной грим (+30 лет) с использованием латекса, прорисовки морщин и седины."
  },
  {
    id: 6,
    title: "Avant-Garde Theater",
    category: "Грим для кино & Театра",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1200&auto=format&fit=crop",
    role: "Key Makeup",
    description: "Экспрессивный театральный грим с использованием боди-арта и нестандартных материалов."
  }
];

export function Portfolio() {
  const [filter, setFilter] = useState<Category>("Все");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: Category[] = ["Все", "Коммерческий макияж", "Грим для кино & Театра", "Спецгрим / SFX"];

  const filteredProjects = filter === "Все"
    ? projects
    : projects.filter(p => p.category === filter);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-24 relative bg-cosmic/30">
      <div className="container mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-silk mb-4">Избранные <span className="text-orchid italic">Работы</span></h2>
            <p className="text-ash font-sans max-w-xl">От концепта до финального кадра. Исследуйте различные направления моей работы.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 py-2 text-sm font-sans rounded-full transition-all duration-300 border",
                  filter === cat
                    ? "bg-silk text-onyx border-silk"
                    : "bg-transparent text-ash border-ash/20 hover:border-orchid/50 hover:text-silk"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group cursor-pointer relative aspect-[4/5] rounded-sm overflow-hidden bg-onyx"
                onClick={() => setSelectedProject(project)}
              >
                {project.beforeImage ? (
                  <div className="w-full h-full pointer-events-none group-hover:pointer-events-auto">
                    <BeforeAfterSlider
                      beforeImage={project.beforeImage}
                      afterImage={project.image}
                    />
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                  <p className="text-orchid font-mono text-xs tracking-widest uppercase mb-2">{project.category}</p>
                  <h3 className="text-silk font-serif text-2xl">{project.title}</h3>
                  <div className="absolute top-6 right-6 w-10 h-10 bg-silk/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <ZoomIn className="text-silk h-5 w-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-onyx/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="bg-cosmic w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm flex flex-col lg:flex-row"
              onClick={e => e.stopPropagation()}
            >
              <div className="w-full lg:w-3/5 h-[50vh] lg:h-auto relative bg-onyx">
                {selectedProject.beforeImage ? (
                   <BeforeAfterSlider
                     beforeImage={selectedProject.beforeImage}
                     afterImage={selectedProject.image}
                   />
                ) : (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div className="w-full lg:w-2/5 p-8 md:p-12 relative flex flex-col">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-ash hover:text-silk transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <p className="text-orchid font-mono text-xs tracking-widest uppercase mb-4">{selectedProject.category}</p>
                <h3 className="text-silk font-serif text-3xl md:text-4xl mb-6">{selectedProject.title}</h3>

                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-sm font-sans text-ash uppercase tracking-wider mb-2">Роль</h4>
                    <p className="text-silk">{selectedProject.role}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-sans text-ash uppercase tracking-wider mb-2">Описание</h4>
                    <p className="text-silk/80 leading-relaxed">{selectedProject.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
