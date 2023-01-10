import { useEffect } from 'react';
import CardContainer from '../../components/CardContainer';
import DebtsTable from '../../components/DebtsTable';


import Header from '../../components/Header';
import { useDebts } from '../../hooks/DebtsContext';
import { billetCharger } from '../../services/billet/billetCharger';

import { Container } from './styles';

const Dashboard: React.FC = () => {  

  const {debts, getIndebtedList} = useDebts()

  useEffect(() => {   
    let indebtedList = getIndebtedList(debts)    
      billetCharger(indebtedList)      
  }, [getIndebtedList, debts])  

  return (
    <>
      <Header />
      <Container>     
        <CardContainer />   
        <DebtsTable debts={debts}/>        
      </Container>
    </>
  );
};

export default Dashboard;