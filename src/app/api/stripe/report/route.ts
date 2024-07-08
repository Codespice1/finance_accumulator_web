import {createObjectCsvWriter} from "csv-writer";
import fs from "fs";
import path from "path";
import Stripe from "stripe";
import {NextResponse} from "next/server";
import {secrets} from "@/config/secrets";
import {StripeService} from "@/services/api/stripe/StripeService";

async function generateCSVReport() {
  const stripe = new Stripe(secrets.stripeKey);
  const stripeService = new StripeService(stripe);
  
  const transactions = await stripeService.fetchBalanceTransactions();
  const fees = await stripeService.fetchApplicationFees();
  const refunds = await stripeService.fetchRefunds();

  const csvWriter = createObjectCsvWriter({
    path: "stripe_report.csv",
    header: [
      {id: "type", title: "TYPE"},
      {id: "amount", title: "AMOUNT"},
      {id: "currency", title: "CURRENCY"},
      {id: "description", title: "DESCRIPTION"},
      {id: "created", title: "CREATED"},
    ],
  });

  const data = [
    ...transactions.map((t) => ({
      type: "Transaction",
      amount: t.amount,
      currency: t.currency,
      description: t.description,
      created: new Date(t.created * 1000).toISOString(),
    })),
    ...fees.map((f) => ({
      type: "Application Fee",
      amount: f.amount,
      currency: f.currency,
      description: f.description,
      created: new Date(f.created * 1000).toISOString(),
    })),
    ...refunds.map((r) => ({
      type: "Refund",
      amount: r.amount,
      currency: r.currency,
      description: r.description,
      created: new Date(r.created * 1000).toISOString(),
    })),
  ];

  await csvWriter.writeRecords(data);
  return path.resolve("stripe_report.csv");
}

export async function GET() {
  try {
    const filePath = await generateCSVReport();
    const fileBuffer = fs.readFileSync(filePath);
    fs.unlinkSync(filePath); // delete file after sending
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": 'attachment; filename="stripe_report.csv"',
      },
    });
  } catch (error) {
    console.error("Error generating report:", error);
    return new NextResponse("Error generating report", {status: 500});
  }
}
