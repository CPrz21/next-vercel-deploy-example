import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function PricingPage() {
  return (
    <>
      <h1>Pricing Page</h1>
      <h1 className={"title"}>
        Go to <Link href="/about">Home?</Link>
      </h1>

      <p className={"description"}>
        Get started by editing{" "}
        <code className={"code"}>pages/pricing/index.js</code>
      </p>
    </>
  );
}

PricingPage.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout>{page}</MainLayout>;
};
