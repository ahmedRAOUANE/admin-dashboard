
/**
 * This is a styled search bar
 * for now it's just an input, in future it will be a reusable search bar
 * 
 * !Don't add class are already exists in default
 * 
 * TODO: add search logic
 */

import { IoSearch } from "react-icons/io5"

const StyledSearchbar = ({ className, inputClassName }: { className?: string, inputClassName?: string }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <IoSearch />

            <input type="search" placeholder="Search" className={`outline-none bg-transparent ${inputClassName}`} />
        </div>
    )
}

export default StyledSearchbar