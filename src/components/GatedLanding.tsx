import React, { useEffect, useState } from 'react';
import Home from '../pages/Home';

export function GatedLanding({ children }: { children: React.ReactNode }) {
  const [isIframe, setIsIframe] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      setIsIframe(window.self !== window.top);
    } catch (e) {
      setIsIframe(true);
    }
  }, []);

  if (isIframe === null) return null;

  if (!isIframe) {
    return <Home />;
  }

  return <>{children}</>;
}


