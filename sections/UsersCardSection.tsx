import Layout from "../components/Layout.tsx";
import UserCardItem, { UserCard } from "../components/UserCardItem.tsx";

export interface Props {
  title: string;
  subtitle?: string;
  users: UserCard[];
}

export default function UsersCardSection({ title, subtitle, users }: Props) {
  return (
    <Layout className="px-3 sm:px-2 pt-[200px] text-center">
      <h2 className="text-4xl mb-5 font-bold text-white">{title}</h2>
      <p className="w-3/5 mx-auto text-xl font-medium mb-6 text-white">
        {subtitle}
      </p>
      <div class="w-full scroll-snap-x mt-20">
        <div class="flex lg:flex-wrap lg:justify-center overflow-auto lg:overflow-visible pb-5 lg:pb-0 gap-y-4 gap-x-6">
          {users?.map((user) => (
            <UserCardItem key={user.name} {...user} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
