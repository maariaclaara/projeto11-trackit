import { createContext, useState} from "react";


export const LoginContext = createContext({});

export default function LoginProvider ({children}) {
  
    const [percent, setPercent] = useState(0);

    const stringData = localStorage.getItem("userDataString");
    const data = JSON.parse(stringData);
  
    function percentHabits(event) {

        const filledPages = event.filter((e) => e.done !== false);

        const percentages = filledPages.length

          ? (filledPages.length / event.length) * 100
          : 0;

        setPercent(percentages.toFixed(0));
      }

      const config = {
        headers: {
          Authorization: `Bearer ${data === null ? "" : data.token}`,
        },
      };


      return (
        <LoginContext.Provider
          value={{ data, percent, setPercent, percentHabits, config }}
        >
          {children}
        </LoginContext.Provider>
      );
}