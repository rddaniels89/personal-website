'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';

interface TrailPoint {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

interface SlashEffect {
  id: number;
  x: number;
  y: number;
  angle: number;
}

interface RippleEffect {
  id: number;
  x: number;
  y: number;
}

interface CursorState {
  isHovering: boolean;
  isClicking: boolean;
  isText: boolean;
}

export default function CustomCursor() {
  const { theme } = useTheme();
  const [cursorState, setCursorState] = useState<CursorState>({
    isHovering: false,
    isClicking: false,
    isText: false
  });
  const [isVisible, setIsVisible] = useState(false);
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>([]);
  const [slashEffects, setSlashEffects] = useState<SlashEffect[]>([]);
  const [rippleEffects, setRippleEffects] = useState<RippleEffect[]>([]);
  const [lastTrailTime, setLastTrailTime] = useState(0);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Different spring configs for different themes
  const springConfig = theme === 'dystopian' 
    ? { damping: 25, stiffness: 300 }
    : { damping: 35, stiffness: 280 }; // More controlled for executive theme
    
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Create trail points for hover effect (dystopian only)
  const createTrailPoint = useCallback((x: number, y: number) => {
    if (theme !== 'dystopian') return;
    
    const newPoint: TrailPoint = {
      id: Date.now() + Math.random(),
      x: x - 12, // Offset to center closer to cursor
      y: y - 12, // Offset to center closer to cursor
      timestamp: Date.now()
    };
    
    setTrailPoints(prev => [...prev, newPoint]);
    
    setTimeout(() => {
      setTrailPoints(prev => prev.filter(p => p.id !== newPoint.id));
    }, 600); // Reduced duration for tighter trail
  }, [theme]);

  // Create slash effect on click (dystopian only)
  const createSlashEffect = useCallback((x: number, y: number) => {
    if (theme !== 'dystopian') return;
    
    const angle = Math.random() * 360;
    const newSlash: SlashEffect = {
      id: Date.now() + Math.random(),
      x,
      y,
      angle
    };
    
    setSlashEffects(prev => [...prev, newSlash]);
    
    setTimeout(() => {
      setSlashEffects(prev => prev.filter(s => s.id !== newSlash.id));
    }, 300);
  }, [theme]);

  // Create ripple effect on click (modern theme only)
  const createRippleEffect = useCallback((x: number, y: number) => {
    if (theme !== 'modern') return;
    
    const newRipple: RippleEffect = {
      id: Date.now() + Math.random(),
      x,
      y
    };
    
    setRippleEffects(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRippleEffects(prev => prev.filter(r => r.id !== newRipple.id));
    }, 400);
  }, [theme]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
      
      // Create trail points when hovering (dystopian only) - throttled
      if (cursorState.isHovering && theme === 'dystopian') {
        const now = Date.now();
        if (now - lastTrailTime > 50) { // Only create trail every 50ms
          createTrailPoint(e.clientX, e.clientY);
          setLastTrailTime(now);
        }
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = (e: MouseEvent) => {
      setCursorState(prev => ({ ...prev, isClicking: true }));
      
      if (theme === 'dystopian') {
        createSlashEffect(e.clientX, e.clientY);
      } else if (theme === 'modern') {
        createRippleEffect(e.clientX, e.clientY);
      }
    };

    const handleMouseUp = () => {
      setCursorState(prev => ({ ...prev, isClicking: false }));
    };

    // Enhanced hover detection
    const setupHoverListeners = () => {
      const hoverElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-hover, [data-cursor="hover"]'
      );

      const textElements = document.querySelectorAll(
        'p, span, h1, h2, h3, h4, h5, h6, .cursor-text, [data-cursor="text"]'
      );

      hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          setCursorState(prev => ({ ...prev, isHovering: true }));
        });
        element.addEventListener('mouseleave', () => {
          setCursorState(prev => ({ ...prev, isHovering: false }));
        });
      });

      textElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          setCursorState(prev => ({ ...prev, isText: true }));
        });
        element.addEventListener('mouseleave', () => {
          setCursorState(prev => ({ ...prev, isText: false }));
        });
      });
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    setupHoverListeners();

    // Re-setup on DOM changes
    const observer = new MutationObserver(() => {
      setTimeout(setupHoverListeners, 100);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [mouseX, mouseY, createTrailPoint, createSlashEffect, createRippleEffect, cursorState.isHovering, theme, lastTrailTime]);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.innerHTML = '* { cursor: none !important; }';
    document.head.appendChild(style);
    
    return () => {
      document.body.style.cursor = 'auto';
      document.head.removeChild(style);
    };
  }, []);

  if (!isVisible) return null;

  // Theme-specific styling functions
  const getCursorColor = () => {
    if (theme === 'dystopian') {
      if (cursorState.isHovering) return '#1afe49'; // neon green for hover
      if (cursorState.isText) return '#ff006e'; // neon pink for text
      return '#3d43b4'; // neon blue default
    } else if (theme === 'modern') {
      if (cursorState.isHovering) return '#374151'; // dark gray for hover
      if (cursorState.isText) return '#083e12'; // dark green for text
      return '#6b7280'; // medium gray default
    } else {
      // Light theme fallback
      if (cursorState.isHovering) return '#3b82f6'; // blue
      if (cursorState.isText) return '#8b5cf6'; // violet
      return '#374151'; // gray
    }
  };

  const getCursorSize = () => {
    if (cursorState.isClicking) return theme === 'dystopian' ? 0.8 : 0.95;
    if (cursorState.isHovering) return theme === 'dystopian' ? 1.3 : 1.1;
    if (cursorState.isText) return theme === 'dystopian' ? 1.1 : 1.0;
    return 1;
  };

  // Render different cursor styles based on theme
  const renderDystopianCursor = () => (
    <>
      {/* Trail Points (Green Glow on Hover) */}
      <AnimatePresence>
        {trailPoints.map((point) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0.8, scale: 0.8 }}
            animate={{ opacity: 0, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed pointer-events-none rounded-full"
            style={{
              left: point.x,
              top: point.y,
              width: 6,
              height: 6,
              backgroundColor: '#1afe49',
              boxShadow: '0 0 12px #1afe49',
              zIndex: 9997,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Slash Effects */}
      <AnimatePresence>
        {slashEffects.map((slash) => (
          <motion.div
            key={slash.id}
            initial={{ opacity: 1, scaleX: 0, scaleY: 1 }}
            animate={{ opacity: 0, scaleX: 1, scaleY: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed pointer-events-none"
            style={{
              left: slash.x - 25,
              top: slash.y - 2,
              width: 50,
              height: 4,
              backgroundColor: '#ffffff',
              borderRadius: '2px',
              transform: `rotate(${slash.angle}deg)`,
              boxShadow: '0 0 10px #ffffff',
              zIndex: 9998,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Blade Cursor */}
      <motion.div
        animate={{
          scale: getCursorSize(),
          rotate: cursorState.isClicking ? 45 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 400,
        }}
        className="relative"
      >
        {/* Main Blade Body */}
        <div
          className="relative"
          style={{
            width: 0,
            height: 0,
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderBottom: `24px solid ${getCursorColor()}`,
            transform: 'rotate(45deg)',
            filter: `drop-shadow(0 0 8px ${getCursorColor()})`,
          }}
        />
        
        {/* Glowing Edge Effect */}
        <motion.div
          animate={{
            opacity: cursorState.isHovering ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
          style={{
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderBottom: `28px solid ${getCursorColor()}`,
            transform: 'rotate(45deg)',
            filter: 'blur(4px)',
            opacity: 0.3,
          }}
        />
        
        {/* Core Highlight */}
        <div
          className="absolute"
          style={{
            top: '8px',
            left: '50%',
            transform: 'translateX(-50%) rotate(45deg)',
            width: 0,
            height: 0,
            borderLeft: '2px solid transparent',
            borderRight: '2px solid transparent',
            borderBottom: '8px solid rgba(255, 255, 255, 0.6)',
          }}
        />
      </motion.div>

      {/* Outer Glow Ring */}
      <motion.div
        animate={{
          scale: getCursorSize() + 0.5,
          opacity: cursorState.isHovering ? 0.3 : 0.1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 300,
        }}
        className="absolute rounded-full blur-lg"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 40,
          height: 40,
          backgroundColor: getCursorColor(),
        }}
      />
    </>
  );

  const renderExecutiveCursor = () => (
    <>
      {/* Green Dot Ripple Effects */}
      <AnimatePresence>
        {rippleEffects.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ opacity: 0.8, scale: 0 }}
            animate={{ opacity: 0, scale: 3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed pointer-events-none rounded-full"
            style={{
              left: ripple.x - 4,
              top: ripple.y - 4,
              width: 8,
              height: 8,
              backgroundColor: '#083e12',
              zIndex: 9998,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Executive Pointer Cursor */}
      <motion.div
        animate={{
          scale: getCursorSize(),
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 350,
        }}
        className="relative"
      >
        {/* Text I-beam with green underline */}
        {cursorState.isText ? (
          <div className="relative">
            {/* I-beam */}
            <div
              style={{
                width: '2px',
                height: '20px',
                backgroundColor: getCursorColor(),
                position: 'relative',
              }}
            />
            {/* Green underline */}
            <div
              style={{
                position: 'absolute',
                bottom: '-2px',
                left: '-4px',
                width: '10px',
                height: '2px',
                backgroundColor: '#083e12',
              }}
            />
          </div>
        ) : cursorState.isHovering ? (
          /* Ledger Pen */
          <div className="relative">
            {/* Pen body */}
            <div
              style={{
                width: '3px',
                height: '18px',
                backgroundColor: getCursorColor(),
                borderRadius: '1.5px 1.5px 0 0',
                transform: 'rotate(-30deg)',
                transformOrigin: 'bottom center',
              }}
            />
            {/* Pen tip */}
            <div
              style={{
                position: 'absolute',
                bottom: '-1px',
                left: '50%',
                transform: 'translateX(-50%) rotate(-30deg)',
                width: 0,
                height: 0,
                borderLeft: '2px solid transparent',
                borderRight: '2px solid transparent',
                borderTop: '4px solid #374151',
              }}
            />
          </div>
        ) : (
          /* Default Pointer with Grid Pattern */
          <div className="relative">
            {/* Main pointer arrow */}
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderBottom: '16px solid ' + getCursorColor(),
                transform: 'rotate(-45deg)',
              }}
            />
            
            {/* Grid pattern overlay */}
            <div
              className="absolute"
              style={{
                top: '2px',
                left: '2px',
                width: '8px',
                height: '8px',
                transform: 'rotate(-45deg)',
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
                `,
                backgroundSize: '3px 3px',
              }}
            />
          </div>
        )}
      </motion.div>
    </>
  );

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      className="transform -translate-x-1/2 -translate-y-1/2"
    >
      {theme === 'dystopian' ? renderDystopianCursor() : renderExecutiveCursor()}
    </motion.div>
  );
} 
