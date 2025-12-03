import PaymentIcon from "./PaymentIcon";

export default function FooterBottom() {
  // components/Footer/FooterBottom.js
  const paymentMethods = [
    { name: "Visa", iconName: "logos:visa" },
    { name: "PayPal", iconName: "logos:paypal" },
    { name: "Mastercard", iconName: "logos:mastercard" },
    { name: "American Express", iconName: "logos:american-express" },
    { name: "Diners Club", iconName: "logos:diners-club" },
  ];

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © 2025 <span className="font-semibold">Ecomus</span>. All rights
            reserved.
          </div>
          <div className="flex space-x-3">
            {paymentMethods.map((pm) => (
              <PaymentIcon
                key={pm.name}
                name={pm.name}
                iconName={pm.iconName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
