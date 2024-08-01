class EnvConfig {
  get stripeKey(): string {
    if (!process.env.STRIPE_KEY) {
      throw new Error("STRIPE_KEY environment not set");
    }
    return process.env.STRIPE_KEY;
  }

  get githubID(): string {
    if (!process.env.GITHUB_ID) {
      throw new Error("GITHUB_ID environment not set");
    }
    return process.env.GITHUB_ID;
  }

  get githubSecret(): string {
    if (!process.env.GITHUB_SECRET) {
      throw new Error("GITHUB_SECRET environment not set");
    }
    return process.env.GITHUB_SECRET;
  }
}

export const secrets = new EnvConfig();
