import React from 'react'
import { HeroTitle } from '../../Atoms/Titles/index'
import Icon from '@/app/components/Atoms/Icon'

const Index = () => {
    return (
        <div className=' rounded-md mt-5 mr-5 ml-5 w-[1200px] text-bank2 bg-bank4 font-bold  border-[1px] border-[#043D74]'>

            <div className=' h-50  ml-1'>

                <div className='flex justify-center '>
                    <HeroTitle title={'Comentarios'} />
                </div>

                <hr style={{ margin: 0, padding: 0, border: 'none', height: '1px', backgroundColor: '#ccc' }} />

                <div className=' flex justify-between'>
                    <div className=' flex flex-row gap-2'>
                        <Icon icon={'qlementine-icons:user-24'} />
                        <span>@Usuario_1 </span>
                    </div>
                    <div className=' flex justify-end'>
                        <button className=' cursor-pointer'><Icon icon={'ri:more-2-fill'} /></button>
                    </div>
                </div>
                <p className='mt-4 mb-6 text-sm font-normal'> Comentarios acerca del evento</p>

            </div>

            <div className='flex justify-end p-4'>
                <button className='text-sm font-semibold hover:underline'>
                    Responder
                </button>
            </div>

        </div>
    )
}

export default Index