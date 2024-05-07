import { db } from "@/db";
import { redirect } from "next/navigation";

export default function NewSnippet() {
    async function creatSnippet(formData: FormData) {
        //ensure it is a server action
        'use server';
        // check if valid
        const title = formData.get('title') as string;
        const code = formData.get('code') as string;
        // create a new record in db
        const snippet = await db.snippet.create({
            data: {
                title,
                code
            }
        });
        console.log(snippet);
        // navigate to root
        redirect('/');
    }
    return (
        <form action={creatSnippet}>
            <h3 className="font-bold m-3">Create a Snippet</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label htmlFor="title" className="w-12">Title</label>
                    <input type="text" className="border rounded p-2 w-full" name="title" id="title" />
                </div>
                <div className="flex gap-4">
                    <label htmlFor="code" className="w-12">Code</label>
                    <textarea className="border rounded p-2 w-full" name="code" id="code" />
                </div>
                <button type="submit" className="bg-blue-200 rounded p-2 ">Create</button>
            </div>
        </form>
    );
}