import ArrowDown from '../assets/images/icon-arrow-down.svg'
import ArrowUp from '../assets/images/icon-arrow-up.svg'
import CalenderDrop from '../component/calender/calender'
import History from '../component/history/history'
export const NavItems = [
    {
        name: "features",
        image: ArrowUp,
        image2: ArrowDown,
        content: <CalenderDrop />,
       
    },
    {
        name: "company",
        image: ArrowUp,
        image2: ArrowDown,
        content: <History />,

    },
    {
        name: "careers"
    },
    {
        name: "about"
    },
    {
        login: "login"
    },
    {
        register: "register"
    }
]