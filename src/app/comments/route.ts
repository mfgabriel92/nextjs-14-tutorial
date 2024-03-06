import { v4 as id } from "uuid";

interface Comment {
  id: string;
  comment: string;
}

let comments: Comment[] = [];

export async function GET() {
  return Response.json(comments);
}

export async function POST(req: Request) {
  const { comment }: Comment = await req.json();
  const newComment = {
    id: id(),
    comment,
  };

  comments.push(newComment);

  return Response.json(newComment, { status: 201 });
}
