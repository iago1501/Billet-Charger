import type {Debt} from '../../hooks/DebtsContext'
import { TableContainer } from './styles';
import { isAfter } from 'date-fns';

type DebtsTableProps = {
  debts: Debt[]
}


export function DebtsTable({debts}: DebtsTableProps) {
  
  const today = new Date(Date.now())

  return (
    <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>E-mail</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {debts?.map(
                function ({ debtId, name, formattedDebtDueDate, formattedDebtAmount, email }) { 
                
                let isAfterDueDate = isAfter(today, new Date(formattedDebtDueDate))
                   
                return (
                  <tr title={isAfterDueDate? 'Boleto Vencido': 'Dentro do prazo'} key={debtId}
                  >
                    <td className="title">{name}</td>                    
                    <td>                      
                      {formattedDebtAmount}
                    </td>
                    <td>{email}</td>                    
                    <td className={isAfterDueDate? 'before': 'after'}>{formattedDebtDueDate}</td>
                  </tr>
                )}
              )}
            </tbody>
          </table>
        </TableContainer>
  )
}

export default DebtsTable