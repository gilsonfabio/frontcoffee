import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import ButtonLogout from "@/components/ButtonLogout"
import { getServerSession } from "next-auth"
import Image from "next/image";

import logobarra from '../../public/coffee_logo.png'
import Link from "next/link";

export default async function Navbar(){
	const session = await getServerSession(nextAuthOptions); 

    return (
        <div className="w-full h-20 flex flex-col bg-black">
            <div className="w-full h-20 flex flex-row items-center justify-between md:px-20 ">
                <div className="w-auto md:w-1/5 h-auto flex items-center ">
                    <Image src={logobarra} alt="" width={80} height={20}/>
                </div>
                <div className="w-auto md:w-1/5 h-full flex items-center ">
                    <Link href={'/Cadastros'}>
                        <span className="text-yellow-900 hover:text-yellow-400 text-xs md:text-xl px-1 md:px-5">Cadastros</span>
                    </Link>  
                    <Link href={'/Movimentos'}>  
                        <span className="text-yellow-900 hover:text-yellow-400 text-xs md:text-xl px-1 md:px-5">Movimento</span>
                    </Link>
                    <Link href={'/Relatorios'}>
                        <span className="text-yellow-900 hover:text-yellow-400 text-xs md:text-xl px-1 md:px-5">Relatórios</span>
                    </Link>    
                </div>
    	        <div className="flex flex-row items-center justify-center w-auto h-auto mr-2">
                    <div className="flex flex-row w-full h-full items-center justify-center mr-2">
                        <h1 className="text-xs md:text-xl">Olá, {session?.user?.name}!</h1>
	                </div>
                    <ButtonLogout />
                </div>
            </div>		
        </div>
	)
}