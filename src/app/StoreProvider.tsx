"use client";
import { useRef, ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { setDefaultColors, setInitialTheme } from "../lib/slices/settingsSlice";

const StoreProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(setDefaultColors());
    storeRef.current.dispatch(setInitialTheme());
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

export default StoreProvider;