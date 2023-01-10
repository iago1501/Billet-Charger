import {} from '@testing-library/react';
import { csvToJSON } from '../../utils/index';


describe('Utils test', () => {

  let csv = `name,governmentId,email,debtAmount,debtDueDate,debtId
    John Doe,11111111111,johndoe@kanastra.com.br,1000000.00,2022-10-12,8291 
    John Doe 2,22222222222,johndoe2@kanastra.com.br,2000000.00,2022-10-12,8292 `

    let jsonObject = csvToJSON({csv})

  it('should receive a csv string and return an object', () => {    
    expect(jsonObject).toBeInstanceOf(Object);    
  });

  it('should return one of the csv values as an object', () => {        
    expect(jsonObject).toEqual(
      expect.arrayContaining([
        expect.objectContaining({debtId: "8291"})
      ])      
      )
  });


})
