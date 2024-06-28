import {secrets} from "@/config/secrets";
import Stripe from "stripe";

export class StripeService {
  stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(secrets.stripeKey);
  }

  async fetchBalanceTransactions(startingAfter: string) {
    const transactions = [];
    let hasMore = true;

    while (hasMore) {
      const response: any = await this.stripe.balanceTransactions.list({
        limit: 100,
        starting_after: startingAfter,
      });
      transactions.push(...response.data);
      hasMore = response.has_more;
      if (hasMore) {
        startingAfter = response.data[response.data.length - 1].id;
      }
    }
    return transactions;
  }

  async fetchApplicationFees(startingAfter: string) {
    const fees = [];
    let hasMore = true;

    while (hasMore) {
      const response: any = await this.stripe.applicationFees.list({
        limit: 100,
        starting_after: startingAfter,
      });
      fees.push(...response.data);
      hasMore = response.has_more;
      if (hasMore) {
        startingAfter = response.data[response.data.length - 1].id;
      }
    }

    return fees;
  }

  async fetchRefunds(startingAfter: string) {
    const refunds = [];
    let hasMore = true;

    while (hasMore) {
      const response: any = await this.stripe.refunds.list({
        limit: 100,
        starting_after: startingAfter,
      });
      refunds.push(...response.data);
      hasMore = response.has_more;
      if (hasMore) {
        startingAfter = response.data[response.data.length - 1].id;
      }
    }

    return refunds;
  }
}
