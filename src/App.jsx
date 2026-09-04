import { LocalizationProvider } from "@mui/x-date-pickers"
import JuegosContainer from "./containers/juegosContainer"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <JuegosContainer />
      </>
    </LocalizationProvider>
  )
}

export default App
