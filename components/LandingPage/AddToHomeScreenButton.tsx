"use client";

import { useEffect, useState } from "react";

const isAndroid = () =>
  typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);
const isIOS = () =>
  typeof navigator !== "undefined" &&
  /iPhone|iPad|iPod/i.test(navigator.userAgent);

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const AddToHomeScreenButton: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showButton, setShowButton] = useState(() => {
    return isAndroid() || isIOS();
  });
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);
  const [platform] = useState<"android" | "ios" | "other">(() => {
    if (isAndroid()) return "android";
    if (isIOS()) return "ios";
    return "other";
  });

  useEffect(() => {
    if (isAndroid()) {
      const handler = (e: Event) => {
        e.preventDefault();
        setDeferredPrompt(e as BeforeInstallPromptEvent);
        setShowButton(true);
      };

      window.addEventListener("beforeinstallprompt", handler);
      return () => window.removeEventListener("beforeinstallprompt", handler);
    }
  }, []);

  const handleAndroidInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    console.log("User choice:", choice.outcome);
    setDeferredPrompt(null);
    setShowButton(false);
  };

  const handleIOSClick = () => setShowIOSInstructions((prev) => !prev);

  if (!showButton) return null;

  return (
    <>
      {platform === "android" && (
        <button
          onClick={handleAndroidInstallClick}
          className="w-full rounded-full border border-white/15 bg-lime-400/50 px-3 py-1 font-bold shadow-lg backdrop-blur-md"
        >
          Add to Home Screen
        </button>
      )}

      {platform === "ios" && (
        <>
          <button
            onClick={handleIOSClick}
            className="w-full rounded-full border border-white/15 bg-lime-400/50 px-3 py-1 font-bold shadow-lg backdrop-blur-md"
          >
            How to Add to Home Screen
          </button>
          {showIOSInstructions && (
            <div className="flex flex-col gap-2 rounded-2xl border border-white/15 px-4 py-3 text-sm shadow-lg backdrop-blur-md">
              <p>To add this app to your home screen:</p>
              <ol className="ml-4 list-decimal">
                <li>Tap the Share icon in Safari.</li>
                <li>Tap &quot;Add to Home Screen&quot;.</li>
                <li>Confirm by tapping &quot;Add&quot;.</li>
              </ol>
            </div>
          )}
        </>
      )}

      {platform === "other" && (
        <button
          disabled
          className="w-full cursor-not-allowed rounded-full border border-white/15 bg-lime-400/50 px-3 py-1 font-bold shadow-lg backdrop-blur-md hover:bg-red-400/50"
          title="Add to Home Screen is available on mobile devices only"
        >
          Add to Home Screen (Mobile only)
        </button>
      )}
    </>
  );
};

export default AddToHomeScreenButton;
