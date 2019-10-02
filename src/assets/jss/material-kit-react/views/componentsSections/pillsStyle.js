import { container, title } from "assets/jss/material-kit-react.js";

const pillsStyle = {
  PurchasingButtonWraper: {
    display: "flex"
  },
  PurchasingButton: {
    margin: "auto"
  },
  listItems: {
    marginBottom: "24px"
  },

  TypographySection: {
    marginTop: "24px"
  },
  section: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }
};

export default pillsStyle;
