import React from 'react'
import '../Card.css'
import {HiStar} from 'react-icons/hi'
import {BsFillEyeFill} from 'react-icons/bs'
import {TbNumber1} from 'react-icons/tb'
import {TbNumber0} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'
export const Card = () => {
  return (
    <div className='Card_'>
        <div className='Card_head'>
            <div className='head_con'>
                <p className='head__type'>Basic Pokémon 
                {/* --type */}
                </p>
                <h3 className='head__name'>Mewtwo 
                {/* --name */}
                </h3>
            </div>

            <div className='head_HP'>
                <div className='HP_con'>
                <span className='HP_value'> ?? HP </span>
                <span className='HP_icons'><BsFillEyeFill className='icon_HP'/></span>
                </div>

            {/* ++icon */}
            </div>
        </div>
        
        <div className='Card_img-con'>
        <img src={require('../images/Mewtwo_card.jpg')} className='Card__image'/>
        </div>

        <p className='Card_physical'>Genetic Pokémon. Length 6'7", Weight:269 lbs.</p>

        <div className='Card_ability-1'>
            <div className='ability-1_icons'>
                <span className='icons_eye'><BsFillEyeFill className='eye_icon'/></span>
                <span className='icons_star'><HiStar className='star_icon'/></span>
            </div>
            <div className='ability-1__description'>
                <span className='ability-1__type'>Psychic {//--first_ability_type 
                    } </span>
                Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon. 
                {/* --first_ability_description */}
            </div>
            <div className='ability-1_in-number'>
                <TbNumber1 className='icons_one'/>
                <TbNumber0 className='icons_zero'/>
                <span className='icons_plus'> + </span>
            {/* --first_ability_in_number  */}
            </div>
        </div>

        <div className='Card_ability-2'>
            <div className='ability-2_icons'>
                <span className='icons_eye'><BsFillEyeFill className='eye_icon'/></span>
                <span className='icons_eye-1'><BsFillEyeFill className='eye_icon'/></span>
            </div>
            <div className='ability-2_con'>
                <div className='ability-2__description'>
                {/* --second_ability_type */}
                <span className='ability-2__type'> Barrier </span>
                Discard I Energy card attached to Mewtwo in order to use this attack. During your opponent's next turn, prevent all effects of attacks, including damage, done to Mewtwo.
                </div>
            </div>
        </div>

            <div className='Card_extra'>
                <div className='extra_con'>
                <div className='extra_item-1'>
                    <p className='extra__weakness'>weakness
                    {/* --weakness */}
                    </p>
                    <span className='extra__weakness-icons'>
                        <span className='weakness_icons'>
                            <BsFillEyeFill className='icon_weakness'/>
                        </span>
                    </span>
                </div>
                <div className='extra_item-2'>
                    <p className='extra__resistance'>resistance 
                    {/* --resistance */}
                    </p>
                    <span className='extra__resistance-icons'>
                        <span className='resistance_icons'>
                            <BsFillEyeFill className='icon_resistance'/>
                        </span>
                    </span>
                </div>
                <div className='extra_item-3'>
                    <p className='extra__recost'>retreat cost 
                    {/* --recost */}
                    </p>
                    <span className='extra__recost-icons'>
                        <span className='recost_icons'>
                            <HiStar className='icon_recost-1'/>
                        </span>
                        <span className='recost_icons'>
                            <HiStar className='icon_recost-2'/>
                        </span>
                        <span className='recost_icons'>
                            <HiStar className='icon_recost-3'/>
                        </span>
                    </span>
                </div>
                </div>
            <div className='Card_ori'>
                <p className='ori_p'>Ascientist created this Pokémon after years of horrific genesplicing and DNA engineering experiments. 
                 {/*--ori  */}
                    <span className='ori_level'> LV.53 
                    {/* --level */}
                    </span>
                    <span className='ori_id'> #150 
                    {/* --id */}
                    </span>
                </p>
            </div>
            </div>

            <div className='Card_-info'>
                <p className='info_illustrator'>iilus. Ken Sugimori 
                {/* --illustrator */}
                </p>
                <p className='info_creator'>c1995. 96 98 Nintendo Creatures, GAMEFREAK c 1999
                {/*  --creator */}
                </p>
                <p className='info_end'>10/102
                {/*  --unknown_number */} 
                <span>
                    <HiStar className='icon_end'/>
                </span>
                </p>
            </div>

    </div>
  )
}
