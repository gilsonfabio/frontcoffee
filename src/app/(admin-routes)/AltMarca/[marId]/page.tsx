"use client"
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import api from '../../../../components/Services/api';

export default function AltMarca({params}: any){
    const [desMarca, setDesMarca] = useState('');

    const router = useRouter();

    useEffect(() => {                 
      const marId = params.marId;
      api({
        method: 'get',    
        url: `searchMarca/${marId}`,             
      }).then(function(response) {
        setDesMarca(response.data[0].marDescricao); 
      }).catch(function(error) {  
        alert('Erro no acesso as marcas!')                 
      })            

    }, [])

    async function handleUpdate(e:any){      
        e.preventDefault();
        const idMar = params.marId;
        api({
          method: 'put',    
          url: `/updmarca/${idMar}`,
          data: {
            grpDescricao: desMarca                       
          },
        }).then(function(response) {
            alert('Alteração efetuada com sucesso!')
            router.push(`/Marcas`)
        }).catch(function(error) {
          alert('Erro no alteração!')
          router.push(`/Marcas`)
        })
    }

	return (
        <section className='w-screen h-screen gradient-form bg-gray-200 md:h-screen'>
          <div className=''>
            <div className='flex justify-center items-center w-full h-screen text-gray-800'>
              <div className='block bg-white shadow-lg rounded-lg'>
                  <div className='lg:flex lg:flex-wrap g-0'>
                    <div className='px-4 md:px-0'>
                      <div className='md:p-12 md:mx-6'>
                        <div className='text-center'>
                          <h4 className='text-xl font-semibold mt-1 mb-12 pb-1'>
                            Formulário Alteração da Marca {params.marId} 
                          </h4>
                        </div>
                        <form>                       
                          <div className='mb-4'>
                            <input
                              type='text'
                              className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                              name='descricao'
                              value={desMarca} 
                              onChange={(e) => {setDesMarca(e.target.value)}} 
                            />
                          </div>                              
                          
                          <div className='text-center pt-1 mb-12 pb-1'>
                            <button
                              className='bg-green inline-block px-6 py-2.5 text-black hover:text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                              type='button'
                              onClick={handleUpdate}
                            >
                              Alterar
                            </button>
                          </div>                      
                        </form>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        );
}