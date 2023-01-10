import Dashboard from './pages/Dashboard';
import GlobalStyles from './styles/global'

import { createServer, Model } from "miragejs";
import {csvFile} from './utils';
import { DebtsProvider } from './hooks/DebtsContext';

createServer({

  models: {
    debt: Model,
  },

  seeds(server){    
      server.db.loadData({
        debts: [
          {data: csvFile}
        ]
    })
  },

  routes() {
    this.namespace = "api";

    this.get("/debts", () => {
      return this.schema.first('debt')
    });    
  },
});


const App: React.FC = () => (
  <>  
    <GlobalStyles /> 
    <DebtsProvider>
      <Dashboard />
    </DebtsProvider> 
  </>
);

export default App;