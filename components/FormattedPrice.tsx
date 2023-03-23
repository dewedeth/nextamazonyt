type Amount = {
  amount: number;
};

const FormattedPrice = ({ amount }: Amount) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return <div>{formattedAmount}</div>;
};

export default FormattedPrice;
