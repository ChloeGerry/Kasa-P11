import { useEffect, useState } from "react";
import { HousingType } from "./types";

export const useHousings = () => {
  const [housings, setHousings] = useState<HousingType[] | null>([]);
  const getHousings = async (): Promise<void> => {
    try {
      const result = await fetch("/housings.json");
      const currentHousings = await result.json();

      if (!currentHousings) {
        setHousings(null);
      }

      setHousings(currentHousings);
    } catch (error) {
      console.log("Error when fetching housings", error);
    }
  };

  useEffect(() => {
    getHousings();
  }, []);

  return housings;
};
