import { courseCategories, type CourseCategory } from '@/data/courses';

type CourseFiltersProps = {
  active: 'All Courses' | CourseCategory;
  onChange: (category: 'All Courses' | CourseCategory) => void;
  count: number;
};

export default function CourseFilters({ active, onChange, count }: CourseFiltersProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Filter buttons - horizontally scrollable on mobile */}
      <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-2 sm:flex-wrap">
          {courseCategories.map((category) => {
            const isActive = active === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onChange(category)}
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

      {/* Count */}
      <div className="whitespace-nowrap text-sm font-medium text-navy-200">
        <span className="font-semibold text-white">{count}</span>{' '}
        {count === 1 ? 'Course' : 'Courses'}
      </div>
    </div>
  );
}
