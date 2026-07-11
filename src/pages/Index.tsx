import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CourseGrid } from "../components/course-grid";
import { BottomNavbar } from "../components/bottom-navbar";
import { TopNavbar } from "../components/top-navbar";
import { ChevronRight, Lock, Unlock, Loader2, ChevronDown } from "lucide-react";
import React from "react";
import { useColor, LANGUAGES } from "../contexts/ColorContext";
import { useClassSelection } from "../contexts/ClassContext";
import { db } from "../lib/firebase";
import { doc, getDoc, deleteDoc, updateDoc, increment } from "firebase/firestore";
import { motion, AnimatePresence } from "motion/react";
import { getCategories, Category } from "../lib/data";

const Index = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const [isPremium, setIsPremium] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  // Verification states
  const [verifyingStatus, setVerifyingStatus] = useState<'idle' | 'verifying' | 'success' | 'invalid'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const { selectedLang } = useColor();
  const { selectedClassId } = useClassSelection();
  const ui = selectedLang.content?.ui?.index || LANGUAGES[0].content?.ui?.index; // Fallback
  const catUi = selectedLang.content?.ui?.categories || LANGUAGES[0].content?.ui?.categories; // Fallback

  const getBannerTitle = (langCode: string) => {
    switch (langCode) {
      case "id":
        return "Kelas Global NexClass";
      case "es":
        return "Clases Globales NexClass";
      case "fr":
        return "Classes Globales NexClass";
      case "de":
        return "NexClass Globale Klassen";
      case "ja":
        return "NexClass グローバルクラス";
      case "zh":
        return "NexClass 全球课堂";
      case "ru":
        return "Глобальные Классы NexClass";
      case "ar":
        return "فصول NexClass العالمية";
      case "ko":
        return "NexClass 글로벌 클래스";
      case "pt":
        return "Aulas Globais NexClass";
      case "en":
      default:
        return "NexClass Global Classes";
    }
  };

  useEffect(() => {
    checkAuthAndStatus();
  }, []);

  const checkAuthAndStatus = async () => {
    setIsLoading(true);
    // Default to true for preview purposes unless explicitly set to false
    const premiumStatus = localStorage.getItem("isPremium") !== "false";
    setIsPremium(premiumStatus);
    setIsLoading(false);
  };

  useEffect(() => {
    const reservedSlugs = ['admin', 'courses', 'course', 'my-courses', 'profile'];
    
    // Check if the current URL slug is a valid token (and not a reserved subpage)
    const activeToken = (slug && !reservedSlugs.includes(slug.toLowerCase())) ? slug : null;

    if (!activeToken) return;

    const verifyToken = async () => {
      try {
        const tokenRef = doc(db, 'tokens', activeToken);
        const tokenSnap = await getDoc(tokenRef);

        if (tokenSnap.exists()) {
          const data = tokenSnap.data();
          const type = data.type || 'single';

          // Unlock premium access immediately!
          localStorage.setItem('isPremium', 'true');
          setIsPremium(true);

          // Execute single-use or multi-use count updates
          if (type === 'single') {
            try {
              await deleteDoc(tokenRef);
            } catch (delErr) {
              console.warn('Failed to delete single-use token:', delErr);
            }
          } else {
            try {
              await updateDoc(tokenRef, {
                uses: increment(1)
              });
            } catch (updErr) {
              console.warn('Failed to increment use count:', updErr);
            }
          }

          // Instantly replace URL with '/courses' silently without any popup
          navigate('/courses', { replace: true });

        } else {
          navigate('/courses', { replace: true });
        }
      } catch (err) {
        console.error('Error verifying token:', err);
        navigate('/courses', { replace: true });
      }
    };

    verifyToken();
  }, [slug, navigate]);

  if (isLoading) {
     return (
       <div className="min-h-screen bg-background">
         <div className="mx-4 mt-5 mb-6">
           <div className="w-full aspect-video rounded-2xl bg-muted animate-pulse" />
         </div>
         <div className="w-full overflow-x-hidden px-4 mb-6">
           <div className="flex space-x-2">
             {[...Array(4)].map((_, i) => (
               <div key={i} className="h-10 w-24 rounded-full bg-muted animate-pulse" />
             ))}
           </div>
         </div>
         <div className="px-4 space-y-6">
           {[...Array(2)].map((_, i) => (
             <div key={i}>
               <div className="mb-3 h-6 w-1/2 rounded-md bg-muted animate-pulse" />
               <div className="flex gap-3 overflow-x-hidden">
                 {[...Array(2)].map((_, j) => (
                   <div key={j} className="w-52 flex-shrink-0">
                     <div className="bg-card rounded-2xl overflow-hidden">
                       <div className="h-32 bg-muted animate-pulse" />
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           ))}
         </div>
       </div>
     );
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-16 pb-20 relative">
      <TopNavbar showBack backTo="/" backLabel={ui?.backToHome} />
      <main className="flex-grow">
        <div className="mx-4 mt-5 mb-6">
          <div className="relative w-full aspect-video max-h-56 overflow-hidden rounded-2xl group">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200"
              alt="Banner"
              className={`w-full h-full object-cover transition-all duration-1000 grayscale-0`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10 flex flex-col items-start">
              <span className={`text-[10px] font-black tracking-widest px-2 py-0.5 mb-1.5 drop-shadow bg-primary text-white`}>
                NEXCLASS
              </span>
              <h3 className="text-white font-extrabold text-xl leading-tight line-clamp-2 drop-shadow-md tracking-tight">
                {getBannerTitle(selectedLang.code)}
              </h3>
            </div>
            
            <AnimatePresence>
            </AnimatePresence>
          </div>
        </div>

        <CourseGrid selectedClassId={selectedClassId} isLocked={!isPremium} />
      </main>

      <BottomNavbar />

    </div>
  );
};

export default Index;
