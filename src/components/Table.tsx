//  !this component have been commented to avoid build errors

// import React from 'react';
// import StyledBtn from '@/components/StyledBtn';
// import { FaFilter, FaPlus } from 'react-icons/fa';
// import { BsThreeDotsVertical } from 'react-icons/bs';
// import TableRow from '@/components/TableRow';
// import StyledSearchbar from '@/components/StyledSearchbar';
// import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
// import { FaqType, SellsStyleType, TableHeaderType, TableOptionsType, TableRowType, WorkflowType } from '@/utils/types';

/**
 * this Table is a dynamic component recieves the following props
 * @props 
 *    header: the TableHeader object, 
 *    data: the data array, 
 *    options: optional, the options object, 
 *    style: optional, the style object
 * 
 * TableHeader: {
 *  id: num | str,
 *  name: str,
 *  description: str,
 *  status: str,
 *  rate: str,
 *  balance: str,
 *  deposit: str,
 *  ..
 * }
 * 
 * data: [
 *  {
 *    id: num | str,
 *    name: str,
 *    description: str,
 *    status: str,
 *    rate: str,
 *    balance: str,
 *    deposit: str,
 *    ..
 *  }, ..
 * ]
 * 
 * options: {
 *  title: str,
 *  checkbox: bool,
 *  pagination: bool,
 *  optionsBtn: bool,
 *  filter: bool,
 *  search: bool,
 * }
 * 
 * sellsStyle: {
 *   title: str,
 *   checkbox: str,
 *   ..
 * }
 * 
 * conditions: the TableHeader object must have the same keys as the data object keys
 */

// any type is temporary
// const Table = ({ header, data, options, sellsStyle }: {
//     header: TableRowType,
//     data: WorkflowType[] | FaqType[],
//     options?: TableOptionsType,
//     sellsStyle?: TableRowType
// }) => {

//     if (!header || !data) {
//         throw new Error('Table must have a header and data');
//     };

//     console.log("data: ", data);

//     return (
//         <div className='flex flex-col w-full mx-auto border border-zinc-200 rounded-lg'>
//             {/* Table Header */}
//             <div className='flex flex-col bg-gray z-10 border-b border-zinc-200'>
//                 <div className="flex items-stretch justify-between w-full gap-2 p-3">
//                     <div className="flex items-stretch gap-2 h-10">
//                         {options && options.filter && (
//                             <StyledBtn className="shadow border border-gray rounded-lg p-2 bg-white">
//                                 <FaFilter />
//                             </StyledBtn>
//                         )}

//                         {options && options.search && (
//                             <StyledSearchbar className="flex items-center gap-2 shadow border border-gray rounded-lg p-2 bg-white" />
//                         )}
//                     </div>

//                     {options && options.newBtn && (
//                         <StyledBtn className="flex items-center gap-2 bg-blue text-white px-4 py-1 rounded-lg text-sm hover:bg-sky-700 duration-300 hover:shadow-xl">
//                             <span>
//                                 <FaPlus />
//                             </span>

//                             <span>
//                                 new
//                             </span>
//                         </StyledBtn>
//                     )}
//                 </div>

//                 <div className='flex items-center justify-between pt-3 px-3'>
//                     {options && options.checkbox && (
//                         <div className="flex-[0.03] aspect-square flex items-center">
//                             <input type="checkbox" name="selectAll" id="selectAll" />
//                         </div>
//                     )}

//                     {
//                         Object.keys(header).map((key) => (
//                             <div key={key} className={sellsStyle && sellsStyle[key]?.toString()}>
//                                 {
//                                     typeof header[key] === "string" || typeof header[key] === "number" && (
//                                         <span className="text-sm font-bold">{header[key]}</span>
//                                     )
//                                 }
//                             </div>
//                         ))
//                     }

//                     {(options && options.optionsBtn) && (
//                         <StyledBtn className={"flex-[0.05] w-5 aspect-square justify-center hover:bg-gray rounded-full"}>
//                             <BsThreeDotsVertical />
//                         </StyledBtn>
//                     )}
//                 </div>
//             </div>

//             {/* Table Body */}
//             <div className="flex flex-col bg-white">
//                 {data?.map((customer) => (
//                     <TableRow key={customer._id} item={customer} style={sellsStyle} options={options} />
//                 ))}
//             </div>

//             {/* Table Footer */}
//             {options && options.pagination && (
//                 <div className="flex items-center justify-between p-3 bg-gray">
//                     <span>1-10 of {data.length}</span>

//                     <div className="flex items-center gap-2">
//                         <span>Rows per page: 10</span>

//                         <div className="flex items-center gap-2">
//                             <button className="border border-gray px-3 py-1 rounded-lg bg-white shadow">
//                                 <MdOutlineKeyboardArrowLeft />
//                             </button>

//                             <span>1/10</span>

//                             <button className="border border-gray px-3 py-1 rounded-lg bg-white shadow">
//                                 <MdKeyboardArrowRight />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Table;

