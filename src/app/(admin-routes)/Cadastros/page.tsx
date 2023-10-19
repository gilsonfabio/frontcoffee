"use client"
import Link from "next/link";

export default function Cadastros(){
	return ( 
		<div className="w-full h-full px-20">
			<div className="w-full h-screen flex flex-col ">
				<h1 className="text-2xl mb-2">Cadastros</h1>
				<div className="grid grid-cols-1 gap-1 md:grid-cols-5 md:gap-4 ml-1 px-0 py-0 ">            
                    <Link href={'/Grupos'}>
						<div className='flex items-center justify-center w-full bg-gray-600 mt-1 mb-3 rounded overflow-hidden shadow-lg hover:bg-yellow-400  hover:text-black'> 
                        	<div className="flex flex-row items-start justify-between px-2 ">
                            	<div className="flex flex-col items-center justify-center px-2 py-2">
                                	<span className='text-[16px] font-bold'>Grupos</span>                                        
                            	</div>                
                        	</div>                                                                                       
                    	</div>
					</Link>	
					<Link href={'/Linhas'}>
						<div className='flex items-center justify-center w-full bg-gray-600 mt-1 mb-3 rounded overflow-hidden shadow-lg hover:bg-yellow-400  hover:text-black'> 
                        	<div className="flex flex-row items-start justify-between px-2 ">
                            	<div className="flex flex-col items-center justify-center px-2 py-2">
                                	<span className='text-[16px] font-bold'>Linhas</span>                                        
                            	</div>                
                        	</div>                                                                                       
                    	</div>
					</Link>
					<Link href={'/Marcas'}>	
						<div className='flex items-center justify-center w-full bg-gray-600 mt-1 mb-3 rounded overflow-hidden shadow-lg hover:bg-yellow-400  hover:text-black'> 
                        	<div className="flex flex-row items-start justify-between px-2 ">
                            	<div className="flex flex-col items-center justify-center px-2 py-2">
                               		<span className='text-[16px] font-bold'>Marcas</span>                                        
                            	</div>                
                        	</div>                                                                                       
                    	</div>
					</Link>
					<Link href={'/Produtos'}>
						<div className='flex items-center justify-center w-full bg-gray-600 mt-1 mb-3 rounded overflow-hidden shadow-lg hover:bg-yellow-400  hover:text-black'> 
                        	<div className="flex flex-row items-start justify-between px-2 ">
                            	<div className="flex flex-col items-center justify-center px-2 py-2">
                                	<span className='text-[16px] font-bold'>Produtos</span>                                        
                            	</div>                
                        	</div>                                                                                       
                    	</div>
					</Link>	
					<Link href={'/TipMovim'}>
						<div className='flex items-center justify-center w-full bg-gray-600 mt-1 mb-3 rounded overflow-hidden shadow-lg hover:bg-yellow-400  hover:text-black'> 
                        	<div className="flex flex-row items-start justify-between px-2 ">
                            	<div className="flex flex-col items-center justify-center px-2 py-2">
                                	<span className='text-[16px] font-bold'>Movimentos</span>                                        
                            	</div>                
                        	</div>                                                                                       
                    	</div>
					</Link>
					<Link href={'/Users'}>	
						<div className='flex items-center justify-center w-full bg-gray-600 mt-1 mb-3 rounded overflow-hidden shadow-lg hover:bg-yellow-400  hover:text-black'> 
                        	<div className="flex flex-row items-start justify-between px-2 ">
                            	<div className="flex flex-col items-center justify-center px-2 py-2">
                                	<span className='text-[16px] font-bold'>Usuários</span>                                        
                            	</div>                
                        	</div>                                                                                       
                    	</div>
					</Link>	
                </div>
			</div>
		</div>
	)
}