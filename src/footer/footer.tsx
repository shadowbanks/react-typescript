import React from 'react';
import './footer.css';
import { getFooterCopy, getFullYear } from "../utils/utils";


const Page_footer = () => {
    return (
        <div className='Page-footer'>
            <p>Copyright { getFullYear() } - { getFooterCopy(true) } </p>
        </div>
    );
}

export default Page_footer;