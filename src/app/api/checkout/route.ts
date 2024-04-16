import { NextRequest, NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const { id } = await req.json();
  const baseUrl = req.headers.get("Origin");

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: id,
        quantity: 1,
      },
    ],
    success_url: `${baseUrl}/success/{CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}`,
  });

  return NextResponse.json(session, { status: 200 });
}
