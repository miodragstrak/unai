import "./PaymentModel.css";

export default function PaymentModel() {
  return (
    <section className="march-payment">
      <div className="march-payment-container">

        <h2 className="march-section-title">
          Model prijave i naplate
        </h2>

        <div className="march-payment-grid">

          {/* Left - Payment */}
          <div className="payment-card">
            <h3>Rezervacija mesta</h3>
            <p>
              50% iznosa se plaća prilikom prijave i rezervacije mesta.
            </p>

            <p>
              Rok za rezervaciju mesta je 10. mart 2026.
            </p>

            <p>
              Preostalih 50% se plaća najkasnije do drugog susreta.
            </p>

            <div className="payment-highlight">
              Mesto je potvrđeno tek nakon uplate prve rate.
            </div>
          </div>

          {/* Right - Process */}
          <div className="payment-card">
            <h3>Proces prijave</h3>

            <ol className="payment-steps">
              <li>Popunjavate prijavnu formu.</li>
              <li>Dobijate instrukcije za uplatu rezervacije.</li>
              <li>Nakon uplate dobijate potvrdu mesta.</li>
              <li>Dan pre početka dobijate podsetnik i sve informacije.</li>
            </ol>
          </div>

        </div>

      </div>
    </section>
  );
}