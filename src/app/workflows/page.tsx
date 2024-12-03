import StyledBtn from '@/components/StyledBtn';
import StyledSearchbar from '@/components/StyledSearchbar';
import { getWorkflows } from '@/data-access/workflows';
import { WorkflowType } from '@/utils/types';
import Link from 'next/link';
import { FaFilter, FaPlus } from 'react-icons/fa';

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

const WorkflowsPage = async () => {
    const { workflows }: { workflows: WorkflowType[] } = await getWorkflows();

    return (
        <main className="flex-1">
            {/* This feature is unstabel */}
            {/* <Table data={workflows} header={tableHeader} sellsStyle={sellsStyle} options={tableOptions} /> */}

            <div className='w-full flex flex-col rounded-lg shadow overflow-hidden'>
                {/* Actions */}
                <div className='flex items-center justify-between border-b dark:border-gray-dark bg-white dark:bg-white-dark'>
                    <div className="flex items-stretch justify-between w-full gap-2 p-3">
                        <div className="flex items-stretch gap-2 md:h-10">
                            <StyledBtn className="shadow border border-gray dark:border-gray-dark rounded-lg p-2 bg-gray dark:bg-gray-dark">
                                <FaFilter />
                            </StyledBtn>

                            <StyledSearchbar className="flex items-center gap-2 shadow border border-gray dark:border-gray-dark rounded-lg p-1 px-2 md:p-2 bg-gray dark:bg-white-dark" inputClassName='hidden md:block ' />
                        </div>

                        <Link href="/workflows/new" className="flex items-center gap-2 px-4 py-1 rounded-lg text-sm bg-primary dark:bg-primary-dark hover:bg-sky-700 dark:hover:bg-sky-900 text-white duration-300 hover:shadow-xl">
                            <span>
                                <FaPlus />
                            </span>

                            <span className='hidden md:block'>
                                Add Workflow
                            </span>
                        </Link>
                    </div>
                </div>

                {/* table header */}
                <div className='flex items-center justify-between w-full p-3 bg-white dark:bg-white-dark'>
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
                        workflows.map((workflow) => (
                            <Link href={`/workflows/${workflow._id}`} key={workflow._id} className="flex items-start justify-between border border-zinc-200 dark:border-zinc-700 p-3 bg-white/40 hover:bg-white dark:bg-white-dark/40 hover:dark:bg-white-dark cursor-pointer" title={workflow.name}>
                                <div className="flex-[0.03] flex items-center justify-start truncate overflow-hidden whitespace-nowrap">
                                    {workflow.displayId}
                                </div>

                                <div className="flex-[0.3] flex items-center justify-start truncate overflow-hidden whitespace-nowrap">
                                    {workflow.name}
                                </div>

                                <div className="flex-[0.2] flex items-center justify-start truncate overflow-hidden whitespace-nowrap">
                                    {workflow.status}
                                </div>

                                <div className="flex-[0.2] flex items-center justify-start truncate overflow-hidden whitespace-nowrap">
                                    {workflow.category}
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default WorkflowsPage