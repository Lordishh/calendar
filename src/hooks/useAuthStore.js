import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";



export const useAuthStore = () => {

  const { status, user, errorMessages } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const startLogin = async({ email, password }) => {
    console.log({ email, password });

    try {
      const resp = await calendarApi.post('/auth',{ email, password })
      console.log({ resp });

    } catch (error) {
      console.log({ error });
    }

  }

  return {
    // Propiedades
    errorMessages,
    status,
    user,

    // Métodos
    startLogin,

  }

}