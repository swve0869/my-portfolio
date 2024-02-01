import Link from 'next/link';
import Box from '@mui/material/Box';

const NavItem  = ({href,label,pdf}:{href:any,label:any,pdf:Boolean}) => {

    if(pdf){
        return(
            <div className="block py-2 px-3 text-gray-900 rounded-lrg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent shadow-md"> 
                    <a target="_blank" href="src/app/images/2024resume.pdf">Resume</a>
            </div>
    
        );
    }

    return(
        <div className="block py-2 px-3 text-gray-900 rounded-lrg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent shadow-md"> 
                <Link href={href}>{label}</Link>
        </div>

    );
};

export default NavItem;



/*

<div className="block py-2 px-3 text-gray-900 rounded-lrg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent shadow-md">
        <div className ="inline bg-gray p-2">
        <Link href={href}>{label}</Link>
        </div>
        </div>
*/