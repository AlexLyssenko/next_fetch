import data from './data/data.json';
import Link from 'next/link';

export type DataType = Item[];

export interface Item {
  name: string;
  language: string;
  id: string;
  bio: string;
  version: number;
}

export default function Page() {
  const items: DataType = data;
  const elements = items.map((item, index) => {
    return (
      <li key={`${item.id}_${index}`}>
        <Link href={`/${item.id}`}>{item.name}</Link>
      </li>
    );
  });

  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Examples</h1>
      <ul>{elements}</ul>
    </div>
  );
}
