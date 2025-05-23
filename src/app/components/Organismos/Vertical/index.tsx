import React from 'react'
import { HeroTitle } from '../../Atoms/Titles/index'
import { MediumTitle } from '../../Atoms/Titles/index'
import Buttons from '@/app/components/Atoms/Buttons'
import Desplegable from '@/app/components/Organismos/Desplegable/index'

const Index = () => {
    return (
        <div className=' flex flex-col justify-start items-center w-80 h-[calc(100vh-84px)]  p-4  border-r-2 border-[#D9D9D9] '>
            <div >
                <HeroTitle title={'Eventos'} />
            </div>
            <div className='flex flex-row items-center mt-4'>
                <MediumTitle title={'Evento'} />
                <Desplegable />
            </div>
            
            <div className='mt-auto flex justify-end'>
                <Buttons title={'Comentar'} link={'/Make'} color={'bg-orange-500'} />

            </div>

        </div>
    )
}

export default Index