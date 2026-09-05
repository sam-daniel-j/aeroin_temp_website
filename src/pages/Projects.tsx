import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import ProjectCard from '@/components/ProjectCard';
import { projects, projectCategories, type ProjectCategory } from '@/data/projects';

type FilterCategory = 'All' | ProjectCategory;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');

  useEffect(() => {
    document.title = 'Student Aerospace & Space Technology Projects | Aeroin EduTech';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Explore conceptual student projects in aerospace and space technology — CubeSats, rockets, UAVs, robotics and more from Aeroin EduTech.');
    return () => { document.title = 'Aeroin EduTech — Learn Space Technology. Build the Future.'; };
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-midnight-900">
      <Header />

      <PageHero
        badge="Projects"
        title="Explore Student Projects"
        subtitle="Turning aerospace and space technology concepts into practical projects."
      />

      <section className="relative bg-midnight-900 pb-20 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-navy-950 to-midnight-900" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters + count */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-2 sm:flex-wrap">
                {projectCategories.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      aria-pressed={isActive}
                      className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'border-electric-500 bg-electric-500 text-white'
                          : 'border-white/10 bg-white/5 text-navy-100 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="whitespace-nowrap text-sm font-medium text-navy-200">
              <span className="font-semibold text-white">{filteredProjects.length}</span>{' '}
              {filteredProjects.length === 1 ? 'Project' : 'Projects'}
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Search className="h-8 w-8 text-navy-200" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-white">
                No projects found
              </h3>
              <p className="mt-2 text-sm text-navy-200">
                Try selecting another category.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory('All')}
                className="btn-secondary mt-6"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Have an Idea? Build It With Us."
        subtitle="Explore our courses and develop practical aerospace and space technology projects."
      />
      <Footer />
    </div>
  );
}
