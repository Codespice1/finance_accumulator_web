![banner](https://raw.githubusercontent.com/Codespice1/finance_accumulator_web/77ff12ebae93e15209b3e9e25718f2de75094fd3/public/images/doc/banner.png)

# Finance Accumulator 💰

![github status](https://github.com/Codespice1/finance_accumulator_web/actions/workflows/main.yml/badge.svg) [![codecov](https://codecov.io/gh/Codespice1/finance_accumulator_web/graph/badge.svg?token=59FR10U3VL)](https://codecov.io/gh/Codespice1/finance_accumulator_web) ![github status](https://github.com/Codespice1/finance_accumulator_web/actions/workflows/staging_finance-accumulator-web-app.yml/badge.svg) [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)


**Finance Accumulator** is a **full-stack web application** (still under evolution) designed to download statistical income data from selected providers (Stripe, PayPal, Shopify). This project incorporates Continuous **Integration/Continuous Deployment (CI/CD)** practices using various devops tools to ensure a secure and swift deployment process. 


## Tools and Technologies

- **[React](https://github.com/facebook/react), [Next.js](https://github.com/vercel/next.js):** Full-stack framework.
- **[Azure Web Services](https://azure.microsoft.com/en-gb/free/cloud-services/search/?ef_id=_k_Cj0KCQjw28W2BhC7ARIsAPerrcI8dDjg9JpYeASp0HaZVe36q-5EAB8jSUfck28YXNhqzT7b4SYKcqoaAj9VEALw_wcB_k_&OCID=AIDcmm3bvqzxp1_SEM__k_Cj0KCQjw28W2BhC7ARIsAPerrcI8dDjg9JpYeASp0HaZVe36q-5EAB8jSUfck28YXNhqzT7b4SYKcqoaAj9VEALw_wcB_k_&gad_source=1&gclid=Cj0KCQjw28W2BhC7ARIsAPerrcI8dDjg9JpYeASp0HaZVe36q-5EAB8jSUfck28YXNhqzT7b4SYKcqoaAj9VEALw_wcB):** Deployment.
- **[GitHub Actions](https://docs.github.com/en/actions):** CI/CD automation.
- **[Docker](https://www.docker.com/):** Containerization.
- **[GitGuardian](https://www.gitguardian.com/?utm_feeditemid=&utm_device=c&utm_term=gitguardian&utm_source=google&utm_medium=ppc&utm_campaign=&hsa_cam=10399074694&hsa_grp=102099926583&hsa_mt=e&hsa_src=g&hsa_ad=470060650525&hsa_acc=5867098142&hsa_net=adwords&hsa_kw=gitguardian&hsa_tgt=kwd-918952832307&hsa_ver=3&utm_adgroupid=102099926583&utm_source=google&utm_medium=cpc&utm_campaign=10399074694&utm_term=gitguardian&hsa_acc=5867098142&hsa_cam=10399074694&hsa_grp=102099926583&hsa_ad=470060650525&hsa_src=g&hsa_tgt=kwd-918952832307&hsa_kw=gitguardian&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjw28W2BhC7ARIsAPerrcLgpzgnSqksMLUseUSp-ZxJzRuuRjLTcSHTm4UDFDBoZ-ngqedlW7oaAmpNEALw_wcB)**: Security analysis.
- **[Better Stack](https://betterstack.com/), [Azure App Insights](https://azure.microsoft.com/en-gb/products/monitor/?ef_id=_k_Cj0KCQjw28W2BhC7ARIsAPerrcLIsTobFRTg4argqbLmW0I-3ewK9x0IIvAnfTUnt8Pyd0FTrdaokJ0aAkx9EALw_wcB_k_&OCID=AIDcmm3bvqzxp1_SEM__k_Cj0KCQjw28W2BhC7ARIsAPerrcLIsTobFRTg4argqbLmW0I-3ewK9x0IIvAnfTUnt8Pyd0FTrdaokJ0aAkx9EALw_wcB_k_&gad_source=1&gclid=Cj0KCQjw28W2BhC7ARIsAPerrcLIsTobFRTg4argqbLmW0I-3ewK9x0IIvAnfTUnt8Pyd0FTrdaokJ0aAkx9EALw_wcB):** Monitoring.
- **[Cypress](https://www.cypress.io/), [Playwright](https://github.com/microsoft/playwright), [Jest](https://github.com/jestjs/jest), [Codecov](https://about.codecov.io/):** Automated end-to-end and unit testing.

## Features 

- End-to-end full-stack application
- OAuth authentication using Google and GitHub providers
- Stripe API integration for downloading financial income report
- CI/CD integration to automate testing and deployment


# Table of contents
- [Finance Accumulator](#finance-accumulator)
- [Getting started](#getting-started)
- [Automated Testing](#automated-testing)
- [Deployment](#deployment)
- [Reliability](#reliability)


# Getting Started

## Prerequisites

Before you begin, ensure you have the following installed on your machine to be able to run Finance Accumulator:

- **Node.js** (Version: >=20.x)
- **npm** _(Recommended)_

> This project integrates with external services. You may want to register your application with these services and obtain the necessary credentials. You can find more details on [Integrations](#integrations) section below.


## Development

### 1. Clone the Repository

1. Start by cloning the project repository to your local machine:

```bash
git clone https://github.com/Codespice1/finance_accumulator_web.git
```

2. Navigate to the project directory:

```bash
cd finance_accumulator_web
```

3. Install dependencies:

```bash
npm install
```

4. Set up your `.env` file:

- Duplicate `.env.local.example` to `.env.local`
- Use `openssl rand -base64 32` to generate a key and add it under `NEXTAUTH_SECRET` in the `.env.local` file.
- Set `NEXTAUTH_SECRET` to `http://localhost:3000`


5. run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Integrations

### How to Obtain Stripe API Key

To integrate Stripe into your project, you'll need to obtain your Stripe API Key. Follow these steps to get your key:

#### 1. Create a Stripe Account

If you don't already have a Stripe account, you'll need to create one:

1. Go to the [Stripe Signup Page](https://dashboard.stripe.com/register).
2. Fill in the required information to create your account.
3. Once your account is created, you'll be redirected to the Stripe Dashboard.

#### 2. Access the Stripe Dashboard

After logging in to your Stripe account:

1. Navigate to the [Stripe Dashboard](https://dashboard.stripe.com/).
2. On the left-hand side menu, find and click on **Developers**.

#### 3. Get Your API Key

In the Developers section:

1. Click on **API keys** under the Developers section on the left-hand menu.
2. You'll see two types of API keys:
   - **Publishable key**: Used on the client-side to make requests to Stripe.
   - **Secret key**: Used on the server-side to authenticate requests.

3. **To obtain your Secret Key** (which is needed for server-side operations):
   - Under **Standard keys**, you'll see `Secret key` with a masked value.
   - Click the **Reveal test key** button to view the full key.
   - Copy the revealed key.

#### 4. Add the API Key to Your Project

   -  Once you've copied your Secret Key, open your project's `.env.local` file.
   -  Paste the key into the `STRIPE_KEY` variable like this:

```bash
STRIPE_KEY=sk_live_your_stripe_secret_key
```

### How to Obtain GitHub OAuth Credentials

#### 1. Create a GitHub Account

If you don't already have a GitHub account, you'll need to create one:

1. Go to the [GitHub Signup Page](https://github.com/join).
2. Fill in the required information to create your account.
3. Once your account is created, you'll be redirected to the GitHub homepage.

#### 2. Register a New OAuth Application

To obtain the credentials for OAuth, you'll need to register your application with GitHub:

1. Log in to your GitHub account and navigate to [GitHub Developer Settings](https://github.com/settings/developers).
2. Under the **OAuth Apps** section, click on **New OAuth App**.

#### 3. Fill in the Application Details

When registering your new application, you'll need to provide the following details:

- **Application name**: Enter a name for your application. This can be anything you like, e.g., "Finance Accumulator Web".
- **Homepage URL**: Enter the URL where your application will be hosted. For local development, you can use `http://localhost:3000`.
- **Authorization callback URL**: This is the URL to which users will be redirected after they authorize with GitHub. For local development, use `http://localhost:3000/api/auth/callback/github`.

Example setup:

- **Application name**: Finance Accumulator Web
- **Homepage URL**: `http://localhost:3000`
- **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`

After filling in these details, click **Register Application**.

#### 4. Get Your Client ID and Client Secret

Once your application is registered, you'll be redirected to a page with your OAuth credentials:

- **Client ID**: This is your `AUTH_GITHUB_ID`.
- **Client Secret**: Click on **Generate a new client secret** to get your `AUTH_GITHUB_SECRET`. Be sure to copy this immediately, as it will only be shown once.

#### 5. Add the Credentials to Your Project

1. Open your project's `.env.local` file.
2. Add the credentials as follows:

   ```bash
   AUTH_GITHUB_ID=your_github_client_id
   AUTH_GITHUB_SECRET=your_github_client_secret
   ```

### How to Obtain Google OAuth Credentials for Firebase Authentication

#### 1. Create a Firebase Project

If you don't already have a Firebase project, you'll need to create one:

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Sign in with your Google account.
3. Click on **Add Project**.
4. Enter a project name (e.g., "Finance Accumulator Web") and click **Continue**.
5. (Optional) Enable Google Analytics for your project and configure your settings, or you can skip this step.
6. Click **Create Project** and wait for Firebase to set up your new project.
7. Once your project is ready, click **Continue** to navigate to the Firebase project dashboard.

#### 2. Set Up Google Authentication in Firebase

To enable Google as an authentication provider:

1. In the Firebase Console, navigate to **Authentication** under **Build** from the left-hand menu.
2. Click on the **Sign-in method** tab.
3. In the list of providers, find **Google** and click on it.
4. Enable the **Google** provider by toggling the switch to **Enabled**.
5. Enter a public name and email address to the form.
6. Click **Save**.
7. On the same window, open up **Google** provider.
8. Click on **Web SDK Configuration**.
9. You'll be presented with your `Web client ID` and `Web client secret`:

- **Web client ID**: This is your `GOOGLE_CLIENT_ID`.
- **Web client secret**: This is your `GOOGLE_CLIENT_SECRET`.

#### 3. Route back to application after successful sign in:

1. Go to the **Settings > Project Settings**.
2. Click on the **Service Accounts** tab.
3. Click **Manage Service Account Permissions**.
4. On the **Google Cloud Console**, search **API & Services** on the search bar.
5. Click **Web Client** under **OAuth 2.0 Client IDs**.
6. Add following: 
   - **Authorized JavaScript origins**: Add `http://localhost:3000` for local development.
   - **Authorized redirect URIs**: Add `http://localhost:3000/api/auth/callback/google`.
7. Click **Save**.

# Automated Testing

The project includes test suites that cover unit tests, integration tests, and end-to-end tests.

 **Testing Suites:** \
    - **Unit Tests:** Focus on individual components, such as API handlers or utility functions.\
    - **Integration Tests:** Ensure that components work together as expected, especially when interacting with external services like PayPal and Stripe.\
    - **End-to-End Tests:** Simulate user interactions and ensure that the entire application workflow functions correctly from start to finish.

**Continuous Integration:**\
The project is set up with CI/CD pipelines (e.g., **GitHub Actions**) to automatically run tests on every commit and pull request on all branches, ensuring that only passing code is merged into the base branch. **Codecov** was integrated in CI to automatically upload coverage reports after each test run. This ensures that test coverage is tracked automatically for each commit or pull request. Every pull request has also auto-generated coverage comment by Codecov that details coverage changes in the pull request.



## Running tests on development
1. **Install testing dependencies:**

Ensure all testing dependencies are installed:
```bash
npm install
```
2. **Run the test suites:**
- To run unit tests, use the following command:

```bash
npm test
```


- To run end-to-end tests with Cypress, use the following command:

```bash
npm run test:e2e:open
```

- To run end-to-end tests with Playwright, use the following command:
```bash
npm run playwright-test
```

# Deployment

The deployment to **Azure Web App** is automated using GitHub Actions. The workflow is triggered on every push to the staging branch, ensuring that new features and changes are deployed to the staging environment first. Once validated, the same workflow can be triggered for production deployment through a manual dispatch.

**Workflow Overview**

The deployment pipeline consists of two main jobs:

	1.	Build Job: This job builds a Docker image for the application, caches Docker layers, and pushes the image to an Azure Container Registry (ACR).
	2.	Deploy Job: This job pulls the Docker image from the ACR and deploys it to an Azure Web App service.


# Reliability 

**Monitoring & Alerts**

The project leverages **Better Slack** for incident detection and alerting via Slack, and **Azure Application Insights** for real-time application performance monitoring and logging.




    

