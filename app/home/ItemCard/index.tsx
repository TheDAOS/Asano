import { inrFormatter } from "@/utils/formatter"
import { IShogun } from "@/utils/type"

const ItemCard = ({ shogun }: { shogun: IShogun }) => {

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