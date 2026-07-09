import { getCourses, getCategories, type Course, type Category } from "../lib/data";
import { CourseCard } from "./course-card";
import { useEffect, useState } from "react";
import { useColor } from "../contexts/ColorContext";
import React from "react";
import { Lock, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CourseGridProps {
  selectedCategory: string;
  isLocked?: boolean;
}

const CourseCardSkeleton: React.FC<{ isHorizontal?: boolean }> = ({ isHorizontal = false }) => (
  <div className={isHorizontal ? "w-52 flex-shrink-0" : "w-full"}>
    <div className="bg-card rounded-2xl overflow-hidden">
      <div className="h-32 bg-muted animate-pulse" />
    </div>
  </div>
);

export const CourseGrid: React.FC<CourseGridProps> = ({ selectedCategory, isLocked = false }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const { selectedLang } = useColor();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [coursesData, categoriesData] = await Promise.all([
        getCourses(selectedLang.code, selectedCategory === "popular" ? undefined : selectedCategory),
        getCategories(selectedLang.code)
      ]);
      setCourses(coursesData);
      setCategories(categoriesData);
      setLoading(false);
    };

    fetchData();
  }, [selectedCategory, selectedLang.code]);

  const handleLockedClick = () => {
    // Keep courses locked quietly with no popup, as requested by the user
  };

  const content = selectedLang.content?.ui?.index || { emptyCategory: "No courses" };

  if (loading) {
    if (selectedCategory === "popular") {
      return (
        <div className="px-4 space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i}>
              <div className="mb-3 h-6 w-1/2 rounded-md bg-muted animate-pulse" />
              <div className="flex gap-3 overflow-x-hidden">
                {[...Array(3)].map((_, j) => (
                  <CourseCardSkeleton key={j} isHorizontal />
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="px-4 py-4">
          <div className="grid grid-cols-2 gap-3 max-w-6xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <CourseCardSkeleton key={i} />
            ))}
          </div>
        </div>
      );
    }
  }

  const renderGridContent = () => {
    if (selectedCategory === "popular") {
      const groupedCourses = groupCoursesByCategory(courses);
      
      return (
        <div className="px-4 space-y-6">
          {Object.entries(groupedCourses).map(([categoryId, categoryCourses]) => {
            const category = categories.find(cat => cat.id === categoryId);
            if (!category) return null;

            return (
              <CategorySection
                key={categoryId}
                category={category}
                courses={categoryCourses}
                selectedCategory={selectedCategory}
                isLocked={isLocked}
                onLockedClick={handleLockedClick}
              />
            );
          })}
        </div>
      );
    } else {
      if (courses.length === 0) {
        return (
          <div className="px-4 py-8 text-center">
            <p className="text-muted-foreground">{content.emptyCategory}</p>
          </div>
        );
      }

      return (
        <div className="px-4 py-4">
          <div className="grid grid-cols-2 gap-3 max-w-6xl mx-auto">
            {courses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                selectedCategory={selectedCategory}
                isLocked={isLocked}
                onLockedClick={handleLockedClick}
              />
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {renderGridContent()}
    </>
  );
};

const groupCoursesByCategory = (allCourses: Course[]): { [key: string]: Course[] } => {
  const grouped: { [key: string]: Course[] } = {};
  
  allCourses.forEach(course => {
    if (course.category_id) {
      if (!grouped[course.category_id]) {
        grouped[course.category_id] = [];
      }
      grouped[course.category_id].push(course);
    }
  });
  
  return grouped;
};

interface CategorySectionProps {
  category: any;
  courses: Course[];
  selectedCategory: string;
  isLocked?: boolean;
  onLockedClick?: () => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, courses, selectedCategory, isLocked, onLockedClick }) => {
  return (
    <div>
      <div className="mb-3">
        <h2 className="text-lg font-semibold text-foreground">{category.name}</h2>
      </div>
      
      <div
        className="flex gap-3 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {courses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            isHorizontal
            selectedCategory={selectedCategory}
            isLocked={isLocked}
            onLockedClick={onLockedClick}
          />
        ))}
      </div>
    </div>
  );
};
