import './styles.css'

import { useForm } from 'react-hook-form';

const ContainerPanel = () => {


    return (
        <>
            <div className="containPanel">

                <h1 className='title-panel'>Panel</h1>
         
                <form>
                    <input type="text" name="url-origin" id="url-origin" placeholder='https://domain.xxx' className='input-url'/>
                    <br />
                    <input type="submit" value="Generate" className='btn-submit' /> 
                </form>

                <section className='info-container'>
                    contenidos
                </section>

            </div>
        </>
    );

}

export default ContainerPanel