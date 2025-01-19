# Between the brew and words

This project is a **Next.js** application using the **App Router**, **SCSS** for styling, **Storybook** for component documentation and testing, **Contentful** as the CMS, and **Vercel** for hosting.

## In Production

- [Official Website](https://arabie-bezri-hermont.vercel.app/)
- [Storybook](https://entre-graos-e-grafemas-storybook.vercel.app)

## Technologies Used

- **[Next.js 13 with App Router](https://nextjs.org/)**: A React framework for building applications.
- **[SCSS](https://sass-lang.com/)**: A CSS preprocessor to facilitate style organization and reuse.
- **[Storybook](https://storybook.js.org/)**: A tool for developing components in isolation and creating interactive documentation.
- **[Contentful](https://www.contentful.com/)**: A content management system (CMS) for managing dynamic content.
- **[Vercel](https://vercel.com/)**: A hosting platform for Next.js applications, offering continuous deployment and simple integration.

## Prerequisites

Before getting started, make sure you have the following tools installed:

- **Node.js** (Recommended version 18 or higher)
- **npm** or **yarn** for package management
- **Contentful account** (to manage content)
- **Vercel account** (for deployment)

## Environment Setup

### 1. Cloning the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/kellycesario/entre-graos-e-grafemas
cd entre-graos-e-grafemas
```

### 2. Installing Dependencies

Run the following command to install project dependencies:

```bash
npm install
# or
yarn install
```

### 3. Setting Up Contentful

- Create an account on Contentful.
- Create a new space in Contentful.
- Create the models (Content Types) and entries (Entries) as required for your project.

#### Environment Variable Configuration

Create a `.env.local` file in the project root and add the Contentful variables:

```bash
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

### 4. Configuring Storybook

Storybook is used to document and test application components. To set up Storybook:

```bash
npm run storybook
# or
yarn storybook
```

### 5. Running the Project Locally

To run the application in the development environment, use the following command:

```bash
npm run dev
# or
yarn dev
```

### 6. Build and Deploy to Vercel

6.1. Log in to your Vercel account.  
6.2. Create a new project and connect it to your GitHub repository.  
6.3. Vercel will automatically detect that the project is a Next.js app and set up the build environment.  
6.4. After configuration, you can deploy directly from Vercel using `git push`.  
