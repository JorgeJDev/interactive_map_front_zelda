import { UserProvider } from "./context"
import { AppRouter } from "./routers/AppRouter"



function App() {

  return (

    <>
      <UserProvider>

        <AppRouter />

      </UserProvider>
    </>

  )
}

export default App
