import { Customer } from "@/app/lib/definitions";
import { customers } from "../../lib/placeholder-data";

export async function GET() {
  const dataCustomers: Customer[] = customers;
  return Response.json(dataCustomers);
}

export async function POST(req: Request) {
  const body = req.json();
}
