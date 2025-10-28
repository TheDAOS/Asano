/**
 * ItemCard Component
 * 
 * A reusable card component for displaying financial transactions.
 * Renders transaction name and formatted amount with a consistent style.
 * 
 * Features:
 * - Consistent styling with Tailwind
 * - Proper type checking for props
 * - Currency formatting
 * - Responsive design
 * 
 * @example
 * ```tsx
 * <ItemCard shogun={{ id: 1, name: "Groceries", amount: 1000 }} />
 * ```
 */

import { inrFormatter } from "@/utils/formatter"
import { Shogun } from "@/utils/type"

const ItemCard = ({ shogun }: { shogun: Shogun }) => {
    return (
        <div
            key={shogun.id}
            className="rounded-lg p-4 bg-white/10 backdrop-blur-md shadow border border-white/20 flex justify-between items-center"
        >
            <span>{shogun.name}</span>
            <span>{inrFormatter(shogun.amount)}</span>
        </div>
    )
}

export default ItemCard
