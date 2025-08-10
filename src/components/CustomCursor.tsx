'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';

interface TrailPoint {
  id: number;
  x: number;
  y: number;
  timestamp: number;
  gridType?: 'horizontal' | 'vertical' | 'intersection';
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

  // Create grid points at cursor position (dystopian only)
  const createGridPoint = useCallback((x: number, y: number) => {
    if (theme !== 'dystopian') return;
    
    // Snap to 40px grid
    const gridSize = 40;
    const gridX = Math.round(x / gridSize) * gridSize;
    const gridY = Math.round(y / gridSize) * gridSize;
    
    // Clear existing grid points and create new ones at current position
    setTrailPoints([]);
    
    // Create grid elements at cursor position
    const gridElements = [
      {
        id: Date.now() + 1,
        x: gridX - 60, // Horizontal line
        y: gridY - 1,
        timestamp: Date.now(),
        gridType: 'horizontal' as const
      },
      {
        id: Date.now() + 2,
        x: gridX - 1, // Vertical line
        y: gridY - 60,
        timestamp: Date.now(),
        gridType: 'vertical' as const
      },
      {
        id: Date.now() + 3,
        x: gridX - 4, // Intersection point
        y: gridY - 4,
        timestamp: Date.now(),
        gridType: 'intersection' as const
      }
    ];
    
    setTrailPoints(gridElements);
    
    // Clear grid after short duration
    setTimeout(() => {
      setTrailPoints([]);
    }, 800);
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
    
    // Faster animation for muted ledger entry effect
    setTimeout(() => {
      setRippleEffects(prev => prev.filter(r => r.id !== newRipple.id));
    }, 250);
  }, [theme]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
      
      // Only create grid effect on click, not on hover
      // Removed trailing grid effect for minimalistic design
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = (e: MouseEvent) => {
      setCursorState(prev => ({ ...prev, isClicking: true }));
      
      if (theme === 'dystopian') {
        createGridPoint(e.clientX, e.clientY); // Show grid on click only
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
  }, [mouseX, mouseY, createGridPoint, createSlashEffect, createRippleEffect, cursorState.isHovering, theme, lastTrailTime]);

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
      if (cursorState.isHovering) return '#8B4513'; // saddle brown for hover
      if (cursorState.isText) return '#654321'; // dark brown for text
      return '#A0522D'; // sienna brown default (ledger ink color)
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
      {/* Laser Grid Trail */}
      <AnimatePresence>
        {trailPoints.map((point) => {
          const baseColor = '#00ffff'; // Cyan/tron blue
          const glowColor = '#0080ff'; // Brighter blue for glow
          
          if (point.gridType === 'horizontal') {
            return (
              <motion.div
                key={point.id}
                initial={{ 
                  opacity: 0.8, 
                  scaleX: 0,
                  scaleY: 1
                }}
                animate={{ 
                  opacity: 0, 
                  scaleX: 1,
                  scaleY: 1
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: 'easeOut',
                  scaleX: { duration: 0.3 }
                }}
                className="fixed pointer-events-none"
                style={{
                  left: point.x,
                  top: point.y,
                  width: 120,
                  height: 2,
                  backgroundColor: baseColor,
                  boxShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${baseColor}`,
                  zIndex: 9997,
                  transformOrigin: 'left center',
                }}
              />
            );
          }
          
          if (point.gridType === 'vertical') {
            return (
              <motion.div
                key={point.id}
                initial={{ 
                  opacity: 0.8, 
                  scaleX: 1,
                  scaleY: 0
                }}
                animate={{ 
                  opacity: 0, 
                  scaleX: 1,
                  scaleY: 1
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: 'easeOut',
                  scaleY: { duration: 0.3 }
                }}
                className="fixed pointer-events-none"
                style={{
                  left: point.x,
                  top: point.y,
                  width: 2,
                  height: 120,
                  backgroundColor: baseColor,
                  boxShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${baseColor}`,
                  zIndex: 9997,
                  transformOrigin: 'center top',
                }}
              />
            );
          }
          
          if (point.gridType === 'intersection') {
            return (
              <motion.div
                key={point.id}
                initial={{ 
                  opacity: 1, 
                  scale: 0
                }}
                animate={{ 
                  opacity: 0, 
                  scale: 2
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: 'easeOut'
                }}
                className="fixed pointer-events-none rounded-full"
                style={{
                  left: point.x - 4,
                  top: point.y - 4,
                  width: 8,
                  height: 8,
                  backgroundColor: '#ffffff',
                  boxShadow: `0 0 15px ${baseColor}, 0 0 25px ${glowColor}, 0 0 35px #ffffff`,
                  zIndex: 9998,
                }}
              />
            );
          }
          
          return null;
        })}
      </AnimatePresence>



      {/* Telescopic Sight Cursor */}
      <motion.div
        animate={{
          scale: getCursorSize(),
          rotate: cursorState.isClicking ? 15 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 350,
        }}
        className="relative"
      >
        {/* Minimalist Outer Circle */}
        <div
          className="absolute rounded-full border"
          style={{
            width: 24,
            height: 24,
            left: -12,
            top: -12,
            borderColor: cursorState.isHovering ? '#ff006e' : '#00ffff',
            borderWidth: '1px',
            boxShadow: cursorState.isHovering 
              ? '0 0 8px #ff006e' 
              : '0 0 6px #00ffff',
          }}
        />
        
        {/* Crosshairs - Horizontal */}
        <div
          className="absolute"
          style={{
            left: -8,
            top: -0.5,
            width: 16,
            height: 1,
            backgroundColor: cursorState.isHovering ? '#ff006e' : '#00ffff',
          }}
        />
        
        {/* Crosshairs - Vertical */}
        <div
          className="absolute"
          style={{
            left: -0.5,
            top: -8,
            width: 1,
            height: 16,
            backgroundColor: cursorState.isHovering ? '#ff006e' : '#00ffff',
          }}
        />
        
        {/* Center Dot */}
        <div
          className="absolute rounded-full"
          style={{
            width: 3,
            height: 3,
            left: -1.5,
            top: -1.5,
            backgroundColor: cursorState.isHovering ? '#ff006e' : '#00ffff',
            boxShadow: cursorState.isHovering 
              ? '0 0 6px #ff006e' 
              : '0 0 4px #00ffff',
          }}
        />
      </motion.div>
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

  const renderTraditionalCursor = () => (
    <>
      {/* Small Green Dot Ripple Effects for Ledger Entry */}
      <AnimatePresence>
        {rippleEffects.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ opacity: 0.6, scale: 0 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed pointer-events-none rounded-full"
            style={{
              left: ripple.x - 3,
              top: ripple.y - 3,
              width: 6,
              height: 6,
              backgroundColor: '#083e12',
              zIndex: 9998,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Traditional I-beam Cursor with Green Underline */}
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
        {/* Classic vertical I-beam */}
        <div className="relative">
          {/* Main I-beam vertical line */}
          <div
            style={{
              width: '2px',
              height: '20px',
              backgroundColor: getCursorColor(),
              position: 'relative',
            }}
          />
          
          {/* Top horizontal bar */}
          <div
            style={{
              position: 'absolute',
              top: '0px',
              left: '-3px',
              width: '8px',
              height: '2px',
              backgroundColor: getCursorColor(),
            }}
          />
          
          {/* Bottom horizontal bar */}
          <div
            style={{
              position: 'absolute',
              bottom: '0px',
              left: '-3px',
              width: '8px',
              height: '2px',
              backgroundColor: getCursorColor(),
            }}
          />
          
          {/* Green underline */}
          <div
            style={{
              position: 'absolute',
              bottom: '-4px',
              left: '-4px',
              width: '10px',
              height: '2px',
              backgroundColor: '#083e12',
              borderRadius: '1px',
            }}
          />
        </div>
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
      {theme === 'dystopian' ? renderDystopianCursor() : renderTraditionalCursor()}
    </motion.div>
  );
} 
