import { renderHook } from '@testing-library/react';
import { DebtsProvider, useDebts } from '../../hooks/DebtsContext';
import React from 'react';
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

  jest.spyOn(React, 'useEffect').mockImplementation(() => {});
  

  it('should be able to generate a list of indebteds', () => {           

    const {result} = renderHook(useDebts, {
      wrapper: DebtsProvider
    })        

    let indebtedList = result.current.getIndebtedList(mockedDebts)

    expect(indebtedList).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({name: "Not Indebted User"})
      ])
    )

  });


})
