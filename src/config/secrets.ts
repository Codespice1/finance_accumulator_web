class EnvConfig {
  get stripeKey(): string {
    if (!process.env.STRIPE_KEY) {
      throw new Error("STRIPE_KEY environment not set");
    }
    return process.env.STRIPE_KEY;
  }
}

export const secrets = new EnvConfig();
