import React from 'react'
import { useCookies } from 'react-cookie';
import { addDays, addMinutes } from 'date-fns';

export const CookieConsent = () => {
    const [cookies, setCookie] = useCookies(["cookieConsent"]);
    
    const giveCookieConsentAll = () => {
      // Indicando path: "/" esta cookie puede ser accesible desde todas las páginas
      setCookie("cookieConsent", true, {expires: addDays(new Date(),30)}, { path: "/" });
    };

    const giveCookieConsentNecesary = () => {
      // setCookie("cookieConsent", true, {expires: addDays(new Date(),30)}, {path: "http://mirestaurant.com"});
      // Para las pruebas, le pongo una duración de 1 minuto
      setCookie("cookieConsent", true, {expires: addMinutes(new Date(),1)}, {path: "http://mirestaurant.com"});
    }
  
    return (
        <div className="cookies animate__animated animate__backInUp">
    <h4 className="cookies__titulo">¿Aceptas nuestras Cookies?</h4> 
    <p className="cookies__texto">                Utilizamos cookies propias y de terceros con finalidades analíticas y para mostrarte publicidad relacionada con tus 
                preferencias y basada en tus hábitos de navegación y tu perfil. Puedes pulsar "Sólo las necesarias”
                si sólo quieres que usemos las cookies imprescindibles o "Todas" si quieres que todos puedan seguir tus pasos en internet. 
                Para más información, <a href={"https://www.tokioschool.com/politica-de-cookies/"} target="_blank">pulsa en Política de cookies aqui</a> o en el pie de página.
    </p>
    <div className="cookies__botones">
        <button className="btn btn-secondary cookies__boton" onClick={giveCookieConsentNecesary}>Sólo las necesarias</button>
        <button className="btn btn-secondary cookies__boton" onClick={giveCookieConsentAll}>Todas</button>
    </div>
    </div>
    );
}
