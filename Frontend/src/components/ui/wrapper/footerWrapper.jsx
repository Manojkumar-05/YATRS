import { useLocation } from "react-router-dom";
import Footer from "../footer";

const FooterWrapper = () => {
  const location = useLocation(); // Ensure useLocation is used inside a Router context

  return (
    <div>
      {location.pathname !== "/contact" && location.pathname !== "/join" && (
        <Footer />
      )}
    </div>
  );
};

export default FooterWrapper;
