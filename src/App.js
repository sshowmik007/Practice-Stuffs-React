

import AxiosQuote from "./components/axios/AxiosQuotes";
import Quote from "./components/fetch/Quote";
import SwrQuote from './components/swr/SwrQuotes';

function App() {
  return (
    <>
      <div>
       
       < Quote />
       <AxiosQuote/>
       <SwrQuote/>
      </div>
    </>
  );
}

export default App;
