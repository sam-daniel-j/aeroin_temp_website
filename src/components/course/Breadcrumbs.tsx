import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

type BreadcrumbsProps = {
  courseTitle: string;
};

export default function Breadcrumbs({ courseTitle }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ol className="flex items-center gap-1.5 text-xs text-navy-200 sm:text-sm">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 transition-colors hover:text-white"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>
        <li>
          <ChevronRight className="h-3.5 w-3.5 text-navy-300" />
        </li>
        <li>
          <Link to="/courses" className="transition-colors hover:text-white">
            Courses
          </Link>
        </li>
        <li>
          <ChevronRight className="h-3.5 w-3.5 text-navy-300" />
        </li>
        <li className="truncate font-medium text-white">{courseTitle}</li>
      </ol>
    </nav>
  );
}
