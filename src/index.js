import{createRoot} from "react-dom/client";
import HelloUser,{NewTest,InfoStudent} from "./japp"
const root = createRoot(document.getElementById("root"));



root.render(
<>
<h2>ALL Greeting </h2>
<HelloUser name="Ram" surname=" "/>
<NewTest/>
<InfoStudent name="Pravin" Class="TE" age="21"/>
<InfoStudent name="Hari" Class="BE" age="41"/>
<InfoStudent name="Sham" Class="SE" age="19"/>
<InfoStudent name="Ganesh" Class="FE" age="18"/>
<InfoStudent name="Subham" Class="12Th" age="18"/>
</>
)