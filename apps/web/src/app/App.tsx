import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect, useRef } from "react";

function StitchPage({ page }: { page: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe) return;

    const handleLoad = () => {
      try {
        const doc = iframe.contentDocument;

        if (!doc) return;

        const handleClick = (event: Event) => {
          event.preventDefault();

          const target = event.currentTarget as HTMLElement;
          const text = target.textContent?.trim().toLowerCase() ?? "";

          if (
            text.includes("room") ||
            text.includes("chambre") ||
            text.includes("séjour")
          ) {
            navigate("/chambres");
          } else if (
            text.includes("suite") ||
            text.includes("executive")
          ) {
            navigate("/suite-executive");
          } else if (
            text.includes("book") ||
            text.includes("réserver") ||
            text.includes("reservation") ||
            text.includes("réservation")
          ) {
            navigate("/reservation");
          } else if (
            text.includes("continuer") ||
            text.includes("checkout") ||
            text.includes("paiement") ||
            text.includes("payer")
          ) {
            navigate("/paiement");
          } else if (
            text.includes("confirmer") ||
            text.includes("confirmation")
          ) {
            navigate("/confirmation");
          } else if (
            text.includes("restaurant") ||
            text.includes("gastronomie")
          ) {
            navigate("/restaurant");
          } else if (
            text.includes("commande") ||
            text.includes("panier")
          ) {
            navigate("/commande");
          } else if (
            text.includes("profil") ||
            text.includes("sign in")
          ) {
            navigate("/profil");
          }
        };

        doc.querySelectorAll("a, button").forEach((element) => {
          element.addEventListener("click", handleClick);
        });

        return () => {
          doc.querySelectorAll("a, button").forEach((element) => {
            element.removeEventListener("click", handleClick);
          });
        };
      } catch {
        // Les interfaces Stitch restent autonomes.
      }
    };

    iframe.addEventListener("load", handleLoad);

    return () => {
      iframe.removeEventListener("load", handleLoad);
    };
  }, [navigate]);

  return (
    <iframe
      ref={iframeRef}
      src={`/stitch/${page}/code.html`}
      title={`Teranga Hotels - ${page}`}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StitchPage page="accueil" />} />

        <Route
          path="/chambres"
          element={<StitchPage page="chambres" />}
        />

        <Route
          path="/suite-executive"
          element={<StitchPage page="suite-executive" />}
        />

        <Route
          path="/reservation"
          element={<StitchPage page="reservation-web" />}
        />

        <Route
          path="/paiement"
          element={<StitchPage page="paiement" />}
        />

        <Route
          path="/confirmation"
          element={<StitchPage page="confirmation" />}
        />

        <Route
          path="/restaurant"
          element={<StitchPage page="restaurant" />}
        />

        <Route
          path="/commande"
          element={<StitchPage page="commande" />}
        />

        <Route
          path="/profil"
          element={<StitchPage page="profil" />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}