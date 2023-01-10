
import { useMemo } from "react"
import { useDebts } from "../../hooks/DebtsContext"
import { CardSection, Card } from "./styles"


export default function CardContainer () {

  let {debts, getIndebtedList} = useDebts()
  
  let indebteds = useMemo(() => getIndebtedList(debts), [debts, getIndebtedList])

  let debtAmount = indebteds.reduce( (acc, indebt) => acc + indebt.formattedDebtAmount, 0)

  return (
        <CardSection>
          <>
          </>
          <Card>
            <header>
              <p>Devendo</p>              
            </header>      
            <h1>
              {indebteds.length}
            </h1>      
          </Card>
          <Card>
            <header>
              <p>Não devendo</p>              
            </header>
            <h1>
              {debts.length - indebteds.length}
            </h1>
          </Card>
          <Card total>
            <header>
              <p>Total dívidas</p>              
            </header>
            <h1>{debtAmount}</h1>
          </Card>
        </CardSection>

  )
}