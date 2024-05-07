import { db } from "@/db"
import { notFound } from "next/navigation"
interface Params {
    params: {
        id: string
    }
}
export default async function SnippetDetailPage(props: Params) {
    const snippet = await db.snippet.findFirst({
        where: { id: +props.params.id }
    })
    if(!snippet) return notFound();
    return (
        <div>{snippet.title}</div>
    )
}