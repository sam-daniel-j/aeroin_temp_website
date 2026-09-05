import { useNavigate } from 'react-router-dom';
import { ArrowRight, GraduationCap, Monitor, IndianRupee } from 'lucide-react';
import type { Course } from '@/data/courses';
import { coursePricingNote, coursePricingSubNote } from '@/data/courses';

type CourseCardProps = {
  course: Course;
  onEnroll: (course: Course) => void;
};

export default function CourseCard({ course, onEnroll }: CourseCardProps) {
  const navigate = useNavigate();

  return (
    <div className="card group flex flex-col overflow-hidden hover:border-electric-500/30 hover:bg-white/[0.05]">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/90 via-midnight-900/20 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-midnight-900/70 px-3 py-1 text-xs font-semibold text-electric-400 backdrop-blur-sm">
          {course.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-heading text-lg font-semibold text-white">
          {course.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-200">
          {course.shortDescription}
        </p>

        {/* Meta */}
        <div className="mt-4 flex flex-col gap-2 text-xs text-navy-200">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-electric-400" />
            <span className="font-medium text-navy-100">Level:</span>
            <span>{course.level}</span>
          </div>
          <div className="flex items-center gap-2">
            <Monitor className="h-4 w-4 text-electric-400" />
            <span className="font-medium text-navy-100">Mode:</span>
            <span>{course.mode}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-4 border-t border-white/10 pt-4">
          <div className="flex items-center gap-1.5">
            <IndianRupee className="h-4 w-4 text-electric-400" />
            <span className="text-sm font-semibold text-white">
              {coursePricingNote}
            </span>
          </div>
          <span className="text-xs text-navy-300">{coursePricingSubNote}</span>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex flex-1 items-end gap-2">
          <button
            type="button"
            onClick={() => navigate(`/courses/${course.slug}`)}
            className="btn-secondary flex-1"
          >
            View Course
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onEnroll(course)}
            className="btn-primary flex-1"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
