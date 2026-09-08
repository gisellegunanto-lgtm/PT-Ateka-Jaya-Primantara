"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface InquiryItem {
  slug: string;
  name: string;
  sku: string;
  variantLabel: string;
  qty: number;
}

interface InquiryCtx {
  items: InquiryItem[];
  add: (item: Omit<InquiryItem, "qty">, qty?: number) => void;
  remove: (sku: string) => void;
  setQty: (sku: string, qty: number) => void;
  clear: () => void;
  has: (sku: string) => boolean;
  count: number;
}

const Ctx = createContext<InquiryCtx | null>(null);
const KEY = "ajp-inquiry";

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<InquiryItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, ready]);

  const add = useCallback<InquiryCtx["add"]>((item, qty = 1) => {
    setItems((prev) =>
      prev.some((i) => i.sku === item.sku)
        ? prev.filter((i) => i.sku !== item.sku) // toggle off if already there
        : [...prev, { ...item, qty }],
    );
  }, []);

  const remove = useCallback<InquiryCtx["remove"]>((sku) => {
    setItems((prev) => prev.filter((i) => i.sku !== sku));
  }, []);

  const setQty = useCallback<InquiryCtx["setQty"]>((sku, qty) => {
    setItems((prev) =>
      prev.map((i) => (i.sku === sku ? { ...i, qty: Math.max(1, qty) } : i)),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<InquiryCtx>(
    () => ({
      items,
      add,
      remove,
      setQty,
      clear,
      has: (sku) => items.some((i) => i.sku === sku),
      count: items.length,
    }),
    [items, add, remove, setQty, clear],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useInquiry() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useInquiry must be used within <InquiryProvider>");
  return ctx;
}
