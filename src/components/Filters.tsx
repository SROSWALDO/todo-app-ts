import { TODO_FILTERS, FILTERS_BUTTONS, FilterValue } from "../const"

interface Props {
    onFilterChange: (filter: FilterValue )=> void
    filterSelected: FilterValue //utiliza cualquiera de las keys del todo_filters, all,active.completed
}


export const Filter: React.FC<Props> = (
    {filterSelected, onFilterChange}
    ) => {
        const handleClick = (filter: FilterValue) {
            
        }
        return (
            <ul className="filters">
                {
                    Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                        const isSelected = key === filterSelected
                        const className = isSelected ? 'selected' : ''
                        return(
                            <li key={key} >
                            <a className={className} href={href} onClick={handleClick(key)} >
                                {literal}
                            </a>
                            </li>
                        )
                    } )
                } 
            </ul>
        )
    }