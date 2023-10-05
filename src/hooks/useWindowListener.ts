// useWindowListener.ts

import { useEffect } from "react";

interface WindowListenerProps {
  eventType: keyof WindowEventMap;
  action: (event: Event) => void;
  enabled?: boolean;
}

const useWindowListener = ({
  eventType,
  action,
  enabled = true,
}: WindowListenerProps) => {
  useEffect(() => {
    if (enabled) {
      window.addEventListener(eventType, action);
    }

    return () => {
      window.removeEventListener(eventType, action);
    };
  }, [eventType, action, enabled]);
};

export default useWindowListener;
