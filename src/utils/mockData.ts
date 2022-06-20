import bitcoin from '../assets/bitcoin.png';
import ethereum from '../assets/ethereum.png';
import litecoin from '../assets/litecoin.png';

interface TableProps {
  positive: boolean;
  icon: string;
  part: string;
  value: string;
}

export const tableData: TableProps[] = [
  {
    positive: true,
    icon: bitcoin,
    part: 'Bitcoin',
    value: '164,50',
  },
  {
    positive: false,
    icon: ethereum,
    part: 'ethereum',
    value: '164,50',
  },
  {
    positive: true,
    icon: litecoin,
    part: 'litecoin',
    value: '164,50',
  },
];
