import StyledBtn from "@/components/StyledBtn";
import StyledSearchbar from "@/components/StyledSearchbar";
import { getFaqs } from "@/data-access/faqs";
import { FaqType } from "@/utils/types";
import Link from "next/link";
import { FaFilter, FaPlus } from "react-icons/fa";

// const header = ["id", "name", "status", "category"];
const header = [
    {
        id: 1,
        style: "flex-[0.03]",
        name: "id"
    },
    {
        id: 2,
        style: "flex-[0.3]",
        name: "name"
    },
    {
        id: 3,
        style: "flex-[0.2]",
        name: "status"
    },
    {
        id: 4,
        style: "flex-[0.2]",
        name: "category"
    },
];

const FaqsPage = async () => {
    const { faqWithSequentialIds }: { faqWithSequentialIds: FaqType[] } = await getFaqs();

    return (
        <main>
            <div className='w-full flex flex-col rounded-lg shadow overflow-hidden'>
                {/* Actions */}
                <div className='flex items-center justify-between border-b dark:border-gray bg-white'>
                    <div className="flex items-stretch justify-between w-full gap-2 p-3 ">
                        <div className="flex items-stretch gap-2 md:h-10">
                            <StyledBtn className="shadow border border-gray rounded-lg p-2 bg-gray">
                                <FaFilter />
                            </StyledBtn>

                            <StyledSearchbar
                                className="flex items-center gap-2 shadow border border-gray rounded-lg p-1 px-2 md:p-2 bg-gray"
                                inputClassName='hidden md:block'
                            />
                        </div>

                        <Link href="/faqs/new" className="flex items-center gap-2 px-4 py-1 rounded-lg text-sm bg-primary hover:bg-sky-700 text-white duration-300 hover:shadow-xl">
                            <span>
                                <FaPlus />
                            </span>

                            <span className="hidden md:block">
                                Add FAQ
                            </span>
                        </Link>
                    </div>
                </div>

                {/* table header */}
                <div className='flex items-center justify-between w-full p-3 bg-white'>
                    {
                        header.map((item) => (
                            <div key={item.id} className={`flex items-center justify-start ${item.style}`}>
                                {item.name}
                            </div>
                        ))
                    }
                </div>

                {/* data table */}
                <div className='flex-1'>
                    {
                        faqWithSequentialIds.map((faq: FaqType) => (
                            <Link href={`/faqs/${faq._id}`} key={faq._id} className="flex items-start justify-between border border-zinc-200 dark:border-zinc-700 p-3 bg-white/40 hover:bg-white/40 dark:bg-white/40 dark:hover:bg-white cursor-pointer" title={faq.question}>
                                <div className="flex-[0.03] flex items-center justify-start truncate overflow-hidden whitespace-nowrap">
                                    {faq._id}
                                </div>

                                <div className="flex-[0.3] flex items-center justify-start truncate overflow-hidden whitespace-nowrap">
                                    {faq.question}
                                </div>

                                <div className="flex-[0.2] flex items-center justify-start truncate overflow-hidden whitespace-nowrap">
                                    {faq.type}
                                </div>

                                <div className="flex-[0.2] flex items-center justify-start truncate overflow-hidden whitespace-nowrap">
                                    {faq.category}
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default FaqsPage