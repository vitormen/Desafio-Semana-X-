import { useState } from "react";

interface FormData {
  email: string;
  password: string;
  name: string;
  birth: string;
  job: string;
  country: string;
  city: string;
  selectField: string;
  relationship: string;
}

export const useSaveData = (url: string) => {
  const [data, setData] = useState<FormData>({
    email: "",
    password: "",
    name: "",
    birth: "",
    job: "",
    country: "",
    city: "",
    selectField: "",
    relationship: "",
  });

  const saveData = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (err: any) {}
  };

  return { data, setData, saveData };
};
