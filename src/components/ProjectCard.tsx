import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '@/data/projects';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <div className="card group flex flex-col overflow-hidden hover:border-electric-500/30 hover:bg-white/[0.05]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/90 via-midnight-900/20 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-midnight-900/70 px-3 py-1 text-xs font-semibold text-electric-400 backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-heading text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-200">
          {project.description}
        </p>

        <div className="mt-4">
          <span className="text-xs font-medium text-navy-100">
            Technology:{' '}
          </span>
          <span className="text-xs text-navy-200">{project.technology}</span>
        </div>

        {project.isPlaceholder && (
          <span className="mt-3 inline-block w-fit rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-navy-300">
            Conceptual Project
          </span>
        )}

        <div className="mt-5 flex flex-1 items-end">
          <button
            type="button"
            onClick={() => navigate('/courses')}
            className="btn-secondary w-full"
          >
            View Project
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
