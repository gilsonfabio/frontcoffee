"use client"
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import api from '../../../components/Services/api';

export default function NewLinha(){
    const [desLinha, setDesLinha] = useState('');
    const [grpLinha, setGrpLinha] = useState('');
    const [grupos, setGrupos] = useState([]);

    const router = useRouter();

    useEffect(() => {                                
        api.get("/grupos").then(res => {
          setGrupos(res.data)           
        }).catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });  
    }, [])

    async function handleInsert(e:any){      
        e.preventDefault();
        api({
          method: 'post',    
          url: `/newlinha`,
          data: {
            lnhDescricao: desLinha,
            lnhGrpId: grpLinha
          },
        }).then(function(response) {
            alert('Cadastro efetuado com sucesso!')
            router.push(`/Linhas`)
        }).catch(function(error) {
          alert('Erro no cadastro!')
          router.push(`/Linhas`)
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
                            Formulário Cadastro de Linha 
                          </h4>
                        </div>
                        <form>                       
                          <div className='mb-4'>
                            <input
                              type='text'
                              className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                              placeholder='Informe descricao do grupo'
                              name='descricao'
                              value={desLinha} 
                              onChange={(e) => {setDesLinha(e.target.value)}} 
                            />
                          </div>                              
                          <div className='mb-4'> 
                            <select className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" 
                                value={grpLinha}
                                onChange={(e) => {setGrpLinha(e.target.value)}} 
                                >
                                <option selected>Selecione o Grupo desejado</option>
                                {grupos.map((row:any) => (
                                    <option key={row.grpId} value={row.grpId}>{row.grpDescricao}</option>
                                ))}                          
                            </select>             
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