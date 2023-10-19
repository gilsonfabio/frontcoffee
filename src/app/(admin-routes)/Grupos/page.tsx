"use client"
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import api from '../../../components/Services/api';

type grpProps = {
    idGrupo: string;
    grpDescricao: string
}

export default function Grupos(){
    const [grupos, setGrupos] = useState<Array<grpProps>>([]);
    const router = useRouter();

    function handleSubmit(item: grpProps) {
        const grpId = item.idGrupo;

        console.log(grpId);

        router.push(`/AltGrupo/${grpId}`)
    }
    
    useEffect(() => {   
              
        api.get("/grupos").then(res => {
            setGrupos(res.data)           
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });          

    }, [])

	return ( 
		<div className="w-full h-full px-20">
			<div className="w-full h-screen flex flex-col">
				<h1 className="text-2xl mb-2">Grupos</h1>
				<div className="grid grid-cols-1 gap-1 md:grid-cols-5 md:gap-4 ml-1 px-0 py-0">            
                    {grupos?.map((item:grpProps, idx) => {
                        return <button key={idx} onClick={() => handleSubmit(item)}>  
                    		<div className='flex items-center justify-center w-full bg-gray-600 mt-1 mb-3 rounded overflow-hidden shadow-lg hover:bg-yellow-400  hover:text-black'> 
                            	<div className="flex flex-row items-start justify-between px-2">
                                	<div className="flex flex-col items-center justify-center px-2 py-2">
                                    	<span className='text-[16px] font-bold'>{item.idGrupo} - {item.grpDescricao}</span>                                        
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