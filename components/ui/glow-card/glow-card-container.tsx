"use client"
// GlowCardContainer.tsx
import React, { useState, useEffect, useRef } from 'react';

// Define the types for the props and state
interface GlowCardContainerProps {
  children: React.ReactNode;
}

interface ConfigState {
  proximity: number;
  spread: number;
  blur: number;
  gap: number;
  vertical: boolean;
  opacity: number;
}

const GlowCardContainer: React.FC<GlowCardContainerProps> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [config] = useState<ConfigState>({
        proximity: 20,
        spread: 40,
        blur: 20,
        gap: 32,
        vertical: false,
        opacity: 0,
    });

    const updateCardStyles = (event: MouseEvent) => {
        // Convert children to an array and iterate over each card
        const cards = React.Children.toArray(children);
        cards.forEach((_, index) => {
            const cardElement = containerRef.current?.children[index] as HTMLElement;
            if (cardElement) {
                const cardBounds = cardElement.getBoundingClientRect();
                const isWithinProximity = (
                    event.clientX > cardBounds.left - config.proximity &&
                    event.clientX < cardBounds.right + config.proximity &&
                    event.clientY > cardBounds.top - config.proximity &&
                    event.clientY < cardBounds.bottom + config.proximity
                );

                const activeOpacity = isWithinProximity ? 1 : config.opacity;
                cardElement.style.setProperty('--active', activeOpacity.toString());

                if (isWithinProximity) {
                    const cardCenter = [
                        cardBounds.left + cardBounds.width / 2,
                        cardBounds.top + cardBounds.height / 2,
                    ];
                    const angle = Math.atan2(event.clientY - cardCenter[1], event.clientX - cardCenter[0]) * 180 / Math.PI;
                    cardElement.style.setProperty('--start', (angle < 0 ? angle + 360 : angle).toString());
                }
            }
        });
    };

    useEffect(() => {
        const handlePointerMove = (event: MouseEvent) => updateCardStyles(event);

        document.addEventListener('pointermove', handlePointerMove);
        return () => {
            document.removeEventListener('pointermove', handlePointerMove);
        };
    }, [config, children]);

    return (
        <div 
            ref={containerRef}
            className="container flex flex-wrap gap-[32px] justify-center items-center relative p-8 touch-none"
            style={{
                flexDirection: config.vertical ? 'column' : 'row',
            }}
        >
            {children}
        </div>
    );
};

export default GlowCardContainer;
