import { useEffect, useState } from "react";

interface LoadingScreenProps {
    onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Hello World />";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 hero-gradient bg-noise" />
            <div className="relative glass rounded-2xl px-8 py-10 text-center">
                <div className="mb-4 text-4xl font-mono font-bold">
                    {text} <span className="animate-blink ml-1"> | </span>
                </div>
                <div className="w-[260px] h-[6px] rounded bg-[color:var(--bg-soft)]/60 overflow-hidden mx-auto">
                    <div className="w-[40%] h-full animate-loading-bar" style={{ background: 'var(--primary)' }}></div>
                </div>
                <div className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>Loading your experience...</div>
            </div>
        </div>
    );
};
