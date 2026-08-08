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
  // 6 "Коммерческий макияж": 3 standard, 3 with `beforeImage`
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
    title: "Spring Collection",
    category: "Коммерческий макияж",
    image: "https://images.unsplash.com/photo-1526413232644-8a407dd56113?q=80&w=1200&auto=format&fit=crop",
    role: "Lead Artist",
    description: "Легкий весенний макияж для каталога одежды."
  },
  {
    id: 3,
    title: "Glow Skin Campaign",
    category: "Коммерческий макияж",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop",
    role: "Makeup Artist",
    description: "Акцент на сияющую кожу для бренда уходовой косметики."
  },
  {
    id: 4,
    title: "Bridal Transformation",
    category: "Коммерческий макияж",
    image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1505503693641-1926193e8d57?q=80&w=1200&auto=format&fit=crop",
    role: "Makeup Artist",
    description: "Нежный свадебный макияж. Подготовка кожи и создание стойкого образа."
  },
  {
    id: 5,
    title: "Evening Glamour",
    category: "Коммерческий макияж",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    role: "Makeup Artist",
    description: "Яркий вечерний макияж с акцентом на глаза и контуринг."
  },
  {
    id: 6,
    title: "Fashion Week Ready",
    category: "Коммерческий макияж",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop",
    role: "Lead Makeup",
    description: "Подготовка модели к показу, идеальный тон и четкие линии."
  },

  // 9 "Грим для кино & Театра": all standard (no beforeImage)
  {
    id: 7,
    title: "Period Drama: 1920s",
    category: "Грим для кино & Театра",
    image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1200&auto=format&fit=crop",
    role: "Makeup Designer",
    description: "Исторический макияж и прически для эпохи 1920-х годов."
  },
  {
    id: 8,
    title: "Avant-Garde Theater",
    category: "Грим для кино & Театра",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1200&auto=format&fit=crop",
    role: "Key Makeup",
    description: "Экспрессивный театральный грим с использованием боди-арта."
  },
  {
    id: 9,
    title: "Sci-Fi Character",
    category: "Грим для кино & Театра",
    image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1200&auto=format&fit=crop",
    role: "Concept Artist",
    description: "Грим инопланетного персонажа для независимого фильма."
  },
  {
    id: 10,
    title: "Noir Detective",
    category: "Грим для кино & Театра",
    image: "https://images.unsplash.com/photo-1533516315582-7360bfbe6315?q=80&w=1200&auto=format&fit=crop",
    role: "Key Artist",
    description: "Создание атмосферного образа для фильма в стиле нуар."
  },
  {
    id: 11,
    title: "Opera Singer",
    category: "Грим для кино & Театра",
    image: "https://images.unsplash.com/photo-1517436073-3b1b1b86d9a0?q=80&w=1200&auto=format&fit=crop",
    role: "Stage Makeup",
    description: "Яркий сценический макияж, видимый с последних рядов."
  },
  {
    id: 12,
    title: "Fantasy Elf",
    category: "Грим для кино & Театра",
    image: "https://images.unsplash.com/photo-1496016943515-7d33598c11e6?q=80&w=1200&auto=format&fit=crop",
    role: "Makeup Artist",
    description: "Эльфийский образ с использованием накладных ушей."
  },
  {
    id: 13,
    title: "Street Urchin",
    category: "Грим для кино & Театра",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    role: "Makeup Artist",
    description: "Грязный и изношенный вид для уличного персонажа."
  },
  {
    id: 14,
    title: "Cyberpunk Hacker",
    category: "Грим для кино & Театра",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200&auto=format&fit=crop",
    role: "Key Makeup",
    description: "Неоновые акценты и текстуры для киберпанк стиля."
  },
  {
    id: 15,
    title: "Aristocrat",
    category: "Грим для кино & Театра",
    image: "https://images.unsplash.com/photo-1550928431-ee0ecb001a1c?q=80&w=1200&auto=format&fit=crop",
    role: "Makeup Designer",
    description: "Бледная кожа и сложные прически для роли аристократа."
  },

  // 3 "Спецгрим / SFX": all with beforeImage
  {
    id: 16,
    title: "Zombie Bite SFX",
    category: "Спецгрим / SFX",
    image: "https://images.unsplash.com/photo-1604179374026-62045cc94747?q=80&w=1200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    role: "SFX Artist",
    description: "Создание реалистичного укуса с использованием силиконовых накладок."
  },
  {
    id: 17,
    title: "Age Progression",
    category: "Спецгрим / SFX",
    image: "https://images.unsplash.com/photo-1505503693641-1926193e8d57?q=80&w=1200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    role: "Prosthetics Artist",
    description: "Возрастной грим (+30 лет) с использованием латекса."
  },
  {
    id: 18,
    title: "Battle Scars",
    category: "Спецгрим / SFX",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    role: "SFX Artist",
    description: "Шрамы и ожоги для сцены после битвы в боевике."
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
