"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation';
import api from '../../../components/Services/api';

export default function NewMarca(){
    const [desMarca, setDesMarca] = useState('');

    const router = useRouter();

    async function handleInsert(e:any){      
        e.preventDefault();
        api({
          method: 'post',    
          url: `/newmarca`,
          data: {
            marDescricao: desMarca                       
          },
        }).then(function(response) {
            alert('Cadastro efetuado com sucesso!')
            router.push(`/Marcas`)
        }).catch(function(error) {
          alert('Erro no cadastro!')
        })
    }

	return (
        <section className='h-screen gradient-form bg-gray-200 md:h-screen'>
          <div className='container py-12 px-6 h-full'>
            <div className=' flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
              <div className=''>
                <div className='block bg-white shadow-lg rounded-lg'>
                  <div className='lg:flex lg:flex-wrap g-0'>
                    <div className='px-4 md:px-0'>
                      <div className='md:p-12 md:mx-6'>
                        <div className='text-center'>
                          <h4 className='text-xl font-semibold mt-1 mb-12 pb-1'>
                            Formulário Cadastro de Marca 
                          </h4>
                        </div>
                        <form>                       
                          <div className='mb-4'>
                            <input
                              type='text'
                              className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                              placeholder='Informe descricao do grupo'
                              name='descricao'
                              value={desMarca} 
                              onChange={(e) => {setDesMarca(e.target.value)}} 
                            />
                          </div>                              
                          
                          <div className='text-center pt-1 mb-12 pb-1'>
                            <button
                              className='bg-green inline-block px-6 py-2.5 text-black hover:text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                              type='button'
                              onClick={handleInsert}
                            >
                              Cadastrar
                            </button>
                          </div>                      
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}