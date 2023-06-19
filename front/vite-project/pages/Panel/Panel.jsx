import { useForm } from 'react-hook-form'
import { login } from '../../misc/templates'
import { useMutation, useQueryClient } from "react-query";
import { short } from "../../services";
import { useState, useEffect } from "react";
import Section from "./styled";
//import {useUser  } from "../../src/hooks/useShortUrl";
const Panel = () => {
  const { register, formState, handleSubmit, reset } = useForm()
 // const doUseUser = useUser()
  
  const { mutate } = useMutation({
    mutationFn: short.url,
    onSuccess: (response) => {
      console.info('>mutation response:', response)
      console.log(url)
      if (response.data && response.data.shortUrl) {

        setShortUrls((prevShortUrls) => [
          ...prevShortUrls,
          {
            shortUrl: response.data.shortUrl,
            uses: response.data.urls.uses,
            usesByCreator: response.data.urls.uses_by_creator,
          },
        ]);
      }
    }
  })
  



  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])


  const [shortUrls, setShortUrls] = useState([]);
  const handleForm = (data) => {
   // doUseUser(data)
    console.info(data)
    mutate(data)
  };

  const { errors } = login;
  return (
    <Section>
      <h1>Panel Page</h1>
      
      <p>(Protected routes)</p>
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
           <br/>
           Uses by Creator: {url.usesByCreator !== undefined ? url.usesByCreator : 0}
         </li>
        ))}
      </ul>
    </Section>

  )
} //me e quedado en esta parte que tengo que arreglar con el fichero short de services e index y mirar por que no me lleva a pa ruta cuando estoy registrado 

export default Panel;