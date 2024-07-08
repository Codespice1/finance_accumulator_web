import {secrets} from "@/config/secrets";
import Stripe from "stripe";

export class StripeService {
  stripe: Stripe;

  constructor(provider: Stripe) {
    this.stripe = provider;
  }

  async fetchBalanceTransactions() {
    const transactions = [];

    const response: any = await this.stripe.balanceTransactions.list({
      limit: 100,
    });
    transactions.push(...response.data);

    return transactions;
  }

  async fetchApplicationFees() {
    const fees = [];

    const response: any = await this.stripe.applicationFees.list({
      limit: 100,
    });
    fees.push(...response.data);

    return fees;
  }

  async fetchRefunds() {
    const refunds = [];

    const response: any = await this.stripe.refunds.list({
      limit: 100,
    });
    refunds.push(...response.data);

    return refunds;
  }
}
