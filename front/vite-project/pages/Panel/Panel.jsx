import { useForm } from 'react-hook-form'
import { login } from '../../misc/templates'
import Section from "./styled";
import { useShortUrl } from "../../src/hooks/useShortUrl";
const Panel = () => {
  const { register, formState, handleSubmit, reset } = useForm()
  const { shortUrls, handleForm, userData, userLoading } = useShortUrl(formState, reset);


  const { errors } = login;
  return (
    <Section>
      <h1>Panel Page</h1>

      <p>(Protected routes)</p>
      <h4> Hello: {userData ? userData.data.username : ''}</h4>
      <form onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="url">Introduce la URL que quieres acortar:</label><br />
        <input id="url" placeholder="http://" {...register('url', { required: true })} />
        <p>{formState.errors && errors[formState.errors?.url?.type]}</p>
        <button type="submit" disabled={!formState.isValid}>
          Generate
        </button>
      </form>
      <ul>
        {shortUrls.map((url, index) => (
          <li key={index}>
            Short URL: {url.shortUrl}
            <br />
            Uses: {url.uses !== undefined ? url.uses : 0}
            <br />
            Uses by Creator: {url.usesByCreator !== undefined ? url.usesByCreator : 0}
          </li>
        ))}
      </ul>
    </Section>

  )
} //me e quedado en esta parte que tengo que arreglar con el fichero short de services e index y mirar por que no me lleva a pa ruta cuando estoy registrado 

export default Panel;