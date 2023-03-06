import { Fragment } from "react";
import { PageContainer } from "layouts";
import { Suspense } from "react";
import { AppRouting } from "routes";
import { Loading } from "components";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import { cartAction } from "store";

function App() {
  const dispatch = useDispatch()
  dispatch(cartAction.priceCalculation())
  return (
    <Fragment>
      <Suspense fallback = {<Loading/>}>
        <AppRouting/>
      </Suspense>
    </Fragment>
  )
}

export default App;
