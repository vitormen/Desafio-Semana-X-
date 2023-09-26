import { useState } from "react";

interface FormData {
  email: string;
  password: string;
  name: string;
  birth: string;
  job: string;
  country: string;
  city: string;
  selectField: string; // Adicione aqui o novo campo de seleção
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
    selectField: "", // Inicialize o novo campo de seleção aqui
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
