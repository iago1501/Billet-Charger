import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import {format} from "date-fns"
import isAfter  from 'date-fns/isAfter';
import { csvToJSON } from "../utils";

interface DebtsContextData  {
  debts: Array<Debt>
  getIndebtedList: (debtList:Debt[]) => Array<Debt>
}

interface DebtsProviderProps {
  children: ReactNode;
}

export interface Debt {
  debtId: number;
  name: string;
  value: number;
  debtAmount: string;
  debtDueDate: string;
  formattedDebtAmount: number;
  formattedDebtDueDate: string;
  // type: 'income' | 'outcome';
  email: string;
  governmentId: number
}


export const DebtsContext = createContext<DebtsContextData>({} as DebtsContextData);

export function DebtsProvider ({children}: DebtsProviderProps) {
  const [formattedDebts, setFormattedDebts] = useState<Debt[]>([]); 

  function getIndebtedList(debtList: Debt[]):Debt[] {    
    const today = new Date(Date.now())
    return debtList.filter( debt => isAfter(today, new Date(debt.formattedDebtDueDate)))
  }  


  useEffect(() => {
    
    async function loadDebts(): Promise<any> {     

      const { data: {debt} } = await api.get('debts');      

      let csv = debt.data as string
  
      let debts = csvToJSON({csv})
  
      if(debts?.length > 0){        
        setFormattedDebts(debts.map( debt =>
          ({
            ...debt,
            formattedDebtAmount: Number(debt.debtAmount),
            formattedDebtDueDate: format(new Date(debt.debtDueDate), "dd/MM/yyyy")
            // fix isoformat
          })
        ))        
      }
    }

    
    loadDebts()
  }, []);

  return (
    <DebtsContext.Provider value={{debts: formattedDebts, getIndebtedList}}>
      {children}
    </DebtsContext.Provider>
  )
}

export function useDebts(){
  const context = useContext(DebtsContext)
  return context
}