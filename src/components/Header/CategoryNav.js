import React, { useContext, Fragment } from 'react';

//Assets
import Acessorios from '../../assets/acessorios.png'
import Bolsas from '../../assets/bolsas.png'

//Components
import { CategoryModal, ShoesModal } from '../Modals/CategoryModal'

//Context
import { CategoryContext } from '../../contexts/CategoryContext'

const CategoryNav = () => {
    const { navItems } = useContext(CategoryContext); 

    return (
            <nav className="nav-listing ch-fill font-gotham d-flex a-center s-14">
                {navItems.map(({label, name, type, subcategories}) => (
                    <Fragment>
                        <a className="ch-100 d-flex a-center pad-h-26 ch-inherit" href="#">{label.toUpperCase()}</a>
                        {
                            type === "normal" ? 
                                <CategoryModal subcategories={subcategories} name={name}/>
                            :
                                type === "min" ?
                                    <ShoesModal subcategories={subcategories}/>
                                :
                                    null
                        }
                    </Fragment>
                ))}
            </nav>
    )
}

export default CategoryNav;