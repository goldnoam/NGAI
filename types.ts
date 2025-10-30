// FIX: Import ComponentType from react to resolve namespace error.
import type { ComponentType } from 'react';

export type Language = 'en' | 'he';
export type Theme = 'light' | 'dark';

export interface AppData {
  id: number;
  name: Record<Language, string>;
  description: Record<Language, string>;
  link: string;
  // FIX: Use ComponentType directly instead of React.ComponentType.
  icon: ComponentType<{ className?: string }>;
}
