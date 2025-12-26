
import { useState, useRef, useCallback, useEffect } from 'react';
import { Lap } from '../types';

export const useStopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<Lap[]>([]);
  
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const accumulatedTimeRef = useRef<number>(0);

  const start = useCallback(() => {
    if (isRunning) return;
    
    setIsRunning(true);
    startTimeRef.current = Date.now();
    
    const update = () => {
      const now = Date.now();
      const delta = now - startTimeRef.current;
      setTime(accumulatedTimeRef.current + delta);
      timerRef.current = requestAnimationFrame(update);
    };
    
    timerRef.current = requestAnimationFrame(update);
  }, [isRunning]);

  const pause = useCallback(() => {
    if (!isRunning) return;
    
    setIsRunning(false);
    if (timerRef.current) {
      cancelAnimationFrame(timerRef.current);
    }
    accumulatedTimeRef.current = time;
  }, [isRunning, time]);

  const reset = useCallback(() => {
    setIsRunning(false);
    if (timerRef.current) {
      cancelAnimationFrame(timerRef.current);
    }
    setTime(0);
    setLaps([]);
    accumulatedTimeRef.current = 0;
    startTimeRef.current = 0;
  }, []);

  const addLap = useCallback(() => {
    const lastLapTime = laps.length > 0 ? laps[0].overallTime : 0;
    const newLap: Lap = {
      id: laps.length + 1,
      time: time - lastLapTime,
      overallTime: time,
    };
    setLaps((prev) => [newLap, ...prev]);
  }, [laps, time]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, []);

  return { time, isRunning, laps, start, pause, reset, addLap };
};
