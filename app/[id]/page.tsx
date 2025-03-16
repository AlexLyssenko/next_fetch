import data from '../data/data.json';

export type DataType = Item[];

export interface Item {
  name: string;
  language: string;
  id: string;
  bio: string;
  version: number;
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return data.map((item: Item) => {
    return { id: item.id };
  });
}

type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const items: DataType = data;

  console.log('data', await params);
  const { id } = await params;

  const item = items.find((item: Item) => item.id === id);

  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Details</h1>
      {item?.name}
      {item?.bio}
      <div className="space-y-10 text-white"></div>
    </div>
  );
}
