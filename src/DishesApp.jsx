import { AppRouter } from "./router/AppRouter"
import { useCookies } from 'react-cookie';
import { CookieConsent } from "./dishes/pages/CookieConsent";


export const DishesApp = () => {
  const [cookies] = useCookies(["cookieConsent"]);

  return (
    <>
      <AppRouter/>
      {!cookies.cookieConsent && <CookieConsent/>}
    </>
  )
}



