import { Home, BookOpen, User, GraduationCap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useColor } from "../contexts/ColorContext";
import { useClassSelection } from "../contexts/ClassContext";
import { getClasses, AppClass } from "../lib/data";

export const BottomNavbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const { selectedLang } = useColor();
  const labels = selectedLang.content.ui.bottomNav;
  const { selectedClassId, setSelectedClassId } = useClassSelection();
  const [showClassMenu, setShowClassMenu] = useState(false);
  const [classes, setClasses] = useState<AppClass[]>([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const classList = await getClasses(selectedLang.code);
      setClasses(classList);
    };
    fetchClasses();
  }, [selectedLang.code]);

  const isId = selectedLang.code === 'id';
  const academyLabel = isId ? 'Akademi' : 'Academy';
  const chooseLabel = isId ? 'PILIH AKADEMI' : 'CHOOSE ACADEMY';

  return (
    <>
      <div dir="ltr" className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-xl z-50 border-t border-white/5">
      {/* Container with grid for exactly equal widths */}
      <div className="grid grid-cols-4 max-w-md mx-auto py-2 px-2 relative">

        <Link
          to="/courses"
          className={`flex flex-col items-center justify-center gap-1 p-2 rounded-xl transition-all duration-300 w-full min-w-0 ${
            path === "/courses" 
              ? "text-primary scale-105" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Home className="h-5 w-5 flex-shrink-0" strokeWidth={path === "/courses" ? 2.5 : 2} />
          <span className="text-[10px] font-medium tracking-wide truncate w-full text-center">{labels.home}</span>
        </Link>
        
        <div className="relative flex flex-col items-center justify-center w-full min-w-0">
          <AnimatePresence>
            {showClassMenu && (
              <>
                {/* Invisible overlay to close menu */}
                <div 
                  className="fixed inset-0 z-[55]" 
                  onClick={() => setShowClassMenu(false)}
                />
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-[calc(100%+15px)] left-1/2 -translate-x-1/2 z-[60] bg-[#1a1b1e] w-[240px] sm:w-[280px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl p-3"
                >
                  <div className="flex justify-center mb-3 mt-1">
                    <h3 className="font-bold text-[10px] tracking-widest text-muted-foreground uppercase">{chooseLabel}</h3>
                  </div>
                  <div className="flex flex-col gap-1">
                    {classes.map((cls) => (
                      <button
                        key={cls.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedClassId(cls.id);
                          setShowClassMenu(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium transition-all ${
                          selectedClassId === cls.id 
                            ? "bg-primary text-white" 
                            : "bg-transparent text-foreground hover:bg-white/5"
                        }`}
                      >
                        <span className="text-xs font-semibold">{cls.name}</span>
                        {selectedClassId === cls.id && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
          <button
            onClick={() => setShowClassMenu(!showClassMenu)}
            className={`flex flex-col items-center justify-center gap-1 p-2 rounded-xl transition-all duration-300 w-full min-w-0 ${
              showClassMenu 
                ? "text-primary scale-105" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <GraduationCap className="h-5 w-5 flex-shrink-0" strokeWidth={showClassMenu ? 2.5 : 2} />
            <span className="text-[10px] font-medium tracking-wide truncate w-full text-center">{academyLabel}</span>
          </button>
        </div>
        
        <Link
          to="/my-courses"
          className={`flex flex-col items-center justify-center gap-1 p-2 rounded-xl transition-all duration-300 w-full min-w-0 ${
            path === "/my-courses" 
              ? "text-primary scale-105" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <BookOpen className="h-5 w-5 flex-shrink-0" strokeWidth={path === "/my-courses" ? 2.5 : 2} />
          <span className="text-[10px] font-medium tracking-wide truncate w-full text-center">{labels.myCourses}</span>
        </Link>
        <Link
          to="/profile"
          className={`flex flex-col items-center justify-center gap-1 p-2 rounded-xl transition-all duration-300 w-full min-w-0 ${
            path === "/profile" 
              ? "text-primary scale-105" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <User className="h-5 w-5 flex-shrink-0" strokeWidth={path === "/profile" ? 2.5 : 2} />
          <span className="text-[10px] font-medium tracking-wide truncate w-full text-center">{labels.account}</span>
        </Link>
      </div>
    </div>
    </>
  );
};
