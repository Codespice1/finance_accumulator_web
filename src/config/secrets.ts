class EnvConfig {
  get stripeKey(): string {
    if (!process.env.STRIPE_KEY) {
      throw new Error("STRIPE_KEY environment not set");
    }
    return process.env.STRIPE_KEY;
  }

  get githubID(): string {
    if (!process.env.AUTH_GITHUB_ID) {
      throw new Error("AUTH_GITHUB_ID environment not set");
    }
    return process.env.AUTH_GITHUB_ID;
  }

  get githubSecret(): string {
    if (!process.env.AUTH_GITHUB_SECRET) {
      throw new Error("GITHUB_SECRET environment not set");
    }
    return process.env.AUTH_GITHUB_SECRET;
  }

  get googleID(): string {
    if (!process.env.GOOGLE_CLIENT_ID) {
      throw new Error("GOOGLE_CLIENT_ID environment not set");
    }
    return process.env.GOOGLE_CLIENT_ID;
  }

  get googleSecret(): string {
    if (!process.env.GOOGLE_CLIENT_SECRET) {
      throw new Error("GOOGLE_CLIENT_SECRET environment not set");
    }
    return process.env.GOOGLE_CLIENT_SECRET;
  }
}

export const secrets = new EnvConfig();
