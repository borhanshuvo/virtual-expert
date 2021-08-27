import dynamic from "next/dynamic";

// const PDFViewer = dynamic(import("../../components/PDFViewer"), { ssr: false });

const MyDocument = dynamic(import("../../src/components/pdf"), {
  ssr: false,
});

const Invoice = () => {
  return <MyDocument />;
};

export default Invoice;
