import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";

const parseValue = (value: string | null): any => {
  try {
    return JSON.parse(value || "{}");
  } catch {
    return value;
  }
};

export function useLocalStorage<T>(key: string, initialValue?: T) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);
  const [internalValue, setInternalValue] = React.useState<T | null>(
    initialValue ?? null
  );

  // Load value from storage on mount
  React.useEffect(() => {
    const loadValue = async () => {
      try {
        setError(null);
        const storedValue = await AsyncStorage.getItem(key);
        const parsedValue = parseValue(storedValue);
        setInternalValue(parsedValue);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadValue();
  }, [key]);

  // Delete value from storage
  const deleteValue = React.useCallback(() => {
    AsyncStorage.removeItem(key, (error) => {
      if (error) return setError(error);
      setInternalValue(null);
    });
  }, [key]);

  // Set value in storage
  const setValue = React.useCallback(
    (value: T) => {
      setError(null);
      AsyncStorage.setItem(key, JSON.stringify(value), (error) => {
        if (error) return setError(error);
        setInternalValue(value);
      });
    },
    [key]
  );

  return {
    error,
    setValue,
    isLoading,
    deleteValue,
    value: internalValue,
  };
}
