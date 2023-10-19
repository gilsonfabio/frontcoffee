"use client"
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import api from '../../../components/Services/api';

type marProps = {
    idMarca: string;
    marDescricao: string
}

export default function Marcas(){
    const [marcas, setMarcas] = useState<Array<marProps>>([]);
    const router = useRouter();

    function handleSubmit(item: marProps) {
        const marId = item.idMarca;

        console.log(marId);

        router.push(`/AltMarca/${marId}`)
    }
    
    useEffect(() => {   
              
        api.get("/marcas").then(res => {
            setMarcas(res.data)           
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });          

    }, [])

	return ( 
		<div className="w-full h-full px-20">
			<div className="w-full h-screen flex flex-col">
				<h1 className="text-2xl mb-2">Marcas</h1>
				<div className="grid grid-cols-1 gap-1 md:grid-cols-5 md:gap-4 ml-1 px-0 py-0">            
                    {marcas?.map((item:marProps, idx) => {
                        return <button key={idx} onClick={() => handleSubmit(item)}>  
                    		<div className='flex items-center justify-center w-full bg-gray-600 mt-1 mb-3 rounded overflow-hidden shadow-lg hover:bg-yellow-400  hover:text-black'> 
                            	<div className="flex flex-row items-start justify-between px-2">
                                	<div className="flex flex-col items-center justify-center px-2 py-2">
                                    	<span className='text-[16px] font-bold'>{item.idMarca} - {item.marDescricao}</span>                                        
                            	    </div>                
                        	    </div>                                                                                       
                    	    </div>
                        </button>    
                    })}						
                </div>
			</div>
		</div>
	)
}