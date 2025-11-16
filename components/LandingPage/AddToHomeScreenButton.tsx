'use client';

import { useEffect, useState } from 'react';

const isAndroid = () => typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
const isIOS = () => typeof navigator !== 'undefined' && /iPhone|iPad|iPod/i.test(navigator.userAgent);

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const AddToHomeScreenButton: React.FC = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [showButton, setShowButton] = useState(false);
    const [showIOSInstructions, setShowIOSInstructions] = useState(false);
    const [platform, setPlatform] = useState<'android' | 'ios' | 'other'>('other');

    useEffect(() => {
        if (isAndroid()) {
            setPlatform('android');
            const handler = (e: Event) => {
                e.preventDefault();
                setDeferredPrompt(e as BeforeInstallPromptEvent);
                setShowButton(true);
            };

            window.addEventListener('beforeinstallprompt', handler);
            return () => window.removeEventListener('beforeinstallprompt', handler);
        } else if (isIOS()) {
            setPlatform('ios');
            setShowButton(true);
        } else {
            setPlatform('other');
            setShowButton(true);
        }
    }, []);

    const handleAndroidInstallClick = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        console.log('User choice:', choice.outcome);
        setDeferredPrompt(null);
        setShowButton(false);
    };

    const handleIOSClick = () => setShowIOSInstructions(prev => !prev)

    if (!showButton) return null;

    return (
        <>
            {platform === 'android' && (
                <button
                    onClick={handleAndroidInstallClick}
                    className="w-full px-3 py-1 bg-lime-400/50 font-bold backdrop-blur-md rounded-full border border-white/15 shadow-lg"
                >
                    Add to Home Screen
                </button>
            )}

            {platform === 'ios' && (
                <>
                    <button
                        onClick={handleIOSClick}
                        className="w-full px-3 py-1 bg-lime-400/50 font-bold backdrop-blur-md rounded-full border border-white/15 shadow-lg"
                    >
                        How to Add to Home Screen
                    </button>
                    {showIOSInstructions && (
                        <div className="px-4 py-3 backdrop-blur-md text-sm rounded-2xl border border-white/15 shadow-lg flex flex-col gap-2">
                            <p>To add this app to your home screen:</p>
                            <ol className="list-decimal ml-4">
                                <li>Tap the Share icon in Safari.</li>
                                <li>Tap "Add to Home Screen".</li>
                                <li>Confirm by tapping "Add".</li>
                            </ol>
                        </div>
                    )}
                </>
            )}

            {platform === 'other' && (
                <button
                    disabled
                    className="w-full px-3 py-1 bg-lime-400/50 hover:bg-red-400/50 font-bold backdrop-blur-md rounded-full border border-white/15 shadow-lg cursor-not-allowed"
                    title="Add to Home Screen is available on mobile devices only"
                >
                    Add to Home Screen (Mobile only)
                </button>
            )}
        </>
    );
};

export default AddToHomeScreenButton;
