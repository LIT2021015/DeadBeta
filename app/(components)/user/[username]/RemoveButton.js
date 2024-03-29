import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { deleteTravelhistory } from "@/app/api/removehistory/deletetravelhistory";

export default async function RemoveButton({ id }) {
  const session = await getServerSession(authOptions);
  const handleDeleteTravelHistory = async () => {
    "use server";
    try {
      const res = await deleteTravelhistory(id);
      revalidatePath(`/user/${session.user.username}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form action={handleDeleteTravelHistory}>
      <button
        type="submit"
        className="px-4 py-2 rounded-xl bg-red-500/30 text-black dark:text-white text-xs w-full hover:bg-red-500/70"
      >
        Remove
      </button>
    </form>
  );
}
