
/**
 * this is a styled button
 * 
 * ! you can not add class are already exists in default
 * 
 * className: flex items-center shadow
 */

const StyledBtn = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
    return (
        <button onClick={onClick} className={`flex items-center ${className}`}>
            {children}
        </button>
    )
}

export default StyledBtn