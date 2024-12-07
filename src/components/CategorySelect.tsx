import { handleGetAllCategoriesAction } from '@/actions/categoryAction';
import { CategoryType } from '@/utils/types';

/**
 * !warning: this component should not be used outside a form
 */

const CategorySelect = async ({ className }: { className?: string}) => {
    const { data }: { data: { categories: CategoryType[] } } = await handleGetAllCategoriesAction();

    return (
        <select name="category" id="category" defaultValue={JSON.stringify(data.categories[0])} className={`cursor-pointer ${className}`}>
            {data.categories.map((category, index) => (
                <option key={index} value={JSON.stringify(category)}>{category.categoryName}</option>
            ))}
        </select>
    )
}

export default CategorySelect
