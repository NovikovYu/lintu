// import React from 'react';

// import { useTheme } from '@mui/material';

// import { IEtfAllocation } from '../ExposuresBlock/exposures-block';
// import {
//   InvestmentProductsGroupWrapper,
//   InvestmentProductGroupLabel,
//   InvestmentProductWrapper,
//   CustomInvestmentProductLabelWrapper,
//   InvestmentProductTicket,
//   InvestmentProductTitle,
//   InvestmentProductSubtitle,
//   InvestmentProductDescription,
// } from '../portfolio-page-styles';
// // import { IInvestmentProductsGroup } from '../types';

// const enum currency {
//   usd = '$',
// }

// interface IInvestmentProductsGroup {
//   // productGroups: IProductGroup[];
//   // etfAllocations: {
//   //   groupName: string;
//   //   groupData: IEtfAllocation[];
//   // }[];
//   data2[];
// }

// // const PortfolioCompositionChart: FC<IPortfolioCompositionChart> = ({
// //   // productGroups,
// //   etfAllocations,
// // }) => {

// const InvestmentProductsGroup: React.FC<IInvestmentProductsGroup> = ({
//   // etfAllocations,
//   data2,
// }) => {
//   const theme = useTheme();

//   return (
//     <>
//       {/* // groupName: 'U.S. Stocks',
//   // groupData: [
//   //   {
//   //     fundName: 'iShares Core S&P 500 ETF',
//   //     weight: 32.6,
//   //     dollarsAmount: 110,
//   //     numberOfShares: 12,
//   //   }, */}
//       {/* {etfAllocations.map((group, index) => {
//         return (
//           <InvestmentProductsGroupWrapper key={group.groupName}>
//             <InvestmentProductGroupLabel variant="h5">
//               {group.groupName}
//             </InvestmentProductGroupLabel>

//             {group.groupData.map((product) => {
//               return (
//                 <InvestmentProductWrapper
//                   key={product.ticket}
//                   href="https://www.google.com/"
//                   target="_blank"
//                 >
//                   <CustomInvestmentProductLabelWrapper
//                     color={
//                       Object.values(theme.palette.colorsForDonutChart)[
//                         index
//                       ] as string
//                     }
//                     theme={theme}
//                   >
//                     <InvestmentProductTicket>
//                       {product.ticket}
//                     </InvestmentProductTicket>
//                   </CustomInvestmentProductLabelWrapper>
//                   <InvestmentProductDescription>
//                     <InvestmentProductTitle variant="h6">
//                       {product.fundName}
//                     </InvestmentProductTitle>
//                     <InvestmentProductSubtitle>
//                        Allocation: {product.allocationPercentage}%,{' '}
//                       {product.currency &&
//                         ` ${product.allocationСurrency} ${currency['usd']}`}
//                       Allocation: {product.weight}%, {product.dollarsAmount}{' '}
//                       {currency['usd']}
//                     </InvestmentProductSubtitle>
//                   </InvestmentProductDescription>
//                 </InvestmentProductWrapper>
//               );
//             })}
//           </InvestmentProductsGroupWrapper>
//         );
//       })} */}

//             {data2.map((product) => {
//               return (
//                 <InvestmentProductWrapper
//                   key={product.ticket2}
//                   // href="https://www.google.com/"
//                   // target="_blank"
//                 >
//                   <CustomInvestmentProductLabelWrapper
//                     color={product.bg2}
//                     theme={theme}
//                   >
//                     <InvestmentProductTicket>
//                       {product.ticket2}
//                     </InvestmentProductTicket>
//                   </CustomInvestmentProductLabelWrapper>
//                   <InvestmentProductDescription>
//                     <InvestmentProductTitle variant="h6">
//                       {product.asset2}
//                     </InvestmentProductTitle>
//                     <InvestmentProductSubtitle>
//                       Allocation: {product.allocation2}%, {product.money2}{' '}
//                       {currency['usd']}
//                     </InvestmentProductSubtitle>
//                   </InvestmentProductDescription>
//                 </InvestmentProductWrapper>
//               );
//             })}
//     </>
//   );
// };

// export default InvestmentProductsGroup;
