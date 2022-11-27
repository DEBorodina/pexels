import {ReactComponent as WhiteLogo} from './pexelsLogoWhite.svg';
import {ReactComponent as BlackLogo} from './pexelsLogoBlack.svg';
import { ReactComponent as SearchLogo } from './search.svg';
import styles from './icons.module.css';


const Icons:React.FC<{id:string}> = ({id}) => { 
    switch(id){
        case 'whiteLogo':
            return <WhiteLogo/>
        case 'blackLogo':
            return <BlackLogo/>
        case 'search':
            return <SearchLogo/>    
        default:
            return <svg></svg>    
    }
}

export default Icons;