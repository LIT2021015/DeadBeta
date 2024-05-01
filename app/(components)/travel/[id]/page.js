import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Card from "./Card";

export default async function Travel({ params: { id } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  const card = await db.travel.findUnique({
    where: {
        id: parseInt(id)
    },
    select: {
        id: true,
        usersId: true,
        from: true,
        to: true,
        date: true,
        users: {
            select: {
                username: true,
                name: true
            }
        },
        friends: true
    }
  })
  const currentUsername = session?.user?.username
  return <Card id={card.id} usersId={card.usersId} from={card.from} to={card.to} date={card.date} username={card.users.username} name={card.users.name} friends={card.friends} currentUsername={currentUsername} />
}
