import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ClassDictionary {
  [className: string]: boolean | undefined | null;
}

export interface ClassArray extends Array<ClassValue> {}

export type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassDictionary
  | ClassArray;

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
