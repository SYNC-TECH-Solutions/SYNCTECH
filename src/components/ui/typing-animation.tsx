
'use client';

import { useState, useEffect, useCallback } from 'react';
import { cn } from "@/lib/utils";

type Transition = {
    text: string;
    element?: React.ReactNode;
};

interface TypingAnimationProps {
    transitions: Transition[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

export function TypingAnimation({ 
    transitions, 
    typingSpeed = 100, 
    deletingSpeed = 50, 
    pauseDuration = 2000 
}: TypingAnimationProps) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [currentElement, setCurrentElement] = useState<React.ReactNode | null>(null);

    const loop = useCallback(() => {
        const currentTransition = transitions[index];
        
        if (isDeleting) {
            if (subIndex > 0) {
                setText(currentTransition.text.substring(0, subIndex - 1));
                setSubIndex(subIndex - 1);
            } else {
                setIsDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % transitions.length);
                setCurrentElement(null);
            }
        } else {
            if (subIndex < currentTransition.text.length) {
                setText(currentTransition.text.substring(0, subIndex + 1));
                setSubIndex(subIndex + 1);
            } else {
                setCurrentElement(currentTransition.element || null);
                setTimeout(() => setIsDeleting(true), pauseDuration);
            }
        }
    }, [subIndex, isDeleting, index, transitions, pauseDuration]);

    useEffect(() => {
        const timeout = setTimeout(loop, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timeout);
    }, [text, loop, isDeleting, deletingSpeed, typingSpeed]);

    return (
        <div className="text-center">
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground transition-all duration-300"
            >
                {text}
                <span className={cn("ml-2 inline-block h-8 w-1 bg-primary animate-pulse", text === transitions[index].text && 'hidden')}></span>
            </h2>
            <div className="mt-6 transition-opacity duration-500 h-12">
                 {currentElement}
            </div>
        </div>
    );
}
