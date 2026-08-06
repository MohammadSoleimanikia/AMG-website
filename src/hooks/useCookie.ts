import { useState, useCallback } from "react";
import Cookies from "js-cookie";

type OutputType = [
  string | null,
  (newValue: string, options: Cookies.CookieAttributes | undefined) => void,
  () => void,
];

export default function useCookie(
  name: string,
  defaultValue: string,
  options?: Cookies.CookieAttributes
): OutputType {
  const [value, setValue] = useState<string | null>(() => {
    const cookie = Cookies.get(name);
    if (cookie) return cookie;

    Cookies.set(name, defaultValue, options);
    return defaultValue;
  });

  const updateCookie = useCallback(
    (newValue: string, options: Cookies.CookieAttributes | undefined) => {
      Cookies.set(name, newValue, options);
      setValue(newValue);
    },
    [name]
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name, options);
    setValue(null);
  }, [name]);

  return [value, updateCookie, deleteCookie];
}
