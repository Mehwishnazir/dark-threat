import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb UI component. JSON-LD schema is handled by the page itself to avoid duplication.
 */
const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol
        className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li
              key={idx}
              className="flex items-center gap-1.5"
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={String(idx + 1)} />
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  itemProp="item"
                  className="hover:text-primary transition-colors"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span
                  className={isLast ? 'text-foreground font-medium' : ''}
                  itemProp="name"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 shrink-0" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
