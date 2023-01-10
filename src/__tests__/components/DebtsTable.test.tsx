import { screen, render } from '@testing-library/react';
import {DebtsTable} from '../../components/DebtsTable'
export type { Debt } from '../../hooks/DebtsContext'

describe('Debts Context test', () => {

  let mockedDebts = [
    {
      name: "Indebted User",
      governmentId: 11111111111,
      email: "johndoe@kanastra.com.br",
      value: 1000000,
      debtDueDate: "2022-10-12", 
      formattedDebtDueDate: "12/10/2022",
      formattedDebtAmount: 1000000,
      debtAmount: "1000000",
      debtId: 8292
    },
    {
      name: "Indebted User 2",
      governmentId: 22222222222,
      email: "johndoe2@kanastra.com.br",
      value: 2000000,
      debtDueDate: "2022-10-12", 
      formattedDebtDueDate: "12/10/2022",
      formattedDebtAmount: 1000000,
      debtAmount: "1000000",
      debtId: 8293
    },
    {
      name: "Not Indebted User",
      governmentId: 33333333333,
      email: "johndoe3@kanastra.com.br",
      value: 3000000,
      debtDueDate: "2022-10-12", 
      formattedDebtDueDate: "12/10/2024",
      formattedDebtAmount: 1000000,
      debtAmount: "1000000",
      debtId: 8294
    }
  ] 

  const setup = () => render(<DebtsTable debts={mockedDebts}/>)

  it('should be able to generate table with debts', () => {   
    setup()            
    expect(screen.getByText("Indebted User")).toBeInTheDocument()

  });

  it('should be able to add a after class in <td> date when debt date is after today', () => {               
    setup()
    expect(screen.getAllByText("12/10/2024")[0]).toHaveClass("after")
  });

  it('should be able to add a before class in <td> date when debt date is before today', () => {               
    setup()
    expect(screen.getAllByText("12/10/2022")[0]).toHaveClass("before")
  });


})
