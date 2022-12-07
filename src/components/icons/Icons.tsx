import {ReactComponent as WhiteLogo} from './pexelsLogoWhite.svg';
import {ReactComponent as BlackLogo} from './pexelsLogoBlack.svg';
import {ReactComponent as SearchLogo } from './search.svg';
import {ReactComponent as Like} from './like.svg';
import {ReactComponent as Liked} from './liked.svg';
import {ReactComponent as Download} from './download.svg';
import { ReactComponent as SmallArrow } from './smallArrow.svg';
import { ReactComponent as BigArrow} from './bigArrow.svg';
import { ReactComponent as Done } from './done.svg';
import { ReactComponent as Cross } from './cross.svg';
import styles from './icons.module.css';


const Icons:React.FC<{id:string}> = ({id}) => { 
    switch(id){
        case'cross':
            return <Cross/>
        case'done':
            return <Done/>
        case 'bigArrow':
            return <BigArrow/>
        case 'smallArrow':
            return <SmallArrow/>    
        case 'download':
            return <Download/>
        case 'liked':
            return <Liked/>    
        case 'like':
            return <Like/>
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